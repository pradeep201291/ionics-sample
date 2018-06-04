import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController, Nav } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environment/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { DiscriptionPage } from '../pages/discription/discription';
import { WalkinDetailsPage } from '../pages/walkin-details/walkin-details';

import { WalkinServices } from '../pages/service/appService';

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    HomePage,
    DiscriptionPage,
    WalkinDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    HomePage,
    DiscriptionPage,
    WalkinDetailsPage
  ],
  providers: [
    StatusBar,
    WalkinServices,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
