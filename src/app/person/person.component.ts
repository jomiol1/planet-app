import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { PlanetService } from '../service/planet.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: any;
  planets: any;
  personDetail: any;
  closeResult = '';

  constructor(private personService: PersonService, private modalService: NgbModal, private planetService: PlanetService) {
  }

  ngOnInit(): void {
    this.getPersons();
    this.getTopPlanets();
  }

  open(content, detail) {
    this.personService.addVisit(detail.id).subscribe();
    this.personDetail = detail;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.getPersons();
    this.getTopPlanets();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public getPersons() {
    this.personService.getPersons().subscribe(
      data => { this.persons = data }
    );
  }

  public getTopPlanets() {
    this.planetService.getPlanets().subscribe(
      data => this.planets = data
    );
  }



}
