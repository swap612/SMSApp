import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Platform } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';

declare var SMS:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages: any = [];
  persMsg:any =[];
  constructor(public platform: Platform, public navCtrl: NavController, public smsservice:SmsListProvider, public androidPermissions: AndroidPermissions) {
    platform.ready().then((readySource) => {
      this.ReadSMSList();
    }, err =>{
      console.log("Error Device not ready");
    });
    console.log('loaded persMessages');
    this.persMsg = smsservice.personalMsg;
  }

  checkPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {

      //if permission granted
      this.ReadSMSList();
    },
      err => {

        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {
          this.ReadSMSList();
        },
          err => {
            alert("cancelled")
          });
      });

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);

  }

  ReadSMSList() {

    //this.platform.ready().then((readySource) => {

    let filter = {
      box: 'inbox', // 'inbox' (default), 'sent', 'draft'
      indexFrom: 0, // start from index 0
      maxCount: 200, // count of SMS to return each time
    };

    if (SMS)
      SMS.listSMS(filter, (ListSms) => {
        //alert(JSON.stringify(ListSms))
        this.messages = ListSms
        this.smsservice.personalMsg=ListSms
        this.smsservice.transactionMsg=ListSms
      },

        Error => {
          alert(JSON.stringify(Error))
        });

    //  });
  }

}
