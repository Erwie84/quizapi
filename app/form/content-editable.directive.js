"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var ContenteditableModel = (function () {
    function ContenteditableModel(elRef) {
        this.elRef = elRef;
        this.update = new core_2.EventEmitter();
    }
    ContenteditableModel.prototype.ngOnChanges = function () {
        this.lastViewModel = this.model;
        this.refreshView();
    };
    ContenteditableModel.prototype.onBlur = function () {
        var value = this.elRef.nativeElement.innerText;
        this.lastViewModel = value;
        this.update.emit(value);
    };
    ContenteditableModel.prototype.refreshView = function () {
        this.elRef.nativeElement.innerText = this.model;
    };
    __decorate([
        core_1.Input('ceModel'), 
        __metadata('design:type', Object)
    ], ContenteditableModel.prototype, "model", void 0);
    __decorate([
        core_1.Output('ceUpdate'), 
        __metadata('design:type', Object)
    ], ContenteditableModel.prototype, "update", void 0);
    __decorate([
        core_1.HostListener('blur'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ContenteditableModel.prototype, "onBlur", null);
    ContenteditableModel = __decorate([
        core_1.Directive({
            selector: '[ceModel]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ContenteditableModel);
    return ContenteditableModel;
}());
exports.ContenteditableModel = ContenteditableModel;
//# sourceMappingURL=content-editable.directive.js.map