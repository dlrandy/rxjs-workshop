"use strict";
// import {Observable} from "rxjs";
/**
 * Created by Administrator on 2016/11/9.
 */
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var input = Observable_1.Observable.fromEvent(document.querySelector('input'), 'keypress');
// input.map((event:any) => event.target.value)
//     .subscribe(value => console.log(value))
// input.pluck('target', 'value')
//     .subscribe(value => console.log(value))
//
// input.pluck('target','value').pairwise()
//     .subscribe(value => console.log(value))
// input.pluck('target', 'value').distinct()
//     .subscribe(value => console.log(value))
input.pluck('target', 'value').distinctUntilChanged()
    .subscribe(function (value) { return console.log(value); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'produce-value';
