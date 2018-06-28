webpackJsonp([18],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// declare var google;
//API Key For Web =  AIzaSyAghH73vrrSIqBQACMzXpgg3ZG-EUwKK-E
//API Key for Android = AIzaSyBIpAKhZrSO99TaNmlBuy3f5GPRqfhrnD8
//API Key for IOS = AIzaSyAkmGYVWrGeb5CCEriivkT-O5GPmu8JeHU
var HomePage = /** @class */ (function () {
    // @ViewChild('map') mapElement: ElementRef;
    // map: any;
    function HomePage(navCtrl, geoloc, toast, restProvider, modalController, viewCtrl, platform) {
        // if(!this.map) this.loadMap();
        this.navCtrl = navCtrl;
        this.geoloc = geoloc;
        this.toast = toast;
        this.restProvider = restProvider;
        this.modalController = modalController;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.gmLocation = { lat: 0, lng: 0 };
        this.onLocateUser();
        // setInterval(() => {
        //     this.onLocateUser();
        // this.getUserData();
        // }, 1000);
        // Observable.interval(10000).takeWhile(() => true).subscribe(() => this.function());
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ngAfterViewInit MapPage');
        this.loadMap(); // works fine every time without error
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter MapPage');
        console.log(this.map); // always returns the map object so it's still there
        // if(!this.map) this.loadMap(); // never needs to fire
        // need to reset tab/page stacking order?
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('this is a map ');
        // this.onLocateUser();
        // this.loadMap();
        // if(!this.map) this.loadMap();
    };
    HomePage.prototype.getUserData = function () {
        var _this = this;
        alert('this is a value trial : ' + this.user.userName);
        return new Promise(function (resolve) {
            _this.restProvider.__getUser(_this.user).then(function (result) {
                console.log(result);
                alert(result);
            }, function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.cancelRide = function (data) {
    };
    HomePage.prototype.goToSecond = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__payment_payment__["a" /* PaymentPage */]);
    };
    HomePage.prototype.onLocateUser = function () {
        var _this = this;
        console.log('function executed');
        this.geoloc.getCurrentPosition()
            .then(function (location) {
            console.log('position gotten: long:', location.coords.longitude, ' lat:', location.coords.latitude);
            localStorage.lat = location.coords.longitude;
            localStorage.lng = location.coords.latitude;
            _this.location = location;
            _this.gmLocation.lat = location.coords.latitude;
            _this.gmLocation.lng = location.coords.longitude;
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // this.toast.show(`This is my Lat `+ this.lat + `This is my Lng `+ this.lng, '5000', 'center').subscribe(
    //   toast => {
    //     console.log(toast);
    //   });
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.onLocateUser();
        // console.log(this.location);
        var mapOptions = {
            camera: {
                target: {
                    lat: localStorage.lng,
                    lng: localStorage.lat
                },
                zoom: 18,
                tilt: 0
            }
        };
        // this.map = GoogleMaps.create('map_canvas', mapOptions);
        this.map = __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["a" /* GoogleMaps */].create(this.element.nativeElement, mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            _this.lat = _this.gmLocation.lng;
            _this.lng = _this.gmLocation.lat;
            console.log('Map is ready!');
            alert('Lat => ' + localStorage.lat + ' Lng => ' + localStorage.lng);
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'This is You',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: localStorage.lng,
                    lng: localStorage.lat
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert('Would you like to choose to choose a different location');
                });
            });
        });
    };
    //     loadMap(){
    //
    //       this.geolocation.getCurrentPosition().then((position) => {
    //
    //         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //
    //         let mapOptions = {
    //           center: latLng,
    //           zoom: 15,
    //           mapTypeId: google.maps.MapTypeId.ROADMAP
    //         }
    //
    //         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //
    //       }, (err) => {
    //         console.log(err);
    //       });
    //
    //     }
    //
    //     addMarker(){
    //
    //   let marker = new google.maps.Marker({
    //     map: this.map,
    //     animation: google.maps.Animation.DROP,
    //     position: this.map.getCenter()
    //   });
    //
    //   let content = "<h4>Information!</h4>";
    //
    //   this.addInfoWindow(marker, content);
    //
    // }
    // addInfoWindow(marker, content){
    //
    //   let infoWindow = new google.maps.InfoWindow({
    //     content: content
    //   });
    //
    //   google.maps.event.addListener(marker, 'click', () => {
    //     infoWindow.open(this.map, marker);
    //   });
    //
    // }
    HomePage.prototype.openModal = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalController.create('ModalPage', data);
        modalPage.present();
    };
    HomePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "element", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="sibleColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background-color:#e3eaef">\n\n <!-- <br>\n  <ion-item class="do">\n    <ion-label> <ion-icon name="car"></ion-icon></ion-label>\n    <ion-input (click)="openModal()" id="places" placeholder="Where to?"  clearInput type="text"></ion-input>\n  </ion-item> -->\n  <!--<div style="height:7px">\n\n  </div> -->\n\n<!-- <button ion-button (click)="goToSecond()">Test</button> -->\n<!--\n  <ion-item class="do">\n    <ion-label> <ion-icon name="pin"></ion-icon></ion-label>\n    <ion-input id="places" placeholder="Drop-Off Location"  clearInput type="text"></ion-input>\n  </ion-item> -->\n\n  <!-- <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button> -->\n  <div style="background-color:#000" #mapCanvas style="height:100% !important;width:100% !important">\n  </div>\n\n  <ion-fab right bottom>\n    <button (click)="openModal()" ion-fab color="sibleColor"><ion-icon name="ios-car-outline"></ion-icon></button>\n  </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpublisherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddpublisherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddpublisherPage = /** @class */ (function () {
    function AddpublisherPage(navCtrl, navParams, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
    }
    AddpublisherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddpublisherPage');
    };
    AddpublisherPage.prototype.addPiblisher = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalController.create('ModalPublisherPage', data);
        modalPage.present();
    };
    AddpublisherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addpublisher',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/addpublisher/addpublisher.html"*/'<!--\n  Generated template for the AddpublisherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="sibleColor">\n\n  <ion-navbar color="sibleColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Publisher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<style media="screen">\n  .center {\n    position: relative; /* or absolute */\n    top: 15vh;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n</style>\n\n\n<ion-content padding>\n\n  <img class="center" src="assets/imgs/add-pub.svg" alt="logo"style="width:60vw;">\n<br>\n<div class="padding" style="text-align:center;">\n  <button style="border-color: #0e5387;margin:15px 0;border-radius:50px" id="loginButton" (click)="addPiblisher()" ion-button block outline color="light">Become a Publisher</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/addpublisher/addpublisher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AddpublisherPage);
    return AddpublisherPage;
}());

