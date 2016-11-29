/**
 * Created by Administrator on 2016/11/28.
 */
import * as Rx from 'rxjs/Rx'
import 'rxjs/observable/timer'
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {Subject} from "rxjs";
import {startWith} from "rxjs/operator/startWith";


// const startButton = document.querySelector('#start');
// const startStream = Rx.Observable.fromEvent(startButton, 'click')
// const intervalStream = Rx.Observable.interval(1000)
// const startIntervalStream = startStream
//     // .switchMap(($event) => intervalStream)
//     .switchMapTo( intervalStream)
//
//     startIntervalStream
//         .subscribe((event) => console.log(event))



const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const startStream = Rx.Observable.fromEvent(startButton, 'click')
const resetStream = Rx.Observable.fromEvent(resetButton, 'click')
const intervalStream = Rx.Observable.interval(1000)
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

const stopStream = Rx.Observable.fromEvent(stopButton, 'click')
const stopIntervalStream = intervalStream.takeUntil(stopStream)

const data = {count:0}
const inc = (acc) => {
    return {count: acc.count + 1}
}

const reset = ()=>data
const startIntervalStream = startStream
// .switchMap(($event) => intervalStream)
    .switchMapTo(Rx.Observable.merge( stopIntervalStream.mapTo(inc),
        resetStream.mapTo(reset)))
    .startWith(<any>data)
    .scan( (acc, curr) =>{
        return curr(acc)
    }/*, {count: 1}*/)

startIntervalStream.subscribe((x)=>console.log(x))














export default 'stepbystep10'

