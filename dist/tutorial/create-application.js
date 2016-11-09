"use strict";
/**
 * Created by Administrator on 2016/11/9.
 */
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var button = document.querySelector('button');
Observable_1.Observable.fromEvent(button, 'click')
    .scan(function (count) { return count + 1; }, 0)
    .subscribe(function (count) { return document.querySelector('#count').innerHTML = count + ''; });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'create-application';
