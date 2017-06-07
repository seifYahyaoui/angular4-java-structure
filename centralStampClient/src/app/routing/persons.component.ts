import {Component} from "@angular/core";
import {PersonService} from "./person.service";
import {Person} from "./model";
/**
 * Created by seif on 6/7/17.
 */
@Component({
  selector: 'persons',
  template: `<div>

<ul class="mdl-list" *ngIf="persons">
  <li class="mdl-list__item" *ngFor="let person of persons">
  
    <i class="material-icons mdl-list__item-icon">person</i>
     <button [routerLink]="['person',person.id]">{{person.name}}</button>
    
  </li>
 </ul>

<div>
 <router-outlet></router-outlet>
</div>
</div>
`,
})
export class PersonsComponent {
  persons: Person[];

  constructor(private _personService: PersonService) {
    this.persons = this._personService.getAllPersons();
  }
}
