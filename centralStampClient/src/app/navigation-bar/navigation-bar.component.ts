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
    console.log('afffffffffff ======='+this.persons);
  }

  getPersons(){
    this.navrService.getAllPersons().subscribe(res=> {
        this.persons = res,
          error => alert(error),
          () => console.log('okiiiiiiiii')
      }
    );
    console.log('reuslttttttt'+ this.persons);
  }

/*  this.navrService.getAllPersons().subscribe(res=> {
  this.persons = res,
  error => alert(error),
() => console.log('okiiiiiiiii')
}

);
*/

}
