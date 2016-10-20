# qualityTest
### Install Packages


```
npm i quality_test
```
## How to use it
First you are going to want to start in debug mode

```
DEBUG=true node src/server
```

## Debugging
When you debug you have to the path and the code to execute the code.

path:
```
const util = require('quality_test');
```
Code:
For the code you have 3 parameters  a title, a obj and data
```
util.debug('title, obj, data');
```
