var express = require('express');
var compression = require('compression');
var mailer = require('express-mailer');
var bodyParser = require('body-parser');
var Mailchimp = require('mailchimp-api-v3')
var app = express();

// mailer.extend(app, {
//   from: 'contato@jonataseduardo.com',
//   host: 'smtp.gmail.com',
//   secureConnection: true,
//   port: 465,
//   transportMethod: 'SMTP',
//   auth: {
//     user: 'sitejonataseduardo@gmail.com',
//     pass: process.env.GMAIL_PASS
//   }
// });

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
  var mailchimp = new Mailchimp('0552fc68b2dcb3637c6f11d1dd38bb89-us6');

  mailchimp.post('/lists/9f4f619225/members', {
    'email_address': req.body.email,
    'status': 'subscribed'
  }, function (error, response){
    if (error) {
      console.log(error);
    } else {
      console.log(response.body);
      res.json({success: true})
    }
  })
});

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('Running app at http://localhost');
});
