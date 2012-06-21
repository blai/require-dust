(function() {
	var app, express;

	express = require('express');

	app = express.createServer();

	app.configure(function() {
		app.use(express.methodOverride());
		app.use(express.bodyParser());
		app.use(app.router);
		return app.use(express["static"]("" + __dirname + "/../"));
	});

	app.listen(3000);

	console.log('server started at port 3000');

}).call(this);
