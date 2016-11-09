/**
 * Created by Administrator on 2016/11/9.
 */
import {Observable} from 'rxjs/Observable'
// import fetch from 'whatwg-fetch' fetch is not a module
// http://stackoverflow.com/questions/39280012/cannot-find-name-symbol-in-whatwg-fetch-type-declaration-file
import  'whatwg-fetch'
import 'rxjs/Rx'//不加这个提示没有 of类型
// import * as fs from 'fs'  not working on browser
// https://github.com/Microsoft/TypeScript/issues/9725
Observable.of('foo', 'bar')
    .subscribe(x=>console.log(x))
Observable.from([1,2,3])
    .subscribe(x => console.log(x))
Observable.fromEvent(document.querySelector('button'), 'click')
    .subscribe(x => console.log(x))

Observable.fromPromise(fetch('//api.github.com/repos/octocat/Hello-World'))
    .subscribe(x=>console.log(x));

// var exists = Observable.bindCallback(fs.exists);
// exists("file.txt").subscribe(exists => console.log('Does file exist?',exists))
//
// var rename = Observable.bindNodeCallback(fs.rename);
// rename('file.txt', 'else.txt').subscribe((x)=>console.log(x))














































export  default 'convert-to-observable'
