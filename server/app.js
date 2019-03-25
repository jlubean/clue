'use strict';

var fs = require('fs'),
	express = require('express'),
	bodyParser = require('body-parser');


// Local variables
var server,
	app = express(),
	env = app.get('env'),
	port = process.env.PORT || 8081;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(setupStatic());

app.get(/\/(?!(css|fonts|js|favicon.ico)).*/, function (req, res) {
	var content = fs.readFileSync(__dirname + '/index.html', 'utf8');
	res.set('Content-Type', 'text/html');
	res.set('Cache-Control', 'no-cache');
	res.send(content);
});

server = app.listen(port, function () {
	console.log('Vue Clue Card - demo server -- Enviroment: %s', env); // eslint-disable-line no-console
	console.log('Vue Clue Card - demo server -- Web Port: %s', port); // eslint-disable-line no-console
	app.port = server.address()
		.port;
});

function setupStatic() {
	var statics = express.static(__dirname);

	return function (req, res, next) {
		if (/^\/(css\/.+|fonts\/.+|js\/.+|favicon.ico)$/.test(req.path)) {
			return statics(req, res, next);
		} else {
			return next();
		}
	};
}
