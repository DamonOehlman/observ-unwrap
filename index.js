/**
  # observ-unwrap

  Unwrap a simple or nested observable into its plain old values.

  # Example Usage

  <<< example/simple.js

**/
module.exports = function unwrap(input) {
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

  return input;
};
