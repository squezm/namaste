import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { Router } from '@angular/router';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ScheduleService } from './schedule.service';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { ScheduleComponent } from './schedule.component';
import { GalleryComponent } from './gallery.component';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form.component';
import { LoginFormComponent } from './login-form.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
  BrowserModule,
  HttpModule,
  AppRoutingModule,
  FormsModule
  //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  NavbarComponent,
  ScheduleComponent,
  GalleryComponent,
  ContactComponent,
  ContactFormComponent,
  LoginFormComponent
  ],
  providers: [
  ScheduleService,
  LoginService
  /*{
    provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
  }*/
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
