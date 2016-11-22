/**
 * Created by Administrator on 2016/11/21.
 */
import * as Rx from 'rxjs/Rx'
import 'rxjs/observable/interval'
import 'jquery'



// var source = ['4','5','2','sd','3','er']
// var result = source.map(x => parseInt(x))
//     .filter(x => !isNaN(x))
//     .reduce((x, y) => x + y)
// console.log(result)

// rxjs  intro
// 4
// 5
// 4undefined
// var source = Rx.Observable.interval(400).take(6)
//     .map(i => ['4','5','2','sd','3','er'][i]);
// var result = source.map(x => parseInt(x))
//     .filter(x => !isNaN(x))
//     .reduce((x, y) => x+ y)
//
// result.subscribe(x => console.log(x))


// Reactive programming why?
// allows you to specify the dynamic behavior of a value completely
// at the time of declaration

// var a = 3
// var b = 10 * a
// console.log(b)//30
// ==a = 4
// ==console.log(b)//30
// a = 4
// b=11
// ==console.log(b)//44
// var streamA = Rx.Observable.of(3)
//因为这里的a的动态行为是由3-4，所以在声明的时候，就可以指明这个行为，
//而不是streamA.set(4)这种
// var streamA = Rx.Observable.of(3, 4)
// var streamB = streamA.map(x => x * 10)
// streamB.subscribe(x => console.log(x))


// var button = document.querySelector('button')
//
// var div = document.querySelector('#hello')
//
// var clickStream = Rx.Observable.fromEvent(button, 'click')
//
// var filterClickStream = clickStream.bufferTime(1000)
//     .map(arr => arr.length)
//
// var doubleClickStream = filterClickStream.filter(len => len >= 2)
// doubleClickStream.subscribe(event => {
//     div.innerHTML = 'double click'
//     console.log('dbclick')
// })
// var oneClickStream = filterClickStream.filter(len => len ==1)
// oneClickStream.throttleTime(1000)
//     .subscribe(suggestion =>{
//         div.innerHTML = '---'
//         console.log('click')
//     })

// var requestStream = Rx.Observable.of('http://api.github.com/users')
// requestStream.subscribe(requestUrl => {
//     jQuery.getJSON(requestUrl)
//         .done(response => {
//             console.log(response)
//         })
// })

// requestStream.subscribe(requestUrl => {
//     var responseStream = Rx.Observable.fromPromise(jQuery.get(requestUrl));
//         responseStream.subscribe(response => {
//             console.log(response)
//         })
// })

// var responseStream = requestStream.map(requestUrl =>
//     Rx.Observable.fromPromise(jQuery.getJSON(requestUrl).promise()));
//
// responseStream.subscribe(response => {
//     console.log(response)//promise
// })

// var responseStream = requestStream.flatMap(requestUrl =>
//     Rx.Observable.fromPromise(jQuery.getJSON(requestUrl).promise()));

    // responseStream.subscribe(response => {
    //     console.log(response)//result
    // })


var requestStream = Rx.Observable.of('http://api.github.com/users')
var refreshClickStream = Rx.Observable.fromEvent(document.querySelector('.refresh'),'click')
var refershStream = refreshClickStream.map(
    ev => 'http://api.github.com/users?since='+Math.floor(Math.random()*500))

// refreshClickStream.subscribe()
var responseStream = requestStream.merge(refershStream).flatMap(requestUrl =>
    Rx.Observable.fromPromise(<any>jQuery.getJSON(requestUrl).promise()));
function createSuggestion(responseStream) {
    return responseStream.map(
        listUser => listUser[Math.floor(Math.random()*listUser.length)]
    )
    .startWith(null)
        .merge(refershStream.map((ev) => null))
}
var suggestionStream1 = createSuggestion(responseStream)
var suggestionStream2 = createSuggestion(responseStream)
var suggestionStream3 = createSuggestion(responseStream)

function renderSuggestion(userData, selector){
    var targetElement = document.querySelector(selector)
    if (userData == null){
        targetElement.style.visibility = 'hidden'
    }else {
        targetElement.style.visibility = 'visible'
        var element = document.querySelector(selector)
        var img = element.querySelector('img')
        img.src = userData.avatar_url
        var a = <HTMLAnchorElement>(element.querySelector('.username'))
        a.href=userData.html_url
        a.textContent = userData.login
    }

}

suggestionStream1.subscribe(x=>renderSuggestion(x, '.suggestion1'))
suggestionStream2.subscribe(x=>renderSuggestion(x, '.suggestion2'))
suggestionStream3.subscribe(x=>renderSuggestion(x, '.suggestion3'))




























export default 'rxjs  intro'


