const {coalesce} = require('../index');

describe('coalesce tests', ()=>{
  it('coalesce() returns null', ()=>{
    expect(coalesce()).toBeNull();
  });
  it('coalesce(undefined) returns null', ()=>{
    expect(coalesce(undefined)).toBeNull();
  });
  it('coalesce(null) returns null', ()=>{
    expect(coalesce(null)).toBeNull();
  });
  it('coalesce(null,null,1,null) returns 1', ()=>{
    expect(coalesce(null, null, 1, null)).toBe(1);
  });
});
