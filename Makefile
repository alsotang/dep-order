BIN_MOCHA = ./node_modules/.bin/mocha

all: test

test:
	$(BIN_MOCHA)

.PHONY: all build test
