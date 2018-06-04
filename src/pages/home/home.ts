import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { DiscriptionPage } from '../discription/discription';
import { WalkinDetailsPage } from '../walkin-details/walkin-details';
import { WalkinServices } from '../service/appService';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'walkin-details',
  templateUrl: 'home.html'
})
export class HomePage {

  items: AngularFireList<any[]>;


  constructor(public navCtrl: NavController, private walkinServices: WalkinServices, private af: AngularFireDatabase) {
    debugger;
    this.items = this.af.list('/data');
    debugger;
  }

  ngOnInit() {
    this.walkinServices.getInterviewDetails()
      .subscribe((response) => {
        debugger;
      });
  }

  redirectToHistory() {
    this.navCtrl.push(HistoryPage);
  }

  redirectToDiscription() {
    this.navCtrl.push(DiscriptionPage);
  }

  redirectWalkinDetails() {
    this.navCtrl.push(WalkinDetailsPage);
  }
}
