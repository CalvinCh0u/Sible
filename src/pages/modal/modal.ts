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

  booking: any = {
    'intPlace':'',
    'desPlace':'',
    'time': '',
    'heads': '',
    'laguage': ''
  }

  showDestiAndBegin: boolean = true;
  showCarrage: boolean = false;
  showTimer: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal() {
    if(this.booking.heads !== null && this.booking.heads !== ''){
      localStorage.heads = this.booking.heads;
      console.log('this is localStorage Pick Up data => ' + localStorage.heads);

      if(this.booking.laguage !== null && this.booking.laguage !== ''){
        localStorage.laguage = this.booking.laguage;
        console.log('this is localStorage Destination data => ' + localStorage.laguage);

        alert('PickUp: '+ localStorage.intPlace + '  Destination: ' + localStorage.desPlace + '  Time: ' + localStorage.time + '  heads: ' + localStorage.heads + '  Laguage: ' + localStorage.laguage)
        this.navCtrl.pop();


      }else{
        alert('Please Enter your Destination place ');
      }

    }else{
      alert('Please Enter your Pick Up place ');
    }

   }

   goToSecondState(){

     if(this.booking.intPlace !== null && this.booking.intPlace !== ''){
       localStorage.intPlace = this.booking.intPlace;
       console.log('this is localStorage Pick Up data => ' + localStorage.intPlace);

       if(this.booking.desPlace !== null && this.booking.desPlace !== ''){
         localStorage.desPlace = this.booking.desPlace;
         console.log('this is localStorage Destination data => ' + localStorage.desPlace);

         this.showDestiAndBegin = false;
         this.showTimer = true;

         // alert('')
       }else{
         alert('Please Enter your Destination place ');
       }

     }else{
       alert('Please Enter your Pick Up place ');
     }

   }




   goToThirdState(){

     if(this.booking.time !== null && this.booking.time !== ''){
       localStorage.time = this.booking.time;
       console.log('this is localStorage Pick Up data => ' + localStorage.time);

         this.showTimer = false;
         this.showCarrage = true;

     }else{
       alert('Please Enter your Time ');
     }

   }


}
