BIN_MOCHA = ./node_modules/.bin/mocha
BIN_PEG = ./node_modules/.bin/pegjs

all: test

build:
	$(BIN_PEG) lib/parser.pegjs lib/parser.js

test: build
	$(BIN_MOCHA)

.PHONY: all build test
