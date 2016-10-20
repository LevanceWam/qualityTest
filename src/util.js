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
