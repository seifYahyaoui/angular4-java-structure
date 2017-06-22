/**
 * Created by seif on 6/13/17.
 */
import {Component, OnInit} from "@angular/core";
import {PersonHttpService} from "./http.service";

import {Person} from "../model/model";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'http-cmp',
  template: `
<div class="mdl-layout mdl-js-layout mdl-color--grey-100" >
	<main class="mdl-layout__content">
		<div class="mdl-card mdl-shadow--6dp">
			<div class="mdl-card__title mdl-color--primary mdl-color-text--white">
				<h2 class="mdl-card__title-text">ADD NEW PERSON.</h2>
			</div>
	  	<div class="mdl-card__supporting-text">
				<form [formGroup]="form" (ngSubmit)="addPerson(form.value)">
					<div class="mdl-textfield mdl-js-textfield">
						<input class="mdl-textfield__input" type="text" formControlName="id"/>
						<label class="mdl-textfield__label" for="username">ID</label>
					</div>
					<div class="mdl-textfield mdl-js-textfield">
						<input class="mdl-textfield__input" type="text" formControlName="firstName"/>
						<label class="mdl-textfield__label" for="username">FIRSTNAME</label>
					</div>
					<div class="mdl-textfield mdl-js-textfield">
						<input class="mdl-textfield__input" type="text" formControlName="lastName"/>
						<label class="mdl-textfield__label" for="username">LASTNAME</label>
					</div>
					<div class="mdl-textfield mdl-js-textfield">
						<input class="mdl-textfield__input" type="text" formControlName="age"/>
						<label class="mdl-textfield__label" for="username">AGE</label>
					</div>
					
				<button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit">SUBMIT</button>
			
				</form>
			</div>
			
		</div>
	</main>
</div>

<div class="navigation-bar-position">

  <button (click)="getPersons()"><i class="material-icons">refresh</i></button>

  <button (click)="savePersons()"><i class="material-icons">save</i></button>

  <table class="mdl-data-table mdl-js-data-table mdl-shadow&#45;&#45;1dp">
    <thead>
    <tr>
      <th class="mdl-data-table__cell&#45;&#45;non-numeric">ID</th>
      <th>FIRSTNAME</th>
      <th>LASTNAME</th>
      <th>AGE</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let person of persons; let i = index">
      <td class="mdl-data-table__cell&#45;&#45;non-numeric"> {{person.id}}</td>
      <td contenteditable="true" [textContent]="person.firstName" (input)="person.firstName=$event.target.textContent">{{person.firstName}}</td>
      <td contenteditable="true" [textContent]="person.lastName" (input)="person.lastName=$event.target.textContent">{{person.lastName}}</td>
      <td contenteditable="true" [textContent]="person.age" (input)="person.age=$event.target.textContent">{{person.age}}</td>
      <td>
        <a (click)="updatePerson(person)" name="editButton"
           class="mdl-button mdl-js-button mdl-button&#45;&#45;fab mdl-js-ripple-effect mdl-button&#45;&#45;icon"><i
          class="material-icons">update</i></a>
        <a (click)="deletePerson(person,i)" name="deleteButton"
           class="mdl-button mdl-js-button mdl-button&#45;&#45;fab mdl-js-ripple-effect mdl-button&#45;&#45;colored mdl-button&#45;&#45;icon"><i
          class="material-icons">delete</i></a>
      </td>
    </tr>
    </tbody>
  </table>
</div>
`,
  styleUrls:['./HttpPersonComponent.css']
})
export class HttpPersonComponent implements OnInit{

  form: FormGroup;

  constructor(private _personHttpservice: PersonHttpService, fb: FormBuilder) {
    this.form = fb.group({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
    });
  }

  addPerson(form:any){
    let person: Person = new Person();
    person.id = form.id;
    person.firstName = form.firstName;
    person.lastName = form.lastName;
    person.age = form.age;
    this._personHttpservice.addPerson(person).subscribe(response =>{
      console.log('create person!!!!!!!!!!!!!!');
      this.persons.push(person);
    });
  }

  updatePerson(person:Person){
    this._personHttpservice.updatePerson(person).subscribe(res =>{
      console.log('update person : ',person);
    });
  }

  deletePerson(person:Person,index:number){
    console.log('delete person with ID : ',person.id);
  this._personHttpservice.deletePerson(person.id).subscribe(res=>{
    console.log('delete response: ',res);
    this.persons.splice(index,1);
  });
}

  persons : Person[];

  ngOnInit() {
    this.getPersons();
  }

  getPersons(){
    this._personHttpservice.getAllPersons().toPromise().then(res => this.persons = res);
    console.log('size  == '+this.persons?0:this.persons.length);
  }

}