//# sourceMappingURL=addpublisher.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otp_otp__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPassPage = /** @class */ (function () {
    function ForgotPassPage(navCtrl, navParams, restProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        this.user = {
            'userName': 'khumbuza@gmail.com'
        };
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]);
        this.hide = true;
    }
    ForgotPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPassPage');
    };
    ForgotPassPage.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'make sure your email  @example.com' : '';
    };
    ForgotPassPage.prototype.ForgotPassword = function () {
        var _this = this;
        if (this.user.userName !== null && this.user.userName !== "") {
            localStorage.forPassEmail = this.user.userName;
            console.log('heres what we sending : ' + JSON.stringify(this.user));
            var userData = JSON.stringify(this.user);
            this.restProvider.__resetPassoword(userData).then(function (result) {
                console.log(result);
                console.log('going to the OTP page');
                // if(result.ResultCode == -1){
                //   this.errorForgot();
                // }
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__otp_otp__["a" /* OtpPage */]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.getErrorMessage();
            alert('Please enter your email');
        }
    };
    ForgotPassPage.prototype.errorForgot = function () {
        // this.favorite = true;
        var toast = this.toastCtrl.create({
            message: this.user.email + " does not exit",
            duration: 2000
        });
        toast.present();
        // this.user = null;
    };
    ForgotPassPage.prototype.goToLogin = function () {
        console.log('going back to login');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ForgotPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/forgot-pass/forgot-pass.html"*/'<!--\n  Generated template for the ForgotPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding style="background-image: url(\'assets/imgs/bg.png\');background-size:cover">\n<br><br>\n<div class="logos">\n  <img src="assets/imgs/logo.png" alt="logo" style="width:55%;margin-left:77px;margin-top:54px">\n</div>\n<br>\n  <div class="LoginForm padding">\n\n    <mat-form-field>\n      <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n      <input matInput placeholder=" &#160; Enter your email" [formControl]="email" required [(ngModel)]="user.userName">\n      <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n    <br><br>\n\n    <div class="padding">\n      <button style="border-color: #0e5387;margin-top:15px;margin-bottom:15px" id="loginButton" (click)="ForgotPassword()" ion-button block outline color="light">Send</button>\n  </div>\n  <span (click)="goToLogin()" style="color:#4b4b4b;text-align:center">Remember your password ? <b style="color:#318ebc;">Login</b></span>\n  </div>\n\n</ion-content>\n<ion-footer style="text-align:center">\n</ion-footer>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/forgot-pass/forgot-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());

//# sourceMappingURL=forgot-pass.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signuplicence_signuplicence__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(253);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { File } from '@ionic-native/file';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
// import { Camera } from '@ionic-native/camera';
// declare var cordova: any;
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    // lastImage: string = null;
    // loading: Loading;
    // constructor(public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) { }
    function SignupPage(navCtrl, navParams) {
        var _this = this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.user = {
            'firstname': 'Thabo',
            'lastname': 'Sizwe',
            'identityNumber': '91030205252082',
            'dateOfBirth': '1/1/1991',
            'password': '111111111'
        };
        return _this;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.tempFunction = function () {
        console.log('DOB ' + this.user.dateOfBirth);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signuplicence_signuplicence__["a" /* SignuplicencePage */]);
        console.log('Go to licencePage page function');
    };
    SignupPage.prototype.continue = function (user) {
        console.log('function launched ');
        if (this.user.firstname !== null && this.user.firstname !== '') {
            localStorage.firstname = this.user.firstname;
            console.log('Local storge firstname => ' + localStorage.firstname);
            if (this.user.lastname !== null && this.user.lastname !== '') {
                localStorage.lastname = this.user.lastname;
                console.log('Local storge lastname => ' + localStorage.lastname);
                if (this.user.identityNumber !== null && this.user.identityNumber !== '') {
                    if (this.user.identityNumber.length === 13) {
                        localStorage.identityNumber = this.user.identityNumber;
                        console.log('Local storge id number => ' + localStorage.identityNumber);
                        if (this.user.dateOfBirth !== null && this.user.dateOfBirth !== '') {
                            localStorage.dateOfBirth = this.user.dateOfBirth;
                            console.log('Local storge dateOfBirth => ' + localStorage.dateOfBirth);
                            if (this.user.password !== null && this.user.password !== '') {
                                if (this.user.password.length > 7) {
                                    localStorage.password = this.user.password;
                                    console.log('Local storge id password => ' + localStorage.password);
                                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signuplicence_signuplicence__["a" /* SignuplicencePage */]);
                                    console.log('Go to licencePage page function');
                                }
                                else {
                                    alert('Your password is not strong enough');
                                }
                            }
                            else {
                                alert('Please enter your password');
                            }
                        }
                        else {
                            alert('Please select you Date Of birth');
                        }
                    }
                    else {
                        alert('Please enter a valid south african ID');
                    }
                }
                else {
                    alert('Please enter your Id number');
                }
            }
            else {
                alert('Please enter your lastname');
            }
        }
        else {
            alert('Please enter your firstname');
        }
    };
    SignupPage.prototype.backToLogin = function () {
        console.log('Go to signup page function');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/signup/signup.html"*/'<ion-content padding style="background-color:#ebebeb;">\n\n  <!-- <div class="logos">\n\n    <div style="height:70px">\n\n\n\n    </div>\n\n    <!-- <img src="assets/imgs/logo.png" alt="logo" style="width:45%;margin-left:77px;margin-top:20px;height:110px"> --\n\n  </div> -->\n\n\n\n  <div class="LoginForm padding">\n\n    <h1 style="text-align:center">SignUp</h1>\n\n\n\n    <mat-form-field class="example-full-width">\n\n      <input matInput [(ngModel)]="user.firstname" placeholder="Full names" name="firstname" required>\n\n    </mat-form-field>\n\n\n\n    <mat-form-field class="example-full-width">\n\n      <input matInput [(ngModel)]="user.lastname" placeholder="Surname" name="lastname" required>\n\n    </mat-form-field>\n\n\n\n    <mat-form-field class="example-full-width">\n\n      <input matInput [(ngModel)]="user.identityNumber" placeholder="ID Number" name="identityNumber" required>\n\n    </mat-form-field>\n\n\n\n    <!-- <mat-form-field class="example-full-width">\n\n      <input matInput [(ngModel)]="user.dateOfBirth" placeholder="Date of birth" name="dateOfBirth" required type="date">\n\n    </mat-form-field> -->\n\n\n\n    <mat-form-field class="example-full-width">\n\n      <input matInput [matDatepicker]="picker" [(ngModel)]="user.dateOfBirth" placeholder="Date of birth">\n\n      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n\n      <mat-datepicker #picker></mat-datepicker>\n\n    </mat-form-field>\n\n\n\n\n\n    <mat-form-field class="example-full-width">\n\n      <input matInput [(ngModel)]="user.password" placeholder="  &#160; Create your password" [type]="hide ? \'password\' : \'text\'"  name="password">\n\n      <mat-icon matSuffix (click)="hide = !hide">{{hide ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n\n    </mat-form-field>\n\n    <!--<br>-->\n\n    <div class="padding">\n\n      <!-- <button style="border-color: #0e5387;" id="loginButton" (click)="continue()" ion-button block outline color="light">Continue</button> -->\n\n      <button style="border-color: #0e5387;" id="loginButton" (click)="tempFunction()" ion-button block outline color="light">Continue</button>\n\n\n\n    </div>\n\n    <span (click)="backToLogin()" style="color:#4b4b4b;margin-top:15px;text-align:center;">Already have an account ? <b style="color:#318ebc;">Login</b></span>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* NativeDateAdapter */]));

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MY_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignuplicencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signupcontact_signupcontact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
throw new Error("Cannot find module \"@angular/material-moment-adapter\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

var moment = __WEBPACK_IMPORTED_MODULE_8_moment___default.a || __WEBPACK_IMPORTED_MODULE_8_moment__;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
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
var SignuplicencePage = /** @class */ (function () {
    function SignuplicencePage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.date = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](moment());
        this.user = {
            'firstname': '',
            'lastname': '',
            'identityNumber': '',
            'dateOfBirth': '',
            'password': '',
            'contact': '0662144190',
            'email': '',
            'driversLinsence': '87654678987654',
            'driversLinsenceExpiry': '1/1/2020'
        };
        this.user.firstname = localStorage.firstname;
        this.user.lastname = localStorage.lastname;
        this.user.identityNumber = localStorage.identityNumber;
        this.user.dateOfBirth = localStorage.dateOfBirth;
        this.user.password = localStorage.password;
    }
    SignuplicencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignuplicencePage');
        console.log(this.user);
    };
    SignuplicencePage.prototype.backToLogin = function () {
        console.log('Go to signup page function');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    SignuplicencePage.prototype.tempFinc = function () {
        var _this = this;
        var UserData = JSON.stringify(this.user);
        console.log('Data => ' + UserData);
        this.restProvider.__registration(UserData).then(function (result) {
            console.log(result);
            console.log('going to another page ');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signupcontact_signupcontact__["a" /* SignupcontactPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    // validateEmail() {
    //     var email = this.user.email;
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }
    SignuplicencePage.prototype.continue = function () {
        var _this = this;
        if (this.user.contact !== null && this.user.contact !== '') {
            localStorage.contact = this.user.contact;
            console.log('Local storge contact => ' + localStorage.contact);
            if (this.user.email !== null && this.user.email !== '') {
                // var email = this.user.email;
                // if(validateEmail()){
                localStorage.email = email;
                console.log('Local storge email => ' + localStorage.email);
                if (this.user.driversLinsence !== null && this.user.driversLinsence !== '') {
                    localStorage.driversLinsence = this.user.driversLinsence;
                    console.log('this is localStorage lisence data => ' + localStorage.driversLinsence);
                    if (this.user.driversLinsenceExpiry !== null && this.user.driversLinsenceExpiry !== '') {
                        localStorage.driversLinsenceExpiry = this.user.driversLinsenceExpiry;
                        console.log('this is localStorage lisence expiration data => ' + localStorage.driversLinsenceExpiry);
                        console.log('this is the data before stringify ' + this.user);
                        // let UserData = JSON.stringify(this.user);
                        console.log('Data => ' + this.user);
                        this.restProvider.__registration(this.user).then(function (result) {
                            console.log(result);
                            console.log('going to another page ');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signupcontact_signupcontact__["a" /* SignupcontactPage */]);
                        }, function (err) {
                            console.log(err);
                            alert(err);
                        });
                    }
                    else {
                        alert('Please select your licence number expiration date');
                    }
                }
                else {
                    alert('Please enter your licence number');
                }
                // }else{alert('Please enter a valid email a@b.com')}
            }
            else {
                alert('Please enter yourf email');
            }
        }
        else {
            alert('Please enter your contact');
        }
    };
    SignuplicencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signuplicence',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/signuplicence/signuplicence.html"*/'<ion-content padding style="background-color:#ebebeb;">\n  <!-- <div class="logos">\n    <img src="assets/imgs/logo.png" alt="logo" style="width:55%;margin-left:77px;margin-top:20px">\n  </div> -->\n  <div class="LoginForm padding">\n    <h1 style="text-align:center">SignUp</h1>\n\n    <mat-form-field class="example-full-width">\n      <!-- <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon> -->\n      <input type="number" [(ngModel)]="user.contact" matInput placeholder="Number Phone" name="contact" required>\n    </mat-form-field>\n\n    <mat-form-field class="example-full-width">\n      <!-- <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon> -->\n      <input matInput [(ngModel)]="user.email" placeholder="Email Address" name="email" required>\n    </mat-form-field>\n\n    <mat-form-field class="example-full-width">\n      <input matInput [(ngModel)]="user.driversLinsence" placeholder="Driver\'s Licence Number" type="number">\n    </mat-form-field>\n\n    <mat-form-field class="example-full-width">\n      <input matInput [matDatepicker]="picker" [(ngModel)]="user.driversLinsenceExpiry" placeholder="Licence Expiery Date">\n      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n\n    <mat-form-field>\n  <input matInput [matDatepicker]="dp" placeholder="Verbose datepicker" [formControl]="date">\n  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n\n\n\n\n\n\n    <br><br>\n    <div class="padding">\n      <button style="border-color: #0e5387;" id="loginButton" (click)="continue()" ion-button block outline color="light">Continue</button>\n      <!-- <button style="border-color: #0e5387;" id="loginButton" (click)="tempFinc()" ion-button block outline color="light">Continue</button> -->\n\n  </div>\n  <span (click)="backToLogin()" style="color:#4b4b4b;text-align:center;margin-top:15px;">Already have an account ? <b style="color:#318ebc;">Login</b></span>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/signuplicence/signuplicence.html"*/,
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_material_moment_adapter__["MomentDateAdapter"], deps: [__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["g" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], SignuplicencePage);
    return SignuplicencePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=signuplicence.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupcontactPage = /** @class */ (function () {
    function SignupcontactPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.user = {
            "userName": "calvin@gmail.com",
            "otp": "747473"
        };
    }
    SignupcontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupcontactPage');
        // this.user.userName = localStorage.email
        // this.activateUser();
        console.log(this.user);
    };
    SignupcontactPage.prototype.activateUser = function () {
        var _this = this;
        console.log('function called .... waiting the api response');
        console.log(this.user);
        if (this.user.otp !== null && this.user.otp !== '') {
            // let otp = JSON.stringify(this.OTP);
            this.restProvider.__activateUser(this.user).then(function (result) {
                console.log(result);
                console.log('going to another login page ');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert('Please enter your otp');
        }
    };
    SignupcontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signupcontact',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/signupcontact/signupcontact.html"*/'<ion-content padding style="background-color:#ebebeb;">\n  <div class="logos">\n    <img src="assets/imgs/logo.png" alt="logo" style="width:55%;margin-left:77px;margin-top:20px">\n  </div>\n\n  <div class="LoginForm padding">\n    <mat-form-field class="example-full-width">\n      <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n      <input [(ngModel)]="user.otp" matInput placeholder="&#160;Enter Your OTP">\n    </mat-form-field>\n    <br><br>\n  <div class="padding">\n      <button style="border-color: #0e5387;" id="loginButton" (click)="activateUser()" ion-button block outline color="light">Activate</button>\n  </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/signupcontact/signupcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], SignupcontactPage);
    return SignupcontactPage;
}());

