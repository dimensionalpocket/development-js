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

```yaml
name: Node.js Build
on: push
jobs:
  build:
    uses: dimensionalpocket/development-js/.github/workflows/default-node-build.yml@X.Y.Z # replace with release tag
```

The workflow supports a number of input variables. Check `.github/workflows/default-node-build.yml` for details.

To be able to fetch private dependencies from GitHub, send a secret named `GITHUB_PAT` (private access token) with the secret from your repo/org:

```yaml
jobs:
  build:
    uses: dimensionalpocket/development-js/.github/workflows/default-node-build.yml@X.Y.Z
    secrets:
      GITHUB_PAT: ${{ secrets.myRepoToken }}
```

## Usage in Tests

In your test files, import and use `expect`, `chai`, and `sinon` from the library directly:

```javascript
import { expect, sinon } from '@dimensionalpocket/development'

describe('Your Class', function () {
  // ...
})
```

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i -D -E github:dimensionalpocket/development-js#X.Y.Z
```

## License

MIT
