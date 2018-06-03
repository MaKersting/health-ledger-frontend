(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/access-request-details-user/access-request-details-user.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/access-request-details-user/access-request-details-user.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/access-request-details-user/access-request-details-user.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/access-request-details-user/access-request-details-user.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div fxLayout=\"row\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Anfrage von:\" value={{from}} readonly>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Anfrage an:\" value={{to}} readonly>\n    </mat-form-field>\n  </div>\n\n  <table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"therapy\">\n      <th mat-header-cell *matHeaderCellDef> Behandlung </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.therapy}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"diagnose\">\n      <th mat-header-cell *matHeaderCellDef> Diagnose </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"element.diagnose.checked\"\n          [(indeterminate)]=\"element.diagnose.indeterminate\"\n          [disabled]=\"element.diagnose.disabled\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"recipe\">\n      <th mat-header-cell *matHeaderCellDef> Rezept </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"element.recipe.checked\"\n          [(indeterminate)]=\"element.recipe.indeterminate\"\n          [disabled]=\"element.recipe.disabled\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"incapacity\">\n      <th mat-header-cell *matHeaderCellDef> Arbeitsunfähigkeit </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"element.incapacity.checked\"\n          [(indeterminate)]=\"element.incapacity.indeterminate\"\n          [disabled]=\"element.incapacity.disabled\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  <div fxLayout=\"row\">\n    <button mat-raised-button>Speichern</button>\n    <button mat-raised-button>Zurück</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/access-request-details-user/access-request-details-user.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/access-request-details-user/access-request-details-user.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AccessRequestDetailsUserComponent, CheckboxAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestDetailsUserComponent", function() { return AccessRequestDetailsUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxAttributes", function() { return CheckboxAttributes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessRequestDetailsUserComponent = /** @class */ (function () {
    function AccessRequestDetailsUserComponent() {
        this.from = "Dr. Acula";
        this.to = "Van Helsing";
        this.displayedColumns = ['therapy', 'diagnose', 'recipe', 'incapacity'];
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    AccessRequestDetailsUserComponent.prototype.ngOnInit = function () {
    };
    AccessRequestDetailsUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-details-user',
            template: __webpack_require__(/*! ./access-request-details-user.component.html */ "./src/app/access-request-details-user/access-request-details-user.component.html"),
            styles: [__webpack_require__(/*! ./access-request-details-user.component.css */ "./src/app/access-request-details-user/access-request-details-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessRequestDetailsUserComponent);
    return AccessRequestDetailsUserComponent;
}());

var CheckboxAttributes = /** @class */ (function () {
    function CheckboxAttributes(initChecked) {
        this.checked = initChecked;
        this.indeterminate = false;
        this.disabled = false;
    }
    return CheckboxAttributes;
}());

var ELEMENT_DATA = [
    { therapy: 'Behandlung 1', diagnose: new CheckboxAttributes(false), recipe: new CheckboxAttributes(true), incapacity: new CheckboxAttributes(false) },
    { therapy: 'Behandlung 1', diagnose: new CheckboxAttributes(true), recipe: new CheckboxAttributes(true), incapacity: new CheckboxAttributes(false) },
    { therapy: 'Behandlung 1', diagnose: new CheckboxAttributes(true), recipe: new CheckboxAttributes(true), incapacity: new CheckboxAttributes(false) }
];


/***/ }),

/***/ "./src/app/access-request-details/access-request-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/access-request-details/access-request-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/access-request-details/access-request-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/access-request-details/access-request-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div fxLayout=\"row\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Anfrage von:\" value={{from}} readonly>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Anfrage an:\" value={{to}} readonly>\n    </mat-form-field>\n  </div>\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker1\" placeholder=\"Einsicht ab:\" [formControl]=\"date\" readonly>\n      <mat-datepicker #picker1></mat-datepicker>\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Kategorie\" [formControl]=\"detailsCategory\" required>\n        <mat-option *ngFor=\"let item of details\" [value]=\"details\">\n          {{item.name}}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"detailsCategory.hasError('required')\">Bitte wählen Sie eine Kategorie</mat-error>\n      <mat-hint>{{detailsCategory.value?.name}}</mat-hint>\n    </mat-form-field>\n\n    <mat-checkbox\n      class=\"example-margin\"\n      [(ngModel)]=\"checkedDiagnose\"\n      [(indeterminate)]=\"indeterminateDiagnose\"\n      [labelPosition]=\"before\"\n      [disabled]=\"disabledDiagnose\">\n      Diagnose\n    </mat-checkbox>\n    <mat-checkbox\n      class=\"example-margin\"\n      [(ngModel)]=\"checkedRecipe\"\n      [(indeterminate)]=\"indeterminateRecipe\"\n      [labelPosition]=\"before\"\n      [disabled]=\"disabledRecipe\">\n      Rezept\n    </mat-checkbox>\n    <mat-checkbox\n      class=\"example-margin\"\n      [(ngModel)]=\"checkedIncapacity\"\n      [(indeterminate)]=\"indeterminateIncapacity\"\n      [labelPosition]=\"before\"\n      [disabled]=\"disabledIncapacity\">\n      Arbeitsunfähigkeit\n    </mat-checkbox>\n  </div>\n\n  <div fxLayout=\"row\">\n    <button mat-raised-button>Speichern</button>\n    <button mat-raised-button>Zurück</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/access-request-details/access-request-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/access-request-details/access-request-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: AccessRequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestDetailsComponent", function() { return AccessRequestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessRequestDetailsComponent = /** @class */ (function () {
    function AccessRequestDetailsComponent() {
        this.from = "Dr. Acula";
        this.to = "Van Helsing";
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
        this.detailsCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.details = [
            { name: 'Alles' },
            { name: 'Allergie' },
            { name: 'Akute Erkrankungen' },
            { name: 'Chronische Erkrankungen' },
            { name: 'Sonstiges' },
            { name: 'Mag Rosenkohl' }
        ];
        this.checkedDiagnose = false;
        this.indeterminateDiagnose = false;
        this.disabledDiagnose = false;
        this.checkedRecipe = false;
        this.indeterminateRecipe = false;
        this.disabledRecipe = false;
        this.checkedIncapacity = false;
        this.indeterminateIncapacity = false;
        this.disabledIncapacity = false;
    }
    AccessRequestDetailsComponent.prototype.ngOnInit = function () {
    };
    AccessRequestDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-details',
            template: __webpack_require__(/*! ./access-request-details.component.html */ "./src/app/access-request-details/access-request-details.component.html"),
            styles: [__webpack_require__(/*! ./access-request-details.component.css */ "./src/app/access-request-details/access-request-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessRequestDetailsComponent);
    return AccessRequestDetailsComponent;
}());



/***/ }),

/***/ "./src/app/access-request/access-request.component.css":
/*!*************************************************************!*\
  !*** ./src/app/access-request/access-request.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/access-request/access-request.component.html":
/*!**************************************************************!*\
  !*** ./src/app/access-request/access-request.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"datum\">\n    <th mat-header-cell *matHeaderCellDef> Datum </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.datum}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"antragsteller\">\n    <th mat-header-cell *matHeaderCellDef> Antragsteller </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.antragsteller}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef> Status </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"details\">\n    <th mat-header-cell *matHeaderCellDef> Details </th>\n    <td mat-cell *matCellDef=\"let element\"> <button mat-raised-button>Anfragedetails öffnen {{element.details}}</button> </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<br>\n<button mat-raised-button>QR-Code</button>\n"

/***/ }),

