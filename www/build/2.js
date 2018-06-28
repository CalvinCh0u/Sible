webpackJsonp([2],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardPageModule", function() { return ModalCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_card__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCardPageModule = /** @class */ (function () {
    function ModalCardPageModule() {
    }
    ModalCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_card__["a" /* ModalCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_card__["a" /* ModalCardPage */]),
            ],
        })
    ], ModalCardPageModule);
    return ModalCardPageModule;
}());

//# sourceMappingURL=modal-card.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCardPage; });
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
 * Generated class for the ModalCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCardPage = /** @class */ (function () {
    function ModalCardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalCardPage');
    };
    ModalCardPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ModalCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-card',template:/*ion-inline-start:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/modal-card/modal-card.html"*/'<!--\n  Generated template for the ModalCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="sibleColor">\n    <ion-title>Add a Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div><br>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="ios-card"></ion-icon></ion-label>\n          <ion-input placeholder="Card Number"  clearInput type="text"></ion-input>\n        </ion-item>\n        <div style="height:3vh"></div>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="ios-calendar-outline"></ion-icon></ion-label>\n          <ion-input placeholder="Exp. Date"  clearInput type="text"></ion-input>\n        </ion-item>\n        <div style="height:3vh"></div>\n        <ion-item class="do">\n          <ion-label> <ion-icon name="ios-card-outline"></ion-icon></ion-label>\n          <ion-input placeholder="CVV"  clearInput type="text"></ion-input>\n        </ion-item><br>\n\n        <div class="padding">\n          <button color="sibleColor" class="thisButton modal button" ion-button (click)="closeModal()">Continue</button>\n        </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/john/Desktop/Desktop/Workspace/sible/src/pages/modal-card/modal-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalCardPage);
    return ModalCardPage;
}());

//# sourceMappingURL=modal-card.js.map

/***/ })

});
//# sourceMappingURL=2.js.map