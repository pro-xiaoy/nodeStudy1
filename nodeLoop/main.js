// Node.js 事件循环
// Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。

// Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。

// Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

// Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

// 事件驱动程序
// NODE 使用的是事件驱动，当web server接收到请求的时候，把他关闭进行下一个web请求，，，当处理完成的时候，他又会回到处理的队列中然后返回给用户
// 这种模式开发特别高效和扩展性很高，因为web server如果一直在被请求而不等待任何读写操作。
// 在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数

// Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，


// 引入events事件
var events = require('events');
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('链接成功..');
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
}
// 绑定connection事件处理程序
eventEmitter.on('connection' , connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
 });   
// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