//# sourceMappingURL=signupcontact.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_reset__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FormControl, Validators } from '@angular/forms';


/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.continue = function () {
        console.log('going to the reset password page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reset_reset__["a" /* ResetPage */]);
    };
    OtpPage.prototype.goBackToLogin = function () {
        console.log('going back to the login page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/otp/otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding style="background-image: url(\'assets/imgs/bg.png\');background-size:cover">\n<br><br>\n<div class="logos">\n  <img src="assets/imgs/logo.png" alt="logo" style="width:55%;margin-left:77px;margin-top:54px">\n</div>\n<br>\n  <div class="LoginForm padding">\n\n    <mat-form-field class="example-full-width">\n      <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n      <input type="number" matInput placeholder="&#160; Enter OTP">\n    </mat-form-field>\n\n    <br><br>\n\n    <div class="padding">\n      <button style="border-color: #0e5387;" id="loginButton" (click)="continue()" ion-button block outline color="light">Continue</button>\n  </div>\n\n  </div>\n\n</ion-content>\n<ion-footer style="text-align:center">\n    <span (click)="goBackToLogin()" style="color:#4b4b4b;">Remember your password ? <b style="color:#318ebc;">Login</b></span>\n</ion-footer>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPage = /** @class */ (function () {
    function ResetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.hide = true;
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPage');
    };
    ResetPage.prototype.goBackToLogin = function () {
        console.log('going back to login');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/reset/reset.html"*/'<!--\n  Generated template for the ResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding style="background-image: url(\'assets/imgs/bg.png\');background-size:cover">\n<br><br>\n<div class="logos">\n  <img src="assets/imgs/logo.png" alt="logo" style="width:55%;margin-left:77px;margin-top:54px">\n</div>\n<br>\n  <div class="LoginForm padding">\n\n    <mat-form-field>\n      <ion-icon matPrefix ios="ios-unlock" md="md-unlock"></ion-icon>\n      <input matInput placeholder="  &#160; Enter your password" [type]="hide ? \'password\' : \'text\'" [(ngModel)]="user.password">\n      <mat-icon matSuffix (click)="hide = !hide">{{hide ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <ion-icon matPrefix ios="ios-unlock" md="md-unlock"></ion-icon>\n      <input matInput placeholder="  &#160; Confirm your password" [type]="hide ? \'password\' : \'text\'" [(ngModel)]="user.password">\n      <mat-icon matSuffix (click)="hide = !hide">{{hide ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n    </mat-form-field>\n\n    <br><br>\n\n    <div class="padding">\n      <button style="border-color: #0e5387;" id="loginButton" (click)="goBackToLogin()" ion-button block outline color="light">Log in</button>\n  </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/reset/reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ResetPage);
    return ResetPage;
}());

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the LegalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LegalPage = /** @class */ (function () {
    function LegalPage() {
        this.items = [
            'Copyright',
            'Terms & Conditions',
            'Privacy Policy',
            'Data Providers',
            'Software License',
            'Location Information'
        ];
    }
    LegalPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    LegalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-legal',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/legal/legal.html"*/'<!--\n  Generated template for the LegalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="sibleColor">\n\n	<ion-navbar color="sibleColor">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	<ion-title color="light">Legal</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-list>\n	  <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n	    {{ item }}\n	  </button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/legal/legal.html"*/,
        })
    ], LegalPage);
    return LegalPage;
}());

