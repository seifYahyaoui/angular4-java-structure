import { Component, OnInit } from '@angular/core';
import {NVRSerices} from '../services/NVRS.services';
import {Person} from "../model/model";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

   res : any;

  constructor(private navrService: NVRSerices) { }

  ngOnInit() {
   this.navrService.getAllPersons().subscribe(res=> {
     this.res = JSON.stringify(res),
       error => alert(error),
       () => console.log('okiiiiiiiii')
     }

    );
  }

}
