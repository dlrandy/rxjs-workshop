es6-shim的.d.ts文件加symbol的类型定义


git reset HEAD~1
HEAD^
https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
RP关注的是定义业务逻辑的事件的相互关系

不要把stream放到subscription里
最好就是需要复用的Observable，单独成stream；

start-a-stream-with-switchMap
Maps each value to an Observable, then flattens all of these inner Observables using switch.
switchMap就是把原Observable合并转换成其他的Observable，只发射来自
最新映射的Observable的值

stoping-a-stream-with-takeUntil


updating data with scan--gather data

display initial data with startWith


changing behavior with mapTo

handling mutiple streams with merge
