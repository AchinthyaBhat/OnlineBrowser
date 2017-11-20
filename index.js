var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
   res.send('Hello World');
});

app.all('/test', function(req, res){
    res.sendFile( __dirname + "/" + "public/index.htm" );
})

var server = app.listen(23333, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})