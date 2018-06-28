import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the AddpublisherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpublisher',
  templateUrl: 'addpublisher.html',
})
export class AddpublisherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalController:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpublisherPage');
  }




  addPiblisher(){
    var data = { message : 'hello world' };
    var modalPage = this.modalController.create('ModalPublisherPage',data);
    modalPage.present();
  }



}
