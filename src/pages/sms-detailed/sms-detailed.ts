import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SmsDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms-detailed',
  templateUrl: 'sms-detailed.html',
})
export class SmsDetailedPage {
  msg_detail:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.msg_detail = navParams.get('messageObj');
    console.log(this.msg_detail.addr);
    console.log(this.msg_detail.body);
    
    //  let msg_addr = navParams.get('addr');
    //  let msg_body = navParams.get('body');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsDetailedPage');
  }

}
