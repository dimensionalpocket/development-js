# @webmuds/development

This package includes common development packages, types, and/or configuration defaults used by other projects:

* `mocha`
* `sinon`
* `chai` - along with `sinon-chai` and `chai-as-promised`
* `c8`
* `standardx`
* `babel`
* `release-it` - configuration only (package not included)

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i --save-dev -E github:webmuds/development#X.Y.Z
```

## Configuration

Some libraries can use default configurations provided by this library. Add them to the project's `package.json` as follows:

```json
{
  ...,
  "babel": {
    "extends": "./node_modules/@webmuds/development/config/babel"
  },
  "eslintConfig" : {
    "extends": "./node_modules/@webmuds/development/config/eslint"
  }
}
```

Alongside `extends`, you can add extra configuration if you need settings to differ from defaults.

StandardX, Mocha, C8, and packages not mentioned above do not properly support `extends` or custom configuration files and must be manually configured.

### StandardX

If you are extending `eslintConfig` like the previous example, you don't need to configure StandardX. The provided ESLint configuration already uses `mocha` as environment, along with the Babel parser.

### Release-It

To make `release-it` use the configuration from this library, change the `npm run release` command as follows:

```json
{
  "scripts": {
    ...,
    "release": "release-it --config ./node_modules/@webmuds/development/config/release-it/config.js"
  },
}
```

## Usage

In your test files, import and use dependencies from the library directly:

```javascript
import { expect, sinon } from '@webmuds/development'

describe('Your Class', function () {
  // ...
})
```
