var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/branding', function(req, res) {
    res.render('pages/branding');
});

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('Running app at http://localhost');
});
