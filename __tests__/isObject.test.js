const util = require('../index');

describe('isObject tests', ()=>{
  it('[] is an object', ()=>{
    expect(util.isObject([])).toBe(true);
  });
  it('null is not an object', ()=>{
    expect(util.isObject(null)).toBe(false);
  });
  it('undefined is not an object', ()=>{
    expect(util.isObject(undefined)).toBe(false);
  });
  it('new Date() is  an object', ()=>{
    expect(util.isObject(new Date())).toBe(true);
  });
  it('new Set() is  an object', ()=>{
    expect(util.isObject(new Set())).toBe(true);
  });
  it(`'hello'  is not an object`, ()=>{
    expect(util.isObject('hello')).toBe(false);
  });
  it(`()=>{}  is  an object`, ()=>{
    expect(util.isObject(()=>{})).toBe(true);
  });
  it(`{}  is  an object`, ()=>{
    expect(util.isObject({})).toBe(true);
  });
  it(`[]  is not an object`, ()=>{
    expect(util.isObject([])).toBe(true);
  });
});

describe('NoU tests', ()=>{
  it('null is null', ()=>{
    expect(util.NoU(null)).toBe(true);
  });
  it('undefined is undefined', ()=>{
    expect(util.NoU(undefined)).toBe(true);
  });
  it('0 is not null and is not undefined', ()=>{
    expect(util.NoU(0)).toBe(false);
  });
});

let date; let nestedEmpty; let nestedNotEmpty;

describe('isEmpty Tests', ()=>{
  beforeAll(() => {
    date = new Date();
    nestedEmpty = {
      one: null,
      two: undefined,
      three: {
        ab: null,
        bc: undefined,
        a1: '    ',
        cd: {
          a1: null,
          b1: '',
          k1: {
            k11: [],
          },
        },
        de: [],
      },
    };
    nestedNotEmpty = Object.assign({}, nestedEmpty, {active: false});
  });
  it(`' ' is empty`, ()=>{
    expect(util.isEmpty(' ')).toBe(true);
  });
  it(`[] is empty`, ()=>{
    expect(util.isEmpty([])).toBe(true);
  });
  it(`0 is not empty`, ()=>{
    expect(util.isEmpty(0)).toBe(false);
  });
  it(`{hello: 'world', country : null} is not empty`, ()=>{
    expect(util.isEmpty({hello: 'world', country: null})).toBe(false);
  });
  it(`{hello: 3, country : null} is not empty`, ()=>{
    expect(util.isEmpty({hello: 3, country: null})).toBe(false);
  });
  it(`{hello: 'world', country : undefined} is not empty`, ()=>{
    expect(util.isEmpty({hello: 'world', country: undefined})).toBe(false);
  });
  it(`any set is empty`, ()=>{
    expect(util.isEmpty(new Set([1, 2]))).toBe(true);
  });
  it(`any date is not empty`, ()=>{
    expect(util.isEmpty(date)).toBe(true);
  });
  it(`nestedEmpty is empty`, ()=>{
    expect(util.isEmpty(nestedEmpty)).toBe(true);
  });
  it(`nestedNotEmpty is not empty`, ()=>{
    expect(util.isEmpty(nestedNotEmpty)).toBe(false);
  });
});

let noEmptyKeys; let emptyKeys;
describe('emptyKeys', ()=>{
  beforeAll(()=>{
    noEmptyKeys = {hello: 'world'};
    emptyKeys = {
      hello: 'world',
      address: {},
      phone: null,
      fax: undefined,
      role: '',
      rights: [],
    };
  });
  it('1 returns success false', ()=>{
    expect(util.emptyKeys(1).success).toBe(false);
  });
  it('null returns success false', ()=>{
    expect(util.emptyKeys(null).success).toBe(false);
  });
  it('noEmptyKeys returns success true', ()=>{
    expect(util.emptyKeys(noEmptyKeys).success).toBe(true);
  });
  it('noEmptyKeys returns  keys []', ()=>{
    expect(util.emptyKeys(noEmptyKeys).keys).toEqual([]);
  });

  it('emptyKeys returns success true', ()=>{
    expect(util.emptyKeys(emptyKeys).success).toBe(true);
  });
  it(`'emptyKeys returns  keys ['address','phone','fax','role','rights']`, ()=>{
    expect(util.emptyKeys(emptyKeys).keys).toEqual(['address', 'phone', 'fax', 'role', 'rights']);
  });
});

