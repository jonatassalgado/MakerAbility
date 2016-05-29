var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/views/index.html');
});

app.get('/branding', function(req, res) {
    res.sendFile(__dirname + '/app/views/branding.html');
});

var server = app.listen(process.env.PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
