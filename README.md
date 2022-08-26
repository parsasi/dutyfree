<div align="center">
<h1>Duty Free 🛍️</h1>

<p> Create web workers with callbacks  </p>
</div>

---

[![dependencies Status](https://img.shields.io/github/languages/top/parsasi/js-exec)](https://github.com/parsasi/dutyfree)
[![devDependencies Status](https://img.shields.io/npm/dm/dutyfree)](https://npmjs.com/dutyfree)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## The problem

Creating web worker files is difficult, when you are using build tools and frameworks. Making sure your web worker scripts end up in the right path after build is a hassle.

## This solution ✨

Duty Free will allow you to create your web workers with just a callback; no extra files needed.

- [Features](#features)
- [Limitations](#limitations)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [LICENSE](#license)

## Features

- **No Dependencies** - no dependencies
- **TypeScript** - Everything is TypeScript based
- **Lint** - Pre-configured _ESlint_ with _Airbnb_ config
- **Small** - It almost doesn't exist

## Limitations
This package is constrained by limitations of [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), and [`Function.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString). Please be aware of the following, before using it:

 - Please note that you do have to pass in a function defined by a [**Function Declaration**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), not a [Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function).

- You **cannot use imports** in your callback. **Scoping rules do not apply here**. Visit [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#web_workers_api) for more info.

- If you use a module bundler like [Webpack](https://webpack.js.org/), ensure you are writing your callback is **compatible with the target ES version (likely ES5)**, otherwise the bundler will modify the code, where it will not run in the isolation, while it needs to. 

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which should be installed as one of your project's `dependencies`: 

```bash
npm i --save dutyfree
```

## Usage

- [Install `dutyfree`](#installation)
- Import `createWorker` from the package
- Pass your callback to `dutyfree`.
- Your instance is ready

```ts
import { createWorker } from "dutyfree";

function source() {
  onmessage = function (e) {
    postMessage(`Worker says ${e.data}`);
  };
}

const myWorker = createWorker(source);

myWorker.onmessage = function (e) {
  console.log("Received: " + e.data);
};

worker.postMessage("Dooti");

worker.terminate();
```

## Contributing

This package is a beginner-friendly package. If you don't know where to start, visit [Make a Pull Request](https://makeapullrequest.com/) to learn how to make pull requests.

Please visit [Contributing](CONTRIBUTING.md) for more info.

## Code of Conduct

Please visit [Code of Conduct](CODE_OF_CONDUCT.md).

---

# License

MIT
