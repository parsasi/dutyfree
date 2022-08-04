<div align="center">
<h1>Duty Free 🛍️</h1>

<p> Create web workers with callbacks  </p>
</div>

---

[![dependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/status.svg)](https://david-dm.org/parsasi/dutyfree) [![devDependencies Status](https://status.david-dm.org/gh/parsasi/dutyfree.svg?type=dev)](https://david-dm.org/parsasi/dutyfree?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## The problem

Creating web worker files is difficult, when you are using build tools and frameworks. Making sure your web worker scripts end up in the right path after build is a hassle.

## This solution ✨

Duty Free will allow you to create your web workers with just a callback; no extra files needed.

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic](#usage)
  - [Callbacks](#callbacks)
  - [Interceptors](#interceptors)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [LICENSE](#license)

## Features

- **No Dependencies** - no dependencies
- **TypeScript** - Everything is TypeScript based
- **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
- **Small** - It almost doesn't exist

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which should be installed as one of your project's `dependencies`:

```bash
npm i --save dutyfree
```

## Usage

- [Install `dutyfree`](#installation)
- Import `dutyfree` from the package
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
```

## Contributing

This package is a beginner-friendly package. If you don't know where to start, visit [Make a Pull Request](https://makeapullrequest.com/) to learn how to make pull requests.

Please visit [Contributing](CONTRIBUTING.md) for more info.

## Code of Conduct

Please visit [Code of Conduct](CODE_OF_CONDUCT.md).

---

# License

MIT
