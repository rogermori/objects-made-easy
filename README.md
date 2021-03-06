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
### isObject: Check if a variable is an object.
````
const isObject = require('objects-made-easy').isObject;

console.log(isObject(null)); // false
console.log(isObject(undefined)); // false
console.log(isObject([])); // true
console.log(isObject(new Date())); // true
console.log(isObject(new Set())); // true
console.log(isObject('hello')); // false
console.log(isObject(()=>{})); // true
console.log(isObject({})); // true
```` 
#### coalesce: returns the first non null argument ; otherwise returns null
````
const coalesce = require('objects-made-easy').coalesce;

console.log(coalesce());           // null
console.log(coalesce(null));       // null
console.log(coalesce(undefined));  // null
console.log(null,null,1,null);     // 1
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
````
#### project: fetch an object's attribute (field or key's value) by path. 
````
const project = require('objects-made-easy').project
const a = {
      b: {
        c: {
          d: 'deal',
          e: 'elephant',
          f: null,
        },
      },
    };
console.log(project(a, ''))                //a
console.log(project(undefined,''))         //a
console.log(project(a, 'k.p5'))            //undefined
console.log(project(a, 'b.c.l'))           //undefined
console.log(project(a, 'b.c.f'))           //null
console.log(project(a, 'b.c.f','default')) //default
console.log(project(a, 'b.c'))             //{d: 'deal', e: 'elephant', f: null}    
````


#### hasEmpty: Check if an array of object contains any logically empty element. 
````
const hasEmpty = require('objects-made-easy').haEmpty;
console.log(hasEmpty([{}, ' ', null, 1])); // true
console.log(hasEmpty(['a', 1])); // false
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
