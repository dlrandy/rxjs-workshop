"use strict";
/**
 * Created by Administrator on 2016/11/28.
 */
var Rx = require('rxjs/Rx');
require('rxjs/observable/timer');
// const startButton = document.querySelector('#start');
// const startStream = Rx.Observable.fromEvent(startButton, 'click')
// const intervalStream = Rx.Observable.interval(1000)
// const startIntervalStream = startStream
//     // .switchMap(($event) => intervalStream)
//     .switchMapTo( intervalStream)
//
//     startIntervalStream
//         .subscribe((event) => console.log(event))
var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');
var resetButton = document.querySelector('#reset');
var startStream = Rx.Observable.fromEvent(startButton, 'click');
var resetStream = Rx.Observable.fromEvent(resetButton, 'click');
var intervalStream = Rx.Observable.interval(1000);
// const startIntervalStream = startStream
// // .switchMap(($event) => intervalStream)
//     .switchMapTo( intervalStream)
// startIntervalStream
//     .subscribe((event) => console.log(event))
// const subscribtion = intervalStream.subscribe((x)=>console.log(x))
//
// Rx.Observable.fromEvent(stopButton, 'click').subscribe(()=>{
//     subscribtion.unsubscribe()
// })
var stopStream = Rx.Observable.fromEvent(stopButton, 'click');
var stopIntervalStream = intervalStream.takeUntil(stopStream);
var data = { count: 0 };
var inc = function (acc) {
    return { count: acc.count + 1 };
};
var reset = function () { return data; };
var startIntervalStream = startStream
    .switchMapTo(Rx.Observable.merge(stopIntervalStream.mapTo(inc), resetStream.mapTo(reset)))
    .startWith(data)
    .scan(function (acc, curr) {
    return curr(acc);
} /*, {count: 1}*/);
startIntervalStream.subscribe(function (x) { return console.log(x); });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'stepbystep10';
