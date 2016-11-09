// import {Observable} from "rxjs";
/**
 * Created by Administrator on 2016/11/9.
 */
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
var input = Observable.fromEvent(document.querySelector('input'), 'keypress')

// input.map((event:any) => event.target.value)
//     .subscribe(value => console.log(value))

// input.pluck('target', 'value')
//     .subscribe(value => console.log(value))
//

// input.pluck('target','value').pairwise()
//     .subscribe(value => console.log(value))

// input.pluck('target', 'value').distinct()
//     .subscribe(value => console.log(value))

input.pluck('target', 'value').distinctUntilChanged()
    .subscribe(value => console.log(value))


























export default 'produce-value'
