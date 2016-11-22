/**
 * Created by Administrator on 2016/11/15.
 */
import * as Rx from 'rxjs/Rx'
import 'rxjs/observable/timer'
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {Subject} from "rxjs";

var button = document.querySelector('button')
// button.addEventListener('click', () => console.log('clicked!'))
// Rx.Observable.fromEvent(button, 'click')
//     .subscribe(() => console.log('clikeddddddddd'))

//not pure function
// var count = 0
// var button = document.querySelector('button')
// button.addEventListener('click', () => console.log(`clicked ${++count} times` ))

//pure function
// Rx.Observable.fromEvent(button, 'click')
//     .scan(count => count + 1, 0)
//     .subscribe(count=>console.log(`Cliedk ${count}`))

//flow
// var count = 0
// var rate = 1000
// var lastClick = Date.now() - rate
// button.addEventListener('click', () => {
//     if (Date.now() - lastClick >= rate) {
//         console.log(`Clicked ${++count} times`)
//         lastClick = Date.now()
//     }
// })
//
// Rx.Observable.fromEvent(button, 'click')
//     .throttleTime(1000)
//     .scan((count:number) => count + 1, 0)
//     .subscribe(count => console.log(`Clicked ${count}`))


//values

// var count = 0
// var rate = 1000
// var lastClick = Date.now() - rate
// button.addEventListener('click', (event) => {
//     if (Date.now() - lastClick >= rate) {
//         console.log(++count + event.clientX)
//         lastClick = Date.now()
//     }
// })

// Rx.Observable.fromEvent(button, 'click')
//     .throttleTime(1000)
//     .map((event:MouseEvent) => event.clientX)
//     .scan((count, clientX) => count + clientX, 0)
//     .subscribe(count => console.log(count))


// var observable = Rx.Observable.create(function (observer) {
//     observer.next(1)
//     observer.next(2)
//     observer.next(3)
//     setTimeout(() => {
//         observer.next(4)
//         observer.complete()
//     }, 1000)
//
// })
// console.log('just before subscribe');
// observable.subscribe({
//     next: x => console.log('got value ' + x),
//     error: err => console.error('something wrong occurred: ' + err),
//     complete: () => console.log('done'),
// })
//
// console.log('just after subscribe');


// function foo() {
//     console.log('hello')
//     return 42
// }
//
// var x = foo.call()//foo()
// console.log(x)
//
// var y = foo.call() //foo()
// console.log(y)

// var foo = Rx.Observable.create(function (observer) {
//     console.log('hello')
//     observer.next(32)
// })
// foo.subscribe(function (x) {
//     console.log(x)
// })
// foo.subscribe(function (y) {
//     console.log(y)
// })

//
// var observable = Rx.Observable.create(function subscribe(observer) {
//     var id = setInterval(()=>{
//         observer.next('hi')
//         observer.next(1)
//         observer.next(2)
//         observer.next(3)
//         observer.complete()
//     }, 1000)
// })
//
//
// observable.subscribe(x => console.log(x))
//

// var observable = Rx.Observable.from([1,2,3])
// var wsubscription = observable.subscribe(x => console.log(x))
//
// subscribeOn.unsubscribe()


// var observable = Rx.Observable.create(function subscribe (observer) {
//     var intervalId = setInterval(()=>{
//         observer.next('hik')
//     }, 1000)
//
//     return function unsubscribe() {
//         clearInterval(intervalId)
//     }
// })


// var observable1 = Rx.Observable.interval(400)
// var observable2 = Rx.Observable.interval(700)
//
// var subscription= observable1.subscribe(x=>console.log('first: '+x))
// var childSubscription= observable2.subscribe(y=>console.log('second: '+y))
//
// subscription.add(childSubscription)
// setTimeout(()=>{
//     subscription.unsubscribe()
// }, 3000)


// var subject = new Rx.Subject()
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
// subject.subscribe({
//     next: (v) => console.log('observerB: '+ v)
// })
//
// // subject.next(1)
// // subject.next(2)
//
//
// var observable = Rx.Observable.from([1,2,3])
// observable.subscribe(subject)

// var source = Rx.Observable.from([1,2,3])
// var subject = new Rx.Subject()
// var multicasted = source.multicast(subject)
//
// multicasted.subscribe({
//     next: (v) => console.log('ObserverA: ' + v)
// })
// multicasted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// })
//
// var subscription = multicasted.connect()
// subscription.unsubscribe()
//

