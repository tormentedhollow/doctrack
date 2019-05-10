import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DocumentService, BackendService, DataItemService } from './_services/index';
import { SharedModule } from '@app/shared';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';


import 'ag-grid-enterprise';
import {AnimationsService } from './_animations/index';

import { KinveyModule } from 'kinvey-angular-sdk';
import { DocumentComponent } from './document/document.component';
import { DocumentAddComponent } from './document-add/document-add.component';



@NgModule({
  declarations: [
    AppComponent,


    HomeComponent,
    LoginComponent,
    routedComponents,
    DocumentComponent,
    DocumentAddComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([]),
    SharedModule,
    KinveyModule.init({
      appKey: 'kid_SyUyLQwwN',
      appSecret: '3cc1c58efbb0401c9bbfd612ffc55407'
    })
  
  ],
  entryComponents: [],
  providers: [BackendService, DataItemService, AnimationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
