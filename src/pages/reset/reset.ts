import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  user:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  hide = true;

  goBackToLogin(){
    console.log('going back to login');
    this.navCtrl.push(LoginPage);
  }

}
