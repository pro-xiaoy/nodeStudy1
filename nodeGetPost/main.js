var http = require('http');
var url = require('url');
var util = require('util');


/**
 * 获取GET请求内容,浏览器请求绝对是get
 * 获取 URL 的参数，通过:我们可以使用 url.parse 方法来解析 URL 中的参数
 */
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'});
    
//     var params = url.parse(req.url,true).query;
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();
// }).listen(8888);
// 浏览器窗口输入http://localhost:8888/user?name=xiaoy&url=123123

/**
 * 获取 POST 请求内容
 * POST 请求的内容全部的都在请求体中，
 * http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
 * 比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，
 * 所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
 */

var http = require('http');
var querystring = require('querystring');
var postHTML= 
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>'+
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer(function(req,res){
    var body = '';
    req.on('data',function(chunk){
        body += chunk;
    });
    req.on('end',function(){
        // 解析参数
        body = querystring.parse(body);
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf8'});
        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    })
}).listen(8888);
/**
 * 很经典的例子。基本是可以OK的
 */