import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  template: `<div>
    <h2 style="color: #0D3349">The childName is : {{childName}}</h2>       
    Change child name : <input type="text"  #nameInput value="{{childName}}">
    <button type="submit" (click) = 'changeName(nameInput.value)'>Add</button>    
             </div>`,
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {


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
