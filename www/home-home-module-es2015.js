(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" > \r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Camera Test App\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div id=\"container\">\r\n    <p>    Hello World</p>\r\n    <p>    This is project for camera issue from Freelancer \"JEBB\"</p>\r\n  </div>\r\n\r\n  <!-- <ion-list>\r\n    <ion-item *ngFor=\"let file of mediaFiles\" tappable (click)=\"play(file)\" text-wrap>\r\n      {{ file.name }}\r\n      <p>{{ file.size / 1000 / 1000 | number }} MB</p>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <video controls autoplay #myvideo>\r\n  </video> -->\r\n\r\n  <div  class=\"media_item\"    >\r\n    <img  *ngIf=\"media_image\" [src]=\"media_image\" class=\"media_img\"   >\r\n    <video  #myvideo  controls webkit-playsinline  style=\"width: 100%; height: 100%;\" [ngStyle]=\"{'display':story_type=='Video'&&media_video!='' ? '':'none' }\"  >   </video>\r\n \r\n    <!-- <div class=\"play_btn_div\" (click)=\"control_play()\"> \r\n      <div class=\"play_btn\"  *ngIf=\"!flag_play && media_video\" > \r\n        <ion-icon name=\"custom-play\" class=\"play_icon_css\"  > </ion-icon>  \r\n      </div>\r\n    </div> -->\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"dark\" >\r\n    <div style=\"display: flex;\">\r\n      <div style=\"width: 50%;text-align: center;\">\r\n          <ion-icon slot=\"icon-only\" name=\"camera\"  (click)=\"takePicture()\" style=\"font-size: 30px;  color: white;\"></ion-icon>\r\n      </div>\r\n      <div style=\"width: 50%;text-align: center;\">\r\n          <ion-icon slot=\"icon-only\" name=\"videocam\"  (click)=\"recordVideo()\" style=\"font-size: 30px;  color: white;\"></ion-icon>\r\n      </div>\r\n    </div>\r\n</ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  margin-top: 40px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.media_item {\n  width: 100%;\n  height: 70%;\n  border: 1px solid black;\n}\n\n.play_btn_div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  display: flex;\n  z-index: 100;\n}\n\n.play_btn {\n  margin: auto;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  z-index: 101;\n}\n\n.play_icon_css {\n  margin: auto;\n  font-size: 45px;\n  font-weight: bold;\n  color: white;\n  z-index: 102;\n}\n\n.media_img {\n  width: 100%;\n  border: 0;\n  height: 100%;\n  -o-object-fit: CONTAIN;\n     object-fit: CONTAIN;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLHFDQUFBO0VBQUEsa0NBQUE7RUFBQSw2QkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWVkaWFfaXRlbXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxyXG59XHJcbi5wbGF5X2J0bl9kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnBsYXlfYnRue1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogZml0LWNvbnRlbnQhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEwMTtcclxufVxyXG5cclxuLnBsYXlfaWNvbl9jc3N7XHJcbiAgbWFyZ2luOiBhdXRvOyAgICBcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMjtcclxuLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4ubWVkaWFfaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogQ09OVEFJTjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");




let HomePage = class HomePage {
    constructor(mediaCapture, camera) {
        this.mediaCapture = mediaCapture;
        this.camera = camera;
        this.mediaFiles = [];
        this.flag_play = false;
    }
    ionViewDidLoad() {
        this.story_type = "Image";
        this.flag_play = false;
    }
    takePicture() {
        let options = {
            quality: 100,
            destinationType: 0,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: 1,
            correctOrientation: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then((imageData) => {
            console.log("imagedata----------", imageData);
            this.media_image = "data:image/jpeg;base64," + imageData;
            console.log("Take photo ok:" + this.media_image);
            this.story_type = "Image";
            this.media_video = "";
        }).catch((error) => {
            console.log(error);
        });
    }
    recordVideo() {
        let options = {
            limit: 1,
            // duration: 30,
            quality: 0
        };
        this.mediaCapture.captureVideo(options).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(res[0].fullPath);
            this.media_video = res[0].fullPath;
            let video = this.myVideo.nativeElement;
            this.story_type = "Video";
            this.media_image = "";
            let win = window;
            video.src = win.Ionic.WebView.convertFileSrc(this.media_video);
            video.play();
        })).catch(err => console.log('Something went wrong', JSON.stringify(err)));
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__["MediaCapture"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }
];
HomePage.propDecorators = {
    myVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['myvideo',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map