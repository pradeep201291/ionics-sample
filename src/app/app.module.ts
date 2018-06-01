import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController, Nav } from 'ionic-angular';


import { MyApp } from './app.component';
import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { DiscriptionPage } from '../pages/discription/discription';


@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    HomePage,
    DiscriptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    HomePage,
    DiscriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
