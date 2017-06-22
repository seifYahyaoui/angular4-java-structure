/**
 * Created by seif on 6/6/17.
 */
import {
  Routes
} from '@angular/router';
import {HomeComponent} from "./home.component";
import {ContactComponent} from "./contatc.component";
import {PersonsComponent} from "./persons.component";
import {PersonComponent} from "./person.component";


export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'persons', children: [
    {path: '', component: PersonsComponent},
    {path: 'person/:id', component: PersonComponent}
  ]
  }
];

