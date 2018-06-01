import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history'
import { DiscriptionPage } from '../discription/discription'

@Component({
  selector: 'page-home',
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
}
