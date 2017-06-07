import {Component} from "@angular/core";
import {Person} from "./model";
import {PersonService} from "./person.service";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by seif on 6/7/17.
 */
@Component({
  selector: 'person',
  template: `<div *ngIf="person">
                <p>{{person.name}}</p>
                <p>{{person.address}}</p>
                <p>{{person.email}}</p>
             </div> 

`,
})
export class PersonComponent {

  private id: string;

  person: Person;

  constructor(private route: ActivatedRoute, private _personService: PersonService) {

    route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.person = this._personService.getPersonById(new Number(this.id).valueOf());
  }

}
