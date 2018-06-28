import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';

import { AddcardPage } from '../../pages/addcard/addcard';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public modalController :ModalController) {
    let backAction =  platform.registerBackButtonAction(() => {
    console.log("second");
    this.navCtrl.pop();
    backAction();
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    // this.setBackButtonAction()
  }


  //Method to override the default back button action
  setBackButtonAction(){
    // this.navBar.backButtonClick = () => {
    //Write here wherever you wanna do
     this.navCtrl.pop()
    // }
  }

  // 
  //
  // public openModal(){
  //   var data = { message : 'hello world' };
  //   var modalPage = this.modalController.create('ModalPageCard',data);
  //   modalPage.present();
  // }
  //
  //
  //  public closeModal(){
  //    this.viewCtrl.dismiss();
  // }
  //
  //


addCard(){
	// this.navCtrl.push(AddcardPage);
	// console.log('going to add card page on ');

  var data = { message : 'hello world' };
  var modalPage = this.modalController.create('ModalCardPage',data);
  modalPage.present();
}


}
