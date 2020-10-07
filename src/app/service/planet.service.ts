import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private url: string = environment.urlPath + 'planet/';
  private urlAddVisit: string = environment.urlPath + 'planet/addVisit/';

  constructor(private http: HttpClient) { }

  public getPlanets() {
    return this.http.get(this.url);
  }

  public addVisit(id) {
    let url: string = this.urlAddVisit + id;
    return this.http.get(url);
  }
}
