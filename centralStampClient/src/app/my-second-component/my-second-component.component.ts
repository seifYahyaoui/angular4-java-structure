import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  template: `    <h2 style="color: #0D3349 ">The parentName is : {{parentName}}</h2>
                  <app-my-first-component [(childName)] = "parentName"></app-my-first-component>
                  `,
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent implements OnInit {

  parentName : string = "original parent name";

  constructor() { }

  ngOnInit() {
  }

}
