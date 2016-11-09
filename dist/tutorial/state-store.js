"use strict";
var Observable_1 = require("rxjs/Observable");
/**
 * Created by Administrator on 2016/11/9.
 */
require('rxjs/Rx');
var increaseButton = document.querySelector('#increase');
var increase = Observable_1.Observable.fromEvent(increaseButton, 'click')
    .map(function () { return function (state) { return Object.assign({}, state, { count: state.count + 1 }); }; });
// var state = increase.scan((state, changeFn) => changeFn(state), {count: 0})
var decreaseButton = document.querySelector('#decrease');
var decrease = Observable_1.Observable.fromEvent(decreaseButton, 'click')
    .map(function () { return function (state) { return Object.assign({}, state, { count: state.count - 1 }); }; });
var inputElement = document.querySelector('#input');
var input = Observable_1.Observable.fromEvent(inputElement, 'keyup')
    .map(function (event) { return function (state) { return Object.assign({}, state, { inputValue: event.target.value }); }; });
var stateObservable = Observable_1.Observable.merge(increase, decrease, input).scan(function (state, changeFn) { return changeFn(state); }, {
    count: 0,
    inputValue: ''
});
var prevState = {
    inputValue: '',
    count: 0
};
stateObservable.subscribe(function (state) {
    if (state.count !== prevState.count) {
        document.querySelector('#count').innerHTML = state.count + '';
    }
    if (state.inputValue !== prevState.inputValue) {
        document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    }
    prevState = state;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'state-store';
