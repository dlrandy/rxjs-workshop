"use strict";
/**
 * Created by Administrator on 2016/11/9.
 */
var Observable_1 = require('rxjs/Observable');
// import fetch from 'whatwg-fetch' fetch is not a module
// http://stackoverflow.com/questions/39280012/cannot-find-name-symbol-in-whatwg-fetch-type-declaration-file
require('whatwg-fetch');
require('rxjs/Rx'); //不加这个提示没有 of类型
// import * as fs from 'fs'  not working on browser
// https://github.com/Microsoft/TypeScript/issues/9725
Observable_1.Observable.of('foo', 'bar')
    .subscribe(function (x) { return console.log(x); });
Observable_1.Observable.from([1, 2, 3])
    .subscribe(function (x) { return console.log(x); });
Observable_1.Observable.fromEvent(document.querySelector('button'), 'click')
    .subscribe(function (x) { return console.log(x); });
Observable_1.Observable.fromPromise(fetch('//api.github.com/repos/octocat/Hello-World'))
    .subscribe(function (x) { return console.log(x); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'convert-to-observable';
