import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WalkinDetailsPage } from '../walkin-details/walkin-details';
import { HomePage } from '../home/home';
import { DiscriptionPage } from '../discription/discription';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  redirectWalkinDetails() {
    this.navCtrl.push(WalkinDetailsPage);
  }

  redirectToHome() {
    debugger;
    this.navCtrl.push(HomePage);
  }

  redirectToDiscription() {
    this.navCtrl.push(DiscriptionPage);
  }


}
