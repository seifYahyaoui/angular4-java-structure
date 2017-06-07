import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<div *ngFor = "let name of names">
              <app-child [name]="name" (iNeedSomeDollors) = "incrementMoney($event)"></app-child>  
          </div>
          
          <h3>Accumulate all the needed money:  {{money}}</h3>
          <br><br>
          <div>
              <input type="text" [(ngModel)] ="towWayDataBinding" value="towWayDataBinding">
              <br>
              <h2>{{towWayDataBinding}}</h2>
              <button (click)="original()">Erase changes</button>
          </div>          
`,

})
export class ParentComponent {
  names : string[] = ['child1','child2','child3'];

  money : number = 0;

  towWayDataBinding : string = 'two way data binding';

  incrementMoney(money : number){
    console.log(money);
    this.money = this.money + money;
  }

  original(){
    this.towWayDataBinding = 'two way data binding';
  }
}

@Component({
  selector: 'app-child',
  template: `<h4 style="color: #0000cc">   {{name}}   </h4>
         <button (click)="handler()">How much do you need??</button>
             `,

})
export class ChildComponent {

  @Input() name ;

  @Output() iNeedSomeDollors : EventEmitter<number> = new EventEmitter<number>();

  handler(){
    this.iNeedSomeDollors.emit(Math.floor(Math.random() * 100) + 1 );
  }
}








/**
 * Created by seif on 6/6/17.
 */

@Component({
  selector: 'parent-2-component',
  template: `    <h2 style="color: #0D3349 ">The parentName is : {{parentName}}</h2>
                  <app-my-first-component [(childName)] = "parentName"></app-my-first-component>
                  `,
})
export class Parent2Component implements OnInit {

  parentName : string = "original parent name";

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'child-2-component',
  template: `<div>
    <h2 style="color: #0D3349">The childName is : {{childName}}</h2>       
    Change child name : <input type="text"  #nameInput value="{{childName}}">
    <button type="submit" (click) = 'changeName(nameInput.value)'>Add</button>    
             </div>`,
})
export class Child2Component implements OnInit {


  @Input() childName: string ;
  @Output() childNameChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  changeName(name:string){
    this.childName = name;
    this.childNameChange.emit(name);
  }
}
