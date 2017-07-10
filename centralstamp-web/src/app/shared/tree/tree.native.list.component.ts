/**
 * Created by seif on 7/6/17.
 */
//import * as $ from "";

import {Component, OnInit, ElementRef, ViewChildren, QueryList} from "@angular/core";
import {NativeTreeComponent} from "../../../../../centralstamp-client/src/app/shared/tree/tree.native.component";
@Component({
  selector:'tree-native-list',
  templateUrl:'./tree.native.list.component.html'
})
export  class TreeNativeListComponent implements OnInit{

  //@ViewChildren(NativeTreeComponent) childs: NativeTreeComponent[];


  _expand: boolean = true;
  constructor(private el: ElementRef) {
  }

  expandAll(){

  }

  ngOnInit(){
    console.log('jquery!!!!!')
    //$(this.el.nativeElement).find("#tree").append("<span class='indent'></span>");
  }
}
