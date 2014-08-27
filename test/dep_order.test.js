var should = require('should');
var depOrder = require('../');

describe('test/dep_order.test.js', function () {
  it('should ok', function () {
    'ok'.should.ok;
  });

  it('should parse correctly', function () {
    var str = 'a b&c d';
    depOrder.parse(str).should.eql([['a'], ['b', 'c'], ['d']]);

    str = 'a&e&f   b&c d&g';
    depOrder.parse(str).should.eql([['a', 'e', 'f'], ['b', 'c'], ['d', 'g']]);
  });
});
