import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    TranslateModule.forRoot(
      {
        defaultLanguage:'ar',
       loader:{
       provide:TranslateLoader,
       useFactory:httpTranslateLoaderfactory,
       deps:[HttpClient]
       }
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }

export function httpTranslateLoaderfactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
 }