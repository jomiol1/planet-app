import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanetComponent } from './planet/planet.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './service/person.service';
import { PlanetService } from './service/planet.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PersonService, PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
