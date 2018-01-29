// 输出全局变量 __filename 的值 它将输出文件所在位置的绝对路径
// console.log('file',__filename);
// __dirname 表示当前执行脚本所在的目录。
// console.log('dir',__dirname);

// setTimeout() 只执行一次指定函数
// function cons(){
//     console.log('hello World');
// }
// setTimeout(cons, 200);

// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数
// function cons(){
//     console.log('hello World');
// }
// setInterval(cons, 200);


// console的一些用法
// console.info("程序开始执行：");
// var counter = 10;
// console.log("计数: %d", counter);
// console.time("获取数据");
// //
// // 执行一些代码
// // 
// console.timeEnd('获取数据'); //获取数据: 0.063ms
// console.info("程序执行完毕。")


// process用法

// 输出当前目录
// console.log('当前目录: ' + process.cwd());

// // 输出当前版本
// console.log('当前版本: ' + process.version);

// // 输出内存使用情况
// console.log(process.memoryUsage());
