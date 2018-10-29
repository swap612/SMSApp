import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionsPage } from '../transactions/transactions';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  transactionPage = TransactionsPage;
  personalPage = HomePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
