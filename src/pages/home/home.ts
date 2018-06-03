import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { DiscriptionPage } from '../discription/discription';
import { WalkinDetailsPage } from '../walkin-details/walkin-details';

@Component({
  selector: 'walkin-details',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  redirectToHistory() {
    this.navCtrl.push(HistoryPage);
  }

  redirectToDiscription() {
    this.navCtrl.push(DiscriptionPage);
  }

  redirectWalkinDetails() {
    debugger;
    this.navCtrl.push(WalkinDetailsPage);
  }
}
