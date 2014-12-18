var express = require('express'),
    app = express(),
    PORT = 3000,
    localip;

//configure Express
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});

app.get('/', function(req, res) {
  res.render('index', { localip : localip });
});

app.post('/locate', function(req, res) {
  localip = req.param('local_ip');
});