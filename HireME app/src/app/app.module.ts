import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClient } from '@angular/common/http';

import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/login/login';

import{ StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
//dgdfgdfghgfhfjmghj

  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyC34wu12o_vWanaIyvavgbHUTwHK83GMKM",
    authDomain: "hireme-61c40.firebaseapp.com",
    databaseURL: "https://hireme-61c40.firebaseio.com",
    projectId: "hireme-61c40",
    storageBucket: "hireme-61c40.appspot.com",
    messagingSenderId: "1057650357796"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClient,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider
  ]
})
export class AppModule {}
