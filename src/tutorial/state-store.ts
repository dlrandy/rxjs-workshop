import {Observable} from "rxjs/Observable"
/**
 * Created by Administrator on 2016/11/9.
 */
import 'rxjs/Rx'
var increaseButton = document.querySelector('#increase')
var increase = Observable.fromEvent(increaseButton, 'click')
    .map(() => state => Object.assign({}, state, {count: state.count + 1}))


// var state = increase.scan((state, changeFn) => changeFn(state), {count: 0})

var decreaseButton = document.querySelector('#decrease')
var decrease = Observable.fromEvent(decreaseButton, 'click')
    .map(() => state => Object.assign({}, state, {count: state.count - 1}))

var inputElement = document.querySelector('#input');
var input = Observable.fromEvent(inputElement, 'keyup')
    .map((event:any) => state => Object.assign({}, state, {inputValue: event.target.value}));

var stateObservable = Observable.merge(
    increase,
    decrease,
    input
).scan((state, changeFn) => changeFn(state), {
    count: 0,
    inputValue: ''
} )

var prevState = {
    inputValue:'',
    count: 0
}
stateObservable.subscribe((state) => {
    if (state.count !== prevState.count) {
        document.querySelector('#count').innerHTML = state.count+''
    }
    if(state.inputValue !== prevState.inputValue) {
        document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    }
    prevState = state;
})


















export default 'state-store'
