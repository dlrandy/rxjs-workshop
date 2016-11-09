"use strict";
var Rx = require("rxjs/Rx");
//外部产生新事件
var myObservable = new Rx.Subject();
myObservable.subscribe(function (value) { return console.log(value); });
myObservable.next('foo');
//内部产生新事件
var myObservable2 = Rx.Observable.create(function (observer) {
    observer.next('foo2');
    setTimeout(function () { return observer.next("bar2"); }, 1000);
});
myObservable2.subscribe(function (value) { return console.log(value); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'create-observables';
