import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SignupcontactPage } from '../../pages/signupcontact/signupcontact';
import { RestProvider } from '../../providers/rest/rest';


import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



@IonicPage()
@Component({
  selector: 'page-signuplicence',
  templateUrl: 'signuplicence.html',
  providers: [
   // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
   // application's root module. We provide it at the component level here, due to limitations of
   // our example generation script.
   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
 ],
})
export class SignuplicencePage {

  date = new FormControl(moment());

  user: any = {
    'firstname': '',
    'lastname': '',
    'identityNumber': '',
    'dateOfBirth':'',
    'password':'',
    'contact':'0662144190',
    'email':'',
    'driversLinsence':'87654678987654',
    'driversLinsenceExpiry':'1/1/2020'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.user.firstname = localStorage.firstname;
    this.user.lastname = localStorage.lastname;
    this.user.identityNumber = localStorage.identityNumber;
    this.user.dateOfBirth = localStorage.dateOfBirth;
    this.user.password = localStorage.password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignuplicencePage');

    console.log(this.user);

  }

  backToLogin() {
    console.log('Go to signup page function');
    this.navCtrl.push(LoginPage);
  }




  tempFinc() {


    let UserData = JSON.stringify(this.user);

    console.log('Data => ' + UserData);
    this.restProvider.__registration(UserData).then((result) => {
      console.log(result);
      console.log('going to another page ');
      this.navCtrl.push(SignupcontactPage);
    }, (err) => {
      console.log(err);

    });
  }

  // validateEmail() {
  //     var email = this.user.email;
  //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(String(email).toLowerCase());
  // }

  continue(){


    if(this.user.contact !== null && this.user.contact !== ''){
      localStorage.contact = this.user.contact;
      console.log('Local storge contact => ' + localStorage.contact);

      if(this.user.email !== null && this.user.email !== ''){
        // var email = this.user.email;
        // if(validateEmail()){



        localStorage.email = email;
        console.log('Local storge email => ' + localStorage.email);

          if(this.user.driversLinsence !== null && this.user.driversLinsence !== ''){
            localStorage.driversLinsence = this.user.driversLinsence;
            console.log('this is localStorage lisence data => ' + localStorage.driversLinsence);

            if(this.user.driversLinsenceExpiry !== null && this.user.driversLinsenceExpiry !== ''){
              localStorage.driversLinsenceExpiry = this.user.driversLinsenceExpiry;
              console.log('this is localStorage lisence expiration data => ' + localStorage.driversLinsenceExpiry);









                console.log('this is the data before stringify ' +this.user);
              // let UserData = JSON.stringify(this.user);

              console.log('Data => ' + this.user);


              this.restProvider.__registration(this.user).then((result) => {
                console.log(result);
                console.log('going to another page ');

                this.navCtrl.push(SignupcontactPage);
              }, (err) => {
                console.log(err);
                alert(err);
              });

            }else{alert('Please select your licence number expiration date')}

          }else{alert('Please enter your licence number')}



        // }else{alert('Please enter a valid email a@b.com')}

        }else{alert('Please enter yourf email')}

      }else{alert('Please enter your contact')}

  }

}
