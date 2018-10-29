import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionsPage } from '../pages/transactions/transactions';
import { SmsListProvider } from '../providers/sms-list/sms-list';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TransactionsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    TabsPage,
    TransactionsPage
  ],
  providers: [
    AndroidPermissions,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SmsListProvider
  ]
})
export class AppModule { }
