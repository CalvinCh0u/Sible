import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, ToastController } from 'ionic-angular';
import { FormControl, Validators } from '@angular/forms';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular'
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    "username": "calvin@gmail.com",
    "password": "1234567890",
    "token": 'some string'
  };

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public app: App,
    public restProvider:RestProvider,
    public toastCtrl :ToastController
  )
  {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // this.pushPage();
    // this.navCtrl.pop();
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'make sure your email is @mentee.com' :
            '';
  }

  hide = true;


   pushPage() {
      // await this.viewCtrl.dismiss();
      // this.app.getRootNav().push(HomePage);
      this.navCtrl.setRoot(HomePage);
      this.menuCtrl.enable(true, 'myMenu');
      // this.navCtrl.pop();
    }


  login(){
    console.log(this.user.username);
    if(this.user.userame !== null && this.user.username !== ''){
      localStorage.username = this.user.username;
      console.log('user username: ' + localStorage.username);
      if(this.user.password !== null && this.user.password !== ''){
        let password = this.user.password;
        // if(password.length >== 8){
          localStorage.password = password;
          console.log('user password: ' + localStorage.password);
          console.log(this.user);
          // making an a service cacll
          this.restProvider.__userLogin(this.user).then((result) => {
            console.log(result);
              // alert(result);
              this.sucessLogin();
              }, (err) => {
                console.log(err);
                this.errorLogin();
              });
          // end of service call
        // }else{
        //   alert('please make sure your password length is more than 8 characters');

      }else{
        alert('Please enter your password');
      }
    }else{
      alert('Please enter your username address');
    }

    // if(this.user.email == '' && this.user.email == null){
    //   if(this.user.password == '' && this.user.password == null){
        // if(this.user.email == 'api@gmail.com' && this.user.password == 'api'){
        //
        // }else{
        //   alert('incorrect credentials');
        // }
    //   }else{
    //     alert('please enter a password');
    //   }
    // }else{
    //   alert('please your email');
    // }

  }
  // Go to forgot page.

  forgotPass() {
    console.log('Go to forgotPage page function');
    this.navCtrl.push(ForgotPassPage);
  }

  // Go to SignupPage.

  signup() {
    console.log('Go to signup page function');
    this.navCtrl.push(SignupPage);
  }

  errorLogin() {
    // this.favorite = true;
    let toast = this.toastCtrl.create({
      message: `Opps Something Went Wrong with the login!`,
      duration: 2000
    });
    toast.present();
    this.user = null;
  }

  sucessLogin() {
    // this.favorite = true;
    let toast = this.toastCtrl.create({
      message: `Login Successful !`,
      duration: 2000
    });
    toast.present();


  }

}
