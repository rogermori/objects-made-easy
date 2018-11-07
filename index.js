const {NoU, isObject, isEmpty, coalesce, project} = require('./lib');


const hasEmpty = (objects) => {
  if (NoU(objects)) return true;
  if (!Array.isArray(objects)) return true;
  for (const obj of objects) {
    if (isEmpty(obj)) return true;
  }
  return false;
};

const emptyKeys = (obj) => {
  const noLuck = {success: false};
  if (!isObject(obj) || Array.isArray(obj)) {
    return noLuck;
  };
  const keys = Object.keys(obj).reduce( (bag, prop) => {
    if (isEmpty(obj[prop])) bag.push(prop);
    return bag;
  },
  []
  );
  return ( {
    success: true,
    keys,
    hasEmptyKeys: keys.length > 0,
  });
};


module.exports = {
  isObject,
  NoU,
  isEmpty,
  hasEmpty,
  emptyKeys,
  project,
  coalesce,
};
