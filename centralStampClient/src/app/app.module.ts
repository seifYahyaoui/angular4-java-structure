import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TreeComponent } from './tree/tree.component';
import { TreeHolderComponent } from './tree-holder/tree-holder.component';
import { EventDisplayerComponent } from './event-displayer/event-displayer.component';
import { EventWorkflowComponent } from './event-workflow/event-workflow.component';
import { CentralVideoComponent } from './central-video/central-video.component';


import { MaterialModule } from '@angular/material';
import { MdlModule } from 'angular2-mdl';

import {NVRSerices} from './services/NVRS.services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TreeComponent,
    TreeHolderComponent,
    EventDisplayerComponent,
    EventWorkflowComponent,
    CentralVideoComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdlModule
  ],
  providers: [NVRSerices],
  bootstrap: [AppComponent]
})
export class AppModule { }
