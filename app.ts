import {bootstrap} from "angular2/platform/browser";
import {Component, View, EventEmitter, NgZone} from "angular2/core";
import { NgFor } from "angular2/common";
import { OnChanges, SimpleChange, OnInit, AfterContentInit, AfterViewInit, OnDestroy, ElementRef } from 'angular2/core';
import {Inject} from 'angular2/core';
import { JquilarSliderComponent } from './slider.js';

@Component({
  selector: 'jquilar',
})

@View({
  template: `
    <jquilar-slider [val]="val" (stop)="sliderStopped($event)"></jquilar-slider><br/>
    <jquilar-slider [val]="val" (stop)="sliderStopped($event)"></jquilar-slider>
    <span>{{val}}</span>
  `,
  directives: [JquilarSliderComponent]
})

class JQUIlar {
  val: number;
  constructor(private _ngZone: NgZone) {
    this.val = 33;
    setTimeout(() => {
      this.val = 66;
    }, 2000);
  }

  sliderStopped(newVal) {
    this._ngZone.run(() => {
      this.val = newVal;
    });
  }

}

bootstrap(JQUIlar);
