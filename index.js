const NoU = (obj) => (obj === null || obj === undefined);

const isObject = (obj) => (obj instanceof Object && obj.constructor === Object);

const isEmpty = (obj) => {
  if (NoU(obj)) return true;
  switch (typeof obj) {
    case 'number':
    case 'boolean': return false;
    case 'string': return obj.trim().length === 0;
    case 'object':
      if (Array.isArray(obj)) return obj.length === 0;
      for (const k of Object.keys(obj)) {
        if (!isEmpty(obj[k])) return false;
      }
      return true;
    default:
      return true;
  }
};

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
  if (NoU(obj)) return noLuck;
  if (typeof obj !== 'object' || Array.isArray(obj)) {
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
};
