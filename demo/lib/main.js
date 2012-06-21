require.config({
	paths: {
		rdust: '../../require-dust',
		dust: 'dust-full-0.6.0'
	}
});

define(['dust', 'rdust!template/test'], function(dust, template) {
	var data = {
		"root": "Subject",
		"person": {
			"name": "Larry",
			"age": 45
		}
	};
	dust.render('template/test', data, function(err, out) {
		console.info(out);
		document.getElementById('content').innerHTML = out;
	})
});
