/**
 * Created by Administrator on 2016/11/9.
 */
import {Observable} from 'rxjs/Observable'
import {Subject} from "rxjs";
import * as Rx from "rxjs/Rx"
//外部产生新事件
var myObservable = new Rx.Subject()
myObservable.subscribe(value => console.log(value))
myObservable.next('foo')
//内部产生新事件
var myObservable2 = Rx.Observable.create(observer => {
    observer.next('foo2')
    setTimeout(() => observer.next("bar2"),1000)
})
myObservable2.subscribe(value => console.log(value))












export default 'create-observables'
