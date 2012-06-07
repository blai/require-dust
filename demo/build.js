/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*- */
({
    appDir: '.',
    baseUrl: 'lib',

    //Uncomment to turn off uglify minification.
    optimize: 'none',
    
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000
    },
    
    dir: '../demo-build',

    //Stub out the cs module after a build since
    //it will not be needed.
    //stubModules: ['rdust'],

    paths: {
        'rdust': '../../rdust',
        'dust': 'dust-full-0.4.0'
    },
    mainConfigFile: 'lib/main.js',

    modules: [
        {
            name: 'main'
        }
    ],

	fileExclusionRegExp: /^\.|(build\..*)/
})