//# sourceMappingURL=legal.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="sibleColor">\n\n  <ion-navbar color="sibleColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Need Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<style>\n  .dot{\n    position: inherit;\n    display: inline-block;\n    color: #000;\n    background-color: black;\n    width: 5px;\n    height: 5px;\n    border-radius: 50px;\n    margin-bottom: 0.5vh;\n    margin-left: 0.3vh;\n}\n</style>\n\n<ion-content>\n\n  <ion-item-group>\n    <ion-item-divider color="grayIsh">Your Last Trip</ion-item-divider>\n    <ion-item style="padding-left:50px;"><br>\n      <ion-label>2018/03/17, 15:48   &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;      R27:00 <br><p>Toyota Corolla</p> </ion-label>\n       <p style="display:inline-block;">\n         2018/03/17, 15:48          R27:00</p>\n\n     </ion-item>\n      <p style="display:inline-block;margin-left:10vw">\n        Report an issue with this trip</p>\n    <ion-item-divider (click)="addCard()" color="grayIsh">Additional Topics</ion-item-divider>\n    <ion-item style="padding-left:50px;"><br>\n      <ion-label>No topic for now  </ion-label>\n       <!-- <p style="display:inline-block;">\n         No topic for now</p> -->\n\n     </ion-item><br>\n    <ion-item><a style="color:white">Add Payment Method</a></ion-item>\n    <!-- (click)="addCard()" -->\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RidesPage = /** @class */ (function () {
    function RidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RidesPage');
    };
    RidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rides',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/rides/rides.html"*/'<!--\n  Generated template for the RidesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="sibleColor">\n\n  <ion-navbar color="sibleColor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ride History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="error_text">\n    <h1>`Ooops`! you have no Hide History</h1>\n  </div>\n  <div class="padding">\n    <button style="border-color: #0e5387;margin:15px;width:50vw;border-radius:50px;left:18vw;" color="sibleColor" class="modal button" ion-button >Book a Ride</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/rides/rides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RidesPage);
    return RidesPage;
}());