/***/ "./src/app/access-request/access-request.component.ts":
/*!************************************************************!*\
  !*** ./src/app/access-request/access-request.component.ts ***!
  \************************************************************/
/*! exports provided: AccessRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestComponent", function() { return AccessRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessRequestComponent = /** @class */ (function () {
    function AccessRequestComponent() {
        this.displayedColumns = ['datum', 'antragsteller', 'status', 'details'];
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    AccessRequestComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    AccessRequestComponent.prototype.ngOnInit = function () {
    };
    AccessRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request',
            template: __webpack_require__(/*! ./access-request.component.html */ "./src/app/access-request/access-request.component.html"),
            styles: [__webpack_require__(/*! ./access-request.component.css */ "./src/app/access-request/access-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessRequestComponent);
    return AccessRequestComponent;
}());

var ELEMENT_DATA = [
    { datum: '12.05.2018', antragsteller: 'Dr. A', status: 'Offen', details: 1 },
    { datum: '10.05.2018', antragsteller: 'Stiftsapotheke', status: 'Akzeptiert', details: 2 },
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hl-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .hl-is-mobile .hl-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n  \n  .hl-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n  }\n  \n  .hl-is-mobile .hl-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }\n  \n  .hl-toolbar-filler{\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hl-container\">\n\n  <mat-toolbar color=\"primary\" class=\"hl-toolbar\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <span>Health Ledger</span>\n\n    <span class=\"hl-toolbar-filler\"></span>\n    \n    <mat-icon *ngIf=name>account_circle</mat-icon>\n    <span *ngIf=name>\n      {{name}}\n    </span>\n\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"hl-sidenav-container\">\n    <mat-sidenav #sidenav mode=\"over\" [(opened)]=\"opened\" (click)=\"sidenav.close()\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"./smart-recipe-overview\">Smart-Rezept-Übersicht</a>\n        <a mat-list-item routerLink=\"./smart-recipe-details\">Smart-Rezept-Details</a>\n        <a mat-list-item routerLink=\"./health-record\">Krankenakte</a>\n        <a mat-list-item routerLink=\"./therapy-details\">Behandlungsdetails</a>\n        <a mat-list-item routerLink=\"./diagnostics\">Diagnose</a>\n        <a mat-list-item routerLink=\"./patient-overview\">Patientenübersicht</a>\n        <a mat-list-item routerLink=\"./access-requests\">Einsichtsanfragen</a>\n        <a mat-list-item routerLink=\"./sick-note-overview\">Krankenschein-Übersicht</a>\n        <a mat-list-item routerLink=\"./access-request-details-user\">Einsichtsanfragendetails Benutzer</a>\n        <a mat-list-item routerLink=\"./access-request-details\">Einsichtanfragendetails</a>\n        <a mat-list-item routerLink=\"./qr-code\">QR-Code</a>\n        <a mat-list-item routerLink=\"./qr-code-scanner\">QR-Code-Scanner</a>\n        <a mat-list-item routerLink=\"./login\">Login</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(storageService) {
        this.storageService = storageService;
        this.title = 'app';
        this.name = '';
        this.name = storageService.getItem('name') ? storageService.getItem('name') : this.name;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_0__["StorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _health_record_health_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health-record/health-record.component */ "./src/app/health-record/health-record.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _therapy_details_therapy_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./therapy-details/therapy-details.component */ "./src/app/therapy-details/therapy-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _smart_recipe_overview_smart_recipe_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smart-recipe-overview/smart-recipe-overview.component */ "./src/app/smart-recipe-overview/smart-recipe-overview.component.ts");
/* harmony import */ var _diagnostics_diagnostics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./diagnostics/diagnostics.component */ "./src/app/diagnostics/diagnostics.component.ts");
/* harmony import */ var _patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patient-overview/patient-overview.component */ "./src/app/patient-overview/patient-overview.component.ts");
/* harmony import */ var _access_request_access_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./access-request/access-request.component */ "./src/app/access-request/access-request.component.ts");
/* harmony import */ var _sick_note_overview_sick_note_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sick-note-overview/sick-note-overview.component */ "./src/app/sick-note-overview/sick-note-overview.component.ts");
/* harmony import */ var _smart_recipe_details_smart_recipe_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./smart-recipe-details/smart-recipe-details.component */ "./src/app/smart-recipe-details/smart-recipe-details.component.ts");
/* harmony import */ var _access_request_details_user_access_request_details_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./access-request-details-user/access-request-details-user.component */ "./src/app/access-request-details-user/access-request-details-user.component.ts");
/* harmony import */ var _access_request_details_access_request_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./access-request-details/access-request-details.component */ "./src/app/access-request-details/access-request-details.component.ts");
/* harmony import */ var _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./qr-code/qr-code.component */ "./src/app/qr-code/qr-code.component.ts");
/* harmony import */ var _qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./qr-code-scanner/qr-code-scanner.component */ "./src/app/qr-code-scanner/qr-code-scanner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'therapy-details', component: _therapy_details_therapy_details_component__WEBPACK_IMPORTED_MODULE_10__["TherapyDetailsComponent"] },
    { path: 'health-record', component: _health_record_health_record_component__WEBPACK_IMPORTED_MODULE_8__["HealthRecordComponent"] },
    { path: 'smart-recipe-overview', component: _smart_recipe_overview_smart_recipe_overview_component__WEBPACK_IMPORTED_MODULE_12__["SmartRecipeOverviewComponent"] },
    { path: 'diagnostics', component: _diagnostics_diagnostics_component__WEBPACK_IMPORTED_MODULE_13__["DiagnosticsComponent"] },
    { path: 'smart-recipe-details', component: _smart_recipe_details_smart_recipe_details_component__WEBPACK_IMPORTED_MODULE_17__["SmartRecipeDetailsComponent"] },
    { path: 'patient-overview', component: _patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_14__["PatientOverviewComponent"] },
    { path: 'access-requests', component: _access_request_access_request_component__WEBPACK_IMPORTED_MODULE_15__["AccessRequestComponent"] },
    { path: 'sick-note-overview', component: _sick_note_overview_sick_note_overview_component__WEBPACK_IMPORTED_MODULE_16__["SickNoteOverviewComponent"] },
    { path: 'access-request-details-user', component: _access_request_details_user_access_request_details_user_component__WEBPACK_IMPORTED_MODULE_18__["AccessRequestDetailsUserComponent"] },
    { path: 'access-request-details', component: _access_request_details_access_request_details_component__WEBPACK_IMPORTED_MODULE_19__["AccessRequestDetailsComponent"] },
    { path: 'qr-code', component: _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_20__["QrCodeComponent"] },
    { path: 'qr-code-scanner', component: _qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_21__["QrCodeScannerComponent"] },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _therapy_details_therapy_details_component__WEBPACK_IMPORTED_MODULE_10__["TherapyDetailsComponent"],
                _health_record_health_record_component__WEBPACK_IMPORTED_MODULE_8__["HealthRecordComponent"],
                _smart_recipe_overview_smart_recipe_overview_component__WEBPACK_IMPORTED_MODULE_12__["SmartRecipeOverviewComponent"],
                _diagnostics_diagnostics_component__WEBPACK_IMPORTED_MODULE_13__["DiagnosticsComponent"],
                _patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_14__["PatientOverviewComponent"],
                _access_request_access_request_component__WEBPACK_IMPORTED_MODULE_15__["AccessRequestComponent"],
                _sick_note_overview_sick_note_overview_component__WEBPACK_IMPORTED_MODULE_16__["SickNoteOverviewComponent"],
                _smart_recipe_details_smart_recipe_details_component__WEBPACK_IMPORTED_MODULE_17__["SmartRecipeDetailsComponent"],
                _access_request_details_user_access_request_details_user_component__WEBPACK_IMPORTED_MODULE_18__["AccessRequestDetailsUserComponent"],
                _access_request_details_access_request_details_component__WEBPACK_IMPORTED_MODULE_19__["AccessRequestDetailsComponent"],
                _qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_20__["QrCodeComponent"],
                _qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_21__["QrCodeScannerComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                //Therapy-Details:
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                //End-TherapyDetails
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"]
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/diagnostics/diagnostics.component.css":
/*!*******************************************************!*\
  !*** ./src/app/diagnostics/diagnostics.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/diagnostics/diagnostics.component.html":
/*!********************************************************!*\
  !*** ./src/app/diagnostics/diagnostics.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1 class=\"mat-display-1\">Health Ledger</h1>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Kategorie\" [formControl]=\"detailsCategory\" required>\n      <mat-option>--</mat-option>\n      <mat-option *ngFor=\"let item of details\" [value]=\"details\">\n        {{item.name}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"detailsCategory.hasError('required')\">Bitte wählen Sie eine Kategorie</mat-error>\n    <mat-hint>{{detailsCategory.value?.name}}</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Diagnose\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Rezept\"></textarea>\n  </mat-form-field>\n\n  <mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Rezept\n      </mat-panel-title>\n      <mat-panel-description>\n        Rezept ausstellen\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Rezept\"></textarea>\n    </mat-form-field>\n  </mat-expansion-panel>\n</mat-accordion>\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n         Arbeitsunfähigkeit\n        </mat-panel-title>\n        <mat-panel-description>\n          Arbeitsunfähigkeitsbescheinigung ausstellen\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Beginn der Arbeitsunfähigkeit\" [formControl]=\"date\" readonly>\n        <mat-datepicker #picker1></mat-datepicker>\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"Ende der Arbeitsunfähigkeit\" [formControl]=\"serializedDate\" readonly>\n        <mat-datepicker #picker2></mat-datepicker>\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      </mat-form-field>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <div fxLayout=\"row\">\n    <button mat-raised-button>Speichern</button>\n    <button mat-raised-button>Abbrechen</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/diagnostics/diagnostics.component.ts":
/*!******************************************************!*\
  !*** ./src/app/diagnostics/diagnostics.component.ts ***!
  \******************************************************/
/*! exports provided: DiagnosticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsComponent", function() { return DiagnosticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiagnosticsComponent = /** @class */ (function () {
    function DiagnosticsComponent() {
        this.detailsCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
        this.details = [
            { name: 'Allergie' },
            { name: 'Akute Erkrankungen' },
            { name: 'Chronische Erkrankungen' },
            { name: 'Sonstiges' },
            { name: 'Mag Rosenkohl' }
        ];
    }
    DiagnosticsComponent.prototype.ngOnInit = function () {
    };
    DiagnosticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diagnostics',
            template: __webpack_require__(/*! ./diagnostics.component.html */ "./src/app/diagnostics/diagnostics.component.html"),
            styles: [__webpack_require__(/*! ./diagnostics.component.css */ "./src/app/diagnostics/diagnostics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiagnosticsComponent);
    return DiagnosticsComponent;
}());



/***/ }),

/***/ "./src/app/health-record/health-record.component.css":
/*!***********************************************************!*\
  !*** ./src/app/health-record/health-record.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/health-record/health-record.component.html":
/*!************************************************************!*\
  !*** ./src/app/health-record/health-record.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"datum\">\n    <th mat-header-cell *matHeaderCellDef> Datum </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.datum}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"kategorie\">\n    <th mat-header-cell *matHeaderCellDef> Kategorie </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.kategorie}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"diagnose\">\n    <th mat-header-cell *matHeaderCellDef> Diagnose </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.diagnose}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"arzt\">\n    <th mat-header-cell *matHeaderCellDef> Arzt </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.arzt}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"details\">\n    <th mat-header-cell *matHeaderCellDef> Details </th>\n    <td mat-cell *matCellDef=\"let element\"> <button mat-raised-button>Öffne Id {{element.details}}</button> </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<br>\n<button mat-raised-button>Zurück</button>\n<button mat-raised-button>Behandlung anlegen</button>\n"

/***/ }),

