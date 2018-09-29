# objects-made-easy
A set of Node.js utility functions to handle objects.
## Supported Language Features
This module uses JavaScript [ES6](https://github.com/lukehoban/es6features)

#### Install
```
> npm install --save objects-made-easy 
```
#### Run tests
```
> npm run test 
```
#### Run example
```
> node example 
```

### Usage

#### NoU: Check if a variable is null or undefined.
````
const NoU = require('objects-made-easy').NoU;
console.log(NoU(null));  //true
console.log(NoU(null));  //true
console.log(NoU({}));    //false
````
- isObject: Check if a variable is an object.
````
const isObject = require('objects-made-easy').isObject;

console.log(isObject(null)); // false
console.log(isObject(undefined)); // false
console.log(isObject([])); // false
console.log(isObject(new Date())); // false
console.log(isObject(new Set())); // false
console.log(isObject('hello')); // false
console.log(isObject(()=>{})); // false
console.log(isObject({})); // false
````
#### isEmpty: Check if an object is logically empty. 
````
const isEmpty = require('objects-made-easy').isEmpty;
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
console.log(nonEmptyArray); // [ 1, false, { a: 1 } ]
```` 
#### emptyKeys: returns the key names of the logically empty values of an object.
````
const emptyKeys = require('objects-made-easy').emptyKeys;
const instance = {
  hello: 'world',
  address: {},
  phone: null,
  fax: undefined,
  role: '',
  rights: [],
};
console.log(emptyKeys(instance));
/*
    { success: true,
      keys: [ 'address', 'phone', 'fax', 'role', 'rights' ],
      hasEmptyKeys: true
    }
 */
````
