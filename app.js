var express = require('express');
var compression = require('compression');
var mailer = require('express-mailer');
var bodyParser = require('body-parser');
var app = express();


mailer.extend(app, {
  from: 'contato@jonataseduardo.com',
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 465,
  transportMethod: 'SMTP',
  auth: {
    user: 'sitejonataseduardo@gmail.com',
    pass: process.env.GMAIL_PASS
  }
});

app.use(compression());
app.use(express.static('public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');


app.get('/', function(req, res) {
    res.render('pages/index');
});

app.post('/enviar-email', function (req, res, next) {
  app.mailer.send('email', {
    to: 'jottaeblog@gmail.com',
    subject: 'Lead: ' + req.body.email,
    leadEmail: req.body.email
  }, function (err) {
    if (err) {
      console.log(err);
      res.json({ success: false });
    }
    res.json({ success: true });
  });
});

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('Running app at http://localhost');
});
