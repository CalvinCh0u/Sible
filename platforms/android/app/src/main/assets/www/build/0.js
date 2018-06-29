webpackJsonp([0],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.booking = {
            'intPlace': '',
            'desPlace': '',
            'time': '',
            'heads': '',
            'laguage': ''
        };
        this.showDestiAndBegin = true;
        this.showCarrage = false;
        this.showTimer = false;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.closeModal = function () {
        if (this.booking.heads !== null && this.booking.heads !== '') {
            localStorage.heads = this.booking.heads;
            console.log('this is localStorage Pick Up data => ' + localStorage.heads);
            if (this.booking.laguage !== null && this.booking.laguage !== '') {
                localStorage.laguage = this.booking.laguage;
                console.log('this is localStorage Destination data => ' + localStorage.laguage);
                alert('PickUp: ' + localStorage.intPlace + '  Destination: ' + localStorage.desPlace + '  Time: ' + localStorage.time + '  heads: ' + localStorage.heads + '  Laguage: ' + localStorage.laguage);
                this.navCtrl.pop();
            }
            else {
                alert('Please Enter your Destination place ');
            }
        }
        else {
            alert('Please Enter your Pick Up place ');
        }
    };
    ModalPage.prototype.goToSecondState = function () {
        if (this.booking.intPlace !== null && this.booking.intPlace !== '') {
            localStorage.intPlace = this.booking.intPlace;
            console.log('this is localStorage Pick Up data => ' + localStorage.intPlace);
            if (this.booking.desPlace !== null && this.booking.desPlace !== '') {
                localStorage.desPlace = this.booking.desPlace;
                console.log('this is localStorage Destination data => ' + localStorage.desPlace);
                this.showDestiAndBegin = false;
                this.showTimer = true;
                // alert('')
            }
            else {
                alert('Please Enter your Destination place ');
            }
        }
        else {
            alert('Please Enter your Pick Up place ');
        }
    };
    ModalPage.prototype.goToThirdState = function () {
        if (this.booking.time !== null && this.booking.time !== '') {
            localStorage.time = this.booking.time;
            console.log('this is localStorage Pick Up data => ' + localStorage.time);
            this.showTimer = false;
            this.showCarrage = true;
        }
        else {
            alert('Please Enter your Time ');
        }
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/john/Documents/GitHub/Sible/src/pages/modal/modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="sibleColor">\n    <ion-title>Book a Ride</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content><br>\n\n\n  <div *ngIf="showDestiAndBegin"><br>\n    	  <ion-item class="do">\n          <ion-label> <ion-icon name="car"></ion-icon></ion-label>\n          <ion-input id="places" placeholder="Where to?"  clearInput type="text" [(ngModel)]="booking.intPlace"></ion-input>\n        </ion-item>\n        <div style="height:3vh"></div>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="pin"></ion-icon></ion-label>\n          <ion-input id="places" placeholder="Drop-Off Location"  clearInput type="text" [(ngModel)]="booking.desPlace"></ion-input>\n        </ion-item><br>\n\n      	<div class="padding">\n      		<button color="sibleColor" class="thisButton modal button" ion-button (click)="goToSecondState()">Confirm</button>\n      	</div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n      <div *ngIf="showTimer">\n\n        <div style="height:3vh"></div>\n        <ion-item class="do padding">\n          <ion-label> <ion-icon name="ios-time-outline"></ion-icon></ion-label>\n          <ion-input id="places" placeholder="Select Time"  clearInput type="text" [(ngModel)]="booking.time"></ion-input>\n        </ion-item><br>\n        <div class="padding">\n          <button style="border-color: #0e5387;margin:15px;width:50vw;border-radius:50px;left:20vw;" color="sibleColor" class="modal button" ion-button (click)="goToThirdState()">Confirm</button>\n        </div>\n      </div>\n\n      <div *ngIf="showCarrage">\n        <div style="height:3vh"></div>\n        <ion-item>\n          <ion-range min="1" max="5" step="2" [(ngModel)]="booking.heads">\n            <ion-icon small range-left name="ios-person-outline"></ion-icon>\n            <ion-icon range-right name="ios-people-outline"></ion-icon>\n          </ion-range>\n        </ion-item>\n\n        <ion-item class="do padding">\n          <ion-label> <ion-icon name="ios-shirt-outline"></ion-icon></ion-label>\n          <ion-input id="places" placeholder="Select Laguage"  clearInput type="text" [(ngModel)]="booking.laguage"></ion-input>\n        </ion-item><br>\n\n        <div class="padding">\n          <button style="border-color: #0e5387;margin:15px;width:50vw;border-radius:50px;left:20vw;" color="sibleColor" class="modal button" ion-button (click)="closeModal()">Book</button>\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Documents/GitHub/Sible/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map