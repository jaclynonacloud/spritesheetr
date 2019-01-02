webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-bar/menu-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-bar\">\r\n  <div class=\"menu-bar__brand\">spritesheetr</div>\r\n  <div class=\"menu-bar__items\">\r\n    <app-toggle-list-property-group text=\"file\" [itemProperties]=\"_fileOptionsProps\" ></app-toggle-list-property-group>\r\n    <app-toggle-list-property-group text=\"edit\" [itemProperties]=\"_editOptionsProps\"></app-toggle-list-property-group>\r\n    <app-toggle-list-property-group text=\"workspace\" [itemProperties]=\"_workspaceOptionsProps\"></app-toggle-list-property-group>\r\n    <!-- <app-toggle-list-group text=\"workspace\" [items]=\"['Properties', 'Clear', 'Save', 'Load', '_separator', 'General', 'Animation']\"></app-toggle-list-group> -->\r\n    <app-toggle-list-property-group text=\"spritesheetr\" [itemProperties]=\"_sprOptionsProps\" *ngIf=\"CurrentState == STATE.Spritesheetr\"></app-toggle-list-property-group>\r\n    <app-toggle-list-group text=\"animatr\" [items]=\"['Play', 'Pause', 'Clear']\" *ngIf=\"CurrentState == STATE.Animatr\"></app-toggle-list-group>\r\n    <app-toggle-list-group text=\"clippr\" [items]=\"['Clear']\" *ngIf=\"CurrentState == STATE.Clippr\"></app-toggle-list-group>\r\n    <app-toggle-list-group text=\"window\" [items]=\"['Toolbar', 'Properties', '_separator', 'Spritesheetr', 'Animatr', 'Clippr', '_separator', 'Show Grid', 'Hide Grid']\"></app-toggle-list-group>\r\n    <app-toggle-list-group text=\"help\" [items]=\"['About', 'Github']\"></app-toggle-list-group>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Inputs -->\r\n<input class=\"hide\" type=\"file\" accept=\".sheetr\" #openDialog>"

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-bar/menu-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.menu-bar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  background: white;\n  width: 100%;\n  min-height: 24px;\n  border-bottom: solid 1px grey; }\n  .menu-bar__brand {\n    padding: 2px 10px;\n    margin-right: 15px;\n    color: #8ac582;\n    font-size: 0.9em;\n    letter-spacing: 0.15em;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .menu-bar__items {\n    display: -ms-flexbox;\n    display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-bar/menu-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/_services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_states_service__ = __webpack_require__("../../../../../src/app/_services/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_dialogs_menu_dialogs_component__ = __webpack_require__("../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(_appService) {
        this._appService = _appService;
        //flags
        this._closeMenu = false;
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    MenuBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //pass this menu to menuservice
        this._appService.MenusService.addMenuBar(this);
        //setup options
        //file
        this._fileOptions = [
            { title: "New", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.New), callback: this._appService.new.bind(this._appService) },
            { title: "Open", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Open), callback: this._appService.open.bind(this._appService) },
            { title: "Save", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Save), callback: this._appService.save.bind(this._appService) },
            { title: "_separator", callback: null },
            { title: "Export", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Export), callback: this._appService.export.bind(this._appService) },
            // { title:"Properties...", callback:() => this._appService.MenusService.MenuDialogs.openDialog(MenuDialogsComponent.DIALOG.WorkspaceProps) },
            { title: "<i>Export Unique</i>", callback: null }
        ];
        this._fileOptionsProps = this._getOptionProps(this._fileOptions);
        //edit
        this._editOptions = [
            { title: "Undo", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Undo), callback: this._appService.undo.bind(this._appService) },
            { title: "Redo", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Redo), callback: this._appService.redo.bind(this._appService) },
            { title: "_separator", callback: null },
            { title: "Copy", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Copy), callback: this._appService.copy.bind(this._appService) },
            { title: "Paste", shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS.Paste), callback: this._appService.paste.bind(this._appService) }
        ];
        this._editOptionsProps = this._getOptionProps(this._editOptions);
        //workspace
        this._workspaceOptions = [
            { title: "Properties...", callback: function () { return _this._appService.MenusService.MenuDialogs.openDialog(__WEBPACK_IMPORTED_MODULE_3__menu_dialogs_menu_dialogs_component__["a" /* MenuDialogsComponent */].DIALOG.WorkspaceProps); } },
            { title: "Autosize", callback: function () { return _this._appService.WorkspaceService.autosizeWorkarea(); } }
        ];
        this._workspaceOptionsProps = this._getOptionProps(this._workspaceOptions);
        //spritesheetr
        this._sprOptions = [
            { title: 'Upload Image(s) | file--accept=image/*~multiple=true', callback: this._onLoadSprite.bind(this) },
            { title: 'Select All', shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS["Select All"]), callback: function (e) { console.log("CALLED BACK"); console.log(e); } },
            { title: 'Deselect All', shortcut: __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].GetShortcut(__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */].SHORTCUTS["Deselect All"]), callback: null },
            { title: '_separator', callback: null },
            { title: 'Pack Sprites', callback: function () { return _this._appService.MenusService.MenuDialogs.openDialog(_this.DIALOG.PackSprite); } }
        ];
        this._sprOptionsProps = this._getOptionProps(this._sprOptions);
    };
    /*------------------------------------------- METHODS --------------------------*/
    MenuBarComponent.prototype._getOptionProps = function (options) {
        return options.map(function (opt) {
            var option = { title: opt.title, property: opt.shortcut, callback: opt.callback };
            return option;
        });
    };
    /**Attempts to call an option via its type and index. */
    MenuBarComponent.prototype._callOption = function (type, index) {
        //try to call the file option 
        if (index == -1)
            return;
        switch (type) {
            case "file":
                this._callAction(this._fileOptions[index].callback);
                break;
            case "edit":
                this._callAction(this._editOptions[index].callback);
                break;
            case "spr":
                this._callAction(this._sprOptions[index].callback);
        }
    };
    /**Attempts to call a method action. */
    MenuBarComponent.prototype._callAction = function (action) {
        if (action == null) {
            console.warn("Bad action!  NULL");
            return;
        }
        action();
        // this.onCloseMenu.emit();
        this._closeMenu = true;
    };
    MenuBarComponent.prototype._callCallback = function (type, event) {
        console.log("try callback!");
        console.log(event);
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    MenuBarComponent.prototype._onLoadSprite = function (e) {
        var _this = this;
        if (e instanceof MouseEvent)
            return; //we need file event
        var target = e.target;
        //get event data
        if (target.files.length <= 0)
            return;
        var files = target.files;
        var _loop_1 = function (i) {
            var reader = new FileReader();
            var file = files[i];
            //load in image
            reader.onload = function (e) {
                //load into image element to determine size
                var img = document.createElement("img");
                img.onload = function (ev) {
                    // console.log("LOADED");
                    // console.log(e.target);
                    var data = {
                        name: file.name,
                        src: img.src,
                        x: 0,
                        y: 0,
                        scale: 1,
                        width: img.width,
                        height: img.height
                    };
                    console.warn("DATA");
                    console.log(data);
                    _this._appService.createSprite(data);
                };
                img.src = reader.result.toString();
            };
            reader.readAsDataURL(file);
        };
        //read EACH selection
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    Object.defineProperty(MenuBarComponent.prototype, "OpenDialogElement", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return this.openDialog.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBarComponent.prototype, "CurrentState", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__services_states_service__["a" /* StatesService */].CurrentState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBarComponent.prototype, "STATE", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__services_states_service__["a" /* StatesService */].STATE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBarComponent.prototype, "DIALOG", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__menu_dialogs_menu_dialogs_component__["a" /* MenuDialogsComponent */].DIALOG; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("openDialog", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], MenuBarComponent.prototype, "openDialog", void 0);
    MenuBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-bar',
            template: __webpack_require__("../../../../../src/app/_components/_menus/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_menus/menu-bar/menu-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _b || Object])
    ], MenuBarComponent);
    return MenuBarComponent;
    var _a, _b;
}());

