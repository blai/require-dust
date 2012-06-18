#!/bin/sh

npm install
rm -rf ../demo-build
node ../node_modules/requirejs/bin/r.js -o build.js
