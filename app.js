System.register(["angular2/platform/browser", "angular2/core", './slider.js'], function(exports_1) {
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
    var browser_1, core_1, slider_js_1;
    var JQUIlar;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slider_js_1_1) {
                slider_js_1 = slider_js_1_1;
            }],
        execute: function() {
            JQUIlar = (function () {
                function JQUIlar(_ngZone) {
                    var _this = this;
                    this._ngZone = _ngZone;
                    this.val = 33;
                    setTimeout(function () {
                        _this.val = 66;
                    }, 2000);
                }
                JQUIlar.prototype.sliderStopped = function (newVal) {
                    var _this = this;
                    this._ngZone.run(function () {
                        _this.val = newVal;
                    });
                };
                JQUIlar = __decorate([
                    core_1.Component({
                        selector: 'jquilar',
                    }),
                    core_1.View({
                        template: "\n    <jquilar-slider [val]=\"val\" (stop)=\"sliderStopped($event)\"></jquilar-slider><br/>\n    <jquilar-slider [val]=\"val\" (stop)=\"sliderStopped($event)\"></jquilar-slider>\n    <span>{{val}}</span>\n  ",
                        directives: [slider_js_1.JquilarSliderComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], JQUIlar);
                return JQUIlar;
            })();
            browser_1.bootstrap(JQUIlar);
        }
    }
});
//# sourceMappingURL=app.js.map