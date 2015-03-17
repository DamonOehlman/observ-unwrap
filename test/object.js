var test = require('tape');
var unwrap = require('..');
var Observ = require('observ');

test('can unwrap an object', function(t) {
  t.plan(1);
  t.deepEqual(unwrap({ foo: 'bar' }), { foo: 'bar' });
});

test('can unwrap an observable object', function(t) {
  t.plan(1);
  t.deepEqual(unwrap(Observ({ foo: 'bar' })), { foo: 'bar' });
});
