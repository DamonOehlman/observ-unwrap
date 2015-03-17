var test = require('tape');
var unwrap = require('..');
var Observ = require('observ');

test('can unwrap a plain old string', function(t) {
  t.plan(1);
  t.equal(unwrap('hello'), 'hello');
});

test('can unwrap a plain old number', function(t) {
  t.plan(1);
  t.equal(unwrap(5), 5);
});

test('can unwrap an observable string', function(t) {
  t.plan(1);
  t.equal(unwrap(Observ('hello')), 'hello');
});

test('can unwrap an observable number', function(t) {
  t.plan(1);
  t.equal(unwrap(Observ(5)), 5);
});
