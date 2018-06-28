import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcard',
  templateUrl: 'addcard.html',
})
export class AddcardPage {

  data : any = {
    'cardNumber':'',
    'ExpDate':'',
    'CVV':'',
    'Country':''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcardPage');
  }

  addCard(data){
    console.log('Adding Card details ....');
    this.restProvider.__addCard(data).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  removeCard(data){
    console.log('removing a card function initiated');
    this.restProvider.__removeCard(data).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }


  //
  // removeCard(data){
  //   console.log('removing a card function initiated');
  //   this.restProvider.__removeCard(data).then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  //
  updateCard(data){
    console.log('Updating a card function initiated');
    this.restProvider.__updateCard(data).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
