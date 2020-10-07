import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private urlGetPersons: string = environment.urlPath + 'person/';
  private urlAddVisit: string = environment.urlPath + 'person/addVisit/';

  constructor(private http: HttpClient) { }

  public getPersons() {
    return this.http.get(this.urlGetPersons);
  }

  public addVisit(id) {
    let url: string = this.urlAddVisit + id;
    return this.http.get(url);
  }
}
