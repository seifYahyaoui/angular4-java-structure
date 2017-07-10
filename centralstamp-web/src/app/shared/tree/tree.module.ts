/**
 * Created by seif on 7/3/17.
 */
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import {TreeComponent} from "./tree.component";
import {NativeTreeComponent} from "./tree.native.component";
import {TreeNativeListComponent} from "./tree.native.list.component";
@NgModule({
  declarations: [TreeComponent, NativeTreeComponent,TreeNativeListComponent],
  imports: [CommonModule],
  exports: [TreeComponent,NativeTreeComponent,TreeNativeListComponent]
})
export class TreeCentralStampModule {

}
