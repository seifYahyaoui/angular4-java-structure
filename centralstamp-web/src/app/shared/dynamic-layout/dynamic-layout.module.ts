/**
 * Created by seif on 7/4/17.
 */
import {NgModule} from "@angular/core";
import {DynamicLayoutComponent} from "./dynamic-layout.component";
import {CommonModule} from "@angular/common";
import { NgGridModule } from 'angular2-grid';

import {DynamicLayoutC2Component} from "./dynamic-layout-c2.component";
import {DynamicLayoutC1Component} from "./dynamic-layout-c1.component";
import {DynamicLayoutC3Component} from "./dynamic-layout-c3.component";
@NgModule({
  declarations:[DynamicLayoutComponent,DynamicLayoutC2Component,DynamicLayoutC1Component,DynamicLayoutC3Component],
  imports:[CommonModule, NgGridModule],
  exports:[DynamicLayoutComponent]
})
export class DynamicLayoutModule{

}
