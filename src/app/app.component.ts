import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
// import { SignupPage } from '../pages/signup/signup';

import { PaymentPage } from '../pages/payment/payment';
import { LegalPage } from '../pages/legal/legal';
import { HelpPage } from '../pages/help/help';
import { AddpublisherPage } from '../pages/addpublisher/addpublisher';
import { RidesPage } from '../pages/rides/rides';
import { ModalController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public app: App, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalController: ModalController) {
    this.initializeApp();

    this.platform.ready().then(() => {
        this.platform.registerBackButtonAction(() => {
            app.navPop();
        });
    })

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'ios-home-outline', component: HomePage },
      { title: 'Payment', icon: 'ios-card', component: PaymentPage },
      { title: 'Your Rides',icon: 'ios-car-outline', component: RidesPage },
      { title: 'Publisher',icon: 'ios-person-add-outline', component: AddpublisherPage },
      { title: 'Help',icon: 'ios-help-circle-outline', component: HelpPage },
      { title: 'Legal',icon: 'ios-briefcase-outline', component: LegalPage },
      { title: 'LogOut',icon: 'ios-log-out-outline', component: HelpPage }
    ];

  }


  public openModal(){

    var data = { message : 'hello world' };
    var modalPage = this.modalController.create('ModalPage',data);
    modalPage.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('the application is ready ')
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // this.menu.swipeEnable(false);
  }
}
