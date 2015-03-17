var unwrap = require('..');
var ObservStruct = require('observ-struct');
var Observ = require('observ');
var ObservArray = require('observ-array');

// create an observable struct
var data = ObservStruct({
  foo: Observ('bar'),
  items: ObservArray([1, 2, 3])
});

// show the data
console.log('observable: ', data);

// show the unwrapped observable
console.log('unwrapped:  ', unwrap(data));
