"use strict";
require('rxjs/add/observable/interval');
// Observable.interval(200)
// .subscribe(x => console.log(x))
// import convert2Observable from './tutorial/convert-to-observable'
// console.log(convert2Observable)不使用的话 module不会加载哦
// import createObservable from './tutorial/create-observable'
// console.log(createObservable)
// import control_the_flow from './tutorial/control-the-flow'
// console.log(control_the_flow)
// import produce_value from './tutorial/produce-value'
// console.log(produce_value)
// import createApplication from './tutorial/create-application'
// console.log(createApplication)
var state_store_1 = require('./tutorial/state-store');
console.log(state_store_1.default);
