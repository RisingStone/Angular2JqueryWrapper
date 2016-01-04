System.register(["angular2/core", 'angular2/core'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, core_3;
    var JquilarSliderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
            }],
        execute: function() {
            // Annotation section
            JquilarSliderComponent = (function () {
                function JquilarSliderComponent(elementRef) {
                    this.domElement = elementRef.nativeElement;
                    this.stop = new core_1.EventEmitter();
                    this.val = undefined;
                    this.slider = undefined;
                }
                JquilarSliderComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    var slidey = this.domElement.querySelectorAll('.slidey');
                    $(slidey).slider();
                    this.slider = slidey;
                    var curVal = this.val ? this.val : 0;
                    $(slidey).slider('value', curVal);
                    $(slidey).slider({
                        stop: function (event, ui) {
                            _this.stop.next(ui.value);
                        }
                    });
                };
                JquilarSliderComponent.prototype.ngOnChanges = function (changes) {
                    console.log('ngOnChanges-------------------');
                    if (changes['val']) {
                        if (this.slider) {
                            $(this.slider).slider('value', changes['val'].currentValue);
                        }
                        else {
                            this.val = changes['val'].currentValue;
                        }
                    }
                };
                JquilarSliderComponent = __decorate([
                    core_1.Component({
                        selector: 'jquilar-slider',
                        inputs: ['val'],
                        events: ['stop'],
                        template: '<div><div class="slidey"></div></div>'
                    }),
                    __param(0, core_3.Inject(core_2.ElementRef)), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], JquilarSliderComponent);
                return JquilarSliderComponent;
            })();
            exports_1("JquilarSliderComponent", JquilarSliderComponent);
        }
    }
});
//# sourceMappingURL=slider.js.map