// var source = Rx.Observable.interval(500)
// var subject = new Rx.Subject()
// var multicaseted = source.multicast(subject)
// var subscription1, subscription2, subscriptionConnect
// subscription1 = multicaseted.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
// console.log('=========')
// subscriptionConnect = multicaseted.connect()
// setTimeout(() => {
//     subscription2 = multicaseted.subscribe({
//         next: (v) => console.log('observerB: ' + v)
//     })
// }, 600)
//
// setTimeout(() => {
//     subscription1.unsubscribe()
// },1200)
//
// setTimeout(() => {
//     subscription2.unsubscribe()
//     subscriptionConnect.unsubscribe()
// }, 2000)


// var source = Rx.Observable.interval(500)
// var subject = new Rx.Subject()
// var refCounted = source.multicast(subject).refCount()
// var subscription1, subscription2, subscriptionConnect
// subscription1 = refCounted.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
// console.log('=========')
// // subscriptionConnect = refCounted.connect()
// setTimeout(() => {
//     subscription2 = refCounted.subscribe({
//         next: (v) => console.log('observerB: ' + v)
//     })
// }, 600)
//
// setTimeout(() => {
//     console.log('observerA unsubscribed')
//     subscription1.unsubscribe()
// },1200)
//
// setTimeout(() => {
//     console.log('observerB unsubscribed');
//     subscription2.unsubscribe()
//     // subscriptionConnect.unsubscribe()
// }, 2000)

// var subject = new Rx.BehaviorSubject(0)
//
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
//
// subject.next(1)
// subject.next(2)
//
// subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// })
//
// subject.next(3)

// var subject = new Rx.ReplaySubject(3)
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
//
// subject.next(1)
// subject.next(2)
// subject.next(3)
// subject.next(4)
//
// subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// })
//
// subject.next(5)
//

// var subject = new Rx.ReplaySubject(100, 500)
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
// var i = 1
// setInterval(() => subject.next(i++), 200)
//
// setTimeout(() => {
//     subject.subscribe({
//         next: (v) => console.log('observerB: ' + v)
//     })
// }, 1000)
//


// var subject = new Rx.AsyncSubject()
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// })
//
//
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
//
// subject.subscribe({
//     next: (v) => console.log('ObserverfB : ' + v)
// })
// subject.next(5)
// subject.complete()


// function multiplyByTen(input) {
//     var output = Rx.Observable.create(function subscribe(observer) {
//
//
//         input.subscribe({
//             next: (v) => {observer.next(10 * v);throw new Error('XXX')},
//             error: (err) => observer.error(err),
//             complete: () => observer.complete()
//         })
//     })
//     return output
// }
//
// var input = Rx.Observable.from([1,2,3,4])
// var output = multiplyByTen(input)
// var a = output.subscribe(x => console.log(x))
// console.log(a)
// Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
//     var input = this
//     return Rx.Observable.create(function subscibe(observer){
//         input.subscribe({
//             next: (v) => observer.next(10 * v),
//             error: (err) => observer.error(err),
//             complete: () => observer.complete()
//         })
//     })
// }
// //http://stackoverflow.com/questions/30494708/how-can-i-create-a-class-that-extends-rx-observable-in-typescript
// var observable = Rx.Observable.from([1,2,3,4]).multiplyByTen()
// observable.subscribe(x => console.log(x))
//

// var observable1 = Rx.Observable.interval(1000)
// var observable2 = Rx.Observable.interval(400)
//
// var merged = Rx.Observable.merge(observable1, observable2)
//
//
//
//
// var observable = Rx.Observable.create(function (observer) {
//     observer.next(1)
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
// }).observeOn(Rx.Scheduler.async)
//
//
// console.log('just before subscribe');
// observable.subscribe({
//     next: x => console.log('got value ' + x),
//     error: err => console.error('something wrong occurred: ' + err),
//     complete: () => console.log('done'),
// });
// console.log('just after subscribe');
//


var observable = Rx.Observable.create(function (proxyObserver) {
    proxyObserver.next(1);
    proxyObserver.next(2);
    proxyObserver.next(3);
    proxyObserver.complete();
}).observeOn(Rx.Scheduler.async)

var finalObserver = {
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
}

console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');


































export default 'some-examples'