/***/ "./src/app/health-record/health-record.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/health-record/health-record.component.ts ***!
  \**********************************************************/
/*! exports provided: HealthRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthRecordComponent", function() { return HealthRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthRecordComponent = /** @class */ (function () {
    function HealthRecordComponent() {
        this.displayedColumns = ['datum', 'kategorie', 'diagnose', 'arzt', 'details'];
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    HealthRecordComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    HealthRecordComponent.prototype.ngOnInit = function () {
    };
    HealthRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-health-record',
            template: __webpack_require__(/*! ./health-record.component.html */ "./src/app/health-record/health-record.component.html"),
            styles: [__webpack_require__(/*! ./health-record.component.css */ "./src/app/health-record/health-record.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HealthRecordComponent);
    return HealthRecordComponent;
}());

var ELEMENT_DATA = [
    { datum: '12.05.2018', kategorie: 'Allergie', diagnose: 'Patient reagiert auf Pollen...', arzt: 'Dr. A', details: 1 },
    { datum: '11.05.2018', kategorie: 'Routine', diagnose: 'Blutabnahme zur Einsendung ins Labor...', arzt: 'Dr. B', details: 2 },
    { datum: '04.04.2018', kategorie: 'Routine', diagnose: 'Blutabnahme zur Einsendung ins Labor...', arzt: 'Dr. C', details: 3 },
    { datum: '03.02.2018', kategorie: 'Rückenschmerzen', diagnose: 'Patient äußert Beschwerden im Iliosakralgelenk...', arzt: 'Dr. A', details: 4 },
];


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1 class=\"mat-display-1\">Health Ledger</h1>\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-subtitle>Zertifikat hochladen</mat-card-subtitle>\n    <mat-card-content>\n      <input type=\"file\" value=\"Datei auswählen\" (change)=\"onChange($event)\">\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(storageService) {
        this.storageService = storageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onChange = function (event) {
        this.storageService.setItem('name', 'Max Mustermann');
        var files = event.srcElement.files;
        console.log(files);
        location.reload();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_0__["StorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/patient-overview/patient-overview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/patient-overview/patient-overview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patient-overview/patient-overview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/patient-overview/patient-overview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"geburtsdatum\">\n    <th mat-header-cell *matHeaderCellDef> Geburtsdatum </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.geburtsdatum}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"publickey\">\n    <th mat-header-cell *matHeaderCellDef> Public Key </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.publickey}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"details\">\n    <th mat-header-cell *matHeaderCellDef> Details </th>\n    <td mat-cell *matCellDef=\"let element\"> <button mat-raised-button>Akte einsehen {{element.details}}</button> </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<br>\n<button mat-raised-button>Einsichtsanfrage stellen</button>\n"

/***/ }),

/***/ "./src/app/patient-overview/patient-overview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/patient-overview/patient-overview.component.ts ***!
  \****************************************************************/
/*! exports provided: PatientOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientOverviewComponent", function() { return PatientOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientOverviewComponent = /** @class */ (function () {
    function PatientOverviewComponent() {
        this.displayedColumns = ['name', 'geburtsdatum', 'publickey', 'details'];
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    PatientOverviewComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    PatientOverviewComponent.prototype.ngOnInit = function () {
    };
    PatientOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-overview',
            template: __webpack_require__(/*! ./patient-overview.component.html */ "./src/app/patient-overview/patient-overview.component.html"),
            styles: [__webpack_require__(/*! ./patient-overview.component.css */ "./src/app/patient-overview/patient-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientOverviewComponent);
    return PatientOverviewComponent;
}());

var ELEMENT_DATA = [
    { name: 'Klöpper, Fynn', geburtsdatum: '24.02.1997', publickey: '1f31j19j31fj1fj8138', details: 1 },
];


/***/ }),

/***/ "./src/app/qr-code-scanner/qr-code-scanner.component.css":
/*!***************************************************************!*\
  !*** ./src/app/qr-code-scanner/qr-code-scanner.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qr-code-scanner/qr-code-scanner.component.html":
/*!****************************************************************!*\
  !*** ./src/app/qr-code-scanner/qr-code-scanner.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Test</h2>\n"

/***/ }),

/***/ "./src/app/qr-code-scanner/qr-code-scanner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/qr-code-scanner/qr-code-scanner.component.ts ***!
  \**************************************************************/
/*! exports provided: QrCodeScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeScannerComponent", function() { return QrCodeScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QrCodeScannerComponent = /** @class */ (function () {
    function QrCodeScannerComponent() {
    }
    QrCodeScannerComponent.prototype.ngOnInit = function () {
    };
    QrCodeScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qr-code-scanner',
            template: __webpack_require__(/*! ./qr-code-scanner.component.html */ "./src/app/qr-code-scanner/qr-code-scanner.component.html"),
            styles: [__webpack_require__(/*! ./qr-code-scanner.component.css */ "./src/app/qr-code-scanner/qr-code-scanner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QrCodeScannerComponent);
    return QrCodeScannerComponent;
}());



/***/ }),

/***/ "./src/app/qr-code/qr-code.component.css":
/*!***********************************************!*\
  !*** ./src/app/qr-code/qr-code.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qr-code/qr-code.component.html":
/*!************************************************!*\
  !*** ./src/app/qr-code/qr-code.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-display-1\">Public Key - Fynn Klöpper</h1>\n<qrcode [qrdata]=\"publicKey\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n<br>\n<button mat-raised-button>Zurück</button>\n"

/***/ }),

