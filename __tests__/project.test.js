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
  it('not existing path should return default', ()=>{
    expect(project(a, 'k.p5', 'loco')).toBe('loco');
    expect(project(a, 'b.c.l', 'loco')).toBe('loco');
  });

  it('b.c.f should return null', ()=>{
    expect(project(a, 'b.c.f')).toBe(null);
  });
  it('b.c.f should return default', ()=>{
    expect(project(a, 'b.c.f', 'loco')).toBe('loco');
  });

  it('b.c should return an object', ()=>{
    expect(project(a, 'b.c', 'default')).toEqual({d: 'deal', e: 'elephant', f: null});
  });
});
