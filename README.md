# [RequireJs](http://requirejs.org/) plugin for [Dust.js](http://akdubya.github.com/dustjs/) #

## Features ##
- works the same way as [require-cs](https://github.com/jrburke/require-cs)
- pre-compile as part of requirejs optimization
- exclude plugin logic once optimized (using requirejs "stubModules" feature in v2.0.0+)

## Demo ##
	sh demo/build.sh
	node tools/app.js
	// then open http://localhost:3000/demo (the AMD mode) and http://localhost:3000/demo-build (the optimized mode) to see the it in action