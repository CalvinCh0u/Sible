import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Custom Date Adapter
// import { CustomDateAdapter } from '../CustomDateAdapter'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRScanner } from '@ionic-native/qr-scanner';
// import { OpenALPR } from '@ionic-native/openalpr';

import { NativeGeocoder } from '@ionic-native/native-geocoder';


//normal map
import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Toast } from '@ionic-native/toast';

//services
import { HttpClientModule } from '@angular/common/http';



//google maps shit

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoginPage } from '../pages/login/login';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { SignupPage } from '../pages/signup/signup';
import { SignupcontactPage } from '../pages/signupcontact/signupcontact';
import { SignuplicencePage } from '../pages/signuplicence/signuplicence';
import { OtpPage } from '../pages/otp/otp';
import { ResetPage } from '../pages/reset/reset';

import { AddcardPage } from '../pages/addcard/addcard';
import { ChooseridePage } from '../pages/chooseride/chooseride';
import { AccountPage } from '../pages/account/account';
import { LegalPage } from '../pages/legal/legal';
import { PaymentPage } from '../pages/payment/payment';
import { HelpPage } from '../pages/help/help';
import { AddpublisherPage } from '../pages/addpublisher/addpublisher';
import { RidesPage } from '../pages/rides/rides';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';





//this are image imports
// import { File } from '@ionic-native/file';
// import { Transfer } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
// import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPassPage,
    SignupPage,
    SignupcontactPage,
    SignuplicencePage,
    OtpPage,
    ResetPage,
    AddcardPage,
    ChooseridePage,
    AccountPage,
    LegalPage,
    HelpPage,
    PaymentPage,
    AddpublisherPage,
    RidesPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule,MatIconModule,
    MatFormFieldModule,MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPassPage,
    SignupPage,
    SignupcontactPage,
    SignuplicencePage,
    OtpPage,
    ResetPage,
    AddcardPage,
    ChooseridePage,
    AccountPage,
    LegalPage,
    HelpPage,
    PaymentPage,
    AddpublisherPage,
    RidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    QRScanner,
    // BarcodeScanner,
    // OpenALPR,
    // OpenALPROptions,
    // OpenALPRResult,
    GoogleMaps,
    Toast,
    // GoogleMap,
    // GoogleMapsEvent,
    // GoogleMapOptions,
    // CameraPosition,
    // MarkerOptions,
    // Marker,

    // File,
    // Transfer,
    // Camera,
    // FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // {provide: DateAdapter, useClass: CustomDateAdapter},
    RestProvider
  ]
})
export class AppModule {}
