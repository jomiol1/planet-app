import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../service/planet.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets: any;
  planetDetail: any;
  closeResult = '';

  constructor(private planetService: PlanetService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  open(content, detail) {
    this.planetDetail = detail;
    this.planetService.addVisit(detail.id).subscribe();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.getPlanets();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public getPlanets() {
    this.planetService.getPlanets().subscribe(
      data => this.planets = data
    );
  }

}
