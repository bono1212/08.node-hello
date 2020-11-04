"use strict";

/* *********전역 설정*********** */
var express = require("express");

var app = express();

var path = require('path');
/* *********server 구동*********** */


app.listen(3000, function () {
  console.log("=====================");
  console.log("Server Start!");
  console.log("---------------------");
  console.log("http://127.0.0.1:3000");
  console.log("=====================");
});
/* *********설정*********** */

app.set('view engine', 'pug');
app.set('veiws', './views');
app.locals.pretty = true;
/* *********라우터*********** */

app.use('/', express["static"](path.join(__dirname, './public')));
app.get('/sample', function (req, res) {
  res.render('sample');
});