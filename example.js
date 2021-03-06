const NoU = require('./index').NoU;
const isEmpty = require('./index').isEmpty;
const hasEmpty = require('./index').hasEmpty;
const isObject = require('./index').isObject;
const emptyKeys = require('./index').emptyKeys;

console.log('NoU Examples');
console.log(NoU(null));
console.log(NoU(undefined));
console.log(NoU({}));

console.log('\nisObject examples');
console.log('isObject(null) ', isObject(null)); // false
console.log('isObject(undefined) ', isObject(undefined)); // false
console.log('isObject([]) ', isObject([])); // false
console.log('isObject(new Date())) ',isObject(new Date())); // true
console.log('isObject(new Set()) ', isObject(new Set())); // true
console.log(`isObject('hello') `,isObject('hello')); // false
console.log('isObject(()=>{}) ', isObject(()=>{})); // true
console.log('isObject({})) ',isObject({})); // true

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

console.log('\nhasEmpty Examples');
console.log(hasEmpty([{}, ' ', null, 1])); // true
console.log(hasEmpty(['a', 1])); // false

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
