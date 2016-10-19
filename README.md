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

## Logging Files
When using the taste tester it will create and write to a log file at the root of the project. You do need to have a logs folder in order for it to create the log file.

## Version bumper
This utility tool also features the version bumper, that will output to console the new version depending on 2 parameters: `version` and `type`. `version` is just a number (ex. `10.3.105`), and `type` may be one of three: `major`, `minor`, or `patch`. If you are unfamiliar with semantic versioning, take a look at [this site](http://semver.org/). You will still need to have this piece of code in your file:
```javascript

const util = require('quality_test');

```

You will be able to use version bumper like so:
```javascript

util.bump('10.5.13', 'minor');

```

Having these parameters, console will print out this:
```
New version number is: 10.6.0
```
