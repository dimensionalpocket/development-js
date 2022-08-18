# @dimensionalpocket/development

[![build](https://github.com/dimensionalpocket/development-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/dimensionalpocket/development-js/actions/workflows/node.js.yml) [![Total alerts](https://img.shields.io/lgtm/alerts/g/dimensionalpocket/development-js.svg)](https://lgtm.com/projects/g/dimensionalpocket/development-js/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dimensionalpocket/development-js.svg)](https://lgtm.com/projects/g/dimensionalpocket/development-js/context:javascript)

This package includes common development packages, types, and/or configuration defaults used by other projects:

* `mocha`
* `sinon`
* `chai` - along with `sinon-chai` and `chai-as-promised`
* `c8`
* `standardx`
* `babel`
* `renovate` - shared configuration

It also includes a [reusable Github Action](#github-actions) for Node builds.

## Configuration

Some libraries can use default configurations provided by this library. Add them to the project's `package.json` as follows:

```json
{
  ...,
  "babel": {
    "extends": "./node_modules/@dimensionalpocket/development/babel"
  },
  "eslintConfig": {
    "extends": "./node_modules/@dimensionalpocket/development/eslint"
  },
  "c8": {
    "extends": "./node_modules/@dimensionalpocket/development/c8/default.json"
  }
}
```

Alongside `extends`, you can add extra configuration if you need settings to differ from defaults.

StandardX, Mocha, and packages not mentioned above do not properly support `extends` or custom configuration files and must be manually configured.

### StandardX

If you are extending `eslintConfig` like the previous example, you don't need to configure StandardX. The provided ESLint configuration already uses `mocha` as environment, along with the Babel parser.

You can still extend configuration if needed:

```json
{
  ...,
  "standardx": {
    "globals": ["WebSocket"]
  }
}
```

### Renovate

To make `renovate` use the preset from this repository, add the following to the project's `.github/renovate.json`:

```json
{
  "extends": [
    "github>dimensionalpocket/development-js//renovate/default"
  ]
}
```

## Github Actions

This repository includes a **reusable workflow** for Node builds.

To use it, replace your workflow file with the following:

<!-- x-release-please-start-version -->
```yaml
name: Node.js

on:
  pull_request:

jobs:
  default:
    uses: dimensionalpocket/development-js/.github/workflows/default-node-build.yml@1.0.0
```
<!-- x-release-please-end -->

The workflow supports a number of input variables, including secrets. Check `.github/workflows/default-node-build.yml` for details.

## Release Please

This package includes a shared workflow for [**Release Please**](https://github.com/googleapis/release-please).

To use it, create `./github/workflows/release.yml` in the project with the following content:

<!-- x-release-please-start-version -->
```yaml
name: Release

on:
  push:
    branches: main

jobs:
  default:
    uses: dimensionalpocket/development-js/.github/workflows/default-release.yml@1.0.0
```
<!-- x-release-please-end -->

Next, create a `version.js` file in the project's root folder with the following content:

```js
export const VERSION = "X.Y.Z" /* x-release-please-version */
```

Then:

- Replace `X.Y.Z` with the current version of the package from `package.json`;
- **Keep the in-line comment**, that's how Release Please will replace the version number when creating a release PR.

## Usage in Tests

In your test files, import and use `expect`, `chai`, and `sinon` from the library directly:

```javascript
import { expect, sinon } from '@dimensionalpocket/development'

describe('Your Class', function () {
  // ...
})
```

## Installation

Install the package directly from GitHub:

<!-- x-release-please-start-version -->
```shell
npm i -D -E github:dimensionalpocket/development-js#1.0.0
```
<!-- x-release-please-end -->

## License

MIT