//# sourceMappingURL=menu-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Pack Spritesheet -->\r\n<div class=\"menu-dialog\" #packSprite>\r\n  <div class=\"wrapper\">\r\n    <header class=\"menu-dialog__header\">\r\n      <h2 class=\"menu-dialog__header__title\">Pack Spritesheet</h2>\r\n      <div class=\"menu-dialog__header__x\" title=\"Close Dialog.\" (click)=\"onCloseDialog()\"></div>\r\n    </header>\r\n    <div class=\"menu-dialog__content\">\r\n      <!-- Packing -->\r\n      <!-- <div class=\"content__label\">Packing Type</div>\r\n      <select [(ngModel)]=\"packSprites_packingType\">\r\n        <option value=\"left\">Favour Left</option>\r\n        <option value=\"top\">Favour Top</option>\r\n      </select> -->\r\n      <!-- Allow Resize -->\r\n      <div class=\"content__label\">Allow Resize</div>\r\n      <label class=\"custom-checkbox\" title=\"Allows workarea to resize to next ^2 if necessary.\">\r\n        <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"packSprites_allowResize\">\r\n        <span class=\"custom-checkbox__element\"></span>\r\n      </label>\r\n      <!-- Fit to Sprites -->\r\n      <div class=\"content__label\">Fit to Sprites</div>\r\n      <label class=\"custom-checkbox\" title=\"Will autosize workarea to fit packed sprites.\">\r\n        <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"packSprites_fitToSprites\">\r\n        <span class=\"custom-checkbox__element\"></span>\r\n      </label>\r\n      <!-- Submit -->\r\n      <button class=\"content__submit\" (click)=\"onPackSprites()\">Pack</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Pack Spritesheet -->\r\n\r\n<!-- Workspace Properties -->\r\n<div class=\"menu-dialog\" #workspaceProps>\r\n  <div class=\"wrapper\">\r\n    <header class=\"menu-dialog__header\">\r\n      <h2 class=\"menu-dialog__header__title\">Workspace Properties</h2>\r\n      <div class=\"menu-dialog__header__x\" title=\"Close Dialog.\" (click)=\"onCloseDialog()\"></div>\r\n    </header>\r\n    <div class=\"menu-dialog__content\">\r\n      <!-- Title -->\r\n      <div class=\"content__label\">Title</div>\r\n      <input id=\"sprName\" type=\"text\" [(ngModel)]=\"workProp_title\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\" maxlength=\"80\">\r\n      <!-- Width/Height -->\r\n      <div class=\"content__label\">Workarea Size</div>\r\n      <div>\r\n        <input type=\"number\" [(ngModel)]=\"workProp_width\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onNumberEvent($event, 5, 99999)\" min=\"5\" max=\"99999\">\r\n        <span class=\"pad\">&#215;</span>\r\n        <input type=\"number\" [(ngModel)]=\"workProp_height\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onNumberEvent($event, 5, 99999)\" min=\"5\" max=\"99999\">\r\n      </div>\r\n      <!-- Colour -->\r\n      <div class=\"content__label\">Colour</div>\r\n      <input type=\"color\" [(ngModel)]=\"workProp_colour\">\r\n      <!-- Transparency -->\r\n      <div class=\"content__label\">Transparent BG</div>\r\n      <label class=\"custom-checkbox\">\r\n        <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"workProp_transparent\">\r\n        <span class=\"custom-checkbox__element\"></span>\r\n      </label>\r\n      <!-- Quality -->\r\n      <div class=\"content__label\">Render Quality</div>\r\n      <select [(ngModel)]=\"workProp_quality\">\r\n        <option value=\"q--auto\">Default</option>\r\n        <option value=\"q--crisp-edges\">Crisp Edges</option>\r\n        <option value=\"q--pixelated\">Pixelated</option>\r\n        <option value=\"q--optimize-quality\">Optimize Quality</option>\r\n      </select>\r\n      <!-- Submit -->\r\n      <button class=\"content__submit\" (click)=\"onChangeWorkspaceProperties()\">OK</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Workspace Properties -->\r\n\r\n\r\n<!-- Save Dialog -->\r\n<div class=\"menu-dialog\" #saveDialog>\r\n  <div class=\"wrapper\">\r\n    <header class=\"menu-dialog__header\">\r\n      <h2 class=\"menu-dialog__header__title\">Save As...</h2>\r\n      <div class=\"menu-dialog__header__x\" title=\"Close Dialog.\" (click)=\"onCloseDialog()\"></div>\r\n    </header>\r\n    <div class=\"menu-dialog__content\">\r\n      <!-- Name -->\r\n      <div class=\"content__label\">Name</div>\r\n      <div class=\"row\">\r\n        <input style=\"flex:1;\" type=\"text\" [(ngModel)]=\"saveDialog_name\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\" maxlength=\"80\">\r\n        <span>.sheetr</span>\r\n      </div>\r\n      <div class=\"content__group\" *ngIf=\"_appService.WorkspaceService\">\r\n        <div class=\"content__group__label\">Workspace Data</div>\r\n        <!-- Title -->\r\n        <div class=\"content__label\">Title</div>\r\n        <input type=\"text\" disabled [value]=\"_appService.WorkspaceService.Title\">\r\n        <!-- Width/Height -->\r\n        <div class=\"content__label\">Size</div>\r\n        <div>\r\n          <input type=\"number\" disabled [value]=\"Workarea.Width\">\r\n          <span class=\"pad\">&#215;</span>\r\n          <input type=\"number\" disabled [value]=\"Workarea.Height\">\r\n        </div>\r\n        <!-- Colour -->\r\n        <div class=\"content__label\">Colour</div>\r\n        <div>\r\n          <input type=\"color\" disabled [value]=\"Workarea.Colour\">\r\n          <span [innerHTML]=\"Workarea.Colour.toString().toUpperCase()\"></span>\r\n        </div>\r\n        <!-- Transparent -->\r\n        <div class=\"content__label\">Transparent BG</div>\r\n        <label class=\"custom-checkbox\">\r\n          <input class=\"custom-checkbox__input\" type=\"checkbox\" disabled [checked]=\"Workarea.Transparent\">\r\n          <span class=\"custom-checkbox__element\"></span>\r\n        </label>\r\n        <!-- Sprites -->\r\n        <div class=\"content__label\">Sprites</div>\r\n        <div *ngIf=\"_appService.WorkspaceService.SpriteComponents\">{{_appService.WorkspaceService.SpriteComponents.length}}</div>\r\n        <div class=\"sprite-demos\" *ngIf=\"_appService.WorkspaceService.SpriteComponents\">\r\n          <div class=\"sprite-demos__sprite\" *ngFor=\"let spr of _appService.WorkspaceService.SpriteComponents\">\r\n            <div class=\"sprite-demos__sprite__title\" [innerHTML]=\"spr.Name\"></div>\r\n            <div class=\"sprite-demos__sprite__image\">\r\n              <img [src]=\"spr.Data.src\" [alt]=\"spr.Name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Submit -->\r\n      <button class=\"content__submit\" (click)=\"onSaveWorkspace()\">Save</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Save Dialog -->\r\n\r\n\r\n<!-- Export Dialog -->\r\n<div class=\"menu-dialog menu-dialog--large\" #exportDialog>\r\n  <div class=\"wrapper\">\r\n    <div class=\"details\">\r\n      <header class=\"menu-dialog__header\">\r\n        <h2 class=\"menu-dialog__header__title\">Export</h2>\r\n        <div class=\"menu-dialog__header__x\" title=\"Close Dialog.\" (click)=\"onCloseDialog()\"></div>\r\n      </header>\r\n      <div class=\"menu-dialog__content\">\r\n        <!-- Type -->\r\n        <div class=\"content__label\">Export Type</div>\r\n        <select [(ngModel)]=\"exportDialog_type\" (change)=\"onChangeExportType()\">\r\n          <option value=\"json\">json</option>\r\n          <option value=\"json-frames\">json w/ frames</option>\r\n          <option value=\"json-frames-array\">json w/ frames array</option>\r\n          <option value=\"text\">text</option>\r\n          <option value=\"css\">css</option>\r\n          <option value=\"xml\">xml</option>\r\n        </select>\r\n        <!-- Image Name -->\r\n        <div class=\"content__label\">Image Name</div>\r\n        <div class=\"row\">\r\n          <input style=\"flex:1;\" type=\"text\" [(ngModel)]=\"exportDialog_imgName\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"onChangeExportName($event)\" maxlength=\"80\" spellcheck=\"false\">\r\n          <span>.png</span>\r\n        </div>\r\n        <!-- Spritesheet Name -->\r\n        <div class=\"content__label\">Spritesheet Name</div>\r\n        <div class=\"row\">\r\n          <input style=\"flex:1;\" type=\"text\" [(ngModel)]=\"exportDialog_sheetName\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"onChangeExportName($event)\" maxlength=\"80\" [disabled]=\"exportDialog_lockNames\" spellcheck=\"false\">\r\n          <span [innerHTML]=\"exportDialog_sheetExt\"></span>\r\n        </div>\r\n        <!-- Lock Names -->\r\n        <div class=\"content__label\">Lock Names</div>\r\n        <label class=\"custom-checkbox\" title=\"Makes image name and spritesheet name match.\">\r\n          <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"exportDialog_lockNames\" (change)=\"onChangeExportLock()\">\r\n          <span class=\"custom-checkbox__element\"></span>\r\n        </label>\r\n        <!-- JSON Preview -->\r\n        <div class=\"content__group\">\r\n          <pre class=\"content-preview\" #exportPreview></pre>\r\n        </div>\r\n        <!-- Submit -->\r\n        <button class=\"content__submit\" (click)=\"onExport()\">Export</button>\r\n      </div>\r\n    </div>\r\n    <!-- Viewer -->\r\n    <div class=\"viewer\" #exportViewer>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Export Dialog -->"

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".menu-dialog .content__group__label {\n  font-family: 'Quicksand', sans-serif; }\n\n.menu-dialog__header__title, .menu-dialog__content {\n  font-family: 'Quicksand Light', sans-serif; }\n\n.hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.menu-dialog__header__x {\n  border: solid 1px #cccccc;\n  border-radius: 3px; }\n  .menu-dialog__header__x:hover {\n    border-color: grey; }\n\n.menu-dialog__header__x {\n  background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/cross-dark.png\"); }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.menu-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  background: rgba(255, 255, 255, 0.6);\n  z-index: 100; }\n  .menu-dialog .wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-align: center;\n        align-items: center;\n    min-width: 300px;\n    width: 40vw;\n    min-height: 500px;\n    height: 80vh;\n    border-top: solid 1px #565656; }\n  .menu-dialog__header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    background: #f0f0f0;\n    width: 100%;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    padding: 4px 8px;\n    box-sizing: border-box;\n    border-bottom: solid 1px grey;\n    border-left: solid 1px #565656;\n    border-right: solid 1px #565656; }\n    .menu-dialog__header__title {\n      padding: 0;\n      margin: 0;\n      font-size: 1.2em;\n      font-weight: normal; }\n    .menu-dialog__header__x {\n      display: -ms-flexbox;\n      display: flex;\n      background-size: 20px 20px;\n      background-position: 5px 5px;\n      background-repeat: no-repeat;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: center;\n          align-items: center;\n      width: 30px;\n      height: 30px;\n      font-size: 30px;\n      cursor: pointer; }\n  .menu-dialog__content {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: minmax(120px, 1fr) 2fr;\n        grid-template-columns: minmax(120px, 1fr) 2fr;\n    grid-auto-rows: minmax(30px, max-content);\n    grid-row-gap: 5px;\n    background: white;\n    width: 100%;\n    max-height: -webkit-max-content;\n    max-height: -moz-max-content;\n    max-height: max-content;\n    padding: 8px;\n    font-size: 1.1em;\n    box-sizing: border-box;\n    overflow: auto;\n    border: solid 1px #565656;\n    border-top: none; }\n    .menu-dialog__content input {\n      padding: 4px; }\n    .menu-dialog__content .row {\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%; }\n      .menu-dialog__content .row span:last-child {\n        padding-left: 4px; }\n  .menu-dialog .content__group {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-grid-column: span 2;\n        grid-column: span 2;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: minmax(120px, 1fr) 2fr;\n        grid-template-columns: minmax(120px, 1fr) 2fr;\n    grid-auto-rows: minmax(30px, max-content);\n    grid-row-gap: 5px;\n    width: 100%;\n    max-height: inherit;\n    padding: 4px;\n    border: dotted 1px grey;\n    box-sizing: border-box; }\n    .menu-dialog .content__group__label {\n      -ms-grid-column: span 2;\n          grid-column: span 2; }\n  .menu-dialog .content__submit {\n    justify-self: flex-end;\n    -ms-grid-column: span 2;\n        grid-column: span 2;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content; }\n  .menu-dialog .sprite-demos {\n    -ms-grid-column: span 2;\n        grid-column: span 2;\n    display: -ms-grid;\n    display: grid;\n    grid-auto-columns: 1fr;\n    grid-auto-rows: 100px;\n    grid-gap: 3px;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    max-height: 100%;\n    overflow-y: auto; }\n    .menu-dialog .sprite-demos__sprite {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-flow: column;\n          flex-flow: column;\n      width: 100%;\n      height: 100%;\n      padding: 3px;\n      margin-bottom: 4px;\n      border-left: solid 3px #8ac582;\n      box-sizing: border-box;\n      overflow: hidden; }\n      .menu-dialog .sprite-demos__sprite__title {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        font-size: 0.7em; }\n      .menu-dialog .sprite-demos__sprite__image {\n        -ms-flex: 1;\n            flex: 1;\n        width: 100%;\n        max-width: 100px;\n        height: 100%;\n        max-height: 100px; }\n        .menu-dialog .sprite-demos__sprite__image img {\n          -o-object-fit: scale-down;\n             object-fit: scale-down;\n          max-width: 100%;\n          max-height: 100%;\n          box-sizing: border-box; }\n  .menu-dialog--large .wrapper {\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    width: 90vw;\n    min-width: 500px;\n    border-top: 0;\n    overflow: auto; }\n  .menu-dialog--large .details {\n    -ms-flex: 0 0 auto;\n        flex: 0 0 auto;\n    min-width: 500px;\n    width: 40%;\n    min-height: 500px;\n    max-height: 100%;\n    margin-right: 10px;\n    border-top: solid 1px grey; }\n  .menu-dialog--large .viewer {\n    -ms-flex: 1;\n        flex: 1;\n    background: #f0f0f0;\n    min-width: 400px;\n    height: 100%;\n    padding: 5px;\n    border: solid 1px grey;\n    box-sizing: border-box;\n    overflow-x: auto;\n    overflow-y: auto; }\n  .menu-dialog .content-preview {\n    -ms-grid-column: span 2;\n        grid-column: span 2;\n    overflow-y: auto;\n    max-height: 45vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDialogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/_services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menus_service__ = __webpack_require__("../../../../../src/app/_services/menus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MenuDialogsComponent = /** @class */ (function () {
    function MenuDialogsComponent(_appService, _menusService) {
        this._appService = _appService;
        this._menusService = _menusService;
        //get attributes from dialogs
        //--pack sprites
        this.packSprites_packingType = "left";
        this.packSprites_allowResize = true;
        this.packSprites_fitToSprites = true;
        this.workProp_quality = "q--auto";
        //--export dialog
        this.exportDialog_type = "json";
        this.exportDialog_sheetExt = ".json";
        this.exportDialog_lockNames = true;
    }
    MenuDialogsComponent_1 = MenuDialogsComponent;
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    MenuDialogsComponent.prototype.ngOnInit = function () {
        this._currentDialog = null;
        this.hideAllDialogs();
        this._appService.MenusService.addMenuDialogs(this);
    };
    /*------------------------------------------- METHODS --------------------------*/
    /**Opens a new dialog. */
    MenuDialogsComponent.prototype.openDialog = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
                        var newDialog, DIALOG, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    newDialog = null;
                                    DIALOG = MenuDialogsComponent_1.DIALOG;
                                    _a = type;
                                    switch (_a) {
                                        case DIALOG.PackSprite: return [3 /*break*/, 1];
                                        case DIALOG.WorkspaceProps: return [3 /*break*/, 2];
                                        case DIALOG.SaveDialog: return [3 /*break*/, 3];
                                        case DIALOG.ExportDialog: return [3 /*break*/, 4];
                                    }
                                    return [3 /*break*/, 6];
                                case 1:
                                    newDialog = this.PackSpriteElement;
                                    return [3 /*break*/, 6];
                                case 2:
                                    newDialog = this.WorkspacePropsElement;
                                    //set elements
                                    this.workProp_title = this._appService.WorkspaceService.Title;
                                    this.workProp_width = this.Workarea.Width;
                                    this.workProp_height = this.Workarea.Height;
                                    this.workProp_colour = this.Workarea.Colour;
                                    this.workProp_transparent = this.Workarea.Transparent;
                                    this.workProp_quality = this._appService.WorkspaceService.Quality;
                                    return [3 /*break*/, 6];
                                case 3:
                                    newDialog = this.SaveDialogElement;
                                    return [3 /*break*/, 6];
                                case 4:
                                    newDialog = this.ExportDialogElement;
                                    this.exportDialog_imgName = this.exportDialog_sheetName = this._appService.WorkspaceService.Title.replace(" ", "_").toLowerCase();
                                    this.onChangeExportType();
                                    //load image
                                    _b = this;
                                    return [4 /*yield*/, this._appService.WorkspaceService.buildSpritesheet()];
                                case 5:
                                    //load image
                                    _b._exportDialog_imageResult = _c.sent();
                                    this._exportViewerEl.nativeElement.innerHTML = "";
                                    this._exportViewerEl.nativeElement.appendChild(this._exportDialog_imageResult);
                                    return [3 /*break*/, 6];
                                case 6:
                                    if (this._currentDialog == newDialog)
                                        return [2 /*return*/];
                                    //hide current dialog if there is one
                                    if (this._currentDialog != null)
                                        this.hideDialog(this._currentDialog);
                                    this._currentDialog = newDialog;
                                    this._currentDialog.classList.remove("hide");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**Hides a dialog element. */
    MenuDialogsComponent.prototype.hideDialog = function (dialogElement) {
        dialogElement.classList.add("hide");
        this._currentDialog = null;
    };
    /**Hides all dialog boxes. */
    MenuDialogsComponent.prototype.hideAllDialogs = function () {
        this.hideDialog(this.PackSpriteElement);
        this.hideDialog(this.WorkspacePropsElement);
        this.hideDialog(this.SaveDialogElement);
        this.hideDialog(this.ExportDialogElement);
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    MenuDialogsComponent.prototype.onCloseDialog = function () {
        if (this._currentDialog == null)
            return;
        this.hideDialog(this._currentDialog);
    };
    //custom methods
    MenuDialogsComponent.prototype.onPackSprites = function () {
        console.log("MY SETTINGS");
        // console.log(this.packSprites_allowResize, this.packSprites_packingType);
        //send data out to workspace
        this._appService.WorkspaceService.packSprites(this.packSprites_packingType, this.packSprites_allowResize, this.packSprites_fitToSprites);
        //hide the dialog
        this.hideDialog(this._currentDialog);
    };
    MenuDialogsComponent.prototype.onChangeWorkspaceProperties = function () {
        //set elements
        this._appService.WorkspaceService.setTitle(this.workProp_title);
        this.Workarea.Width = this.workProp_width;
        this.Workarea.Height = this.workProp_height;
        this.Workarea.Colour = this.workProp_colour;
        this.Workarea.Transparent = this.workProp_transparent;
        this._appService.WorkspaceService.setQuality(this.workProp_quality);
        //hide the dialog
        this.hideDialog(this._currentDialog);
    };
    MenuDialogsComponent.prototype.onSaveWorkspace = function () {
        if (this.saveDialog_name != "") {
            this._appService.WorkspaceService.saveWorkspace(this.saveDialog_name);
            //hide the dialog
            this.hideDialog(this._currentDialog);
        }
    };
    MenuDialogsComponent.prototype.onChangeExportType = function () {
        var _this = this;
        var sprites = this._appService.WorkspaceService.SpriteComponents;
        var previewDiv = this._exportPreviewEl.nativeElement;
        var result = "";
        //change preview based on type
        //JSON
        if (this.exportDialog_type == "json") {
            var formatter = sprites.map(function (spr) {
                var r = { name: _this.getCleanFilename(spr.Name), x: spr.X, y: spr.Y, width: spr.Width, height: spr.Height };
                return r;
            });
            // result = JSON.stringify(formatter, null, 2);   
            this._exportDialog_textResult = formatter;
            result = this.syntaxHighlight(formatter);
            this.exportDialog_sheetExt = ".json";
        }
        else if (this.exportDialog_type == "json-frames") {
            var frames_1 = {};
            sprites.forEach(function (spr) {
                var r = {
                    frame: { x: spr.X, y: spr.Y, w: spr.Width, h: spr.Height },
                    rotated: false,
                    trimmed: false,
                    spriteSourceSize: { x: 0, y: 0, w: spr.Width, h: spr.Height },
                    sourceSize: { w: spr.Width, h: spr.Height },
                    pivot: spr.Pivot
                };
                frames_1[_this.getCleanFilename(spr.Name)] = r;
            });
            var formatter = {
                frames: frames_1,
                meta: {
                    app: "spritesheeter 2019",
                    author: "Jaclyn Staples",
                    version: '2019.01.01',
                    image: this.exportDialog_imgName + ".png",
                    size: { w: this._appService.WorkspaceService.WorkareaComponent.Width, h: this._appService.WorkspaceService.WorkareaComponent.Height },
                    scale: this._appService.WorkspaceService.WorkareaComponent.Scale
                }
            };
            this._exportDialog_textResult = formatter;
            result = this.syntaxHighlight(formatter);
            this.exportDialog_sheetExt = ".json";
        }
        else if (this.exportDialog_type == "json-frames-array") {
            var formatter = {
                frames: sprites.map(function (spr) {
                    var r = {
                        filename: _this.getCleanFilename(spr.Name),
                        frame: { x: spr.X, y: spr.Y, w: spr.Width, h: spr.Height },
                        rotated: false,
                        trimmed: false,
                        spriteSourceSize: { x: 0, y: 0, w: spr.Width, h: spr.Height },
                        sourceSize: { w: spr.Width, h: spr.Height },
                        pivot: spr.Pivot
                    };
                    return r;
                }),
                meta: {
                    app: "spritesheeter 2019",
                    author: "Jaclyn Staples",
                    version: '2019.01.01',
                    image: this.exportDialog_imgName + ".png",
                    size: { w: this._appService.WorkspaceService.WorkareaComponent.Width, h: this._appService.WorkspaceService.WorkareaComponent.Height },
                    scale: this._appService.WorkspaceService.WorkareaComponent.Scale
                }
            };
            this._exportDialog_textResult = formatter;
            result = this.syntaxHighlight(formatter);
            this.exportDialog_sheetExt = ".json";
        }
        else if (this.exportDialog_type == "text") {
            var formatter_1 = "";
            sprites.forEach(function (spr) {
                formatter_1 += [_this.getCleanFilename(spr.Name), spr.X, spr.Y, spr.Width, spr.Height].join(", ") + "\n";
            });
            this._exportDialog_textResult = formatter_1;
            result = formatter_1;
            this.exportDialog_sheetExt = ".txt";
        }
        else if (this.exportDialog_type == "css") {
            var formatter_2 = "";
            sprites.forEach(function (spr) {
                formatter_2 += "." + _this.getCleanFilename(spr.Name).toLowerCase() + " {\n  background: url('" + _this.exportDialog_imgName + ".png') no-repeat -" + spr.X + "px -" + spr.Y + "px;\n  width: " + spr.Width + "px;\n  height: " + spr.Height + "px;\n}\n";
            });
            this._exportDialog_textResult = formatter_2;
            result = formatter_2;
            this.exportDialog_sheetExt = ".css";
        }
        else if (this.exportDialog_type == "xml") {
            console.log("XML");
            var formatter_3 = "<textureatlas xmlns=\"http://www.w3.org/1999/xhtml\" imagepath=\"" + this.exportDialog_imgName + ".png\">\n";
            sprites.forEach(function (spr) {
                formatter_3 += "     <subtexture name=\"" + _this.getCleanFilename(spr.Name) + "\" x=\"" + spr.X + "\" y=\"" + spr.Y + "\" width=\"" + spr.Width + "\" height=\"" + spr.Height + "\"></subtexture>\n";
            });
            formatter_3 += "</textureatlas>";
            this._exportDialog_textResult = formatter_3;
            result = formatter_3;
            this.exportDialog_sheetExt = ".xml";
            previewDiv.innerText = result;
        }
        if (this.exportDialog_type != "xml")
            previewDiv.innerHTML = result;
    };
    MenuDialogsComponent.prototype.getCleanFilename = function (name) {
        return name.replace(" ", "-").replace(".", "-").replace("#", "-").replace("~", "-").replace("!", "-");
    };
    MenuDialogsComponent.prototype.onChangeExportName = function (e) {
        this._menusService.onKeyUp(e);
        //if our names are locked, change sheet to match img
        if (this.exportDialog_lockNames) {
            this.exportDialog_sheetName = this.exportDialog_imgName;
        }
        //reset export preview
        this.onChangeExportType();
    };
    MenuDialogsComponent.prototype.onChangeExportLock = function () {
        if (this.onChangeExportLock)
            this.exportDialog_sheetName = this.exportDialog_imgName;
        //reset export preview
        this.onChangeExportType();
    };
    MenuDialogsComponent.prototype.onExport = function () {
        //deal with custom first
        //export image
        var imgStream = this._exportDialog_imageResult.src;
        var imgDiv = document.createElement("a");
        imgDiv.setAttribute("href", imgStream);
        imgDiv.setAttribute("download", this.exportDialog_imgName + ".png");
        imgDiv.click();
        //export text
        var textData = this._exportDialog_textResult;
        var textStream = "";
        switch (this.exportDialog_type) {
            case "json":
            case "json-frames":
            case "json-frames-array":
                textStream = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(textData, null, 2));
                break;
            case "text":
            case "css":
            case "xml":
                textStream = "data:text/json;charset=utf-8," + encodeURIComponent(textData);
                break;
        }
        var sheetDiv = document.createElement("a");
        sheetDiv.setAttribute("href", textStream);
        sheetDiv.setAttribute("download", "" + this.exportDialog_sheetName + this.exportDialog_sheetExt);
        sheetDiv.click();
        //hide the dialog
        this.hideDialog(this._currentDialog);
    };
    /*https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript*/
    MenuDialogsComponent.prototype.syntaxHighlight = function (json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }
                else {
                    cls = 'string';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'boolean';
            }
            else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
    Object.defineProperty(MenuDialogsComponent, "DIALOG", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () {
            return Object.freeze({
                PackSprite: "pack-sprite",
                WorkspaceProps: "workspace-props",
                SaveDialog: "save-dialog",
                ExportDialog: "export-dialog"
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuDialogsComponent.prototype, "PackSpriteElement", {
        get: function () { return this.packSpriteEl.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuDialogsComponent.prototype, "WorkspacePropsElement", {
        get: function () { return this.workspacePropsEl.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuDialogsComponent.prototype, "SaveDialogElement", {
        get: function () { return this.saveDialogEl.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuDialogsComponent.prototype, "ExportDialogElement", {
        get: function () { return this.exportDialogEl.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuDialogsComponent.prototype, "Workarea", {
        get: function () { return this._appService.WorkspaceService.WorkareaComponent; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("packSprite", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], MenuDialogsComponent.prototype, "packSpriteEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("workspaceProps", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
    ], MenuDialogsComponent.prototype, "workspacePropsEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("saveDialog", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
    ], MenuDialogsComponent.prototype, "saveDialogEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("exportDialog", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object)
    ], MenuDialogsComponent.prototype, "exportDialogEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("exportViewer", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _e || Object)
    ], MenuDialogsComponent.prototype, "_exportViewerEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("exportPreview", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _f || Object)
    ], MenuDialogsComponent.prototype, "_exportPreviewEl", void 0);
    MenuDialogsComponent = MenuDialogsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-dialogs',
            template: __webpack_require__("../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menus_service__["a" /* MenusService */]) === "function" && _h || Object])
    ], MenuDialogsComponent);
    return MenuDialogsComponent;
    var MenuDialogsComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=menu-dialogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-properties/menu-properties.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-properties\" (click)=\"_onMenuClicked()\">\r\n\r\n  <div class=\"collapser\">\r\n    <span class=\"collapser__icon\" [innerHTML]=\"_collapsed ? '&lt;&lt;' : '&gt;&gt;'\" (click)=\"_toggleCollapse()\"></span>\r\n  </div>\r\n\r\n  <div class=\"content\" [ngClass]=\"{'collapsed' : _collapsed}\">\r\n\r\n\r\n    <!-- TOOL SPECIFIC MENUS -->\r\n    <!-- Select Menu -->\r\n    <div class=\"group select\" (click)=\"_onContextClick()\" *ngIf=\"CurrentTool == TOOL.Select\">\r\n        <div class=\"title\">Select Options</div>\r\n        <div class=\"row center first\">\r\n          <button (click)=\"_workspaceService.onSelectAll()\">Select All</button>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <button (click)=\"_workspaceService.onDeselectAll()\">Deselect All</button>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <button>-</button>\r\n          <span class=\"input-size\">Selection</span>\r\n          <button>+</button>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <span>{{ _workspaceService.Scale * 100 }}%</span>\r\n        </div>\r\n  \r\n      </div>\r\n      <!-- /Select Menu -->\r\n  \r\n      <!-- Move Menu -->\r\n      <div class=\"group move\" (click)=\"_onContextClick()\" *ngIf=\"CurrentTool == TOOL.Move || CurrentTool == TOOL.Select\">\r\n        <div class=\"title\">Move Options</div>\r\n        <div class=\"row center text-center bottom first\">Selected Sprites: {{ SelectedSpritesCount }}</div>\r\n        <div class=\"row text-center small\" *ngIf=\"SelectedSpritesCount == 0\">Select some sprites with the selection or marquee tool!</div>\r\n        <div class=\"row\">\r\n          <label for=\"moveIncrement\">Increment</label>\r\n          <input id=\"moveIncrement\" type=\"number\" [(ngModel)]=\"_workspaceService.moveIncrement\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onNumberEvent($event, 1, 5000)\" min=\"1\" max=\"5000\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <span class=\"label\">Snap to Sprites</span>\r\n          <label class=\"custom-checkbox\">\r\n          <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"_workspaceService.snapToSprites\">\r\n          <span class=\"custom-checkbox__element\"></span>\r\n          </label>\r\n        </div>\r\n        <div class=\"row-container\" [ngClass]=\"{'empty' : !_workspaceService.snapToSprites}\">\r\n          <div class=\"row\" *ngIf=\"_workspaceService.snapToSprites\">\r\n            <label for=\"snapThreshold\">Snap Threshold</label>\r\n            <input id=\"snapThreshold\" type=\"number\" [(ngModel)]=\"_workspaceService.snapThreshold\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onNumberEvent($event, 1, 5000)\" min=\"1\" max=\"5000\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <span class=\"label\">Keep in Bounds</span>\r\n          <label class=\"custom-checkbox\">\r\n            <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"_workspaceService.keepInBounds\">\r\n            <span class=\"custom-checkbox__element\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <!-- /Move Menu -->\r\n\r\n      <!-- Scale Menu -->\r\n      <div class=\"group select\" (click)=\"_onContextClick()\" *ngIf=\"CurrentTool == TOOL.Scale\">\r\n          <div class=\"title\">Scale Options</div>\r\n          <div class=\"row\" style=\"color:red\">\r\n            FOR THE LOVE OF GOD DON'T USE THIS TOOL!!!\r\n          </div>\r\n          <div class=\"row center first\">\r\n            <button >Scale from Global</button>\r\n          </div>\r\n          <div class=\"row center\">\r\n            <button >Scale from Local</button>\r\n          </div>    \r\n      </div>\r\n      <!-- /Scale Menu -->\r\n\r\n      <!-- Zoom Menu -->\r\n      <div class=\"group zoom\" (click)=\"_onContextClick()\" *ngIf=\"CurrentTool == TOOL.Zoom\">\r\n        <div class=\"title\">Zoom Options</div>\r\n        <div class=\"row center first\">\r\n          <button (click)=\"_onScaleChanged(2)\">Zoom In</button>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <button (click)=\"_onScaleChanged(0.5)\">Zoom Out</button>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <button (click)=\"_onScaleReset()\">Reset</button>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <span>{{ _workspaceService.Scale * 100 }}%</span>\r\n        </div>\r\n  \r\n      </div>\r\n      <!-- /Zoom Menu -->\r\n\r\n\r\n      \r\n\r\n    <!-- CONTEXT MENUS -->\r\n    <div *ngIf=\"CurrentTool == TOOL.Select || CurrentTool == TOOL.Marquee\">\r\n\r\n      <!-- Sprite Menu -->\r\n      <div class=\"group sprite\" *ngIf=\"CurrentContext == CONTEXT.Sprite\" (click)=\"_onContextClick()\">\r\n        <div class=\"title\">Sprite Menu</div>\r\n        <div *ngIf=\"SelectedSprite\">\r\n          <div class=\"row first\">\r\n            <label for=\"sprName\">Name</label>\r\n            <input id=\"sprName\" type=\"text\" [(ngModel)]=\"SelectedSprite.Name\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <label for=\"sprX\">X</label>\r\n            <input id=\"sprX\" type=\"number\" [(ngModel)]=\"SelectedSprite.X\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\">\r\n            <label for=\"sprY\">Y</label>\r\n            <input id=\"sprY\" type=\"number\" [(ngModel)]=\"SelectedSprite.Y\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <label for=\"sprWidth\">W</label>\r\n            <input id=\"sprWidth\" type=\"number\" [(ngModel)]=\"SelectedSprite.Width\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\">\r\n            <span class=\"pad\">H</span>\r\n            <input id=\"sprHeight\" type=\"number\" [(ngModel)]=\"SelectedSprite.Height\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <label for=\"sprScale\">Scale</label>\r\n            <input id=\"sprScale\" type=\"text\" [(ngModel)]=\"SelectedSprite.Scale\" disabled title=\"To change scale, use the scale tool.\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <label for=\"sprPiv\">Piv X</label>\r\n            <input id=\"sprPiv\" type=\"number\" [(ngModel)]=\"SelectedSprite.Pivot.x\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\"  min=\"0\" max=\"1\" step=\"0.1\">\r\n            <span class=\"pad\">Piv Y</span>\r\n            <input type=\"number\" [(ngModel)]=\"SelectedSprite.Pivot.y\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onKeyUp($event)\" min=\"0\" max=\"1\" step=\"0.1\">\r\n          </div>\r\n\r\n          <div class=\"row center\">\r\n            <button>Reset</button>\r\n            <button>Replace</button>\r\n          </div>        \r\n\r\n          <div class=\"row center\">\r\n            <button>Duplicate</button>\r\n          </div>\r\n          <div class=\"row center\">\r\n            <button (click)=\"_workspaceService.removeCurrentSprite()\">Delete</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n      <!-- /Sprite Menu -->\r\n\r\n\r\n      <!-- Workarea Menu -->\r\n        <div class=\"group workarea\" *ngIf=\"CurrentTool == TOOL.Select && CurrentContext == CONTEXT.Workarea\" (click)=\"_onContextClick()\">\r\n        <div class=\"title\">Workarea Menu</div>\r\n        <div class=\"half-input row first\">\r\n          <input type=\"number\" [(ngModel)]=\"Workarea.Width\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onNumberEvent($event, 5, 99999)\" min=\"5\" max=\"99999\">\r\n          <span class=\"pad\">&#215;</span>\r\n          <input type=\"number\" [(ngModel)]=\"Workarea.Height\" (focus)=\"_menusService.disableShortcuts(true)\" (blur)=\"_menusService.disableShortcuts(false)\" (keyup)=\"_menusService.onNumberEvent($event, 5, 99999)\" min=\"5\" max=\"99999\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <input type=\"color\" [(ngModel)]=\"Workarea.Colour\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <span>Use Transparency</span>\r\n          <label class=\"custom-checkbox\">\r\n          <input class=\"custom-checkbox__input\" type=\"checkbox\" [(ngModel)]=\"Workarea.Transparent\">\r\n          <span class=\"custom-checkbox__element\"></span>\r\n          </label>\r\n        </div>\r\n        <div class=\"row center\">\r\n          <button (click)=\"_workspaceService.autosizeWorkarea()\" title=\"Autosizes the workarea to fit current sprites.\">Autosize</button>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <app-toggle-list-group customClass=\"custom-button\" [hoverable]=\"false\" text=\"Render Quality\" [items]=\"QualityOptions\" (onChanged)=\"_onQualityChanged($event)\"></app-toggle-list-group>\r\n        <div class=\"row small first\">\r\n          <span>Quality: </span>\r\n          <span [innerHTML]=\"_currentQuality\"></span>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <button (click)=\"_workspaceService.buildSpritesheet()\">Build Spritesheet</button>\r\n        </div>\r\n        \r\n      </div>\r\n      <!-- /Workarea Menu -->\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  \r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-properties/menu-properties.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.collapser {\n  font-size: 0.7em; }\n  .collapser__icon {\n    float: right;\n    padding: 2px 3px;\n    border: solid 1px transparent;\n    border-radius: 3px;\n    box-sizing: border-box;\n    cursor: pointer; }\n    .collapser__icon:hover {\n      border-color: grey; }\n\n.content {\n  width: 200px; }\n  .content .group {\n    padding-bottom: 5px;\n    margin-bottom: 15px;\n    border-bottom: dotted 1px #a7a7a7; }\n  .content > *:last-child .group, .content .group:last-child {\n    border: none; }\n  .content .group .title {\n    color: #618a5b; }\n\n.content.collapsed {\n  clear: both;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding-top: 4px; }\n  .content.collapsed .group {\n    padding: 0;\n    margin: 0;\n    border-bottom: none !important; }\n    .content.collapsed .group *:not(.title) {\n      display: none; }\n    .content.collapsed .group .title {\n      float: right;\n      padding: 3px 4px;\n      margin-bottom: 4px;\n      color: black;\n      font-size: 0.8em;\n      border: solid 1px grey;\n      cursor: pointer; }\n\n.menu-properties {\n  background: white;\n  height: 100%;\n  padding: 6px;\n  border-left: solid 1px grey;\n  box-sizing: border-box; }\n\n.row-container {\n  background: #f1f1f1;\n  padding: 4px;\n  margin-bottom: 5px; }\n  .row-container.empty {\n    margin-bottom: 0;\n    padding: 0; }\n  .row-container .row:last-child {\n    margin-bottom: 0; }\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-bottom: 5px;\n  padding: 3px 0;\n  font-size: 0.9em; }\n  .row.center {\n    -ms-flex-pack: center;\n        justify-content: center; }\n  .row.small {\n    font-size: 0.8em; }\n  .row.first {\n    margin-top: 5px; }\n  .row.bottom {\n    margin-bottom: 0; }\n  .row input:last-child {\n    margin-right: 0; }\n\ninput {\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n  padding-left: 4px;\n  padding-right: 4px;\n  margin-left: 4px;\n  margin-right: 4px; }\n  input:disabled:hover {\n    background: #f0f0f0; }\n\nspan {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto; }\n\nspan.pad {\n  padding: 0 3px; }\n\nspan.input-size {\n  font-size: 13.3px;\n  padding: 0 8px; }\n\n.half-input {\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-properties/menu-properties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPropertiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menus_service__ = __webpack_require__("../../../../../src/app/_services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/_services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tools_service__ = __webpack_require__("../../../../../src/app/_services/tools.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_workspace_service__ = __webpack_require__("../../../../../src/app/_services/workspace.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPropertiesComponent = /** @class */ (function () {
    function MenuPropertiesComponent(_appService, _menusService, _workspaceService) {
        this._appService = _appService;
        this._menusService = _menusService;
        this._workspaceService = _workspaceService;
        this._collapsed = false;
        this._currentQualityClass = "q--auto";
        this._currentQuality = "<br>";
    }
    MenuPropertiesComponent.prototype.ngOnInit = function () {
        //setup options
        //quality
        this._qualityOptions = [
            { title: "Auto", callback: { "quality": "q--auto", "title": "Auto" } },
            { title: "Crisp Edges", callback: { "quality": "q--crisp-edges", "title": "Crisp Edges" } },
            { title: "Pixelated", callback: { "quality": "q--pixelated", "title": "Pixelated" } },
            { title: "Optimize Quality", callback: { "quality": "q--optimize-quality", "title": "Optimize Quality" } },
        ];
        this._menusService.addMenuProperties(this);
        this.setQuality("q--auto", "Auto");
    };
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    MenuPropertiesComponent.prototype.setQuality = function (quality, qualityName) {
        this._currentQuality = qualityName || quality;
        this._currentQualityClass = quality;
        //emit to parent
        this._menusService.onQualityChange.emit(quality);
    };
    MenuPropertiesComponent.prototype._toggleCollapse = function () {
        this._collapsed = !this._collapsed;
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    MenuPropertiesComponent.prototype._onMenuClicked = function () {
        this._menusService.requestClear();
    };
    MenuPropertiesComponent.prototype._onContextClick = function () {
        if (this._collapsed)
            this._collapsed = false;
    };
    //called by template
    MenuPropertiesComponent.prototype._onQualityChanged = function (index) {
        this.setQuality(this._qualityOptions[index].callback.quality, this._qualityOptions[index].callback.title);
    };
    MenuPropertiesComponent.prototype._onScaleChanged = function (scaleOffset) {
        this._menusService.onScaleChange.emit(scaleOffset);
    };
    MenuPropertiesComponent.prototype._onScaleReset = function () {
        this._menusService.onScaleReset.emit();
    };
    Object.defineProperty(MenuPropertiesComponent.prototype, "CurrentQualityClass", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return this._currentQualityClass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "QualityOptions", {
        get: function () { return this._qualityOptions.map(function (opt) { return opt.title; }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "CurrentTool", {
        //shorthands
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__services_tools_service__["a" /* ToolsService */].CurrentTool; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "CurrentContext", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */].CurrentContext; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "TOOL", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_3__services_tools_service__["a" /* ToolsService */].TOOL; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "CONTEXT", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */].CONTEXT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "SelectedSprite", {
        get: function () { return this._workspaceService.SelectedSpriteComponent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "SelectedSpritesCount", {
        get: function () { return this._workspaceService.SelectedSpriteComponents.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPropertiesComponent.prototype, "Workarea", {
        get: function () { return this._workspaceService.WorkareaComponent; },
        enumerable: true,
        configurable: true
    });
    MenuPropertiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-properties',
            template: __webpack_require__("../../../../../src/app/_components/_menus/menu-properties/menu-properties.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_menus/menu-properties/menu-properties.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_workspace_service__["a" /* WorkspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_workspace_service__["a" /* WorkspaceService */]) === "function" && _c || Object])
    ], MenuPropertiesComponent);
    return MenuPropertiesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=menu-properties.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-toolbar/menu-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-toolbar\">\r\n  <!-- Spritesheetr -->\r\n  <div class=\"menu\"  #element>\r\n    <!-- <div class=\"icon select\" (click)=\"_appService.ToolsService.setTool(_appService.ToolsService.TOOL.Select)\" title=\"Select | {{ _appService.getShortcut(['Shift', 'N']) }}\"></div> -->\r\n    <div class=\"icon select\" (click)=\"_appService.ToolsService.setTool(TOOL.Select)\" title=\"Select [{{ _appService.getShortcut(_appService.shortcuts.Select) }}]\"></div>\r\n    <div class=\"icon marquee\" (click)=\"_appService.ToolsService.setTool(TOOL.Marquee)\" title=\"Marquee Select [{{ _appService.getShortcut(_appService.shortcuts.Marquee) }}]\"></div>\r\n    <hr>\r\n    <div class=\"icon move\" (click)=\"_appService.ToolsService.setTool(TOOL.Move)\" title=\"Move [{{ _appService.getShortcut(_appService.shortcuts.Move) }}]\"></div>\r\n    <div class=\"icon scale\" (click)=\"_appService.ToolsService.setTool(TOOL.Scale)\" title=\"Scale [{{ _appService.getShortcut(_appService.shortcuts.Scale) }}]\"></div>\r\n    <hr>\r\n    <div class=\"icon pan\" (click)=\"_appService.ToolsService.setTool(TOOL.Pan)\" title=\"Pan View [{{ _appService.getShortcut(_appService.shortcuts.Pan) }}]\"></div>\r\n    <div class=\"icon zoom\" (click)=\"_appService.ToolsService.setTool(TOOL.Zoom)\" title=\"Zoom View [{{ _appService.getShortcut(_appService.shortcuts.Zoom) }}]\"></div>\r\n    <hr>\r\n    <div class=\"icon delete\" (click)=\"_appService.ToolsService.setTool(TOOL.Delete)\" title=\"Delete Sprite(s) [{{ _appService.getShortcut(_appService.shortcuts.Delete) }}]\"></div>\r\n  </div>\r\n  <!-- /Spritesheetr -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-toolbar/menu-toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.menu-toolbar {\n  background: white;\n  height: 100%;\n  padding: 6px;\n  border-right: solid 1px grey;\n  box-sizing: border-box; }\n  .menu-toolbar .icon {\n    width: 18px;\n    height: 18px;\n    margin-bottom: 3px;\n    border: solid 1px #cccccc;\n    border-radius: 3px;\n    cursor: pointer; }\n    .menu-toolbar .icon:not(.selected):hover {\n      border-color: grey; }\n    .menu-toolbar .icon.selected {\n      background-color: #f0f0f0;\n      cursor: default; }\n  .menu-toolbar .select {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\"); }\n  .menu-toolbar .marquee {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\") -18px 0; }\n  .menu-toolbar .move {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\") -36px 0; }\n  .menu-toolbar .scale {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\") -108px 0; }\n  .menu-toolbar .pan {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\") -54px 0; }\n  .menu-toolbar .zoom {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\") -72px 0; }\n  .menu-toolbar .delete {\n    background: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/tool-icons.png\") -90px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_menus/menu-toolbar/menu-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/_services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tools_service__ = __webpack_require__("../../../../../src/app/_services/tools.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuToolbarComponent = /** @class */ (function () {
    function MenuToolbarComponent(_appService) {
        this._appService = _appService;
    }
    MenuToolbarComponent.prototype.ngOnInit = function () {
        this._appService.ToolsService.addToolbar(this);
    };
    Object.defineProperty(MenuToolbarComponent.prototype, "Element", {
        get: function () { return this._element.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuToolbarComponent.prototype, "CurrentTool", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__services_tools_service__["a" /* ToolsService */].CurrentTool; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuToolbarComponent.prototype, "TOOL", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__services_tools_service__["a" /* ToolsService */].TOOL; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("element", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], MenuToolbarComponent.prototype, "_element", void 0);
    MenuToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-toolbar',
            template: __webpack_require__("../../../../../src/app/_components/_menus/menu-toolbar/menu-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_menus/menu-toolbar/menu-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _b || Object])
    ], MenuToolbarComponent);
    return MenuToolbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=menu-toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/list-property-group/list-property-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" [ngClass]=\"{'show' : isOpen }\">\r\n    <app-list-property-item [text]=\"item.title\" [property]=\"item.property\" [callback]=\"item.callback\" (onClicked)=\"_onClicked()\" *ngFor=\"let item of itemProperties\"></app-list-property-item>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/list-property-group/list-property-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.list-group {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  border: solid 1px grey;\n  border-top: dotted 1px white; }\n  .list-group.custom-button {\n    position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/list-property-group/list-property-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPropertyGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_group_list_group_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/list-group/list-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_property_item_list_property_item_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.ts");
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



var ListPropertyGroupComponent = /** @class */ (function (_super) {
    __extends(ListPropertyGroupComponent, _super);
    function ListPropertyGroupComponent() {
        return _super.call(this) || this;
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    ListPropertyGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ListPropertyGroupComponent.prototype, "itemProperties", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__list_property_item_list_property_item_component__["a" /* ListPropertyItemComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */]) === "function" && _a || Object)
    ], ListPropertyGroupComponent.prototype, "itemComponents", void 0);
    ListPropertyGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-property-group',
            template: __webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-group/list-property-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-group/list-property-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPropertyGroupComponent);
    return ListPropertyGroupComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__list_list_group_list_group_component__["a" /* ListGroupComponent */]));

//# sourceMappingURL=list-property-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-item\" (click)=\"_onClicked($event)\" [ngClass]=\"{'separator' : text == '_separator'}\" #element>\r\n  <div class=\"list-item__text\" [innerHTML]=\"_getText()\"></div>\r\n  <div class=\"list-item__property\" [innerHTML]=\"property\" *ngIf=\"text != '_separator'\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.list-item.custom-button {\n  background: #f0f0f0;\n  border: solid 1px #a5a5a5;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none; }\n  .list-item.custom-button:hover:not(:disabled) {\n    background: #d0e8cd; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.list-item.custom-button {\n  background: #f0f0f0;\n  border: solid 1px #a5a5a5;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none; }\n  .list-item.custom-button:hover:not(:disabled) {\n    background: #d0e8cd; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.list-item {\n  background: #f0f0f0;\n  cursor: pointer;\n  width: 100%;\n  padding: 3px 14px 3px 8px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  border-top: solid 1px transparent;\n  border-bottom: solid 1px transparent; }\n  .list-item.custom-button {\n    background: #f0f0f0;\n    width: 100%;\n    padding: 3px 3px;\n    font-size: 0.85em;\n    border-color: transparent; }\n  .list-item.separator {\n    padding: 0;\n    pointer-events: none;\n    border-bottom: dotted 1px grey; }\n  .list-item:hover {\n    background: #dee6dd;\n    border-top: solid 1px #b1b1b1;\n    border-bottom: solid 1px #b1b1b1; }\n\n.list-item {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .list-item__text {\n    pointer-events: none; }\n  .list-item__property {\n    padding-left: 24px;\n    font-size: 0.8em;\n    font-style: italic;\n    pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPropertyItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_item_list_item_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/list-item/list-item.component.ts");
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


var ListPropertyItemComponent = /** @class */ (function (_super) {
    __extends(ListPropertyItemComponent, _super);
    function ListPropertyItemComponent() {
        return _super.call(this) || this;
    }
    ListPropertyItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        //look for pipes
        var splitString = this.text.split(" | ");
        if (splitString.length <= 1)
            return;
        //split into categories
        this._pipes = splitString[1].split(" ");
        if (this._pipes.length <= 0)
            return;
        console.log("PIPES");
        console.log(this._pipes);
        this.text = splitString[0];
        //for each pipe, react to requirements
        this._pipes.forEach(function (p) {
            //break into objects with parameters
            var pObj = { title: p, attributes: [] };
            var pArr = p.split("--");
            if (pArr.length > 1) {
                pObj.title = pArr[0];
                //separate attributes
                var aArr = pArr[1].split("~");
                //generate pairs
                aArr.forEach(function (pair) {
                    var pairArr = pair.split("=");
                    pObj.attributes.push({ name: pairArr[0], value: pairArr[1] });
                });
            }
            console.log("PAIRS");
            console.log(pObj);
            switch (pObj.title) {
                case _this.PIPES.FileInput:
                    //create a label to pull over entire item
                    var labelDiv = document.createElement("label");
                    //create a file input to attach over item
                    var fInput_1 = document.createElement("input");
                    fInput_1.type = "file";
                    fInput_1.classList.add("hide");
                    //add any attributes
                    if (pObj.attributes.length > 0) {
                        pObj.attributes.forEach(function (pair) {
                            fInput_1.setAttribute(pair.name, pair.value);
                        });
                    }
                    _this.Element.parentElement.insertBefore(labelDiv, _this.Element);
                    labelDiv.appendChild(fInput_1);
                    labelDiv.appendChild(_this.Element);
                    //listen for change and send as click
                    fInput_1.onchange = (function (e) { return _this._onClicked(e); });
            }
        });
    };
    Object.defineProperty(ListPropertyItemComponent.prototype, "PIPES", {
        get: function () {
            return Object.freeze({
                "FileInput": "file",
                "Disabled": "disabled"
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListPropertyItemComponent.prototype, "Element", {
        get: function () { return this._element.nativeElement; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ListPropertyItemComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ListPropertyItemComponent.prototype, "property", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("element", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], ListPropertyItemComponent.prototype, "_element", void 0);
    ListPropertyItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-property-item',
            template: __webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPropertyItemComponent);
    return ListPropertyItemComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__list_list_item_list_item_component__["a" /* ListItemComponent */]));

//# sourceMappingURL=list-property-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toggle-list-group\" hoverable=\"true\" (mouseenter)=\"_onMouseOver()\" (mouseleave)=\"_onMouseOut()\">\r\n  <app-toggle-button [text]=\"text\" [isOn]=\"isOpen\" [disabled]=\"disabled\" (onClicked)=\"_onToggleButtonClicked($event)\" ></app-toggle-button>\r\n  <div class=\"toggle-list-group__wrapper\">\r\n    <app-list-property-group [itemProperties]=\"itemProperties\" (onComplete)=\"_onComplete()\" *ngIf=\"isOpen\"></app-list-property-group>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.toggle-list-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column; }\n  .toggle-list-group__wrapper {\n    position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleListPropertyGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_toggle_list_group_toggle_list_group_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.ts");
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


var ToggleListPropertyGroupComponent = /** @class */ (function (_super) {
    __extends(ToggleListPropertyGroupComponent, _super);
    function ToggleListPropertyGroupComponent() {
        return _super.call(this) || this;
    }
    ToggleListPropertyGroupComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleListPropertyGroupComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ToggleListPropertyGroupComponent.prototype, "itemProperties", void 0);
    ToggleListPropertyGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toggle-list-property-group',
            template: __webpack_require__("../../../../../src/app/_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleListPropertyGroupComponent);
    return ToggleListPropertyGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__list_toggle_list_group_toggle_list_group_component__["a" /* ToggleListGroupComponent */]));

//# sourceMappingURL=toggle-list-property-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/list-group/list-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" [ngClass]=\"[customClass, (isOpen) ? 'show' : '']\">\r\n  <app-list-item [customClass]=\"customClass\" (onClicked)=\"_onClicked()\" [text]=\"item.title\" [callback]=\"item.callback\" *ngFor=\"let item of items\"></app-list-item>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/list-group/list-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.list-group {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  border: solid 1px grey;\n  border-top: dotted 1px white; }\n  .list-group.custom-button {\n    position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/list-group/list-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_item_list_item_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/list-item/list-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListGroupComponent = /** @class */ (function () {
    function ListGroupComponent() {
        this.customClass = "";
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    ListGroupComponent.prototype.ngOnInit = function () {
    };
    /*------------------------------------------- METHODS --------------------------*/
    ListGroupComponent.prototype._onClicked = function () {
        this.onComplete.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ListGroupComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ListGroupComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__list_item_list_item_component__["a" /* ListItemComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */]) === "function" && _a || Object)
    ], ListGroupComponent.prototype, "itemComponents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
    ], ListGroupComponent.prototype, "onComplete", void 0);
    ListGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-group',
            template: __webpack_require__("../../../../../src/app/_components/_ui/_list/list-group/list-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/_list/list-group/list-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListGroupComponent);
    return ListGroupComponent;
    var _a, _b;
}());

//# sourceMappingURL=list-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-item\" (click)=\"_onClicked($event)\" [innerHTML]=\"_getText()\" [ngClass]=\"[customClass, (text == '_separator') ? 'separator' : '']\"></div>"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/list-item/list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.list-item.custom-button {\n  background: #f0f0f0;\n  border: solid 1px #a5a5a5;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none; }\n  .list-item.custom-button:hover:not(:disabled) {\n    background: #d0e8cd; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.list-item {\n  background: #f0f0f0;\n  cursor: pointer;\n  width: 100%;\n  padding: 3px 14px 3px 8px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  border-top: solid 1px transparent;\n  border-bottom: solid 1px transparent; }\n  .list-item.custom-button {\n    background: #f0f0f0;\n    width: 100%;\n    padding: 3px 3px;\n    font-size: 0.85em;\n    border-color: transparent; }\n  .list-item.separator {\n    padding: 0;\n    pointer-events: none;\n    border-bottom: dotted 1px grey; }\n  .list-item:hover {\n    background: #dee6dd;\n    border-top: solid 1px #b1b1b1;\n    border-bottom: solid 1px #b1b1b1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.onClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    ListItemComponent.prototype.ngOnInit = function () {
    };
    /*------------------------------------------- METHODS --------------------------*/
    ListItemComponent.prototype._getText = function () {
        //interpret the type of list item this is
        if (this.text == "_separator")
            return "";
        return this.text;
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    /**Called when user clicks on item. */
    ListItemComponent.prototype._onClicked = function (e) {
        //try the callback
        if (this.callback != null) {
            this.callback(e);
        }
        this.onClicked.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "callback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], ListItemComponent.prototype, "onClicked", void 0);
    ListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-item',
            template: __webpack_require__("../../../../../src/app/_components/_ui/_list/list-item/list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/_list/list-item/list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
    var _a;
}());

//# sourceMappingURL=list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toggle-list-group\" hoverable=\"true\" (mouseenter)=\"_onMouseOver()\" (mouseleave)=\"_onMouseOut()\">\r\n  <app-toggle-button [customClass]=\"customClass\" [text]=\"text\" [isOn]=\"isOpen\" [disabled]=\"disabled\" (onClicked)=\"_onToggleButtonClicked($event)\" ></app-toggle-button>\r\n  <div class=\"toggle-list-group__wrapper\">\r\n    <app-list-group [customClass]=\"customClass\" [items]=\"items\" (onComplete)=\"_onComplete()\" *ngIf=\"isOpen\"></app-list-group>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.toggle-list-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column; }\n  .toggle-list-group__wrapper {\n    position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleListGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleListGroupComponent = /** @class */ (function () {
    function ToggleListGroupComponent() {
        this.hoverable = true;
        this.disabled = false;
        this.customClass = "";
        this.onChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isOpen = false;
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    ToggleListGroupComponent.prototype.ngOnInit = function () {
    };
    /*------------------------------------------- METHODS --------------------------*/
    ToggleListGroupComponent.prototype.disable = function () {
        this.disabled = true;
        this.isOpen = false; //snap closed
    };
    ToggleListGroupComponent.prototype.enable = function () {
        this.disabled = false;
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    ToggleListGroupComponent.prototype._onToggleButtonClicked = function (button) {
        this.isOpen = !this.isOpen;
    };
    ToggleListGroupComponent.prototype._onComplete = function () {
        this.isOpen = false;
    };
    // Internal
    ToggleListGroupComponent.prototype._onMouseOver = function () {
        if (this.disabled || !this.hoverable)
            return;
        this.isOpen = true;
    };
    ToggleListGroupComponent.prototype._onMouseOut = function () {
        if (this.disabled || !this.hoverable)
            return;
        this.isOpen = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleListGroupComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ToggleListGroupComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleListGroupComponent.prototype, "hoverable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleListGroupComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleListGroupComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], ToggleListGroupComponent.prototype, "onChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
    ], ToggleListGroupComponent.prototype, "onClicked", void 0);
    ToggleListGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toggle-list-group',
            template: __webpack_require__("../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleListGroupComponent);
    return ToggleListGroupComponent;
    var _a, _b;
}());

//# sourceMappingURL=toggle-list-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/_ui/toggle-button/toggle-button.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"toggle-button\" (click)=\"_onClicked()\" (mouseover)=\"_onMouseOver()\" (mouseout)=\"_onMouseOut()\" [innerHTML]=\"text\" [className]=\"customClass\"  [ngClass]=\"{ 'toggled' : isOn, 'disabled' : disabled }\"></div> -->\r\n\r\n<div class=\"toggle-button\" (click)=\"_onClicked()\" (mouseover)=\"_onMouseOver()\" (mouseout)=\"_onMouseOut()\" [innerHTML]=\"text\" [ngClass]=\"[customClass, (isOn) ? 'toggled' : '', (disabled) ? 'disabled' : '']\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/_ui/toggle-button/toggle-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.toggle-button.custom-button {\n  background: #f0f0f0;\n  border: solid 1px #a5a5a5;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none; }\n  .toggle-button.custom-button:hover:not(:disabled) {\n    background: #d0e8cd; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.toggle-button {\n  background: white;\n  padding: 3px 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border: solid 1px transparent;\n  border-top: none;\n  border-bottom: none;\n  box-sizing: border-box; }\n  .toggle-button.custom-button {\n    background: #f0f0f0;\n    padding: 3px 3px;\n    font-size: 0.85em; }\n  .toggle-button.toggled {\n    background: #e5ebe4;\n    border-color: grey; }\n  .toggle-button.disabled {\n    background: #f0f0f0;\n    color: #a8a8a8;\n    pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/_ui/toggle-button/toggle-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleButtonComponent = /** @class */ (function () {
    function ToggleButtonComponent() {
        this.text = "";
        this.isOn = false;
        this.hoverable = false;
        this.disabled = false;
        this.customClass = "";
        this.onClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onClickedState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    ToggleButtonComponent.prototype.ngOnInit = function () {
    };
    /*------------------------------------------- METHODS --------------------------*/
    ToggleButtonComponent.prototype.untoggle = function () {
        this.isOn = false;
        this.onClickedState.emit(this.isOn);
    };
    ToggleButtonComponent.prototype.disable = function () {
        this.disabled = true;
    };
    ToggleButtonComponent.prototype.enable = function () {
        this.disabled = false;
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    /**Called when button is clicked. */
    ToggleButtonComponent.prototype._onClicked = function () {
        if (this.hoverable)
            return;
        this.isOn = !this.isOn;
        this.onClicked.emit(this);
        this.onClickedState.emit(this.isOn);
    };
    ToggleButtonComponent.prototype._onMouseOver = function () {
        if (!this.hoverable)
            return;
        this.isOn = true;
        this.onClicked.emit(this);
        this.onClickedState.emit(this.isOn);
    };
    ToggleButtonComponent.prototype._onMouseOut = function () {
        if (!this.hoverable)
            return;
        this.isOn = false;
        this.onClicked.emit(this);
        this.onClickedState.emit(this.isOn);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleButtonComponent.prototype, "isOn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleButtonComponent.prototype, "hoverable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleButtonComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], ToggleButtonComponent.prototype, "onClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
    ], ToggleButtonComponent.prototype, "onClickedState", void 0);
    ToggleButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toggle-button',
            template: __webpack_require__("../../../../../src/app/_components/_ui/toggle-button/toggle-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/_ui/toggle-button/toggle-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
    var _a, _b;
}());

//# sourceMappingURL=toggle-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/sprite/sprite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sprite\" #element>\r\n  <img class=\"sprite__image\" [src]=\"(_data) ? _data.src : ''\" [alt]=\"(_data) ? _data.name : ''\" (mousedown)=\"_onClicked()\" #image>\r\n  <div class=\"sprite__outline\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/sprite/sprite.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sprite__outline, .sprite.selectable:hover, .sprite.selected {\n  outline: solid 1px red;\n  outline-offset: -1px; }\n\n.sprite {\n  position: relative;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .sprite__outline {\n    width: 100%;\n    height: 100%;\n    outline-color: #4b4b4b; }\n  .sprite__image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .sprite.selectable {\n    pointer-events: all;\n    cursor: pointer; }\n    .sprite.selectable:hover {\n      background: rgba(255, 255, 255, 0.01); }\n  .sprite.selected {\n    outline-color: blue !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/sprite/sprite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__ = __webpack_require__("../../../../../src/app/_services/workspace.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpriteComponent = /** @class */ (function () {
    function SpriteComponent(_workspaceService) {
        this._workspaceService = _workspaceService;
        //flags
        this._isSelectable = false;
        this._isSelected = false;
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    SpriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._quality = "";
        this._pivot = { x: 0.5, y: 0.5 };
        this.clearOffset();
        console.log("IMAGE");
        console.log(this._image);
        this._lastPosition = { x: 0, y: 0 };
        this._moveOffset = { x: 0, y: 0 };
        //add to sprite manager
        this._workspaceService.addSprite(this);
        this.Element.draggable = false;
        this._image.nativeElement.draggable = false;
        //set natural width/height
        this._image.nativeElement.addEventListener("load", function (e) {
            _this._naturalWidth = _this._image.nativeElement.naturalWidth;
            _this._naturalHeight = _this._image.nativeElement.naturalHeight;
            console.log(_this._naturalWidth, _this._naturalHeight);
            _this.callScale(1);
        });
        //set init quality
        this.setQuality(this._workspaceService.Quality);
        // this.scaleGlobally(2);
    };
    /*------------------------------------------- METHODS --------------------------*/
    SpriteComponent.prototype.load = function (data) {
        this._data = data;
        //add some required defaults if none available
        this.Scale = (this._data.scale != null) ? this._data.scale : 1;
        this.Pivot = (this._data.pivot != null) ? this._data.pivot : this._pivot;
        this._defaults = data;
        //listen to change BEFORE calling it
        // this._data.onChange.subscribe((prop:string) => this._onContextChange(prop));
        //call this to invoke data frome ISprite data.
        // this._data.callChange();    
    };
    SpriteComponent.prototype.setSelectable = function (yes) {
        this._isSelectable = yes;
        if (yes)
            this.Element.classList.add("selectable");
        else {
            this.Element.classList.remove("selectable");
            //if they were selected, remove that too
            // this.deselect();
        }
    };
    SpriteComponent.prototype.select = function () {
        this._isSelected = true;
        this.Element.classList.add("selected");
    };
    SpriteComponent.prototype.deselect = function () {
        // console.log("DESELECT ME!");
        // console.log(this.Element);
        this._isSelected = false;
        this.Element.classList.remove("selected");
    };
    SpriteComponent.prototype.callScale = function (scale) {
        //set size
        this._element.nativeElement.style.width = this._naturalWidth * scale + "px";
        this._element.nativeElement.style.height = this._naturalHeight * scale + "px";
    };
    SpriteComponent.prototype.scale = function (scale) {
        this._scale = scale;
    };
    SpriteComponent.prototype.callSize = function () {
        //set size
        this._element.nativeElement.style.width = this._naturalWidth * this._scale + "px";
        this._element.nativeElement.style.height = this._naturalHeight * this._scale + "px";
    };
    SpriteComponent.prototype.resetPosition = function () {
        this._data.x = (this._defaults) ? this._defaults.x : 0;
        this._data.y = (this._defaults) ? this._defaults.y : 0;
        this.X = this._data.x;
        this.Y = this._data.y;
    };
    SpriteComponent.prototype.resetSize = function () {
        this.Width = (this._defaults) ? this._defaults.width : this._naturalWidth;
        this.Height = (this._defaults) ? this._defaults.height : this._naturalHeight;
        this.Scale = (this._defaults) ? this._defaults.scale : 1;
    };
    SpriteComponent.prototype.scaleGlobally = function (scale) {
        console.log("GIVEN SCALE", scale);
        if (this._lastScale == null)
            this._lastScale = scale;
        var lastSize = { width: this.Width, height: this.Height };
        console.log("LAST SIZE", lastSize);
        //first, calcuate the new size
        this.Scale = scale;
        var newSize = { width: this.Element.parentElement.getBoundingClientRect().width, height: this.Element.parentElement.getBoundingClientRect().height };
        console.log("NEW SIZE", newSize);
        var x = newSize.width - lastSize.width;
        var y = newSize.height - lastSize.height;
        console.log("SCALE", x, y);
        this.X = this._freezePosition.x * scale;
        this.Y = this._freezePosition.y * scale;
        // const scaleDiff = (scale - this._lastScale);
        // const pixelX = x * scaleDiff;
        // const pixelY = y * scaleDiff;
        // console.warn("DIFF", scaleDiff);
        // //move position with global impact
        // // this.X *= scaleDiff;
        // // this.Y *= scaleDiff;
        // this.X += (pixelX)
        // this.Y += (pixelY);
        // // this.X += x;
        // // this.Y += y;
        this._lastScale = scale;
    };
    SpriteComponent.prototype.reset = function () {
        //if there is default data on the component, set to defaults
        if (this._defaults != null) {
        }
    };
    SpriteComponent.prototype.setQuality = function (quality) {
        if (this._quality != "")
            this.Element.classList.remove(this._quality);
        this._quality = quality;
        this.Element.classList.add(this._quality);
    };
    SpriteComponent.prototype.setLastPosition = function () {
        this._lastPosition.x = this.X;
        this._lastPosition.y = this.Y;
    };
    // public setLastPositionX():void {
    //   this._lastPosition.x = this.X;
    // }
    // public setLastPostiionY():void {
    //   this._lastPosition.y = this.Y;
    // }
    SpriteComponent.prototype.setLastPositionOffset = function (xOffset, yOffset) {
        this._lastPosition.x = this.X + xOffset;
        this._lastPosition.y = this.Y + yOffset;
    };
    SpriteComponent.prototype.setMoveOffset = function (x, y) {
        this.X = this._lastPosition.x + x;
        this.Y = this._lastPosition.y + y;
    };
    SpriteComponent.prototype.freezePosition = function () {
        this._freezePosition = { x: this.X, y: this.Y };
    };
    SpriteComponent.prototype.computeX = function (value, allowed) {
        var diff = this._freezePosition.x + value;
        // console.log("X: " + value + ", FREEZE: " + this._freezePosition.x + ", DIFF: " + diff);
        //handle boundaries
        if (diff <= 0)
            diff = -this._freezePosition.x;
        else if (allowed) {
            if ((diff + this.Width) > allowed)
                diff = allowed - this.Width - this._freezePosition.x;
        }
        else
            diff -= this._freezePosition.x;
        return diff;
    };
    SpriteComponent.prototype.moveX = function (value) {
        this.X = this._freezePosition.x + value;
    };
    SpriteComponent.prototype.computeY = function (value, allowed) {
        var diff = this._freezePosition.y + value;
        //handle boundaries
        if (diff <= 0)
            diff = -this._freezePosition.y;
        else if (allowed) {
            if ((diff + this.Height) > allowed)
                diff = allowed - this.Height - this._freezePosition.y;
        }
        else
            diff -= this._freezePosition.y;
        return diff;
    };
    SpriteComponent.prototype.moveY = function (value) {
        this.Y = this._freezePosition.y + value;
    };
    SpriteComponent.prototype.computeRight = function (value, allowed) {
        var diff = this._freezePosition.x + this.Width + value;
        console.log("DIFF RIGHT: " + diff);
        //handle boundaries
        if (diff > allowed)
            diff = allowed - this.Width - this._freezePosition.x;
        else
            diff -= this._freezePosition.x + this.Width;
        return diff;
    };
    SpriteComponent.prototype.setOffset = function (x, y) {
        this._offset = { x: x, y: y };
        console.log("MY OFFSET");
        console.log(this._offset);
    };
    SpriteComponent.prototype.clearOffset = function () {
        this._offset = { x: 0, y: 0 };
    };
    // public moveWithOffset(x:number, y:number):void {
    //   this.X = x + this._offset.x;
    //   this.Y = y + this._offset.y;
    // }
    //tests
    SpriteComponent.prototype.isWithinBounds = function (x, y, width, height, threshold) {
        if (threshold === void 0) { threshold = 0; }
        var rect = this.Rect;
        var tRect = { x: rect.width * threshold, y: rect.height * threshold }; //the threshold rect of allowable overlap in bounds 0-no overlap, 1-full overlap
        if ((rect.x + tRect.x) > x)
            if ((rect.x + rect.width - tRect.x) < width)
                if ((rect.y + tRect.y) > y)
                    if ((rect.y + rect.height - tRect.y) < height)
                        return true;
        return false;
    };
    SpriteComponent.prototype.isRectOverlap = function (x, y, width, height) {
        var rect = this.Rect;
        // return (x < rect.x && width > rect.width && y < rect.y && height < rect.height);
        // return rect.x < x + width && rect.x + rect.width > x && rect.y < y + height && rect.y + rect.height > y;
        if (x < rect.x + rect.width && rect.x < x + width && y < rect.y + rect.height)
            return rect.y < y + height;
        return false;
    };
    SpriteComponent.prototype.writeRect = function () {
        var _a = this.Rect, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        console.log("SPRITE RECT:", x, y, width, height);
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    SpriteComponent.prototype._onClicked = function () {
        if (!this._isSelectable)
            return;
        console.log("I AM CLICKED!");
        this._workspaceService.onSpriteComponentClicked(this);
    };
    Object.defineProperty(SpriteComponent.prototype, "Data", {
        // private _onContextChange(prop:string):void {
        //   if(prop == "x" || prop == "all") (this._element.nativeElement.parentElement as HTMLElement).style.left = `${this._data.x}px`;
        //   if(prop =="y" || prop == "all") (this._element.nativeElement.parentElement as HTMLElement).style.top = `${this._data.y}px`;
        // }
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Defaults", {
        get: function () { return this._defaults; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Element", {
        get: function () { return this._element.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Container", {
        get: function () { return this._element.nativeElement.parentElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Rect", {
        // public get Rect() {
        //   return {
        //     x: this._data.x,
        //     y: this._data.y,
        //     width: this.Element.getBoundingClientRect().width,
        //     height: this.Element.getBoundingClientRect().height
        //   };
        // }
        get: function () {
            return {
                x: this._data.x,
                y: this._data.y,
                width: this._data.width,
                height: this._data.height
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Name", {
        get: function () { return this._data.name; },
        set: function (value) { this._data.name = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "X", {
        get: function () { return this._data.x; },
        set: function (value) {
            this._data.x = Math.max(0, value + this._offset.x); //don't let go less than 0
            //set in template
            this._element.nativeElement.parentElement.style.left = this._data.x + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Y", {
        get: function () { return this._data.y; },
        set: function (value) {
            this._data.y = Math.max(0, value + this._offset.y); //don't let go less than 0
            //set in template
            this._element.nativeElement.parentElement.style.top = this._data.y + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Width", {
        get: function () { return this._data.width; },
        set: function (value) {
            this._data.width = value;
            //set in template
            this._element.nativeElement.parentElement.style.width = this._data.width + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Height", {
        get: function () { return this._data.height; },
        set: function (value) {
            this._data.height = value;
            //set in template
            this._element.nativeElement.parentElement.style.height = this._data.height + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Scale", {
        get: function () { return this._data.scale; },
        set: function (value) {
            this._data.scale = value;
            //set in template
            this._element.nativeElement.parentElement.style.transform = "scale(" + this._data.scale + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "Pivot", {
        get: function () { return this._data.pivot; },
        set: function (value) {
            this._data.pivot = value;
            //TODO: set in template 
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteComponent.prototype, "LastPosition", {
        get: function () { return this._lastPosition; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("element", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], SpriteComponent.prototype, "_element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("image", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
    ], SpriteComponent.prototype, "_image", void 0);
    SpriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sprite',
            template: __webpack_require__("../../../../../src/app/_components/sprite/sprite.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/sprite/sprite.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__["a" /* WorkspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__["a" /* WorkspaceService */]) === "function" && _c || Object])
    ], SpriteComponent);
    return SpriteComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=sprite.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/workarea/workarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"workarea\" #workarea (mousedown)=\"_workspaceService.onClickWorkarea()\" id=\"workarea\">\r\n\r\n  <div class=\"selectionContainer\" #selectionContainer></div>\r\n\r\n  <app-sprite *ngFor=\"let spr of _workspaceService.SpriteData\"></app-sprite>\r\n\r\n  <div class=\"marquee\" #marquee></div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/workarea/workarea.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.workarea {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  background: #d1d1d1;\n  width: 100%;\n  height: 100%;\n  border-right: solid 1px grey;\n  border-bottom: solid 1px grey;\n  transform-origin: top left; }\n  .workarea.transparent {\n    background-image: url(\"https://jaclynonacloud.github.io/spritesheetr/assets/images/ui/transparent.png\") !important; }\n  .workarea.renderable {\n    border: none; }\n\n.selectionContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: seagreen;\n  opacity: 0.1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none; }\n\n.marquee {\n  position: absolute;\n  background: rgba(255, 0, 0, 0.329); }\n\napp-sprite {\n  position: absolute;\n  transform-origin: top left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/workarea/workarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__ = __webpack_require__("../../../../../src/app/_services/workspace.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkareaComponent = /** @class */ (function () {
    function WorkareaComponent(_workspaceService) {
        this._workspaceService = _workspaceService;
        this.onScale = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    WorkareaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._workspaceService.addWorkarea(this);
        //setup initials
        this.clear();
        this.Element.addEventListener("mousemove", function (e) { _this._mousePosition = { x: e.clientX - _this.Element.offsetLeft, y: e.clientY - _this.Element.offsetTop }; });
    };
    /*------------------------------------------- METHODS --------------------------*/
    WorkareaComponent.prototype.useSelectionContainer = function (x, y, width, height) {
        this._selectionRect = { x: x, y: y, width: width, height: height };
        this.selectionContainer.nativeElement.style.left = x + "px";
        this.selectionContainer.nativeElement.style.top = y + "px";
        this.selectionContainer.nativeElement.style.width = width + "px";
        this.selectionContainer.nativeElement.style.height = height + "px";
    };
    WorkareaComponent.prototype.clear = function () {
        this.Width = 512;
        this.Height = 512;
        this.Scale = 1;
        this.Colour = "#DCE3E6";
        this.Transparent = false;
    };
    Object.defineProperty(WorkareaComponent.prototype, "Element", {
        /*------------------------------------------- EVENTS ---------------------------*/
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return this.element.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "MarqueeElement", {
        get: function () { return this.marqueeElement.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "SelectionContainer", {
        get: function () { return this.selectionContainer.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "Width", {
        get: function () { return this._width; },
        set: function (value) {
            this._width = value;
            this.element.nativeElement.style.width = this._width * this._scale + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "RenderWidth", {
        get: function () { return this._width * this._scale; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "Height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = value;
            this.element.nativeElement.style.height = this._height * this._scale + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "RenderHeight", {
        get: function () { return this._height * this._scale; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "Colour", {
        get: function () { return this._colour; },
        set: function (value) {
            this._colour = value;
            this.element.nativeElement.style.background = "" + this._colour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "Transparent", {
        get: function () { return this._transparent; },
        set: function (value) {
            this._transparent = value;
            if (this._transparent)
                this.element.nativeElement.classList.add("transparent");
            else
                this.element.nativeElement.classList.remove("transparent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "Scale", {
        get: function () { return this._scale; },
        set: function (value) {
            this._scale = value;
            this.Width = this._width;
            this.Height = this._height;
            this.onScale.emit(this._scale);
            this.element.nativeElement.style.transform = "scale(" + this._scale + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkareaComponent.prototype, "MousePosition", {
        get: function () { return this._mousePosition; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("workarea", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], WorkareaComponent.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("marquee", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
    ], WorkareaComponent.prototype, "marqueeElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("selectionContainer", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
    ], WorkareaComponent.prototype, "selectionContainer", void 0);
    WorkareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workarea',
            template: __webpack_require__("../../../../../src/app/_components/workarea/workarea.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/workarea/workarea.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__["a" /* WorkspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__["a" /* WorkspaceService */]) === "function" && _d || Object])
    ], WorkareaComponent);
    return WorkareaComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=workarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/workspace/workspace.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"workspace-title\" [innerHTML]=\"_workspaceService.Title\" (click)=\"_menusService.MenuDialogs.openDialog('workspace-props')\" title=\"Click to change workspace title.\"></div>\r\n<div class=\"workspace\">\r\n  <app-menu-toolbar></app-menu-toolbar>\r\n  <app-workarea (mousedown)=\"_onWorkareaClicked()\"></app-workarea>\r\n  <app-menu-properties></app-menu-properties>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/workspace/workspace.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".workspace-title {\n  font-family: 'Quicksand Light', sans-serif; }\n\n.hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.workspace-title {\n  background: #f0f0f0;\n  padding: 2px 1px;\n  font-size: 1em;\n  box-sizing: border-box;\n  max-width: 100%;\n  max-height: 100%;\n  padding-left: 10px;\n  border-bottom: solid 1px grey;\n  cursor: pointer; }\n\n.workspace {\n  display: -ms-flexbox;\n  display: flex;\n  background: #a5a5a5;\n  width: 100%;\n  height: 100%; }\n  .workspace app-workarea {\n    -ms-flex: 1;\n        flex: 1;\n    max-width: inherit;\n    max-height: inherit;\n    overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/workspace/workspace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__ = __webpack_require__("../../../../../src/app/_services/workspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menus_service__ = __webpack_require__("../../../../../src/app/_services/menus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(_workspaceService, _menusService) {
        this._workspaceService = _workspaceService;
        this._menusService = _menusService;
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    WorkspaceComponent.prototype.ngOnInit = function () {
    };
    /*------------------------------------------- METHODS --------------------------*/
    /*------------------------------------------- EVENTS ---------------------------*/
    WorkspaceComponent.prototype._onWorkareaClicked = function () {
        // this._appService.MenusService.requestContext(this._appService.MenusService.CONTEXT.Workarea);
    };
    WorkspaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workspace',
            template: __webpack_require__("../../../../../src/app/_components/workspace/workspace.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/workspace/workspace.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__["a" /* WorkspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_workspace_service__["a" /* WorkspaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menus_service__["a" /* MenusService */]) === "function" && _b || Object])
    ], WorkspaceComponent);
    return WorkspaceComponent;
    var _a, _b;
}());

//# sourceMappingURL=workspace.component.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/InputManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var InputManager = /** @class */ (function () {
    function InputManager() {
        InputManager._keys = new Array();
        InputManager._registeredKeysDict = new Array();
        InputManager._allowKeyboard = false;
        document.addEventListener("keydown", this._onKeyDown.bind(this));
        document.addEventListener("keyup", this._onKeyUp.bind(this));
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    /**Registers a key combination by a given key value, and will hit the callback whenever the key combination is pressed. */
    InputManager.registerKeys = function (key, keysCombination, callback) {
        //make sure this key isn't already registered
        if (InputManager._registeredKeysDict.some(function (k) { return k.key == key; }))
            return false;
        InputManager._registeredKeysDict.push({ key: key, keys: keysCombination, callback: callback });
        return true;
    };
    /**Unregisters a key combination by its given key name. */
    InputManager.unregisterKeys = function (key) {
        //make sure this key exists
        var index = InputManager._registeredKeysDict.findIndex(function (k) { return k.key == key; });
        if (index == -1)
            return false;
        InputManager._registeredKeysDict.splice(index, 1);
        return true;
    };
    /**Clears the key combination registry. */
    InputManager.clearRegistry = function () {
        InputManager._registeredKeysDict = new Array();
    };
    /**
     * Returns true if an array of keys are currently pressed.
     * @param keys The keys to test.
     */
    InputManager.areKeysPressed = function (keys) {
        //if a key is NOT included in this array, return false || if the length of keys is not the same
        return !(keys.some(function (k) { return !InputManager.Keys.includes(k.toLowerCase()); }) || keys.length != InputManager._keys.length);
    };
    /**Resets the keys array. */
    InputManager.reset = function () {
        InputManager._keys = new Array();
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    InputManager.prototype._onKeyDown = function (e) {
        if (!InputManager.AllowKeyboard)
            return;
        var key = e.key.toLowerCase();
        if (this._lastKey == key)
            return;
        //add key to keys list
        if (!InputManager._keys.includes(key))
            InputManager._keys.push(key);
        InputManager.onKeyPressed.emit(key);
        this._lastKey = key;
        // console.warn("KEYS");
        // console.log(InputManager._keys);
        //test registered keys
        InputManager._registeredKeysDict.forEach(function (k) {
            if (InputManager.areKeysPressed(k.keys))
                k.callback();
        });
    };
    InputManager.prototype._onKeyUp = function (e) {
        var key = e.key.toLowerCase();
        if (InputManager._keys.includes(key))
            InputManager._keys.splice(InputManager._keys.indexOf(key), 1);
        InputManager.onKeyReleased.emit(key);
        if (this._lastKey == key)
            this._lastKey = "";
    };
    Object.defineProperty(InputManager, "Keys", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return InputManager._keys; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager, "IsShiftPressed", {
        get: function () { return InputManager._keys.includes("shift"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager, "AllowKeyboard", {
        get: function () { return InputManager._allowKeyboard; },
        set: function (value) { InputManager._allowKeyboard = value; },
        enumerable: true,
        configurable: true
    });
    InputManager.onKeyPressed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    InputManager.onKeyReleased = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    return InputManager;
}());

//# sourceMappingURL=InputManager.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/LoadManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadManager; });
/* unused harmony export SpriteData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var LoadManager = /** @class */ (function () {
    function LoadManager() {
        this.onLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    LoadManager.prototype.load = function (e) {
        var _this = this;
        var fileInput = e.target;
        if (fileInput.files.length <= 0)
            return;
        var reader = new FileReader();
        reader.onload = function (e) {
            var text = e.target.result;
            //get json
            var json = JSON.parse(text);
            console.log("HERE IS MY JSON");
            console.log(json);
            _this.onLoaded.emit(json);
        };
        reader.readAsText(fileInput.files[0]);
    };
    LoadManager.prototype.fetchFile = function (loc) {
        var _this = this;
        fetch(loc)
            .then(function (blob) { return blob.json(); })
            .then(function (data) {
            console.log("HERE IS MY LOC JSON");
            console.log(data);
            _this.onLoaded.emit(data);
        });
    };
    return LoadManager;
}());

var SpriteData = /** @class */ (function () {
    function SpriteData(data) {
        //events
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.data = data;
        this.defaults = data;
    }
    SpriteData.prototype.callChange = function (property) {
        if (property === void 0) { property = "all"; }
        this.onChange.emit(property);
    };
    Object.defineProperty(SpriteData.prototype, "Name", {
        get: function () { return this.data.name; },
        //properties
        //name
        set: function (value) {
            this.data.name = value;
            this.onChange.emit("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteData.prototype, "X", {
        get: function () { return this.data.x; },
        //x
        set: function (value) {
            this.data.x = value;
            this.onChange.emit("x");
            console.log("CHANGED POSITION: " + this.data.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteData.prototype, "Y", {
        get: function () { return this.data.y; },
        //y
        set: function (value) {
            this.data.y = value;
            this.onChange.emit("y");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteData.prototype, "Width", {
        get: function () { return this.data.width; },
        //width
        set: function (value) {
            this.data.width = value;
            this.onChange.emit("width");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteData.prototype, "Height", {
        get: function () { return this.data.height; },
        //height
        set: function (value) {
            this.data.height = value;
            this.onChange.emit("height");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteData.prototype, "Src", {
        get: function () { return this.data.src; },
        //scale
        // public set Scale(value:number) {
        //     this.data
        // }
        //src
        set: function (value) {
            this.data.src = value;
            this.onChange.emit("src");
        },
        enumerable: true,
        configurable: true
    });
    return SpriteData;
}());

//# sourceMappingURL=LoadManager.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/_behaviours/Behaviour.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDistance;
/**Returns the distance between two points.*/
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
//# sourceMappingURL=Behaviour.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/_behaviours/MarqueeBehaviour.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarqueeBehaviour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var MarqueeBehaviour = /** @class */ (function () {
    function MarqueeBehaviour(workareaElement, marqueeElement) {
        var _this = this;
        //flags
        this._onDragging = false;
        //events
        this._onMouseStartEvent = function (e) { _this._onMarqueeStart(e); };
        this._onMouseMoveEvent = function (e) { _this._onMarqueeDrag(e); };
        this._onMouseEndEvent = function (e) { _this._onMarqueeEnd(e); };
        //emitters
        this.onMarqueeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._workareaElement = workareaElement;
        this._marqueeElement = marqueeElement;
        this._workareaOffset = {
            x: this._workareaElement.offsetLeft,
            y: this._workareaElement.offsetTop
        };
        this._dragRect = { x: 0, y: 0, width: 0, height: 0 };
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    MarqueeBehaviour.prototype.clear = function (deselect) {
        if (deselect === void 0) { deselect = true; }
        this._marqueeElement.style.left = "0px";
        this._marqueeElement.style.top = "0px";
        this._marqueeElement.style.width = "0px";
        this._marqueeElement.style.height = "0px";
        // if(this._sprites != null && deselect) this._sprites.deselectAll();
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    MarqueeBehaviour.prototype._onMarqueeStart = function (e) {
        if (e.button != 0)
            return; //needs to be a left click
        console.log("STARTING DRAG");
        this._onDragging = true;
        this.clear();
        //get offset
        this._dragRect.x = e.clientX - this._workareaOffset.x;
        this._dragRect.y = e.clientY - this._workareaOffset.y;
        this._marqueeElement.style.left = this._dragRect.x + "px";
        this._marqueeElement.style.top = this._dragRect.y + "px";
        //listen to drag and exit events
        this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
    };
    MarqueeBehaviour.prototype._onMarqueeDrag = function (e) {
        //get size of drag
        this._dragRect.width = e.clientX - this._workareaOffset.x;
        this._dragRect.height = e.clientY - this._workareaOffset.y;
        var _a = this._dragRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        console.log("SIZE:", x, y, width, height);
        //control marquee size
        this._marqueeElement.style.width = width - x + "px";
        this._marqueeElement.style.height = height - y + "px";
        //emit change
        this.onMarqueeChange.emit(this._dragRect);
        // //test whether the given sprite is within the bounds
        // this._sprites.Sprites.forEach((spr:SpriteComponent) => {
        //     spr.writeRect();
        //     if(spr.isWithinBounds(x, y, width, height)) {
        //         spr.select();
        //     }
        //     else spr.deselect();
        // });
    };
    MarqueeBehaviour.prototype._onMarqueeEnd = function (e) {
        console.log("DONE");
        this._onDragging = false;
        //emit change
        this.onMarqueeChange.emit(this._dragRect);
        //turn off the marquee
        this.clear(false);
        this._workareaElement.blur();
        this._workareaElement.parentElement.blur();
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
    };
    /*------------------------------------------- OVERRIDES ------------------------*/
    MarqueeBehaviour.prototype.start = function () {
        //listen to click down
        this._workareaElement.addEventListener("mousedown", this._onMouseStartEvent);
    };
    MarqueeBehaviour.prototype.finish = function () {
        //cease listening
        this._workareaElement.removeEventListener("mousedown", this._onMouseStartEvent);
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
        //stop the observers from listening
        this.onMarqueeChange.observers.forEach(function (ob) { return ob.unsubscribe(); });
    };
    return MarqueeBehaviour;
}());

//# sourceMappingURL=MarqueeBehaviour.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/_behaviours/MoveBehaviour.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveBehaviour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var MoveBehaviour = /** @class */ (function () {
    function MoveBehaviour(workareaElement) {
        var _this = this;
        //events
        this._onMouseStartEvent = function (e) { _this._onDragStart(e); };
        this._onMouseMoveEvent = function (e) { _this._onDrag(e); };
        this._onMouseEndEvent = function (e) { _this._onDragEnd(e); };
        //emitters
        this.onStartMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEndMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._workareaElement = workareaElement;
        this._workareaOffset = {
            x: this._workareaElement.offsetLeft,
            y: this._workareaElement.offsetTop
        };
        this._dragPosition = { x: 0, y: 0 };
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    /*------------------------------------------- EVENTS ---------------------------*/
    MoveBehaviour.prototype._onDragStart = function (e) {
        if (e.button != 0)
            return; //needs to be a left click
        console.log("STARTING DRAG");
        //set drag to empty
        this._dragPosition = { x: 0, y: 0 };
        //get offset
        this._dragPosition.x = e.clientX - this._workareaOffset.x;
        this._dragPosition.y = e.clientY - this._workareaOffset.y;
        this._initPosition = { x: this._dragPosition.x, y: this._dragPosition.y };
        //call move start
        this.onStartMove.emit();
        //listen to drag and exit events
        this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
    };
    MoveBehaviour.prototype._onDrag = function (e) {
        //get size of drag
        this._dragPosition.x = (e.clientX - this._workareaOffset.x) - this._initPosition.x;
        this._dragPosition.y = (e.clientY - this._workareaOffset.y) - this._initPosition.y;
        // console.log(this._dragPosition);
        //emit change
        this.onMove.emit(this._dragPosition);
    };
    MoveBehaviour.prototype._onDragEnd = function (e) {
        console.log("DONE");
        //emit change
        // this._onDrag(e);
        this.onEndMove.emit();
        this._workareaElement.blur();
        this._workareaElement.parentElement.blur();
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
    };
    /*------------------------------------------- OVERRIDES ------------------------*/
    MoveBehaviour.prototype.start = function () {
        //listen to click down
        this._workareaElement.addEventListener("mousedown", this._onMouseStartEvent);
    };
    MoveBehaviour.prototype.finish = function () {
        //cease listening
        this._workareaElement.removeEventListener("mousedown", this._onMouseStartEvent);
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
        //stop the observers from listening
        this.onStartMove.observers.forEach(function (ob) { return ob.unsubscribe(); });
        this.onMove.observers.forEach(function (ob) { return ob.unsubscribe(); });
        this.onEndMove.observers.forEach(function (ob) { return ob.unsubscribe(); });
    };
    return MoveBehaviour;
}());

//# sourceMappingURL=MoveBehaviour.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/_behaviours/ScaleBehaviour.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScaleBehaviour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var ScaleBehaviour = /** @class */ (function () {
    function ScaleBehaviour(workareaElement) {
        var _this = this;
        //flags
        this._onDragging = false;
        //events
        this._onMouseStartEvent = function (e) { _this._onMouseDown(e); };
        this._onMouseMoveEvent = function (e) { _this._onMouseMove(e); };
        this._onMouseEndEvent = function (e) { _this._onMouseUp(e); };
        //emitters
        this.onPositionChangeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPositionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._workareaElement = workareaElement;
        this._lastPosition = { x: 0, y: 0 };
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    /*------------------------------------------- EVENTS ---------------------------*/
    ScaleBehaviour.prototype._onMouseDown = function (e) {
        if (e.button != 0)
            return; //needs to be a left click
        console.log("STARTING DRAG");
        this._onDragging = true;
        //get initial position
        this._lastPosition.x = e.clientX;
        this._lastPosition.y = e.clientY;
        this.onPositionChangeStart.emit();
        //listen to drag and exit events
        this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
    };
    ScaleBehaviour.prototype._onMouseMove = function (e) {
        var pos = { x: e.clientX - this._lastPosition.x, y: e.clientY - this._lastPosition.y };
        //emit change
        this.onPositionChange.emit(pos);
        //set the last position
        this._lastPosition = { x: e.clientX, y: e.clientY };
    };
    ScaleBehaviour.prototype._onMouseUp = function (e) {
        this._workareaElement.blur();
        this._workareaElement.parentElement.blur();
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
    };
    /*------------------------------------------- OVERRIDES ------------------------*/
    ScaleBehaviour.prototype.start = function () {
        //listen to click down
        this._workareaElement.addEventListener("mousedown", this._onMouseStartEvent);
    };
    ScaleBehaviour.prototype.finish = function () {
        //cease listening
        this._workareaElement.removeEventListener("mousedown", this._onMouseStartEvent);
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
        //stop the observers from listening
        this.onPositionChange.observers.forEach(function (ob) { return ob.unsubscribe(); });
    };
    return ScaleBehaviour;
}());

//# sourceMappingURL=ScaleBehaviour.js.map

/***/ }),

/***/ "../../../../../src/app/_managers/_behaviours/SelectBehaviour.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBehaviour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Behaviour__ = __webpack_require__("../../../../../src/app/_managers/_behaviours/Behaviour.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");


var SelectBehaviour = /** @class */ (function () {
    function SelectBehaviour(workareaElement) {
        var _this = this;
        //events
        this._onMouseStartEvent = function (e) { _this._onDragStart(e); };
        this._onMouseMoveEvent = function (e) { _this._onDrag(e); };
        this._onMouseEndEvent = function (e) { _this._onDragEnd(e); };
        //emitters
        this.onStartMove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onMove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onEndMove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this._workareaElement = workareaElement;
        this._workareaOffset = {
            x: this._workareaElement.offsetLeft,
            y: this._workareaElement.offsetTop
        };
        this._dragPosition = { x: 0, y: 0 };
    }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    /*------------------------------------------- EVENTS ---------------------------*/
    SelectBehaviour.prototype._onDragStart = function (e) {
        if (e.button != 0)
            return; //needs to be a left click
        console.log("STARTING DRAG");
        //set drag to empty
        this._dragPosition = { x: 0, y: 0 };
        //get offset
        this._dragPosition.x = e.clientX - this._workareaOffset.x;
        this._dragPosition.y = e.clientY - this._workareaOffset.y;
        this._initPosition = { x: this._dragPosition.x, y: this._dragPosition.y };
        //call move start
        this.onStartMove.emit();
        //listen to drag and exit events
        this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
    };
    SelectBehaviour.prototype._onDrag = function (e) {
        var localPosition = {
            x: (e.clientX - this._workareaOffset.x),
            y: (e.clientY - this._workareaOffset.y)
        };
        //get size of drag
        this._dragPosition.x = localPosition.x - this._initPosition.x;
        this._dragPosition.y = localPosition.y - this._initPosition.y;
        // console.log(this._dragPosition);
        //emit a move IF our initial position is x away from our current position
        var dist = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_0__Behaviour__["a" /* getDistance */])(this._initPosition.x, this._initPosition.y, localPosition.x, localPosition.y));
        // console.warn(dist);
        if (dist < SelectBehaviour.REQUIRED_DISTANCE)
            return;
        //emit change
        this.onMove.emit(this._dragPosition);
    };
    SelectBehaviour.prototype._onDragEnd = function (e) {
        console.log("DONE");
        //emit change
        // this._onDrag(e);
        this.onEndMove.emit();
        this._workareaElement.blur();
        this._workareaElement.parentElement.blur();
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
    };
    /*------------------------------------------- OVERRIDES ------------------------*/
    SelectBehaviour.prototype.start = function () {
        //listen to click down
        this._workareaElement.addEventListener("mousedown", this._onMouseStartEvent);
    };
    SelectBehaviour.prototype.finish = function () {
        //cease listening
        this._workareaElement.removeEventListener("mousedown", this._onMouseStartEvent);
        this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
        //stop the observers from listening
        this.onStartMove.observers.forEach(function (ob) { return ob.unsubscribe(); });
        this.onMove.observers.forEach(function (ob) { return ob.unsubscribe(); });
        this.onEndMove.observers.forEach(function (ob) { return ob.unsubscribe(); });
    };
    SelectBehaviour.REQUIRED_DISTANCE = 15;
    return SelectBehaviour;
}());

//# sourceMappingURL=SelectBehaviour.js.map

/***/ }),

/***/ "../../../../../src/app/_services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menus_service__ = __webpack_require__("../../../../../src/app/_services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_service__ = __webpack_require__("../../../../../src/app/_services/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managers_LoadManager__ = __webpack_require__("../../../../../src/app/_managers/LoadManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_service__ = __webpack_require__("../../../../../src/app/_services/tools.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workspace_service__ = __webpack_require__("../../../../../src/app/_services/workspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__ = __webpack_require__("../../../../../src/app/_managers/InputManager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppService = /** @class */ (function () {
    function AppService(_menusService, _statesService, _toolsService, _workspaceService) {
        this._menusService = _menusService;
        this._statesService = _statesService;
        this._toolsService = _toolsService;
        this._workspaceService = _workspaceService;
    }
    AppService_1 = AppService;
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    AppService.prototype.load = function () {
        var _this = this;
        //load services
        this._menusService.load();
        this._statesService.load();
        this._toolsService.load();
        this._workspaceService.load();
        //setup managers
        // this._workspaceManager = new WorkspaceManager(this);
        this._loadManager = new __WEBPACK_IMPORTED_MODULE_3__managers_LoadManager__["a" /* LoadManager */]();
        this._loadManager.fetchFile("/assets/data/projects/example1.sheetr");
        this._statesService.setState(__WEBPACK_IMPORTED_MODULE_2__states_service__["a" /* StatesService */].STATE.Spritesheetr);
        this._menusService.setContext(__WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */].CONTEXT.Workarea);
        //subscribe to events
        this._menusService.onContextChange.subscribe(this._onContextChange.bind(this), function (err) { return console.warn("There was an error changing context. " + err); });
        this._menusService.onQualityChange.subscribe(this._onQualityChange.bind(this), function (err) { return console.warn("Could not change quality! " + err); });
        this._menusService.onScaleChange.subscribe(this._onScaleChange.bind(this), function (err) { return console.warn("Could not change quality! " + err); });
        this._menusService.onDisableShortcuts.subscribe(this._onDisableShortcuts.bind(this));
        this._menusService.onScaleReset.subscribe(this._onScaleReset.bind(this));
        this._toolsService.onToolChanged.subscribe(this._onToolChanged.bind(this), function (err) { return console.log("Could not change tool. " + err); });
        this._workspaceService.onRequestContext.subscribe(this._onRequestContext.bind(this));
        this._workspaceService.onSetContext.subscribe(this._onSetContext.bind(this));
        // this._workspaceManager.onScale.subscribe(this._onScale.bind(this), err => console.warn("Error scaling workarea. " + err));
        // this._workspaceService.onScale.subscribe(this._onScale.bind(this), err => console.warn("Error scaling workarea. " + err));
        this._loadManager.onLoaded.subscribe(this._onLoadedWorkspace.bind(this), function (err) { return console.log("Could not load workspace! " + err); });
        //register all keys used in application
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("new", AppService_1.SHORTCUTS.New, this.new.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("open", AppService_1.SHORTCUTS.Open, this.open.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("save", AppService_1.SHORTCUTS.Save, this.save.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("export", AppService_1.SHORTCUTS.Export, this.export.bind(this));
        console.warn("SETTING KEYS");
        var TOOL = __WEBPACK_IMPORTED_MODULE_4__tools_service__["a" /* ToolsService */].TOOL;
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("select", AppService_1.SHORTCUTS.Select, function () { return _this._toolsService.setTool(TOOL.Select); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("marquee", AppService_1.SHORTCUTS.Marquee, function () { return _this._toolsService.setTool(TOOL.Marquee); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("move", AppService_1.SHORTCUTS.Move, function () { return _this._toolsService.setTool(TOOL.Move); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("scale", AppService_1.SHORTCUTS.Scale, function () { return _this._toolsService.setTool(TOOL.Scale); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("pan", AppService_1.SHORTCUTS.Pan, function () { return _this._toolsService.setTool(TOOL.Pan); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("zoom", AppService_1.SHORTCUTS.Zoom, function () { return _this._toolsService.setTool(TOOL.Zoom); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("delete", AppService_1.SHORTCUTS.Delete, function () { return _this._toolsService.setTool(TOOL.Delete); });
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("undo", AppService_1.SHORTCUTS.Undo, this.undo.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("redo", AppService_1.SHORTCUTS.Redo, this.redo.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("copy", AppService_1.SHORTCUTS.Copy, this.copy.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].registerKeys("paste", AppService_1.SHORTCUTS.Paste, this.paste.bind(this));
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].AllowKeyboard = true;
        //listen for services to load
        this._workspaceService.onLoaded.subscribe(function () {
            //set default tool
            _this._toolsService.setTool(__WEBPACK_IMPORTED_MODULE_4__tools_service__["a" /* ToolsService */].TOOL.Select);
        });
    };
    AppService.prototype.createSprite = function (sprite) {
        this._workspaceService.SpriteData.push(sprite);
    };
    // Calls
    AppService.prototype.new = function () {
        console.log("Create NEW spritesheetr!");
        if (this._workspaceService.SpriteComponents.length > 0) {
            if (confirm("Are you sure you want to clear the workspace?"))
                this._workspaceService.clearWorkarea();
        }
        else
            this._workspaceService.clearWorkarea();
    };
    AppService.prototype.open = function () {
        var _this = this;
        console.log("Open spritesheetr file!");
        this._menusService.MenuBar.OpenDialogElement.click();
        //kill keys
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].reset();
        //listen for change
        var fileChange = function (e) {
            console.log("I HAVE CHANGED!");
            _this._loadManager.load(e);
            //remove event listener
            _this._menusService.MenuBar.OpenDialogElement.removeEventListener("change", fileChange);
            //clear the files
            e.target.value = "";
        };
        //add event listener
        this._menusService.MenuBar.OpenDialogElement.addEventListener("change", fileChange);
    };
    AppService.prototype.save = function () {
        console.log("Save spritesheetr file!");
        this._menusService.MenuDialogs.openDialog("save-dialog");
    };
    AppService.prototype.export = function () {
        console.log("Open export spritesheetr dialog!");
        this._menusService.MenuDialogs.openDialog("export-dialog");
    };
    AppService.prototype.undo = function () {
        console.log("UNDO!");
    };
    AppService.prototype.redo = function () {
        console.log("REDO!");
    };
    AppService.prototype.copy = function () {
        console.log("COPY");
    };
    AppService.prototype.paste = function () {
        console.log("PASTE!");
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    AppService.prototype._onContextChange = function (context) {
        //change the menu
        console.log("I AM CALLED? " + context);
        //activate/deactivate workspace
        if (context != __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */].CONTEXT.Sprite)
            this._workspaceService.deselectAllSprites();
    };
    AppService.prototype._onQualityChange = function (quality) {
        //set quality on sprites
        // this._spritesService.changeQuality(quality);
        this._workspaceService.setQuality(quality);
    };
    AppService.prototype._onToolChanged = function (tool) {
        // AppService._currentTool = tool;
        this._workspaceService.onToolChange(tool);
    };
    AppService.prototype._onRequestContext = function (context) {
        this._menusService.requestContext(context);
        console.log(__WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */].CurrentContext);
    };
    AppService.prototype._onSetContext = function (context) {
        this._menusService.setContext(context);
        console.log(__WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */].CurrentContext);
        console.log("SET ME NOW PLEASE: " + __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */].CurrentContext);
    };
    AppService.prototype._onScaleChange = function (scale) {
        //scale sprites
        this._workspaceService.offsetScale(scale);
    };
    AppService.prototype._onScaleReset = function () {
        this._workspaceService.setScale(1);
    };
    AppService.prototype._onDisableShortcuts = function (disable) {
        __WEBPACK_IMPORTED_MODULE_6__managers_InputManager__["a" /* InputManager */].AllowKeyboard = !disable;
    };
    AppService.prototype._onLoadedWorkspace = function (workspace) {
        this._workspaceService.loadWorkspace(workspace);
        // this._workspaceService.SpriteData = workspace.sprites;
        // console.log("MAKE IT WORK!");
        // this._workspaceService.setTitle(workspace.name);
        // //add the sprites to the sprite manager
        // this._workspaceService.resizeWorkarea(workspace.workWidth, workspace.workHeight);
    };
    Object.defineProperty(AppService, "CurrentTool", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return AppService_1._currentTool; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "MenusService", {
        get: function () { return this._menusService; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "StatesService", {
        get: function () { return this._statesService; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "ToolsService", {
        get: function () { return this._toolsService; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "WorkspaceService", {
        get: function () { return this._workspaceService; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "SpriteData", {
        // public get Workspace():WorkspaceManager { return this._workspaceManager; }
        get: function () { return this._spriteData; },
        enumerable: true,
        configurable: true
    });
    // Handle shortcuts
    AppService.GetShortcut = function (shortcutKeys) {
        var keys = shortcutKeys.slice();
        //rename longer key names
        keys = keys.map(function (key) { return key.toUpperCase().replace("CONTROL", "Ctrl").replace("SHIFT", "Shift"); });
        return keys.join(" + ");
    };
    Object.defineProperty(AppService, "SHORTCUTS", {
        get: function () {
            return Object.freeze({
                "New": ["Shift", "N"],
                "Open": ["Shift", "O"],
                "Save": ["Shift", "S"],
                "Export": ["Shift", "E"],
                "Undo": ["Shift", "Z"],
                "Redo": ["Shift", "Y"],
                "Copy": ["Shift", "C"],
                "Paste": ["Shift", "V"],
                "Select": ["q"],
                "Marquee": ["m"],
                "Move": ["v"],
                "Scale": ["s"],
                "Pan": ["h"],
                "Zoom": ["z"],
                "Delete": ["k"],
                "Select All": ["Shift", "A"],
                "Deselect All": ["Shift", "D"],
            });
        },
        enumerable: true,
        configurable: true
    });
    //for use in templates
    AppService.prototype.getShortcut = function (shortcutKeys) {
        return AppService_1.GetShortcut(shortcutKeys);
    };
    Object.defineProperty(AppService.prototype, "shortcuts", {
        get: function () { return AppService_1.SHORTCUTS; },
        enumerable: true,
        configurable: true
    });
    AppService = AppService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menus_service__["a" /* MenusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__states_service__["a" /* StatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__states_service__["a" /* StatesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__tools_service__["a" /* ToolsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tools_service__["a" /* ToolsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__workspace_service__["a" /* WorkspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__workspace_service__["a" /* WorkspaceService */]) === "function" && _d || Object])
    ], AppService);
    return AppService;
    var AppService_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/menus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__("../../../../../src/app/_services/tools.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenusService = /** @class */ (function () {
    function MenusService(_toolsService) {
        this._toolsService = _toolsService;
        this._canChangeMenuContext = true;
        this.onContextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onQualityChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onScaleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onDisableShortcuts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onScaleReset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MenusService_1 = MenusService;
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    MenusService.prototype.addMenuBar = function (menuBar) {
        this._menuBar = menuBar;
    };
    MenusService.prototype.addMenuProperties = function (menuProps) {
        this._menuProps = menuProps;
    };
    MenusService.prototype.addMenuDialogs = function (menuDialogs) {
        this._menuDialogs = menuDialogs;
    };
    MenusService.prototype.load = function () {
        var _this = this;
        this._requestedContexts = [];
        MenusService_1._currentContext = "";
        document.addEventListener("mouseup", this._onClickFinished.bind(this));
        //listen to other services
        this._toolsService.onToolChanged.subscribe(function (tool) { return _this._onToolChanged(tool); });
    };
    /**Immediately sets the context.  Use CONTEXT. */
    MenusService.prototype.setContext = function (context) {
        MenusService_1._currentContext = context;
    };
    /**Requests context change on mouse up event.  Use CONTEXT. */
    MenusService.prototype.requestContext = function (context) {
        if (!this._canChangeMenuContext)
            return;
        this._requestedContexts.push(context);
        console.log("REQUESTING: " + context);
    };
    MenusService.prototype.requestClear = function () {
        this._requestedContexts = [];
    };
    MenusService.prototype.disableShortcuts = function (disable) {
        this.onDisableShortcuts.emit(disable);
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    MenusService.prototype.onKeyUp = function (e) {
        //listen for enter key, and blur target
        if (e.key == "Enter")
            e.target.blur();
    };
    MenusService.prototype.onNumberEvent = function (e, min, max) {
        //force the value to be between min/max
        if (e.key == "Enter") {
            var val = e.target.value;
            if (parseFloat(val) < min)
                e.target.value = min.toString();
            if (parseFloat(val) > max)
                e.target.value = max.toString();
            this.onKeyUp(e);
        }
    };
    MenusService.prototype._onClickFinished = function () {
        if (this._requestedContexts.length <= 0)
            return;
        console.log("FINISHED CLICK");
        //change the context to the requested context
        //set to the most precedent context
        if (this._requestedContexts.length > 0) {
            var sortedContexts = this._requestedContexts.sort(function (a, b) { return Object.values(MenusService_1.CONTEXT).indexOf(a) > Object.values(MenusService_1.CONTEXT).indexOf(b) ? 1 : -1; });
            console.log(sortedContexts);
            MenusService_1._currentContext = sortedContexts[0];
            this.onContextChange.emit(MenusService_1._currentContext);
        }
        console.log("SET TO: " + MenusService_1._currentContext);
        this._requestedContexts = [];
    };
    MenusService.prototype._onToolChanged = function (tool) {
        var TOOLS = __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */].TOOL;
        //handle viewable requested contexts
        switch (tool) {
            case TOOLS.Select:
                this._canChangeMenuContext = true;
                break;
            case TOOLS.Marquee:
            case TOOLS.Move:
            case TOOLS.Scale:
            case TOOLS.Pan:
            case TOOLS.Zoom:
            case TOOLS.Delete:
                this._canChangeMenuContext = false;
        }
    };
    Object.defineProperty(MenusService, "CONTEXT", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        /**Context constants.  Order by click precedence. */
        get: function () {
            return Object.freeze({
                "Sprite": "sprite",
                "Workarea": "workarea"
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MenusService, "CurrentContext", {
        get: function () { return MenusService_1._currentContext; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenusService.prototype, "MenuBar", {
        get: function () { return this._menuBar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenusService.prototype, "MenuProps", {
        get: function () { return this._menuProps; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenusService.prototype, "MenuDialogs", {
        get: function () { return this._menuDialogs; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenusService.prototype, "CurrentContextTitle", {
        get: function () { return Object.keys(MenusService_1.CONTEXT)[Object.values(MenusService_1.CONTEXT).indexOf(MenusService_1._currentContext)]; },
        enumerable: true,
        configurable: true
    });
    MenusService = MenusService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === "function" && _a || Object])
    ], MenusService);
    return MenusService;
    var MenusService_1, _a;
}());

//# sourceMappingURL=menus.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/states.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatesService = /** @class */ (function () {
    function StatesService() {
    }
    StatesService_1 = StatesService;
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    StatesService.prototype.load = function () {
        StatesService_1._currentState = "";
    };
    StatesService.prototype.setState = function (state) {
        if (StatesService_1._currentState == state)
            return;
        StatesService_1._currentState = state;
    };
    Object.defineProperty(StatesService, "STATE", {
        /*------------------------------------------- EVENTS ---------------------------*/
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () {
            return Object.freeze({
                "Spritesheetr": "spritesheetr",
                "Animatr": "animatr",
                "Clippr": "clippr"
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StatesService, "CurrentState", {
        get: function () { return StatesService_1._currentState; },
        enumerable: true,
        configurable: true
    });
    StatesService = StatesService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StatesService);
    return StatesService;
    var StatesService_1;
}());

//# sourceMappingURL=states.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/tools.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsService = /** @class */ (function () {
    function ToolsService() {
        this.onToolChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ToolsService_1 = ToolsService;
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    ToolsService.prototype.addToolbar = function (toolbar) {
        this._toolbar = toolbar;
    };
    ToolsService.prototype.load = function () {
    };
    ToolsService.prototype.setTool = function (tool) {
        if (ToolsService_1._currentTool == tool)
            return;
        if (this._toolbar == null)
            return;
        if (ToolsService_1._currentTool != "") {
            var toolEl_1 = this._toolbar.Element.querySelector("." + ToolsService_1._currentTool);
            if (toolEl_1 != null)
                toolEl_1.classList.remove("selected");
        }
        //set the tool element class
        var toolEl = this._toolbar.Element.querySelector("." + tool);
        if (toolEl != null)
            toolEl.classList.add("selected");
        ToolsService_1._currentTool = tool;
        console.log("Tool set to : " + tool);
        this.onToolChanged.emit(tool);
    };
    Object.defineProperty(ToolsService, "TOOL", {
        /*------------------------------------------- EVENTS ---------------------------*/
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        /**Tool constants. */
        get: function () {
            return Object.freeze({
                "Select": "select",
                "Marquee": "marquee",
                "Move": "move",
                "Scale": "scale",
                "Delete": "delete",
                "Pan": "pan",
                "Zoom": "zoom"
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ToolsService.prototype, "Toolbar", {
        get: function () { return this._toolbar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolsService, "CurrentTool", {
        get: function () { return ToolsService_1._currentTool; },
        enumerable: true,
        configurable: true
    });
    ToolsService = ToolsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToolsService);
    return ToolsService;
    var ToolsService_1;
}());

//# sourceMappingURL=tools.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/workspace.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__("../../../../../src/app/_services/tools.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menus_service__ = __webpack_require__("../../../../../src/app/_services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managers_InputManager__ = __webpack_require__("../../../../../src/app/_managers/InputManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managers_behaviours_MarqueeBehaviour__ = __webpack_require__("../../../../../src/app/_managers/_behaviours/MarqueeBehaviour.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__managers_behaviours_MoveBehaviour__ = __webpack_require__("../../../../../src/app/_managers/_behaviours/MoveBehaviour.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managers_behaviours_SelectBehaviour__ = __webpack_require__("../../../../../src/app/_managers/_behaviours/SelectBehaviour.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managers_behaviours_ScaleBehaviour__ = __webpack_require__("../../../../../src/app/_managers/_behaviours/ScaleBehaviour.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Controls all Workspace related components and actions.  Emits any data that other services will need to run back up to the AppComponent.
 */
var WorkspaceService = /** @class */ (function () {
    function WorkspaceService() {
        //property attributes
        this.marqueeThreshold = 0.5;
        this.moveIncrement = 1;
        this.snapToSprites = false;
        this.snapThreshold = 10;
        this.keepInBounds = false;
        this.onRequestContext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSetContext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    WorkspaceService_1 = WorkspaceService;
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    WorkspaceService.prototype.load = function () {
        this._quality = "q--pixelated";
        this._scale = 1;
        this._spriteComponents = new Array();
        this._selectedSpriteComponents = new Array();
        this._spriteLoadIndex = 0;
        this._lastMouseX = 0;
        this._lastMouseY = 0;
        this._edgeSprites = { left: null, right: null, top: null, bottom: null };
    };
    WorkspaceService.prototype.loadWorkspace = function (workspace) {
        if (workspace == null)
            return;
        this._title = workspace.title;
        this._workareaComponent.Width = workspace.width;
        this._workareaComponent.Height = workspace.height;
        this._workareaComponent.Transparent = workspace.transparent || false;
        this._workareaComponent.Colour = workspace.bgColour || "#ffffff";
        this._spriteLoadIndex = 0;
        this._spriteComponents = [];
        this._selectedSpriteComponents = []; //temporary, hold sprite names for selection
        this._spriteData = workspace.sprites;
        this._calculateSelectionArea();
    };
    // WORKAREA
    WorkspaceService.prototype.addWorkarea = function (workareaComponent) {
        this._workareaComponent = workareaComponent;
        //setup AFTER workarea is assigned
        //give behaviours their dependants
        this._currentBehaviour = null;
        this._selectBehaviour = new __WEBPACK_IMPORTED_MODULE_6__managers_behaviours_SelectBehaviour__["a" /* SelectBehaviour */](this._workareaComponent.Element);
        this._marqueeBehaviour = new __WEBPACK_IMPORTED_MODULE_4__managers_behaviours_MarqueeBehaviour__["a" /* MarqueeBehaviour */](this._workareaComponent.Element, this._workareaComponent.MarqueeElement);
        this._moveBehaviour = new __WEBPACK_IMPORTED_MODULE_5__managers_behaviours_MoveBehaviour__["a" /* MoveBehaviour */](this._workareaComponent.Element);
        this._scaleBehaviour = new __WEBPACK_IMPORTED_MODULE_7__managers_behaviours_ScaleBehaviour__["a" /* ScaleBehaviour */](this._workareaComponent.Element);
        this.onLoaded.emit();
    };
    WorkspaceService.prototype.setTitle = function (title) {
        this._title = title;
    };
    WorkspaceService.prototype.resizeWorkarea = function (width, height) {
        this._workareaComponent.Width = width;
        this._workareaComponent.Height = height;
    };
    WorkspaceService.prototype.setQuality = function (quality) {
        this._spriteComponents.forEach(function (spr) { return spr.setQuality(quality); });
        this._quality = quality;
    };
    WorkspaceService.prototype.setScale = function (scale) {
        this._scale = scale;
        console.log("SCALE HAS BEEN SET TO: " + this._scale);
        this._workareaComponent.Scale = scale;
    };
    WorkspaceService.prototype.offsetScale = function (scaleMultiplier) {
        this.setScale(this._scale * scaleMultiplier);
    };
    WorkspaceService.prototype.autosizeWorkarea = function () {
        var selection = this._selectedSpriteComponents.slice();
        //temp select all sprites
        this.selectAllSprites();
        //set size
        this._workareaComponent.Width = this._selectionArea.left + this._selectionArea.width;
        this._workareaComponent.Height = this._selectionArea.top + this._selectionArea.height;
        //reset the selection
        this._selectedSpriteComponents = selection;
        this._calculateSelectionArea();
    };
    WorkspaceService.prototype.clearWorkarea = function () {
        this.setTitle("");
        while (this._spriteComponents.length > 0) {
            this.removeSprite(this._spriteComponents[0]);
        }
        this._spriteComponents = [];
        this._spriteData = [];
        this._spriteLoadIndex = 0;
        this._workareaComponent.clear();
    };
    WorkspaceService.prototype.saveWorkspace = function (saveName) {
        //create a json with save data
        var saveData = {
            title: this._title,
            width: this._workareaComponent.Width,
            height: this._workareaComponent.Height,
            bgColour: this._workareaComponent.Colour,
            transparent: this._workareaComponent.Transparent,
            sprites: []
        };
        saveData.sprites = this._spriteComponents.map(function (spr) { return spr.Data; });
        //send data to a save dialog
        var saveDataStream = "data:text/json;charset=utf-8, " + encodeURIComponent(JSON.stringify(saveData));
        var saveDiv = document.createElement("a");
        saveDiv.setAttribute("href", saveDataStream);
        saveDiv.setAttribute("download", saveName + ".sheetr");
        saveDiv.click();
    };
    WorkspaceService.prototype.buildSpritesheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        //setup for build
                        var bgColour = _this._workareaComponent.Colour;
                        var isTransparent = _this._workareaComponent.Transparent;
                        var selection = _this._selectedSpriteComponents.slice();
                        _this._workareaComponent.Element.classList.add("renderable");
                        _this.deselectAllSprites();
                        //remove background
                        if (isTransparent) {
                            _this._workareaComponent.Element.style.background = "transparent";
                            _this._workareaComponent.Element.classList.remove("transparent");
                        }
                        //build the canvas
                        html2canvas(document.querySelector("#workarea"), {
                            backgroundColor: null,
                            allowTaint: true
                        })
                            .then(function (canvas) {
                            // create an image
                            var img = document.createElement("img");
                            img.src = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                            img.alt = "spritesheet preview";
                            // if(!isTransparent) img.style.background = bgColour;
                            //testing
                            // img.style.position = "absolute";
                            // img.style.top = "0px";
                            // document.body.appendChild(img);
                            //reset workarea
                            _this._workareaComponent.Transparent = isTransparent;
                            _this._workareaComponent.Colour = bgColour;
                            _this._workareaComponent.Element.classList.remove("renderable");
                            selection.forEach(function (spr) { return _this.selectSprite(spr); });
                            res(img);
                        });
                    })];
            });
        });
    };
    WorkspaceService.prototype.packSprites = function (algorithm, allowResize, fitToSprites) {
        //deselect all
        this.deselectAllSprites();
        //pack the sprites into the sheet
        //TODO: add algorithm changes
        //try to fit into sheet
        //hold sprites in case we can't do this
        var oldSprites = this._spriteComponents.map(function (spr) {
            var res = { x: spr.X, y: spr.Y };
            return res;
        });
        //pack sprites by weight
        var sprites = this._spriteComponents.sort(function (a, b) { return (a.Width * a.Height) > (b.Width * b.Height) ? -1 : 1; });
        console.warn("SORTED");
        sprites.forEach(function (spr) {
            console.log(spr.Element);
        });
        var _loop_1 = function () {
            if (allowResize) {
                console.warn("I cannot pack! - Growing workspace to accomodate!");
                //grow the workarea
                var largestWorkarea_1 = Math.max(this_1._workareaComponent.Width, this_1._workareaComponent.Height);
                var pow = WorkspaceService_1.ACCEPTED_POWS.filter(function (p) { return p > largestWorkarea_1; })[0];
                console.log("POW: " + pow);
                if (pow == undefined)
                    return "break";
                this_1._workareaComponent.Width = pow;
                this_1._workareaComponent.Height = pow;
            }
            else {
                console.warn("COULD NOT PACK SPRITES!");
                this_1._spriteComponents.forEach(function (spr, i) {
                    spr.X = oldSprites[i].x;
                    spr.Y = oldSprites[i].y;
                });
                return "break";
            }
        };
        var this_1 = this;
        while (!this._packSprites(sprites, algorithm)) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        //now, autosize
        if (fitToSprites)
            this.autosizeWorkarea();
    };
    /**https://stackoverflow.com/questions/35995943/javascript-sort-objects-by-position-left-top */
    WorkspaceService.prototype._favourLeftSort = function (a, b) {
        return a.X == b.X ? a.Y - b.Y : a.X - b.X;
    };
    WorkspaceService.prototype._favourTopSort = function (a, b) {
        return a.Y == b.Y ? a.X - b.X : a.Y - b.Y;
    };
    WorkspaceService.prototype._packSprites = function (sprites, algorithm) {
        var _loop_2 = function (i) {
            var spr = sprites[i];
            //set the top sprite
            if (i == 0) {
                spr.X = 0;
                spr.Y = 0;
                return "continue";
            }
            var foundPlace = false;
            var bestPos = void 0;
            //iterate through past sprites
            // const lastSprites = sprites.filter((sp, ind) => ind < i).sort((a, b) => a.Y > b.Y ? 1 : -1);
            var sortingAlgorithm = this_2._favourTopSort;
            switch (algorithm) {
                case "left":
                    sortingAlgorithm = this_2._favourLeftSort;
                    break;
                case "top":
                    sortingAlgorithm = this_2._favourTopSort;
            }
            var lastSprites = sprites.filter(function (sp, ind) { return ind < i; }).sort(sortingAlgorithm);
            for (var n = 0; n < lastSprites.length; n++) {
                var compSpr = lastSprites[n];
                //test packing
                var tryPack = this_2._tryToPackSprite(spr, compSpr, lastSprites);
                if (tryPack.canPack) {
                    if (bestPos == null) {
                        bestPos = tryPack.coords;
                        var tryPackDist = Math.sqrt(Math.pow(tryPack.coords.x, 2) + Math.pow(tryPack.coords.y, 2));
                    }
                    else {
                        var tryPackDist = Math.sqrt(Math.pow(tryPack.coords.x, 2) + Math.pow(tryPack.coords.y, 2));
                        var bestPosDist = Math.sqrt(Math.pow(bestPos.x, 2) + Math.pow(bestPos.y, 2));
                        if (tryPackDist < bestPosDist)
                            bestPos = tryPack.coords;
                    }
                    foundPlace = true;
                }
            }
            if (!foundPlace)
                return { value: false };
            else {
                //set to best position
                spr.X = bestPos.x;
                spr.Y = bestPos.y;
            }
        };
        var this_2 = this;
        //iterate through sprites
        for (var i = 0; i < sprites.length; i++) {
            var state_2 = _loop_2(i);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return true;
    };
    WorkspaceService.prototype._tryToPackSprite = function (spr, compare, compSprites) {
        var canPackTopRight = true;
        var canPackBottomLeft = true;
        /**The top-right position of the compare sprite. */
        var tRPos = { x: compare.X + compare.Width, y: compare.Y };
        /**The bottom-left position of the compare sprite. */
        var bLPos = { x: compare.X, y: compare.Y + compare.Height };
        //test whether we will stay in bounds if we place next to compare sprite
        if ((tRPos.x + spr.Width) > this._workareaComponent.Width)
            canPackTopRight = false;
        if ((bLPos.y + spr.Height) > this._workareaComponent.Height)
            canPackBottomLeft = false;
        if (canPackTopRight || canPackBottomLeft) {
            //iterate through children and check for overlap
            for (var i = 0; i < compSprites.length; i++) {
                var compSpr = compSprites[i];
                var overlapTR = compSpr.isRectOverlap(tRPos.x, tRPos.y, spr.Width, spr.Height);
                var overlapBL = compSpr.isRectOverlap(bLPos.x, bLPos.y, spr.Width, spr.Height);
                //FIRST, try top right
                if (canPackTopRight && overlapTR) {
                    canPackTopRight = false;
                }
                //NEXT, try bottom left
                if (canPackBottomLeft && overlapBL) {
                    canPackBottomLeft = false;
                }
                //if we cannot pack this sprite, move on
                if (!canPackTopRight && !canPackBottomLeft) {
                    continue;
                }
            }
        }
        var canPackHere = canPackTopRight || canPackBottomLeft;
        var coords = (canPackTopRight) ? tRPos : bLPos;
        //if both are viable, find the shortest distance to origin
        if (canPackTopRight && canPackBottomLeft) {
            var tRDist = Math.sqrt(Math.pow(tRPos.x, 2) + Math.pow(tRPos.y, 2));
            var bLDist = Math.sqrt(Math.pow(bLPos.x, 2) + Math.pow(bLPos.y, 2));
            coords = (tRDist < bLDist) ? tRPos : bLPos;
        }
        return { canPack: canPackHere, coords: coords };
    };
    // SPRITES
    /**
     * Adds a sprite to the service so it can control and listen for events.
     * @param spriteComponent The Sprite Component the workspace will listen to.
     */
    WorkspaceService.prototype.addSprite = function (spriteComponent) {
        this._spriteComponents.unshift(spriteComponent);
        //set the data
        var data = this._spriteData[this._spriteLoadIndex];
        spriteComponent.load(data);
        this._spriteLoadIndex++;
        console.log("ADDED SPRITE");
        console.log(spriteComponent.Data);
        //set to loaded data
        spriteComponent.X = data.x;
        spriteComponent.Y = data.y;
        spriteComponent.Width = data.width;
        spriteComponent.Height = data.height;
        spriteComponent.setSelectable(true);
    };
    /**
     * Removes a sprite from the service and any events related to it.
     * @param spriteComponent The Sprite Component the workspace will remove.
     */
    WorkspaceService.prototype.removeSprite = function (spriteComponent) {
        //remove from components list
        if (this._spriteComponents.includes(spriteComponent))
            this._spriteComponents.splice(this._spriteComponents.indexOf(spriteComponent), 1);
        //remove from selected if there
        if (this._selectedSpriteComponents.includes(spriteComponent))
            this._selectedSpriteComponents.splice(this._selectedSpriteComponents.indexOf(spriteComponent), 1);
        //remove from sprite data
        if (this._spriteData.includes(spriteComponent.Data))
            this._spriteData.splice(this._spriteData.indexOf(spriteComponent.Data), 1);
        //change selection layout
        this._calculateSelectionArea();
    };
    WorkspaceService.prototype.removeCurrentSprite = function () {
        if (this.SelectedSpriteComponent != null)
            this.removeSprite(this.SelectedSpriteComponent);
    };
    /**
     * Selects a sprite component and adds it to the selection array.
     * @param spriteComponent The Sprite Component to select.
     */
    WorkspaceService.prototype.selectSprite = function (spriteComponent) {
        if (!this._selectedSpriteComponents.includes(spriteComponent))
            this._selectedSpriteComponents.unshift(spriteComponent);
        console.log("SELECT");
        spriteComponent.select();
        this._calculateSelectionArea();
    };
    /**
     * Selects a single sprite component and adds it to the selection array.
     * @param spriteComponent The Sprite Component to select.
     */
    WorkspaceService.prototype.selectSingleSprite = function (spriteComponent) {
        this.deselectAllSprites();
        this.onSetContext.emit(__WEBPACK_IMPORTED_MODULE_2__menus_service__["a" /* MenusService */].CONTEXT.Sprite);
        this.selectSprite(spriteComponent);
    };
    /**
     * Removes the sprite component from the selected array.
     * @param spriteComponent The Sprite Component to deselect.
     */
    WorkspaceService.prototype.deselectSprite = function (spriteComponent) {
        if (this._selectedSpriteComponents.includes(spriteComponent))
            this._selectedSpriteComponents.splice(this._selectedSpriteComponents.indexOf(spriteComponent), 1);
        spriteComponent.deselect();
        this._calculateSelectionArea();
    };
    /**
     * Selects all sprite components.
     */
    WorkspaceService.prototype.selectAllSprites = function () {
        for (var i = this._spriteComponents.length - 1; i >= 0; i--)
            this.selectSprite(this._spriteComponents[i]);
    };
    /**
     * Deselects all sprite components.
     */
    WorkspaceService.prototype.deselectAllSprites = function () {
        for (var i = this._selectedSpriteComponents.length - 1; i >= 0; i--)
            this.deselectSprite(this._selectedSpriteComponents[i]);
    };
    WorkspaceService.prototype.enableSprite = function (spriteComponent) {
        spriteComponent.setSelectable(true);
    };
    WorkspaceService.prototype.disableSprite = function (spriteComponent) {
        spriteComponent.setSelectable(false);
    };
    WorkspaceService.prototype.enableAllSprites = function () {
        this._spriteComponents.forEach(function (spr) { return spr.setSelectable(true); });
    };
    WorkspaceService.prototype.disableAllSprites = function () {
        this._spriteComponents.forEach(function (spr) { return spr.setSelectable(false); });
    };
    WorkspaceService.prototype.lockSpriteMovement = function () {
    };
    /*-------- BEHAVIOURS --------*/
    WorkspaceService.prototype.changeBehaviour = function (behaviour) {
        if (behaviour == null)
            return;
        if (this._currentBehaviour == behaviour)
            return;
        if (this._currentBehaviour != null) {
            this._currentBehaviour.finish();
        }
        this._currentBehaviour = behaviour;
        //start new behaviour
        this._currentBehaviour.start();
    };
    /*------------------------------------------- EVENTS ---------------------------*/
    /**
     * An event called when a user clicks on a sprite component.
     * @param spriteComponent The Sprite Component that called the event.
     */
    WorkspaceService.prototype.onSpriteComponentClicked = function (spriteComponent) {
        console.log("CLICKED SPRITE!");
        //handle how behaviours will react to tools
        switch (__WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */].CurrentTool) {
            case __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */].TOOL.Select: {
                var alreadySelected = this._selectedSpriteComponents.includes(spriteComponent);
                //if this sprite is already selected, don't do anything
                // if(alreadySelected) return;
                //check key modifiers
                console.log("IS SHIFT?: " + __WEBPACK_IMPORTED_MODULE_3__managers_InputManager__["a" /* InputManager */].IsShiftPressed);
                if (__WEBPACK_IMPORTED_MODULE_3__managers_InputManager__["a" /* InputManager */].IsShiftPressed) {
                    if (alreadySelected)
                        this.deselectSprite(spriteComponent);
                    else
                        this.selectSprite(spriteComponent);
                }
                else
                    this.selectSingleSprite(spriteComponent);
                break;
            }
        }
        console.log(this._selectedSpriteComponents);
        this.onRequestContext.emit(__WEBPACK_IMPORTED_MODULE_2__menus_service__["a" /* MenusService */].CONTEXT.Sprite);
    };
    WorkspaceService.prototype.onClickWorkarea = function () {
        this.onRequestContext.emit(__WEBPACK_IMPORTED_MODULE_2__menus_service__["a" /* MenusService */].CONTEXT.Workarea);
    };
    WorkspaceService.prototype.onToolChange = function (tool) {
        var _this = this;
        //change behaviour of workspace based on tool
        var newBehaviour = this._currentBehaviour;
        var tools = __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */].TOOL;
        switch (tool) {
            //SELECT
            case tools.Select:
                this.changeBehaviour(this._selectBehaviour);
                this.enableAllSprites();
                //listen to events
                this._selectBehaviour.onStartMove.subscribe(function () { return _this._onMoveStart(); });
                this._selectBehaviour.onMove.subscribe(function (pos) { return _this._onMove(pos); });
                this._selectBehaviour.onEndMove.subscribe(function () { return _this._onMoveEnd(); });
                break;
            //MARQUEE
            case tools.Marquee:
                this.changeBehaviour(this._marqueeBehaviour);
                this.disableAllSprites();
                //listen to events
                this._marqueeBehaviour.onMarqueeChange.subscribe(function (rect) { return _this._onMarqueeChange(rect); });
                break;
            //MOVE
            case tools.Move:
                this.changeBehaviour(this._moveBehaviour);
                this.disableAllSprites();
                //listen to events
                this._moveBehaviour.onStartMove.subscribe(function () { return _this._onMoveStart(); });
                this._moveBehaviour.onMove.subscribe(function (pos) { return _this._onMove(pos); });
                this._moveBehaviour.onEndMove.subscribe(function () { return _this._onMoveEnd(); });
                break;
            //SCALE
            case tools.Scale:
                this.changeBehaviour(this._scaleBehaviour);
                this.disableAllSprites();
                //listen to events
                this._scaleBehaviour.onPositionChangeStart.subscribe(function () { return _this._onScaleChangeStart(); });
                this._scaleBehaviour.onPositionChange.subscribe(function (pos) { return _this._onScaleChange(pos); });
                break;
            case tools.Pan:
            case tools.Zoom:
            case tools.Delete:
                this.changeBehaviour(null);
                this.disableAllSprites();
                break;
        }
    };
    WorkspaceService.prototype._calculateSelectionArea = function () {
        var _this = this;
        if (this._selectedSpriteComponents.length <= 0) {
            this._workareaComponent.useSelectionContainer(0, 0, 0, 0);
            this._selectionArea = { left: 0, width: 0, top: 0, height: 0 };
            return;
        }
        if (this._selectedSpriteComponents.length == 1) {
            var sel_1 = this._selectedSpriteComponents[0];
            this._selectionArea = { left: sel_1.X, width: sel_1.Width, top: sel_1.Y, height: sel_1.Height };
            this._workareaComponent.useSelectionContainer(this._selectionArea.left, this._selectionArea.top, this._selectionArea.width, this._selectionArea.height);
            return;
        }
        var sel = this._selectedSpriteComponents[0];
        this._selectionArea = { left: sel.X, width: sel.Width, top: sel.Y, height: sel.Height };
        this._selectedSpriteComponents.forEach(function (spr) {
            //left/right
            _this._selectionArea.left = Math.min(spr.X, _this._selectionArea.left);
            _this._selectionArea.width = Math.max(spr.X + spr.Width, _this._selectionArea.width);
            //top/bottom
            _this._selectionArea.top = Math.min(spr.Y, _this._selectionArea.top);
            _this._selectionArea.height = Math.max(spr.Y + spr.Height, _this._selectionArea.height);
        });
        this._selectionArea.width -= this._selectionArea.left;
        this._selectionArea.height -= this._selectionArea.top;
        this._workareaComponent.useSelectionContainer(this._selectionArea.left, this._selectionArea.top, this._selectionArea.width, this._selectionArea.height);
    };
    // MARQUEE
    WorkspaceService.prototype._onMarqueeChange = function (rect) {
        var _this = this;
        //result is a rect
        var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
        // //test whether the given sprite is within the bounds
        this._spriteComponents.forEach(function (spr) {
            // spr.writeRect();
            if (spr.isWithinBounds(x, y, width, height, _this.marqueeThreshold)) {
                _this.selectSprite(spr);
            }
            else {
                //check key modifiers
                _this.deselectSprite(spr);
            }
        });
    };
    WorkspaceService.prototype._onMoveStart = function () {
        var _this = this;
        console.log("MOVING");
        this._lastMouseX = this._workareaComponent.MousePosition.x;
        this._lastMouseY = this._workareaComponent.MousePosition.y;
        this._selectionAreaStart = { x: this._selectionArea.left, y: this._selectionArea.top };
        this._selectedSpriteComponents.forEach(function (spr) {
            spr.setOffset(spr.X - _this._selectionArea.left, spr.Y - _this._selectionArea.top);
        });
    };
    WorkspaceService.prototype._onMove = function (pos) {
        var _this = this;
        var x = pos.x, y = pos.y;
        //set move to closest increment || INCREMENTS
        x = (this.moveIncrement >= 2) ? Math.ceil(x / this.moveIncrement) * this.moveIncrement : x;
        y = (this.moveIncrement >= 2) ? Math.ceil(y / this.moveIncrement) * this.moveIncrement : y;
        // console.log(x, y);
        this._selectionArea.left = Math.max(this._selectionAreaStart.x + x, 0);
        this._selectionArea.top = Math.max(this._selectionAreaStart.y + y, 0);
        if (this.keepInBounds) {
            if (this._selectionAreaStart.x + x + this._selectionArea.width > this._workareaComponent.Width)
                this._selectionArea.left = this._workareaComponent.Width - this._selectionArea.width;
            if (this._selectionAreaStart.y + y + this._selectionArea.height > this._workareaComponent.Height)
                this._selectionArea.top = this._workareaComponent.Height - this._selectionArea.height;
        }
        //if we snap, try it now
        this._tryToSnapSelection(this._workareaComponent.MousePosition.x - this._lastMouseX, this._workareaComponent.MousePosition.y - this._lastMouseY);
        // if(this._selectionArea.left + this._selectionArea.width + x > this._workareaComponent.Width) this._selectionArea.left = this._workareaComponent.Width - this._selectionArea.width;
        // if(this._selectionArea.top + this._selectionArea.height + x > this._workareaComponent.Height) this._selectionArea.top = this._workareaComponent.Height - this._selectionArea.height;
        var sel = this._selectionArea;
        this._workareaComponent.useSelectionContainer(sel.left, sel.top, sel.width, sel.height);
        this._selectedSpriteComponents.forEach(function (spr) {
            spr.X = _this._selectionArea.left;
            spr.Y = _this._selectionArea.top;
            // spr.moveWithOffset(this._selectionArea.left + x, this._selectionArea.top + y);
        });
        this._lastMouseX = this._workareaComponent.MousePosition.x;
        this._lastMouseY = this._workareaComponent.MousePosition.y;
    };
    WorkspaceService.prototype._onMoveEnd = function () {
        this._selectedSpriteComponents.forEach(function (spr) { return spr.clearOffset(); });
    };
    WorkspaceService.prototype._keepInWorkareaBounds = function (desiredX, desiredY, useAllSides) {
        var _this = this;
        if (useAllSides === void 0) { useAllSides = false; }
        this._selectedSpriteComponents.forEach(function (spr) {
            var visibleX = _this._edgeSprites.left.computeX(desiredX);
            var visibleRight = _this._edgeSprites.right.computeX(desiredX, 1000);
            spr.moveX(visibleX);
            var visibleY = _this._edgeSprites.top.computeY(desiredY);
            var visibleBottom = _this._edgeSprites.bottom.computeY(desiredY, 700);
            spr.moveY(visibleY);
            // console.log({
            //   x: visibleX,
            //   y:visibleY,
            //   right:visibleRight,
            //   bottom:visibleBottom
            // });
        });
    };
    WorkspaceService.prototype._tryToSnapSelection = function (xVel, yVel) {
        var _this = this;
        if (!this.snapToSprites)
            return;
        //get sprites that are NOT selected to snap to
        var staticSprites = this._spriteComponents.filter(function (spr) { return !_this._selectedSpriteComponents.includes(spr); });
        if (staticSprites.length <= 0)
            return;
        //get the snap direction
        //LEFT RIGHT
        // if(xVel < 0) {
        if (true) {
            //try to snap left side to right edge of other components
            var left = this._selectionArea.left;
            var rightEdges = staticSprites.map(function (spr) { return spr.X + spr.Width; });
            var closestEdgeIndex = this._getClosestElementIndex(left, rightEdges);
            if (Math.abs(rightEdges[closestEdgeIndex] - left) < this.snapThreshold) {
                this._selectionArea.left = rightEdges[closestEdgeIndex];
            }
            //try to snap left side to left edge of other components
            var leftEdges = staticSprites.map(function (spr) { return spr.X; });
            closestEdgeIndex = this._getClosestElementIndex(left, leftEdges);
            if (Math.abs(leftEdges[closestEdgeIndex] - left) < this.snapThreshold)
                this._selectionArea.left = leftEdges[closestEdgeIndex];
        }
        // if(xVel > 0) {
        if (true) {
            //try to snap right side to right edge of other components
            var right = this._selectionArea.left + this._selectionArea.width;
            var rightEdges = staticSprites.map(function (spr) { return spr.X + spr.Width; });
            var closestEdgeIndex = this._getClosestElementIndex(right, rightEdges);
            if (Math.abs(rightEdges[closestEdgeIndex] - right) < this.snapThreshold) {
                this._selectionArea.left = rightEdges[closestEdgeIndex] - this._selectionArea.width;
            }
            //try to snap right side to left edge of other components
            var leftEdges = staticSprites.map(function (spr) { return spr.X; });
            closestEdgeIndex = this._getClosestElementIndex(right, leftEdges);
            if (Math.abs(leftEdges[closestEdgeIndex] - right) < this.snapThreshold)
                this._selectionArea.left = leftEdges[closestEdgeIndex] - this._selectionArea.width;
        }
        //UP DOWN
        // if(yVel < 0) {
        if (true) {
            //try to snap top side to top edge of other components
            var top = this._selectionArea.top;
            var topEdges = staticSprites.map(function (spr) { return spr.Y; });
            var closestEdgeIndex = this._getClosestElementIndex(top, topEdges);
            if (Math.abs(topEdges[closestEdgeIndex] - top) < this.snapThreshold) {
                this._selectionArea.top = topEdges[closestEdgeIndex];
            }
            //try to snap top side to bottom edge of other components
            var bottomEdges = staticSprites.map(function (spr) { return spr.Y + spr.Height; });
            closestEdgeIndex = this._getClosestElementIndex(top, bottomEdges);
            if (Math.abs(bottomEdges[closestEdgeIndex] - top) < this.snapThreshold)
                this._selectionArea.top = bottomEdges[closestEdgeIndex];
        }
        // if(yVel > 0) {
        if (true) {
            //try to snap bottom side to top edge of other components
            var top = this._selectionArea.top + this._selectionArea.height;
            var topEdges = staticSprites.map(function (spr) { return spr.Y; });
            var closestEdgeIndex = this._getClosestElementIndex(top, topEdges);
            if (Math.abs(topEdges[closestEdgeIndex] - top) < this.snapThreshold) {
                this._selectionArea.top = topEdges[closestEdgeIndex] - this._selectionArea.height;
            }
            //try to snap bottom side to bottom edge of other components
            var bottomEdges = staticSprites.map(function (spr) { return spr.Y + spr.Height; });
            closestEdgeIndex = this._getClosestElementIndex(top, bottomEdges);
            if (Math.abs(bottomEdges[closestEdgeIndex] - top) < this.snapThreshold)
                this._selectionArea.top = bottomEdges[closestEdgeIndex] - this._selectionArea.height;
        }
    };
    WorkspaceService.prototype._getClosestElementIndex = function (value, arr) {
        var res = 0;
        arr.forEach(function (a, i) {
            if (Math.abs(value - a) < Math.abs(value - arr[res]))
                res = i;
        });
        return res;
    };
    WorkspaceService.prototype._onScaleChangeStart = function () {
        this._spriteComponents.forEach(function (spr) { return spr.freezePosition(); });
    };
    WorkspaceService.prototype._onScaleChange = function (pos) {
        console.log(pos);
        //scale with the x position
        //also make it waaaaay smaller increments
        var x = pos.x * 0.1;
        //to test, do this to all sprites
        this._spriteComponents.forEach(function (spr) { return spr.scaleGlobally(spr.Scale + x); });
    };
    //property events
    WorkspaceService.prototype.onSelectAll = function () {
        var _this = this;
        this._spriteComponents.forEach(function (spr) { return _this.selectSprite(spr); });
    };
    WorkspaceService.prototype.onDeselectAll = function () {
        var _this = this;
        this._spriteComponents.forEach(function (spr) { return _this.deselectSprite(spr); });
    };
    Object.defineProperty(WorkspaceService.prototype, "WorkareaComponent", {
        /*------------------------------------------- OVERRIDES ------------------------*/
        /*------------------------------------------- GETTERS & SETTERS ----------------*/
        get: function () { return this._workareaComponent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "Title", {
        get: function () { return this._title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "Quality", {
        get: function () { return this._quality; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "Scale", {
        get: function () { return this._scale; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "SpriteData", {
        get: function () { return this._spriteData; },
        set: function (spriteData) { this._spriteData = spriteData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "SpriteComponents", {
        get: function () { return this._spriteComponents; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "SelectedSpriteComponents", {
        get: function () { return this._selectedSpriteComponents; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "SelectedSpriteComponent", {
        get: function () { return this._selectedSpriteComponents.length == 1 ? this._selectedSpriteComponents[0] : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "SelectedRect", {
        get: function () {
            return { x: this._edgeSprites.left.X,
                y: this._edgeSprites.top.Y,
                width: this._edgeSprites.right.X + this._edgeSprites.right.Width - this._edgeSprites.left.X,
                height: this._edgeSprites.bottom.Y + this._edgeSprites.bottom.Height - this._edgeSprites.top.Y
            };
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceService.ACCEPTED_POWS = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];
    WorkspaceService = WorkspaceService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WorkspaceService);
    return WorkspaceService;
    var WorkspaceService_1;
}());

//# sourceMappingURL=workspace.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spritesheetr\">\r\n  <app-menu-bar></app-menu-bar>\r\n  <app-workspace></app-workspace>\r\n</div>\r\n\r\n<app-menu-dialogs></app-menu-dialogs>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand);", ""]);

// module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.q--auto {\n  image-rendering: auto;\n  -ms-interpolation-mode: bicubic; }\n\n.q--crisp-edges {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--pixelated {\n  image-rendering: optimizeSpeed;\n  /* Legal fallback */\n  image-rendering: -moz-crisp-edges;\n  /* Firefox        */\n  image-rendering: -o-crisp-edges;\n  /* Opera          */\n  image-rendering: -webkit-optimize-contrast;\n  /* Safari         */\n  image-rendering: optimize-contrast;\n  /* CSS3 Proposed  */\n  image-rendering: crisp-edges;\n  /* CSS4 Proposed  */\n  image-rendering: pixelated;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE8+           */ }\n\n.q--optimize-quality {\n  image-rendering: optimizeQuality;\n  /* Legal fallback */\n  image-rendering: -moz-optimizeQuality;\n  /* Firefox        */\n  image-rendering: -o-optimizeQuality;\n  /* Opera          */\n  image-rendering: -webkit-optimize-quality;\n  /* Safari         */\n  image-rendering: optimizeQuality;\n  /* CSS4 Proposed  */\n  -ms-interpolation-mode: bicubic;\n  /* IE8+           */ }\n\n.spritesheetr {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  max-height: 100vh; }\n\napp-menu-bar {\n  z-index: 80; }\n\napp-workspace {\n  -ms-flex: 1;\n      flex: 1;\n  max-width: 100vw;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/_services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_InputManager__ = __webpack_require__("../../../../../src/app/_managers/InputManager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_appService) {
        this._appService = _appService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        //load manager
        new __WEBPACK_IMPORTED_MODULE_2__managers_InputManager__["a" /* InputManager */](); //static
        //load service
        this._appService.load();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menus_menu_bar_menu_bar_component__ = __webpack_require__("../../../../../src/app/_components/_menus/menu-bar/menu-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menus_menu_properties_menu_properties_component__ = __webpack_require__("../../../../../src/app/_components/_menus/menu-properties/menu-properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_workspace_workspace_component__ = __webpack_require__("../../../../../src/app/_components/workspace/workspace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ui_toggle_button_toggle_button_component__ = __webpack_require__("../../../../../src/app/_components/_ui/toggle-button/toggle-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menus_menu_toolbar_menu_toolbar_component__ = __webpack_require__("../../../../../src/app/_components/_menus/menu-toolbar/menu-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_workarea_workarea_component__ = __webpack_require__("../../../../../src/app/_components/workarea/workarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sprite_sprite_component__ = __webpack_require__("../../../../../src/app/_components/sprite/sprite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_menus_service__ = __webpack_require__("../../../../../src/app/_services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_states_service__ = __webpack_require__("../../../../../src/app/_services/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_app_service__ = __webpack_require__("../../../../../src/app/_services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ui_list_list_item_list_item_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ui_list_list_group_list_group_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/list-group/list-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ui_list_toggle_list_group_toggle_list_group_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list/toggle-list-group/toggle-list-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ui_list_property_list_property_item_list_property_item_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-item/list-property-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ui_list_property_list_property_group_list_property_group_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list-property/list-property-group/list-property-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ui_list_property_toggle_list_property_group_toggle_list_property_group_component__ = __webpack_require__("../../../../../src/app/_components/_ui/_list-property/toggle-list-property-group/toggle-list-property-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_tools_service__ = __webpack_require__("../../../../../src/app/_services/tools.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_workspace_service__ = __webpack_require__("../../../../../src/app/_services/workspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_menus_menu_dialogs_menu_dialogs_component__ = __webpack_require__("../../../../../src/app/_components/_menus/menu-dialogs/menu-dialogs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_ui_list_list_item_list_item_component__["a" /* ListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_menus_menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_menus_menu_properties_menu_properties_component__["a" /* MenuPropertiesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_workspace_workspace_component__["a" /* WorkspaceComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_ui_toggle_button_toggle_button_component__["a" /* ToggleButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_ui_list_list_group_list_group_component__["a" /* ListGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_ui_list_toggle_list_group_toggle_list_group_component__["a" /* ToggleListGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_menus_menu_toolbar_menu_toolbar_component__["a" /* MenuToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_workarea_workarea_component__["a" /* WorkareaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sprite_sprite_component__["a" /* SpriteComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_ui_list_property_list_property_item_list_property_item_component__["a" /* ListPropertyItemComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_ui_list_property_list_property_group_list_property_group_component__["a" /* ListPropertyGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_ui_list_property_toggle_list_property_group_toggle_list_property_group_component__["a" /* ToggleListPropertyGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_menus_menu_dialogs_menu_dialogs_component__["a" /* MenuDialogsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_11__services_menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_12__services_states_service__["a" /* StatesService */], __WEBPACK_IMPORTED_MODULE_20__services_tools_service__["a" /* ToolsService */], __WEBPACK_IMPORTED_MODULE_21__services_workspace_service__["a" /* WorkspaceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map