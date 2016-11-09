/**
 * Created by Administrator on 2016/11/9.
 */
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

var button = document.querySelector('button')
Observable.fromEvent(button, 'click')
    .scan((count:number) => count + 1, 0)
    .subscribe((count:number)=> document.querySelector('#count').innerHTML = count+'')


export default 'create-application'
