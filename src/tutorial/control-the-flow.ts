/**
 * Created by Administrator on 2016/11/9.
 */
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
//当前js文件不引入rxjs/Rx的话会报下面的错误
// system.js:7 Uncaught (in promise) Error: (SystemJS) Observable_1.Observable.fromEvent is not a function(…)
var input = Observable.fromEvent(document.querySelector('input'), 'keypress')

//: Property 'value' does not exist on type 'EventTarget'.
//这里事件写错了会报这个错误event=>evennt.target

// Property 'target' does not exist on type '{}'.
// input.filter(event => event.target.value.length > 2）

//注释掉测试throttle
input.filter((event:any)=> (event.target.value.length > 2))
    .subscribe(event => console.log(event.target.value))
input.delay(200)
    .subscribe(event => console.log(event))

//comment for test
input.throttleTime(500)
    .subscribe(event => console.log(event))

input.debounceTime(500)
    .subscribe(event => console.log(event))

input.take(5)
    .subscribe(event => console.log(event))


var stopStream = Observable.fromEvent(document.querySelector('button'), 'click')
input.takeUntil(stopStream)
    .subscribe(value => console.log(value))

export default 'control-the-flow';






















