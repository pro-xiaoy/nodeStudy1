var util = require('util');

/**
 * util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
 * JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。
 * 
 */
// function Base(){
//     this.name = "base";
//     this.base = 1994;
//     this.sayhello = function(){
//         console.log('hello',this.name);
//     };
// };
// Base.prototype.showName = function(){
//     console.log('name',this.name);
// }
// function Sub(){
//     this.name = 'sub';
// }
// util.inherits(Sub,Base);   //prototype
// var objBase = new Base();
// objBase.showName();
// objBase.sayhello();
// console.log('1',objBase);
// var objSub = new Sub();
// objSub.showName();
// console.log('2',objSub);


/**
 * util.inspect
 * util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，
 * 通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
 */
// function Person(){
//     this.name = "xiaoy";
//     this.toString = function(){
//         return this.name;
//     };
// };
// var obj = new Person();
// console.log('1',util.inspect(obj));
// console.log('2',util.inspect(obj,true));