//# sourceMappingURL=rides.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		383,
		17
	],
	"../pages/addcard/addcard.module": [
		382,
		16
	],
	"../pages/addpublisher/addpublisher.module": [
		384,
		15
	],
	"../pages/chooseride/chooseride.module": [
		387,
		14
	],
	"../pages/forgot-pass/forgot-pass.module": [
		385,
		13
	],
	"../pages/help/help.module": [
		389,
		12
	],
	"../pages/legal/legal.module": [
		386,
		11
	],
	"../pages/login/login.module": [
		388,
		10
	],
	"../pages/modal-card/modal-card.module": [
		391,
		2
	],
	"../pages/modal-publisher/modal-publisher.module": [
		392,
		1
	],
	"../pages/modal/modal.module": [
		390,
		0
	],
	"../pages/otp/otp.module": [
		393,
		9
	],
	"../pages/payment/payment.module": [
		394,
		8
	],
	"../pages/reset/reset.module": [
		395,
		7
	],
	"../pages/rides/rides.module": [
		399,
		6
	],
	"../pages/signup/signup.module": [
		396,
		5
	],
	"../pages/signupcontact/signupcontact.module": [
		397,
		4
	],
	"../pages/signuplicence/signuplicence.module": [
		398,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddcardPage = /** @class */ (function () {
    function AddcardPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.data = {
            'cardNumber': '',
            'ExpDate': '',
            'CVV': '',
            'Country': ''
        };
    }
    AddcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcardPage');
    };
    AddcardPage.prototype.addCard = function (data) {
        console.log('Adding Card details ....');
        this.restProvider.__addCard(data).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    AddcardPage.prototype.removeCard = function (data) {
        console.log('removing a card function initiated');
        this.restProvider.__removeCard(data).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
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
    AddcardPage.prototype.updateCard = function (data) {
        console.log('Updating a card function initiated');
        this.restProvider.__updateCard(data).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    AddcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcard',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/addcard/addcard.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>addcard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="addCardForm padding">\n    <form class="example-form">\n    <mat-form-field class="example-full-width">\n      <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n      <input type="number" matInput placeholder="&#160;Card Number">\n      <!-- [(ngModel)]="data.cardNumber" -->\n    </mat-form-field>\n\n    <table class="example-full-width" cellspacing="0">\n      <tr>\n        <td>\n          <mat-form-field class="example-full-width">\n            <input matInput [matDatepicker]="picker" placeholder="Exp.Date">\n             <!-- [(ngModel)]="data.ExpDate" -->\n            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class="example-full-width">\n            <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n            <input type="number" matInput placeholder="&#160; CVV">\n          </mat-form-field>\n           <!-- [(ngModel)]="data.CVV" -->\n        </td>\n      </tr>\n    </table>\n\n    <mat-form-field class="example-full-width">\n      <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n      <input type="number"matInput placeholder="&#160; Country">\n    </mat-form-field>\n     <!-- [(ngModel)]="data.Country"  -->\n\n    <div class="padding">\n        <button style="border-color: #0e5387;" id="loginButton" (click)="addCard()" ion-button block outline color="light">Save</button>\n    </div>\n</form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/addcard/addcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], AddcardPage);
    return AddcardPage;
}());

//# sourceMappingURL=addcard.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseridePage = /** @class */ (function () {
    function ChooseridePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChooseridePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseridePage');
    };
    ChooseridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chooseride',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/chooseride/chooseride.html"*/'<!--\n  Generated template for the ChooseridePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chooseride</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/chooseride/chooseride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChooseridePage);
    return ChooseridePage;
}());

//# sourceMappingURL=chooseride.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_input__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_select__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forgot_pass_forgot_pass__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signupcontact_signupcontact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signuplicence_signuplicence__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_otp_otp__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_reset_reset__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_addcard_addcard__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chooseride_chooseride__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_account_account__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_legal_legal__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_payment_payment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_help_help__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_addpublisher_addpublisher__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_rides_rides__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Custom Date Adapter
// import { CustomDateAdapter } from '../CustomDateAdapter'







//normal map



//services

//google maps shit





















