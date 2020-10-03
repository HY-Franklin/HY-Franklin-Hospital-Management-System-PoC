import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { PatientComponent } from './patient/patient.component';
import { LabComponent } from './lab/lab.component';
import { BillingComponent } from './billing/billing.component';
import { UpdateComponent } from './update/update.component';
import {ShowService} from "./show.service";
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import {HttpIntercepterBasicAuthServiceService} from "./service/http-intercepter-basic-auth-service.service"; // CLI imports router




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministratorComponent,
    PatientComponent,
    LabComponent,
    BillingComponent,
    UpdateComponent,
    WelcomeComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterBasicAuthServiceService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
