// promise 本意 承诺 三个状态 成功态 失败态 等待态
// 默认是等待态 等待态可以变成  成功态/失败态
// 成功就不能失败 也不能 从失败变成成功
// 在低版本浏览器 不支持的 es6-promise
// executor是立即执行的
// 每个promise实例都有一个then方法,参数是成功和失败，成功会有成功的值 失败
//  同一个promise可以多次then
// Promise是一个类
// new Promise时 会传递一个执行器
//1.实现基本的promise
let Promise  = require('./Promise')
let promise = new Promise((resolve, reject) => {
    reject('买');
});
promise.then((data) => {
  console.log('data', data);
}, (err) => {
  console.log('err', err);
});
promise.then((data) => {
  console.log('data', data);
}, (err) => {
  console.log('err', err);
});
