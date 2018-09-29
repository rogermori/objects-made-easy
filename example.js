const NoU = require('./index').NoU;
const isEmpty = require('./index').isEmpty;
const isObject = require('./index').isObject;
const emptyKeys = require('./index').emptyKeys;

console.log('NoU Examples');
console.log(NoU(null));
console.log(NoU(undefined));
console.log(NoU({}));

console.log('\nisObject examples');
console.log(isObject(null)); // false
console.log(isObject(undefined)); // false
console.log(isObject([])); // false
console.log(isObject(new Date())); // false
console.log(isObject(new Set())); // false
console.log(isObject('hello')); // false
console.log(isObject(()=>{})); // false
console.log(isObject({})); // false

const array = [
  {},
  {first: null, last: undefined},
  {retail: {}, wholesale: {}},
  ' ',
  [],
  1,
  false,
  new Set(),
  new Date(),
  {a: 1},
];

const nonEmptyArray = array.filter((obj)=>!isEmpty(obj));
console.log('\nisEmpty Examples');
console.log(nonEmptyArray); // [ 1, false, { a: 1 } ]

const instance = {
  hello: 'world',
  address: {},
  phone: null,
  fax: undefined,
  role: '',
  rights: [],
};
console.log('\nemptyKeys examples');
console.log(emptyKeys(instance));
/*
    { success: true,
      keys: [ 'address', 'phone', 'fax', 'role', 'rights' ],
      hasEmptyKeys: true
    }
 */
