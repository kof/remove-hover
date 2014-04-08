build:
	NODE_PATH=${PWD}/bower_components ./node_modules/browserify/bin/cmd.js -e ./index.js -o ./dist/remove-hover.js -s removeHover
	./node_modules/.bin/uglifyjs < ./dist/remove-hover.js > ./dist/remove-hover.min.js --comments license
	xpkg .


.PHONY: build
