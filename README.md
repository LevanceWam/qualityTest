# qualityTest

## Getting started

### Install Package

```
npm install quality_test
```
### Usage

start server in debug mode

```
DEBUG=true node src/server
```

### Debugging

including package in file
```
const util = require('quality_test');
```

For the code you have 3 parameters  a title, a obj and status. status should be set to warn, error, or log.
```
util.debug('title', obj, 'status');
```

### Version Bumper

package version bumper feature used to bump the current package.json version file or inputed version.

### Including in file
```
const bump = require('quality_test').bump;
```
### Usage

For the bumper you have 2 params a version, and a . updateType. updateType should be set to major, minor, or patch depending on the type of version bump you are making.

```
// major example
bump('1.2.3', 'major');
// minor example
bump('1.2.3', 'minor');
// patch example
Bump('1.2.3', 'patch');
```
