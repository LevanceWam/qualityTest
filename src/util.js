exports.debug = (title, obj, data) => {

  const ts = new Date();
  const seperator = '\n____________________________________\n';
  require('terminal-colors');

  const outputTERM = seperator.magenta + ' ' + JSON.stringify(obj) + ' ' + data + '\n'
   + seperator.magenta + ' ' + ts;

  const outputFILE = seperator + ' ' + JSON.stringify(obj) + ' ' +
  data + '\n' + seperator + ' ' + ts;
  if (process.env.DEBUG) {

      console.log(outputTERM);
  }
};
