'use strict';

var algorithms = require('../lib/algorithms.js');
console.log(algorithms);
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['contiguousmaxsum'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'should return the value of the maximum sum ': function(test) {
    test.expect(3);
    // tests here
    test.equal(algorithms.contiguousmaxsum([1,2,-9,4,5]).sum, 9, 'sum should be 15');
    test.equal(algorithms.contiguousmaxsum([1,2,-9,4,5]).maxedges[0], 3, 'start should be 3');
    test.equal(algorithms.contiguousmaxsum([1,2,-9,4,5]).maxedges[1], 4, 'end should be 4');    
    test.done();
  },
};
