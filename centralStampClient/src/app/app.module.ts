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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TreeComponent,
    TreeHolderComponent,
    EventDisplayerComponent,
    EventWorkflowComponent,
    CentralVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
