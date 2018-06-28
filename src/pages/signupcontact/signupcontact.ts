import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-signupcontact',
  templateUrl: 'signupcontact.html',
})
export class SignupcontactPage {

  user : any =  {
    "userName": "calvin@gmail.com",
    "otp": "747473"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupcontactPage');
    // this.user.userName = localStorage.email
    // this.activateUser();
    console.log(this.user);
  }
  activateUser() {
    console.log('function called .... waiting the api response');
    console.log(this.user);

    if(this.user.otp !== null && this.user.otp !== ''){
      // let otp = JSON.stringify(this.OTP);
      this.restProvider.__activateUser(this.user).then((result) => {
        console.log(result);
        console.log('going to another login page ');
        this.navCtrl.push(LoginPage);
      }, (err) => {
        console.log(err);
      });

    }else{
      alert('Please enter your otp');
    }

  }
}
