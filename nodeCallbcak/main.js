// Node.js 异步编程的直接体现就是回调。

// 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

// 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

//阻塞代码实例
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data,data.toString());
// console.log("程序执行结束!");

//非阻塞代码实例
// var fs = require('fs');
// fs.readFile('input.txt',function(err,data){
//     if(err) return console.error('err',err);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");