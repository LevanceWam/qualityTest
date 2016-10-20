exports.debug = (title, obj, status) => {

  const ts = new Date();
  const seperator = '\n____________________________________\n';
  const require('terminal-colors');

  if (process.env.DEBUG) {
    let outputTERM;
    if (status === 'error') {
       outputTERM = seperator.red + ' ' + ts + '\n' + JSON.stringify(obj) + ' ' + seperator.red;
        // if console warn
        } else if (status === 'warn') {
        outputTERM = seperator.yellow + ' ' + ts + '\n' + JSON.stringify(obj) + ' ' + seperator.magenta;
        // if console log or undefined
        } else {
         outputTERM = seperator.green + ' ' + ts + '\n' + JSON.stringify(obj) + ' ' + seperator.green;
        // closes if statement
        }
  }
};
console.log(outputTERM);
