webpackJsonp([1],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPublisherPageModule", function() { return ModalPublisherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_publisher__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPublisherPageModule = /** @class */ (function () {
    function ModalPublisherPageModule() {
    }
    ModalPublisherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_publisher__["a" /* ModalPublisherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_publisher__["a" /* ModalPublisherPage */]),
            ],
        })
    ], ModalPublisherPageModule);
    return ModalPublisherPageModule;
}());

//# sourceMappingURL=modal-publisher.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPublisherPage; });
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
 * Generated class for the ModalPublisherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPublisherPage = /** @class */ (function () {
    function ModalPublisherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalPublisherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPublisherPage');
    };
    ModalPublisherPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalPublisherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-publisher',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/modal-publisher/modal-publisher.html"*/'<!--\n  Generated template for the ModalPublisherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sibleColor">\n    <ion-title>Adding a Publisher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n  <ion-row>\n    <ion-col style="text-align:center;color:#0d5487;">\n      <ion-label> <ion-icon style="font-size:2.2em" name="ios-add-circle-outline"></ion-icon></ion-label>\n      Licence\n    </ion-col>\n    <ion-col style="text-align:center;color:#0d5487;">\n      <ion-label> <ion-icon style="font-size:2.2em" name="ios-add-circle-outline"></ion-icon></ion-label>\n      Vin Number\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n  <div><br>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="ios-car-outline"></ion-icon></ion-label>\n          <ion-input placeholder="Car Type"  clearInput type="text"></ion-input>\n        </ion-item>\n        <div style="height:3vh"></div>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="ios-car-outline"></ion-icon></ion-label>\n          <ion-input placeholder="Car Year"  clearInput type="text"></ion-input>\n        </ion-item>\n        <div style="height:3vh"></div>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="ios-car-outline"></ion-icon></ion-label>\n          <ion-input placeholder="Car modal"  clearInput type="text"></ion-input>\n        </ion-item><br>\n\n        <div class="padding" style="text-align:center;">\n          <button style="border-color: #0e5387;margin:15px 0;border-radius:50px" id="loginButton" (click)="closeModal()" ion-button block outline color="light">Add publisher</button>\n        </div>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/modal-publisher/modal-publisher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalPublisherPage);
    return ModalPublisherPage;
}());

//# sourceMappingURL=modal-publisher.js.map

/***/ })

});
//# sourceMappingURL=1.js.map