var express = require('express');
var app = express();

// 主页输入'hello World'
app.get('/',function(req,res){
    console.log('GET');
    res.send('Hello Git');
});

// POST
app.post('/',function(){
    console.log('主页POST');
    res.send('Hello World');
});

// /del_user 页面响应
app.get('/del_user',function(req,res){
    console.log('/del_user 响应dele请求');
    res.send('删除页面');
});

// /list_user页面响应
app.get('/list_user',function(req,res){
    console.log('list_user 页面响应');
    res.send('用户登陆页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
 })
  
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
 })  