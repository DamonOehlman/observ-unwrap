/**
  # observ-unwrap

  Unwrap a simple or nested observable into its plain old values.

  ## Example Usage

  <<< example/simple.js

**/
module.exports = function unwrap(input) {
  var out;

  // functions
  if (typeof input == 'function') {
    return unwrap(input());
  }

  // strings
  if (typeof input == 'string' || (input instanceof String)) {
    return input;
  }

  // arrays
  if (Array.isArray(input)) {
    return input.map(unwrap);
  }

  // if we have an object, the unwrap each of the keyed values
  if (typeof input == 'object') {
    out = {};
    Object.keys(input).forEach(function(key) {
      out[key] = unwrap(input[key]);
    });

    return out;
  }

  return input;
};
