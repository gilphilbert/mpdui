var express = require('express')
var ws = require('./ws')

var app = express()

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/index.html');
//})o
app.use(express.static('public'))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})