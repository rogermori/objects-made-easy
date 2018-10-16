const project = require('../index').project;
let a;

describe('project tests', ()=>{
  beforeEach(()=>{
    a = {
      b: {
        c: {
          d: 'deal',
          e: 'elephant',
          f: null,
        },
      },
    };
  });
  it('object null or undefined return the same object', ()=>{
    expect(project(a, '')).toBe(a);
  });
  it('path null or undefined return the same object', ()=>{
    expect(project(a, '')).toBe(a);
    expect(project(a, undefined)).toBe(a);
  });
  it('not existing path should return undefined', ()=>{
    expect(project(a, 'k.p5')).toBe(undefined);
    expect(project(a, 'b.c.l')).toBe(undefined);
  });
  it('b.c.f should return null', ()=>{
    expect(project(a, 'b.c.f')).toBe(null);
  });
  it('b.c should return an object', ()=>{
    expect(project(a, 'b.c')).toEqual({d: 'deal', e: 'elephant', f: null});
  });
});
