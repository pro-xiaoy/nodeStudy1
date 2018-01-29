var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", function(req, res) {
  fs.readFile(__dirname + "/" + "user.json", "utf8", function(err, data) {
    //添加用户
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    //
    console.log(data);
    res.send(data);
  });
});
var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

// 添加用户
var user = {
  user4: {
    name: "xiaoy",
    password: "password4",
    profession: "code",
    id: 4
  }
};