/***/ "./src/app/qr-code/qr-code.component.ts":
/*!**********************************************!*\
  !*** ./src/app/qr-code/qr-code.component.ts ***!
  \**********************************************/
/*! exports provided: QrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return QrCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QrCodeComponent = /** @class */ (function () {
    function QrCodeComponent() {
        this.publicKey = null;
        this.publicKey = 'Hello World';
    }
    QrCodeComponent.prototype.ngOnInit = function () {
    };
    QrCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qr-code',
            template: __webpack_require__(/*! ./qr-code.component.html */ "./src/app/qr-code/qr-code.component.html"),
            styles: [__webpack_require__(/*! ./qr-code.component.css */ "./src/app/qr-code/qr-code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QrCodeComponent);
    return QrCodeComponent;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Wrapper service for crud operations on the local Storage
 */
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    /**
     * Clears the whole localStorage for the application
     */
    StorageService.prototype.clear = function () {
        localStorage.clear();
    };
    /**
     * Gets an item with the given key from the localStorage
     * @param key The key to get the value from the localStorage
     * @return {any} The value for the given key if exists, otherwise null
     */
    StorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    /**
     * Gets the literal key on the given index in the localStorage
     * @param index The index in the localStorage to retrieve the literal key for
     * @return {string} The literal key for the given index
     */
    StorageService.prototype.key = function (index) {
        return localStorage.key(index);
    };
    /**
     * Removes an item with the given key from the localStorage
     * @param key The key of the item to remove
     */
    StorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    /**
     * Sets an item for the given key in the localStorage
     * @param key The key of the item to set
     * @param value The value of the item to in the localStorage
     */
    StorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/sick-note-overview/sick-note-overview.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sick-note-overview/sick-note-overview.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sick-note-overview/sick-note-overview.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sick-note-overview/sick-note-overview.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"einstelldatum\">\n    <th mat-header-cell *matHeaderCellDef> Einstelldatum </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.einstelldatum}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"von\">\n    <th mat-header-cell *matHeaderCellDef> Von </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.von}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"bis\">\n    <th mat-header-cell *matHeaderCellDef> Bis </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.bis}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<br>\n<button mat-raised-button>Zurück</button>\n"

/***/ }),

/***/ "./src/app/sick-note-overview/sick-note-overview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sick-note-overview/sick-note-overview.component.ts ***!
  \********************************************************************/
/*! exports provided: SickNoteOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SickNoteOverviewComponent", function() { return SickNoteOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SickNoteOverviewComponent = /** @class */ (function () {
    function SickNoteOverviewComponent() {
        this.displayedColumns = ['einstelldatum', 'von', 'bis'];
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    SickNoteOverviewComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    SickNoteOverviewComponent.prototype.ngOnInit = function () {
    };
    SickNoteOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sick-note-overview',
            template: __webpack_require__(/*! ./sick-note-overview.component.html */ "./src/app/sick-note-overview/sick-note-overview.component.html"),
            styles: [__webpack_require__(/*! ./sick-note-overview.component.css */ "./src/app/sick-note-overview/sick-note-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SickNoteOverviewComponent);
    return SickNoteOverviewComponent;
}());

var ELEMENT_DATA = [
    { einstelldatum: '12.05.2018', von: '12.05.2018', bis: '16.05.2018' },
    { einstelldatum: '06.05.2018', von: '07.05.2018', bis: '10.05.2018' },
];


/***/ }),

/***/ "./src/app/smart-recipe-details/smart-recipe-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/smart-recipe-details/smart-recipe-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/smart-recipe-details/smart-recipe-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/smart-recipe-details/smart-recipe-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Medikamentenname\" value=\"Ebastel\" readonly>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Datum\" value=\"14.05.2018\" readonly>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Dosierung\" value=\"2x tgl.\" readonly>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Arzt\" value=\"Dr. Otto\" readonly>\n  </mat-form-field>\n  <br>\n  <button mat-raised-button>Einlösen</button>\n  <button mat-raised-button>Abbrechen</button>\n</form>\n"

/***/ }),

/***/ "./src/app/smart-recipe-details/smart-recipe-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/smart-recipe-details/smart-recipe-details.component.ts ***!
  \************************************************************************/
/*! exports provided: SmartRecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartRecipeDetailsComponent", function() { return SmartRecipeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartRecipeDetailsComponent = /** @class */ (function () {
    function SmartRecipeDetailsComponent() {
    }
    SmartRecipeDetailsComponent.prototype.ngOnInit = function () {
    };
    SmartRecipeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart-recipe-details',
            template: __webpack_require__(/*! ./smart-recipe-details.component.html */ "./src/app/smart-recipe-details/smart-recipe-details.component.html"),
            styles: [__webpack_require__(/*! ./smart-recipe-details.component.css */ "./src/app/smart-recipe-details/smart-recipe-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartRecipeDetailsComponent);
    return SmartRecipeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/smart-recipe-overview/smart-recipe-overview.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/smart-recipe-overview/smart-recipe-overview.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/smart-recipe-overview/smart-recipe-overview.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/smart-recipe-overview/smart-recipe-overview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"datum\">\n    <th mat-header-cell *matHeaderCellDef> Datum </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.datum}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"medikamentname\">\n    <th mat-header-cell *matHeaderCellDef> Medikamentname </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.medikamentname}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"dosierung\">\n    <th mat-header-cell *matHeaderCellDef> Dosierung </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.dosierung}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"arzt\">\n    <th mat-header-cell *matHeaderCellDef> Arzt </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.arzt}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"details\">\n    <th mat-header-cell *matHeaderCellDef> Details </th>\n    <td mat-cell *matCellDef=\"let element\"> <button mat-raised-button>Rezeptdetails öffnen {{element.details}}</button> </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<br>\n<button mat-raised-button>Zurück</button>\n"

/***/ }),

/***/ "./src/app/smart-recipe-overview/smart-recipe-overview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/smart-recipe-overview/smart-recipe-overview.component.ts ***!
  \**************************************************************************/
/*! exports provided: SmartRecipeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartRecipeOverviewComponent", function() { return SmartRecipeOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmartRecipeOverviewComponent = /** @class */ (function () {
    function SmartRecipeOverviewComponent() {
        this.displayedColumns = ['datum', 'medikamentname', 'dosierung', 'arzt', 'details'];
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    SmartRecipeOverviewComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    SmartRecipeOverviewComponent.prototype.ngOnInit = function () {
    };
    SmartRecipeOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart-recipe-overview',
            template: __webpack_require__(/*! ./smart-recipe-overview.component.html */ "./src/app/smart-recipe-overview/smart-recipe-overview.component.html"),
            styles: [__webpack_require__(/*! ./smart-recipe-overview.component.css */ "./src/app/smart-recipe-overview/smart-recipe-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartRecipeOverviewComponent);
    return SmartRecipeOverviewComponent;
}());

var ELEMENT_DATA = [
    { datum: '12.05.2018', medikamentname: 'Ebastel', dosierung: '2x tgl.', arzt: 'Dr. A', details: 1 },
];


/***/ }),

/***/ "./src/app/therapy-details/therapy-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/therapy-details/therapy-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/therapy-details/therapy-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/therapy-details/therapy-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h1 class=\"mat-display-1\">Health Ledger</h1>\n\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Kategorie\" value={{category}} readonly>\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Diagnose\" value={{diagnose}} readonly></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Rezept\" value={{recipe}} readonly></textarea>\n  </mat-form-field>\n\n\n  <div fxLayout=\"row\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker1\" placeholder=\"Beginn der Arbeitsunfähigkeit\" [formControl]=\"date\"\n             readonly>\n      <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker2\" placeholder=\"Ende der Arbeitsunfähigkeit\" [formControl]=\"serializedDate\"\n             readonly>\n      <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <button mat-raised-button>Zurück</button>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/therapy-details/therapy-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/therapy-details/therapy-details.component.ts ***!
  \**************************************************************/
/*! exports provided: TherapyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapyDetailsComponent", function() { return TherapyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TherapyDetailsComponent = /** @class */ (function () {
    function TherapyDetailsComponent() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
        this.category = "Mag Rosenkohl";
        this.diagnose = "Massive psychische Störung, wer mag schon Rosenkohl?";
        this.recipe = "1kg Pizza pro Tag";
    }
    TherapyDetailsComponent.prototype.ngOnInit = function () {
    };
    TherapyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-therapy-details',
            template: __webpack_require__(/*! ./therapy-details.component.html */ "./src/app/therapy-details/therapy-details.component.html"),
            styles: [__webpack_require__(/*! ./therapy-details.component.css */ "./src/app/therapy-details/therapy-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TherapyDetailsComponent);
    return TherapyDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/SGSE18/health-ledger-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map