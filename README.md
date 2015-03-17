# observ-unwrap

Unwrap a simple or nested observable into its plain old values.

# Example Usage

```js
var unwrap = require('observ-unwrap');
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

```

[![NPM](https://nodei.co/npm/observ-unwrap.png)](https://nodei.co/npm/observ-unwrap/)




## License(s)

### ISC

Copyright (c) 2015, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
