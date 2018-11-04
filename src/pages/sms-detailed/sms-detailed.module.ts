import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsDetailedPage } from './sms-detailed';

@NgModule({
  declarations: [
    SmsDetailedPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsDetailedPage),
  ],
})
export class SmsDetailedPageModule {}
