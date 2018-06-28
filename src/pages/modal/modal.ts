import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  showDestiAndBegin: boolean = true;
  showCarrage: boolean = false;
  showTimer: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal() {
       this.navCtrl.pop();
   }

   goToSecondState(){
     this.showDestiAndBegin = false;
     this.showTimer = true;
   }

   goToThirdState(){
     this.showTimer = false;
     this.showCarrage = true;
   }


}
