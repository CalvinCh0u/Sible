import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FormControl, Validators } from '@angular/forms';

import { LoginPage } from '../login/login';
import { ResetPage } from '../reset/reset';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }



  continue() {
    console.log('going to the reset password page');
    this.navCtrl.push(ResetPage);
  }

  goBackToLogin() {
    console.log('going back to the login page');
    this.navCtrl.push(LoginPage);
  }



}
