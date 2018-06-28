import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormControl, Validators } from '@angular/forms';

import { LoginPage } from '../login/login';
import { OtpPage } from '../otp/otp';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {

  user: any = {
    'userName':'khumbuza@gmail.com'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider, public toastCtrl :ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassPage');
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(){
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email')? 'make sure your email  @example.com': '';
  }

  hide = true;

  ForgotPassword(){
    if(this.user.userName !== null && this.user.userName !== ""){
      localStorage.forPassEmail = this.user.userName;

      console.log('heres what we sending : ' + JSON.stringify(this.user));
      var userData = JSON.stringify(this.user);

      this.restProvider.__resetPassoword(userData).then((result) => {
        console.log(result);
        console.log('going to the OTP page');
        // if(result.ResultCode == -1){
        //   this.errorForgot();
        // }
        this.navCtrl.push(OtpPage);
      }, (err) => {
        console.log(err);

      });

    }else{
      this.getErrorMessage();
      alert('Please enter your email');
    }

  }

  errorForgot() {
    // this.favorite = true;
    let toast = this.toastCtrl.create({
      message: this.user.email +` does not exit`,
      duration: 2000
    });
    toast.present();
    // this.user = null;
  }

  goToLogin(){
    console.log('going back to login');
    this.navCtrl.push(LoginPage);
  }

}
