const NoU = require('./NoU');
function coalesce() {
  const arrayOfArguments = [...arguments];
  for (const argument of arrayOfArguments) {
    if (!NoU(argument)) return argument;
  }
  return null;
}

module.exports = coalesce;


