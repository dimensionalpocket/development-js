# @dimensionalpocket/development

This package includes common development packages, types, and/or configuration defaults used by other projects:

* `mocha`
* `sinon`
* `chai` - along with `sinon-chai` and `chai-as-promised`
* `c8`
* `standardx`
* `babel`
* `renovate` - shared configuration

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i -D -E github:dimensionalpocket/development-js#X.Y.Z
```

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
    "extends": "./node_modules/@dimensionalpocket/c8/default.json"
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

## Usage in Tests

In your test files, import and use `expect`, `chai`, and `sinon` from the library directly:

```javascript
import { expect, sinon } from '@dimensionalpocket/development'

describe('Your Class', function () {
  // ...
})
```
