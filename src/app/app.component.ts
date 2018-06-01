import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { ModalController } from 'ionic-angular';
import { DiscriptionPage } from '../pages/discription/discription';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  // @ViewChild(Nav) navRoute: Nav;
  // @ViewChild('myNav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public modalCtrl: ModalController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: string) {

    // this.nav.push(HomePage);
    // this.nav.setRoot(HistoryPage);

    // if (page === 'HomePage') {
    //   this.nav.push(HomePage);
    // } else if (page === 'HistoryPage') {
    //   this.nav.push(HistoryPage);
    // }
  }

  // presentModal() {
  //   const modal = this.modalCtrl.create(DiscriptionPage);
  //   modal.present();

  // }
}

