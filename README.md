# [RequireJs](http://requirejs.org/) plugin for [Dust.js](http://akdubya.github.com/dustjs/) #

## Motivation ##
Tried [dustjs-requirejs-plugin](https://bitbucket.org/manuel_martin/dustjs-requirejs-plugin) but could not get it to work with requirejs v2, also didn't like the fact that it puts the entire dust.js source code as part of the plugin. This plugin takes the advantage of AMD and loads dust.js as a module.

## Features ##
- works the same way as [require-cs](https://github.com/jrburke/require-cs)
- pre-compile as part of requirejs optimization
- exclude plugin logic once optimized (using requirejs "stubModules" feature in v2.0.0+)

## Demo ##
Demo uses a modified version of [Linkedin version of dust.js](https://github.com/linkedin/dustjs), but it should work with the akdubya version as well. Search in demo/dust-bull-0.6.0.js for "RDUST MOD" to see the modification.
	sh demo/build.sh
	node tools/app.js
	// then open http://localhost:3000/demo (the AMD mode) and
	// http://localhost:3000/demo-build (the optimized mode) to see the it in action