//this are image imports
// import { File } from '@ionic-native/file';
// import { Transfer } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
// import { Camera } from '@ionic-native/camera';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signupcontact_signupcontact__["a" /* SignupcontactPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signuplicence_signuplicence__["a" /* SignuplicencePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reset_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_addcard_addcard__["a" /* AddcardPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_chooseride_chooseride__["a" /* ChooseridePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_legal_legal__["a" /* LegalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addpublisher_addpublisher__["a" /* AddpublisherPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rides_rides__["a" /* RidesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addcard/addcard.module#AddcardPageModule', name: 'AddcardPage', segment: 'addcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addpublisher/addpublisher.module#AddpublisherPageModule', name: 'AddpublisherPage', segment: 'addpublisher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-pass/forgot-pass.module#ForgotPassPageModule', name: 'ForgotPassPage', segment: 'forgot-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legal/legal.module#LegalPageModule', name: 'LegalPage', segment: 'legal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chooseride/chooseride.module#ChooseridePageModule', name: 'ChooseridePage', segment: 'chooseride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-card/modal-card.module#ModalCardPageModule', name: 'ModalCardPage', segment: 'modal-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-publisher/modal-publisher.module#ModalPublisherPageModule', name: 'ModalPublisherPage', segment: 'modal-publisher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupcontact/signupcontact.module#SignupcontactPageModule', name: 'SignupcontactPage', segment: 'signupcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signuplicence/signuplicence.module#SignuplicencePageModule', name: 'SignuplicencePage', segment: 'signuplicence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rides/rides.module#RidesPageModule', name: 'RidesPage', segment: 'rides', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signupcontact_signupcontact__["a" /* SignupcontactPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signuplicence_signuplicence__["a" /* SignuplicencePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reset_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_addcard_addcard__["a" /* AddcardPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_chooseride_chooseride__["a" /* ChooseridePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_legal_legal__["a" /* LegalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addpublisher_addpublisher__["a" /* AddpublisherPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rides_rides__["a" /* RidesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                // {provide: DateAdapter, useClass: CustomDateAdapter},
                __WEBPACK_IMPORTED_MODULE_33__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_payment_payment__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_legal_legal__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addpublisher_addpublisher__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rides_rides__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, app, statusBar, splashScreen, modalController) {
        var _this = this;
        this.platform = platform;
        this.app = app;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalController = modalController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */];
        this.initializeApp();
        this.platform.ready().then(function () {
            _this.platform.registerBackButtonAction(function () {
                app.navPop();
            });
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'ios-home-outline', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Payment', icon: 'ios-card', component: __WEBPACK_IMPORTED_MODULE_6__pages_payment_payment__["a" /* PaymentPage */] },
            { title: 'Your Rides', icon: 'ios-car-outline', component: __WEBPACK_IMPORTED_MODULE_10__pages_rides_rides__["a" /* RidesPage */] },
            { title: 'Publisher', icon: 'ios-person-add-outline', component: __WEBPACK_IMPORTED_MODULE_9__pages_addpublisher_addpublisher__["a" /* AddpublisherPage */] },
            { title: 'Help', icon: 'ios-help-circle-outline', component: __WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */] },
            { title: 'Legal', icon: 'ios-briefcase-outline', component: __WEBPACK_IMPORTED_MODULE_7__pages_legal_legal__["a" /* LegalPage */] },
            { title: 'LogOut', icon: 'ios-log-out-outline', component: __WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */] }
        ];
    }
    MyApp.prototype.openModal = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalController.create('ModalPage', data);
        modalPage.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('the application is ready ');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        // this.menu.swipeEnable(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/app/app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar color="sibleColor">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<style media="screen">\n.content-ios {\n  background-color: #0d5487;\n}\n.list-ios > .item-block:first-child {\n    border-top: 0.55px solid #c8c7cc00;\n}\n.list-ios .item-block .item-inner {\n    border-bottom: 0.55px solid #c8c7cc00;\n}\n.item-ios {\n    color: #fff;\n    background-color: #0d548700;\n}\n\n.card-ios {\n    background: #fff0;\n    color: #fff;\n}\n//this is the menu styles\n.card-md {\n    background: #0d5487;\n}\n.content-md {\n    color: #fff;\n    background-color: #0d5487;\n}\n.card-md {\n    background: #0d5487;\n}\n.custom-avatar {\n    border: 1px solid #0d5487;\n}\n.card-md {\n    color: #ffffff;\n}\n.item-md {\n    color: #ffffff;\n    background-color: #0d5487;\n}\n.list-md .item-block .item-inner {\n    border-bottom: 1px solid #0d5487 !important;\n}\n</style>\n\n  <ion-content>\n    <ion-card text-center class="hide-card"><br>\n    <img src="../assets/imgs/user.svg" class="custom-avatar"/><br>\n\n    <h2 style="color:white">Calvin Chou</h2>\n    <p style="color:white">Calvin@gmail.com</p>\n    <hr>\n</ion-card>\n<ion-list no-lines>\n           <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n               <ion-icon name="{{p.icon}}" item-left></ion-icon>\n               {{p.title}}\n           </button>\n       <!-- </ion-list> -->\n\n      <!-- <button menuClose ion-item (click)="goToHome()">\n        Home\n      </button>\n      <button menuClose ion-item (click)="goToPayemt()">\n        Payment\n      </button>\n      <button menuClose ion-item (click)="goToRides()">\n        Your Rides\n      </button>\n      <button menuClose ion-item (click)="goToPulisher()">\n        Become a Publisher\n      </button>\n      <button menuClose ion-item (click)="goToHelp()">\n        Help\n      </button>\n      <button menuClose ion-item (click)="goToLegal()">\n        Legal\n      </button>\n -->\n\n\n\n\n\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(viewCtrl, navCtrl, navParams, menuCtrl, app, restProvider, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        this.user = {
            "username": "calvin@gmail.com",
            "password": "1234567890",
            "token": 'some string'
        };
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]);
        this.hide = true;
        this.menuCtrl.enable(false, 'myMenu');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // this.pushPage();
        // this.navCtrl.pop();
    };
    LoginPage.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'make sure your email is @mentee.com' :
                '';
    };
    LoginPage.prototype.pushPage = function () {
        // await this.viewCtrl.dismiss();
        // this.app.getRootNav().push(HomePage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        this.menuCtrl.enable(true, 'myMenu');
        // this.navCtrl.pop();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.user.username);
        if (this.user.userame !== null && this.user.username !== '') {
            localStorage.username = this.user.username;
            console.log('user username: ' + localStorage.username);
            if (this.user.password !== null && this.user.password !== '') {
                var password = this.user.password;
                // if(password.length >== 8){
                localStorage.password = password;
                console.log('user password: ' + localStorage.password);
                console.log(this.user);
                // making an a service cacll
                this.restProvider.__userLogin(this.user).then(function (result) {
                    console.log(result);
                    // alert(result);
                    _this.sucessLogin();
                }, function (err) {
                    console.log(err);
                    _this.errorLogin();
                });
                // end of service call
                // }else{
                //   alert('please make sure your password length is more than 8 characters');
            }
            else {
                alert('Please enter your password');
            }
        }
        else {
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
    };
    // Go to forgot page.
    LoginPage.prototype.forgotPass = function () {
        console.log('Go to forgotPage page function');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass__["a" /* ForgotPassPage */]);
    };
    // Go to SignupPage.
    LoginPage.prototype.signup = function () {
        console.log('Go to signup page function');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.errorLogin = function () {
        // this.favorite = true;
        var toast = this.toastCtrl.create({
            message: "Opps Something Went Wrong with the login!",
            duration: 2000
        });
        toast.present();
        this.user = null;
    };
    LoginPage.prototype.sucessLogin = function () {
        // this.favorite = true;
        var toast = this.toastCtrl.create({
            message: "Login Successful !",
            duration: 2000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding style="background-image: url(\'assets/imgs/bg.png\');background-size:cover">\n<br><br>\n<div class="logos">\n  <img src="assets/imgs/logo.png" alt="logo" style="width:55%;margin-left:77px;margin-top:54px">\n</div>\n<br>\n  <div class="LoginForm padding">\n\n    <mat-form-field>\n      <ion-icon matPrefix ios="ios-mail" md="md-mail"></ion-icon>\n      <input matInput placeholder=" &#160; Enter your email" [formControl]="email" required [(ngModel)]="user.username">\n      <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <ion-icon matPrefix ios="ios-unlock" md="md-unlock"></ion-icon>\n      <input matInput placeholder="  &#160; Enter your password" [type]="hide ? \'password\' : \'text\'" [(ngModel)]="user.password">\n      <mat-icon matSuffix (click)="hide = !hide">{{hide ? \'visibility\' : \'visibility_off\'}}</mat-icon>\n    </mat-form-field>\n\n    <br><br>\n\n    <span (click)="forgotPass()" style="color:#4b4b4b;text-align:right;">Forgot password<b style="color:#318ebc;"> ?</b></span>\n    <div class="padding" style="text-align:center;">\n      <button style="border-color: #0e5387;margin:15px 0;" id="loginButton" (click)="login()" ion-button block outline color="light">Log in</button>\n    </div>\n    <span (click)="signup()" style="color:#4b4b4b;text-align:center">Don\'t have an account ? <b style="color:#318ebc;">Signup</b></span>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 404,
	"./af.js": 404,
	"./ar": 405,
	"./ar-dz": 406,
	"./ar-dz.js": 406,
	"./ar-kw": 407,
	"./ar-kw.js": 407,
	"./ar-ly": 408,
	"./ar-ly.js": 408,
	"./ar-ma": 409,
	"./ar-ma.js": 409,
	"./ar-sa": 410,
	"./ar-sa.js": 410,
	"./ar-tn": 411,
	"./ar-tn.js": 411,
	"./ar.js": 405,
	"./az": 412,
	"./az.js": 412,
	"./be": 413,
	"./be.js": 413,
	"./bg": 414,
	"./bg.js": 414,
	"./bm": 415,
	"./bm.js": 415,
	"./bn": 416,
	"./bn.js": 416,
	"./bo": 417,
	"./bo.js": 417,
	"./br": 418,
	"./br.js": 418,
	"./bs": 419,
	"./bs.js": 419,
	"./ca": 420,
	"./ca.js": 420,
	"./cs": 421,
	"./cs.js": 421,
	"./cv": 422,
	"./cv.js": 422,
	"./cy": 423,
	"./cy.js": 423,
	"./da": 424,
	"./da.js": 424,
	"./de": 425,
	"./de-at": 426,
	"./de-at.js": 426,
	"./de-ch": 427,
	"./de-ch.js": 427,
	"./de.js": 425,
	"./dv": 428,
	"./dv.js": 428,
	"./el": 429,
	"./el.js": 429,
	"./en-au": 430,
	"./en-au.js": 430,
	"./en-ca": 431,
	"./en-ca.js": 431,
	"./en-gb": 432,
	"./en-gb.js": 432,
	"./en-ie": 433,
	"./en-ie.js": 433,
	"./en-il": 434,
	"./en-il.js": 434,
	"./en-nz": 435,
	"./en-nz.js": 435,
	"./eo": 436,
	"./eo.js": 436,
	"./es": 437,
	"./es-do": 438,
	"./es-do.js": 438,
	"./es-us": 439,
	"./es-us.js": 439,
	"./es.js": 437,
	"./et": 440,
	"./et.js": 440,
	"./eu": 441,
	"./eu.js": 441,
	"./fa": 442,
	"./fa.js": 442,
	"./fi": 443,
	"./fi.js": 443,
	"./fo": 444,
	"./fo.js": 444,
	"./fr": 445,
	"./fr-ca": 446,
	"./fr-ca.js": 446,
	"./fr-ch": 447,
	"./fr-ch.js": 447,
	"./fr.js": 445,
	"./fy": 448,
	"./fy.js": 448,
	"./gd": 449,
	"./gd.js": 449,
	"./gl": 450,
	"./gl.js": 450,
	"./gom-latn": 451,
	"./gom-latn.js": 451,
	"./gu": 452,
	"./gu.js": 452,
	"./he": 453,
	"./he.js": 453,
	"./hi": 454,
	"./hi.js": 454,
	"./hr": 455,
	"./hr.js": 455,
	"./hu": 456,
	"./hu.js": 456,
	"./hy-am": 457,
	"./hy-am.js": 457,
	"./id": 458,
	"./id.js": 458,
	"./is": 459,
	"./is.js": 459,
	"./it": 460,
	"./it.js": 460,
	"./ja": 461,
	"./ja.js": 461,
	"./jv": 462,
	"./jv.js": 462,
	"./ka": 463,
	"./ka.js": 463,
	"./kk": 464,
	"./kk.js": 464,
	"./km": 465,
	"./km.js": 465,
	"./kn": 466,
	"./kn.js": 466,
	"./ko": 467,
	"./ko.js": 467,
	"./ky": 468,
	"./ky.js": 468,
	"./lb": 469,
	"./lb.js": 469,
	"./lo": 470,
	"./lo.js": 470,
	"./lt": 471,
	"./lt.js": 471,
	"./lv": 472,
	"./lv.js": 472,
	"./me": 473,
	"./me.js": 473,
	"./mi": 474,
	"./mi.js": 474,
	"./mk": 475,
	"./mk.js": 475,
	"./ml": 476,
	"./ml.js": 476,
	"./mn": 477,
	"./mn.js": 477,
	"./mr": 478,
	"./mr.js": 478,
	"./ms": 479,
	"./ms-my": 480,
	"./ms-my.js": 480,
	"./ms.js": 479,
	"./mt": 481,
	"./mt.js": 481,
	"./my": 482,
	"./my.js": 482,
	"./nb": 483,
	"./nb.js": 483,
	"./ne": 484,
	"./ne.js": 484,
	"./nl": 485,
	"./nl-be": 486,
	"./nl-be.js": 486,
	"./nl.js": 485,
	"./nn": 487,
	"./nn.js": 487,
	"./pa-in": 488,
	"./pa-in.js": 488,
	"./pl": 489,
	"./pl.js": 489,
	"./pt": 490,
	"./pt-br": 491,
	"./pt-br.js": 491,
	"./pt.js": 490,
	"./ro": 492,
	"./ro.js": 492,
	"./ru": 493,
	"./ru.js": 493,
	"./sd": 494,
	"./sd.js": 494,
	"./se": 495,
	"./se.js": 495,
	"./si": 496,
	"./si.js": 496,
	"./sk": 497,
	"./sk.js": 497,
	"./sl": 498,
	"./sl.js": 498,
	"./sq": 499,
	"./sq.js": 499,
	"./sr": 500,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 500,
	"./ss": 502,
	"./ss.js": 502,
	"./sv": 503,
	"./sv.js": 503,
	"./sw": 504,
	"./sw.js": 504,
	"./ta": 505,
	"./ta.js": 505,
	"./te": 506,
	"./te.js": 506,
	"./tet": 507,
	"./tet.js": 507,
	"./tg": 508,
	"./tg.js": 508,
	"./th": 509,
	"./th.js": 509,
	"./tl-ph": 510,
	"./tl-ph.js": 510,
	"./tlh": 511,
	"./tlh.js": 511,
	"./tr": 512,
	"./tr.js": 512,
	"./tzl": 513,
	"./tzl.js": 513,
	"./tzm": 514,
	"./tzm-latn": 515,
	"./tzm-latn.js": 515,
	"./tzm.js": 514,
	"./ug-cn": 516,
	"./ug-cn.js": 516,
	"./uk": 517,
	"./uk.js": 517,
	"./ur": 518,
	"./ur.js": 518,
	"./uz": 519,
	"./uz-latn": 520,
	"./uz-latn.js": 520,
	"./uz.js": 519,
	"./vi": 521,
	"./vi.js": 521,
	"./x-pseudo": 522,
	"./x-pseudo.js": 522,
	"./yo": 523,
	"./yo.js": 523,
	"./zh-cn": 524,
	"./zh-cn.js": 524,
	"./zh-hk": 525,
	"./zh-hk.js": 525,
	"./zh-tw": 526,
	"./zh-tw.js": 526
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 528;

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//CREATING API HEADERS
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://sible-cloudius.azurewebsites.net';
        console.log('Hello RestProvider Provider');
    }
    /////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    //////////////     REGISTRATION   //////////////////////
    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    RestProvider.prototype.__registration = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/v1/AccessManagement/User/registration', JSON.stringify(data), {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.__activateUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/v1/AccessManagement/User/activateuserstatus', JSON.stringify(data), {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    ////////////////////////   LOGIN FUNCTIONS      /////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    /*creating a login function rest service
      params ResultCode,Username,Token,TokenExpiry,and Name*/
    RestProvider.prototype.__userLogin = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/login', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*creating an Authenticate function rest service
      params ResultCode,Username,Token,TokenExpiry,and Name  */
    RestProvider.prototype.__authenticate = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/authenticate', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*  creating an getToken function rest service
      its a get function so params required*/
    RestProvider.prototype.__getToken = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/get/token', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*  creating an getUser function rest service
      its a get function so params accept username  */
    RestProvider.prototype.__getUser = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/v1/AccessManagement/User/get/userdetails').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    ////////////////////////   FORGOT PASSWORD      /////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    /*creating a Reset Password function rest service
      params Username*/
    RestProvider.prototype.__resetPassoword = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/forgotpassword', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*creating a OTP Password function rest service
      params otp*/
    RestProvider.prototype.__otpPassoword = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '....................................../otp', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*creating a Update Password function rest service
      params Password & Confirm Password*/
    RestProvider.prototype.__updatePassoword = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/update/password', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*creating a Update Contacts function rest service
      params new Contact & otp*/
    RestProvider.prototype.__updateContacts = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/update/contacts                                                 ', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    ////////////////////////      CAR MANAGER       /////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    RestProvider.prototype.__addCar = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/carmanager/add', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.__updateCar = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/carmanager/update', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.__deleteCar = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.apiUrl + 'v1/AccessManagement/User/carmanager/delete', httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    ////////////////////////      LICENCE MANAGER   /////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    RestProvider.prototype.__addLicence = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/licensemanager/add', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.__updateLicence = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/licensemanager/update', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    ////////////////////////      CREADIT CARD      /////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    RestProvider.prototype.__addCard = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/update/card', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.__removeCard = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '................................./removeCard', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.__updateCard = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '................................./updateCard', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    ////////////////////////      UPDATE LICENCE   /////////////////////////////////
    ////////////////////////                        /////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    // __updateLicence(data){
    //   return new Promise((resolve, reject) => {
    //     this.http.post(this.apiUrl + 'v1/AccessManagement/User/update/license' , JSON.stringify(data), httpOptions)
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    //   })
    // }
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                         ////////////////////////////////
    //////////////////////// UPDATE PERSONAL_DETAILS /////////////////////////////////
    ////////////////////////                         ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    RestProvider.prototype.__updatePersonalDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/update/personaldetails', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                         ////////////////////////////////
    ////////////////////////   UPDATE USER STATUS    /////////////////////////////////
    ////////////////////////                         ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    RestProvider.prototype.__updateUserDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/updateuserstatus', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////                         ////////////////////////////////
    ////////////////////////   ACTIVATE USER STATUS    /////////////////////////////////
    ////////////////////////                         ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    RestProvider.prototype.__activateUserStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'v1/AccessManagement/User/activateuserstatus', JSON.stringify(data), httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, platform, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalController = modalController;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("second");
            _this.navCtrl.pop();
            backAction();
        });
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        // this.setBackButtonAction()
    };
    //Method to override the default back button action
    PaymentPage.prototype.setBackButtonAction = function () {
        // this.navBar.backButtonClick = () => {
        //Write here wherever you wanna do
        this.navCtrl.pop();
        // }
    };
    // 
    //
    // public openModal(){
    //   var data = { message : 'hello world' };
    //   var modalPage = this.modalController.create('ModalPageCard',data);
    //   modalPage.present();
    // }
    //
    //
    //  public closeModal(){
    //    this.viewCtrl.dismiss();
    // }
    //
    //
    PaymentPage.prototype.addCard = function () {
        // this.navCtrl.push(AddcardPage);
        // console.log('going to add card page on ');
        var data = { message: 'hello world' };
        var modalPage = this.modalController.create('ModalCardPage', data);
        modalPage.present();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar color="sibleColor">\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-header>\n <ion-navbar hideBackButton color="sibleColor">\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Payment</ion-title>\n </ion-navbar>\n</ion-header>\n<style>\n  .dot{\n    position: inherit;\n    display: inline-block;\n    color: #000;\n    background-color: black;\n    width: 5px;\n    height: 5px;\n    border-radius: 50px;\n    margin-bottom: 0.5vh;\n    margin-left: 0.3vh;\n}\n</style>\n\n<ion-content>\n\n  <ion-item-group>\n    <ion-item-divider color="grayIsh">Payment Methods</ion-item-divider>\n    <ion-item style="padding-left:50px;">\n       <ion-icon style="font-size:25px" color="sibleColor" ios="ios-card" md="md-card"></ion-icon>\n       <p style="display:inline-block;">\n       <span class="dot"></span>\n       <span class="dot"></span>\n       <span class="dot"></span>\n       <span class="dot"></span>\n         9873</p>\n     </ion-item>\n     <ion-item style="padding-left:50px;">\n      <ion-icon style="font-size:25px" color="sibleColor" ios="ios-card" md="md-card"></ion-icon>\n      <p style="display:inline-block">\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n        7348</p>\n    </ion-item><br>\n    <ion-item-divider (click)="addCard()" color="grayIsh">Add Card</ion-item-divider>\n\n    <ion-item><a style="color:white">Add Payment Method</a></ion-item>\n    <!-- (click)="addCard()" -->\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ })

},[269]);
//# sourceMappingURL=main.js.map