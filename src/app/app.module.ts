// src/app/app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { V2homeComponent } from './components/v2home/v2home.component';
import { AnimateOnScrollDirective } from './directives/AnimateOnScroll/animate-on-scroll.directive';
import { NgOptimizedImage } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    V2homeComponent,
    AnimateOnScrollDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule { }
