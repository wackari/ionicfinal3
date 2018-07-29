import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PftabsPage } from '../pages/pftabs/pftabs';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { FirebasedbProvider } from '../providers/firebasedb/firebasedb';
import { DgiiProvider } from '../providers/dgii/dgii';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';


export const fireBaseConf = {
  apiKey: "AIzaSyCkuyEkHbYPfgvNhwt7xjIutR11n-WZC0A",
  authDomain: "trashcan-2acd4.firebaseapp.com",
  databaseURL: "https://trashcan-2acd4.firebaseio.com",
  projectId: "trashcan-2acd4",
  storageBucket: "trashcan-2acd4.appspot.com",
  messagingSenderId: "65117049972"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConf),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebasedbProvider,
    DgiiProvider,
    Camera
  ]
})
export class AppModule {}
