/* eslint-disable no-template-curly-in-string */

module.exports = {
  git: {
    commitMessage: 'chore: release v${version}',
    tagAnnotation: 'v${version}'
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    preRelease: true
  },
  npm: {
    publish: false
  }
}
