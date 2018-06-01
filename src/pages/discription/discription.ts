import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history'
declare var $: any;

@Component({
  selector: 'discription',
  templateUrl: 'discription.html'
})
export class DiscriptionPage {

  constructor(public navCtrl: NavController) {

  }
  onClick() {
   this.navCtrl.push(HistoryPage);
  }
}
