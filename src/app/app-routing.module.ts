import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from './planet/planet.component'
import { PersonComponent } from './person/person.component';


const routes: Routes = [
  { path: 'planet', component: PlanetComponent },
  { path: 'person', component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
