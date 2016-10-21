exports.debug = (title, obj, data) => {
  const fs = require('fs');

  const ts = new Date();
  const seperator = '\n____________________________________\n';
  require('terminal-colors');

  const outputTERM = seperator.magenta + ' ' + JSON.stringify(obj) + ' ' + data + '\n'
   + seperator.magenta + ' ' + ts;
};

exports.bump = (version, type) => {
  type = type.toLowerCase();
  let splittedVersion = version.split('.');
  for (let i = 0; i < splittedVersion.length; i++) {
    splittedVersion[i] = parseInt(splittedVersion[i]);
  }
  switch (type) {
    case "major":
      splittedVersion[0] += 1;
      splittedVersion[1] = 0;
      splittedVersion[2] = 0;
      break;
    case "minor":
      splittedVersion[1] += 1;
      splittedVersion[2] = 0;
      break;
    case "patch":
      splittedVersion[2] += 1;
      break;
  }
  console.log('New version number is: ' + splittedVersion[0] + '.' + splittedVersion[1] + '.' + splittedVersion[2]);
};
