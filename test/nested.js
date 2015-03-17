var test = require('tape');
var unwrap = require('..');
var Observ = require('observ');
var ObservStruct = require('observ-struct');

test('can unwrap an nested object', function(t) {
  t.plan(1);
  t.deepEqual(unwrap({ foo: Observ('bar') }), { foo: 'bar' });
});

test('can unwrap an nested observable object', function(t) {
  t.plan(1);
  t.deepEqual(unwrap(ObservStruct({ foo: Observ('bar') })), { foo: 'bar' });
});
