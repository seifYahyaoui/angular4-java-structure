import { Component, OnInit } from '@angular/core';
import {NVRSerices} from '../services/NVRS.services';
import {Person} from "../model/model";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  persons : Person[];
  constructor(private navrService: NVRSerices) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(){
    this.navrService.getAllPersons().toPromise().then(res => this.persons = res);
    console.log('size  == '+this.persons?0:this.persons.length);
  }

  callEdit(index:number){
    console.log("ng button edit " +index);

  }

  callDelete(index:number){
    console.log("ng button delete "+index);
    this.persons.splice(index,1);
    // save in db
    // this.getPersons();
  }

  savePersons(){
    // save persons
  }
/*  this.navrService.getAllPersons().subscribe(res=> {
  this.persons = res,
  error => alert(error),
() => console.log('okiiiiiiiii')
}

);
*/

}
