import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {TreeCentralStampModule} from "./shared/tree/tree.module";
import {DynamicLayoutModule} from "./shared/dynamic-layout/dynamic-layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    TreeCentralStampModule,
    DynamicLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
