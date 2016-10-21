exports.debug = (title, obj, status) => {

  const ts = new Date();
  const seperator = '\n____________________________________\n';
  const require('terminal-colors');

  if (process.env.DEBUG) {
    let outputTERM;
    if (status === 'error') {
       outputTERM = seperator.red + ' ' + ts + '\n' + JSON.stringify(obj) + ' ' + seperator.red;
       console.log(outputTERM);
        // if console warn
        } else if (status === 'warn') {
        outputTERM = seperator.yellow + ' ' + ts + '\n' + JSON.stringify(obj) + ' ' + seperator.magenta;
        console.log(outputTERM);
        // if console log or undefined
        } else {
         outputTERM = seperator.green + ' ' + ts + '\n' + JSON.stringify(obj) + ' ' + seperator.green;
         console.log(outputTERM);
        // closes if statement
        }
  }
};

// bump method takes two params version to be bumped and type of update
exports.bump = (version, updateType) => {
  // split([separator[, limit]]) method splits a String object into an array of strings
  const spliter = version.split('.');

  // parseInt(string, radix); - parses a string argument and returns an integer
  const major = parseInt(spliter[0], 10);
  const minor = parseInt(spliter[1], 10);
  const patch = parseInt(spliter[2], 10);

  // switch statement for kind of version bump
  switch (updateType) {
    // if major changes
    case major:
      spliter[0]++;
      spliter[1] = 0;
      spliter[2] = 0;
      console.log(spliter[0] + '.' + spliter[1] + '.' + spliter[2]);
      break;
    // if minor changes
    case minor:
      spliter[1]++;
      spliter[2] = 0;
      console.log(spliter[0] + '.' + spliter[1] + '.' + spliter[2]);
      break;
    // if hotfix
    case patch:
      spliter[2]++;
      console.log(spliter[0] + '.' + spliter[1] + '.' + spliter[2]);
      break;
    default: break;
  }
};
