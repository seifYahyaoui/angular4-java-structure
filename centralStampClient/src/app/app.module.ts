import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TreeComponent } from './tree/tree.component';
import { TreeHolderComponent } from './tree-holder/tree-holder.component';
import { EventDisplayerComponent } from './event-displayer/event-displayer.component';
import { EventWorkflowComponent } from './event-workflow/event-workflow.component';
import { CentralVideoComponent } from './central-video/central-video.component';
import {ChildComponent, ParentComponent} from './component-databinding/data-binding.component'

import { MaterialModule } from '@angular/material';
import { MdlModule } from 'angular2-mdl';

import {NVRSerices} from './services/NVRS.services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';



import {PersonService} from './routing/person.service';
import {ContactComponent} from './routing/contatc.component';
import {HomeComponent} from './routing/home.component';
import {MainRouteComponent} from './routing/main-route.component';
import {PersonsComponent} from './routing/persons.component';
import {PersonComponent} from './routing/person.component';

import {FormComponent} from './forms/form.component';


import{routes} from './routing/routing.demo';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from "@angular/common";


import {PersonHttpService} from './http/http.service';
import {HttpPersonComponent} from'./http/HttpPersonComponent';

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
    MySecondComponentComponent,
    ChildComponent,
    ParentComponent,
    ContactComponent,HomeComponent,MainRouteComponent,PersonComponent,PersonsComponent,FormComponent,
    HttpPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdlModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NVRSerices,PersonService,PersonHttpService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
