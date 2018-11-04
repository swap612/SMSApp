import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';
import { SmsDetailedPage } from '../sms-detailed/sms-detailed';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  transMsg:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public smsservice:SmsListProvider) {
    console.log('const TransactionsPage');
    this.transMsg = smsservice.transactionMsg;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }
  goToSmsDetailPage(){
    console.log("Transaction onclick sms detailed page");
    //this.navCtrl.setRoot(SmsDetailedPage);
    this.navCtrl.push(SmsDetailedPage);
  }
}
