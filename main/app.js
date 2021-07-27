//express 기본 모듈 불러오기
var express = require('express'), http = require('http');

var app = express(); //익스프레스 객체 생성.

app.set('port',process.env.PORT || 3000);

http.createServer(app).listen(app.get('port') , function(){
    console.log('익스프레스 서버를 시작 : ' + app.get('port'));
});