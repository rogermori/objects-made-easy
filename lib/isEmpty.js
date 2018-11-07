const NoU = require('./NoU');

const isEmpty = (instance) => {
  if (NoU(instance)) return true;
  switch (typeof instance) {
    case 'number':
    case 'boolean': return false;
    case 'string': return instance.trim().length === 0;
    case 'object':
      if (Array.isArray(instance)) return instance.length === 0;
      for (const k of Object.keys(instance)) {
        if (!isEmpty(instance[k])) return false;
      }
      return true;
    default:
      return true;
  }
};

module.exports = isEmpty;
