const NoU = require('./NoU');

module.exports = (instance) => (
  !NoU(instance) &&
  !NoU(typeof(instance)) &&
  (typeof(instance) === 'object' || typeof(instance) === 'function')
);
