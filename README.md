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
