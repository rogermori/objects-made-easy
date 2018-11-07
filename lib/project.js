const NoU = require('./NoU');
const isObject = require('./isObject');
const isEmpty = require('./isEmpty');

module.exports = (instance, propertyPath, defaultValueIfEmpty)=>{
  if (isEmpty(instance) || !isObject(instance) || isEmpty(propertyPath)) {
    return instance;
  }
  const arrPath = propertyPath.split('.');
  if (isEmpty(arrPath)) {
    return instance;
  }
  let attribute = instance;
  for (const key of arrPath) {
    attribute = attribute[key];
    if (NoU(attribute)) break;
  }
  if (NoU(attribute) && !NoU(defaultValueIfEmpty)) {
    attribute = defaultValueIfEmpty;
  }
  return attribute;
};
