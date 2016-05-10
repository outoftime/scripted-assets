describe('getFirstName()', function() {
  it('should be defined as a function', function() {
    expect(window.getFirstName).toEqual(jasmine.any(Function));
  });

  it('should return the firstName property of the object I pass', function() {
    expect(getFirstName({firstName: 'Mat', lastName: 'Brown'})).toBe('Mat');
    expect(getFirstName({firstName: 'Jesse', lastName: 'Wang'})).toBe('Jesse');
    expect(getFirstName({firstName: 'Alex', lastName: 'Pelan'})).toBe('Alex');
    expect(getFirstName({firstName: 'Meghan', lastName: 'Knoll'})).toBe('Meghan');
    expect(getFirstName({})).toBeUndefined();
  });
});

describe('getLastName()', function() {
  it('should be defined as a function', function() {
    expect(window.getLastName).toEqual(jasmine.any(Function));
  });

  it('should return the firstName property of the object I pass', function() {
    expect(getLastName({firstName: 'Mat', lastName: 'Brown'})).toBe('Brown');
    expect(getLastName({firstName: 'Jesse', lastName: 'Wang'})).toBe('Wang');
    expect(getLastName({firstName: 'Alex', lastName: 'Pelan'})).toBe('Pelan');
    expect(getLastName({firstName: 'Meghan', lastName: 'Knoll'})).toBe('Knoll');
    expect(getLastName({})).toBeUndefined();
  });
});

describe('getFullName()', function() {
  it('should be defined as a function', function() {
    expect(window.getFullName).toEqual(jasmine.any(Function));
  });

  it('should return the firstName property of the object I pass', function() {
    expect(getFullName({firstName: 'Mat', lastName: 'Brown'})).toBe('Mat Brown');
    expect(getFullName({firstName: 'Jesse', lastName: 'Wang'})).toBe('Jesse Wang');
    expect(getFullName({firstName: 'Alex', lastName: 'Pelan'})).toBe('Alex Pelan');
    expect(getFullName({firstName: 'Meghan', lastName: 'Knoll'})).toBe('Meghan Knoll');
  });
});

describe('makePerson()', function() {
  it('should be defined as a function', function() {
    expect(window.makePerson).toEqual(jasmine.any(Function));
  });

  it('return an object with firstName and lastName properties', function() {
    expect(makePerson('Mat', 'Brown')).toEqual({firstName: 'Mat', lastName: 'Brown'});
    expect(makePerson('Meghan', 'Knoll')).toEqual({firstName: 'Meghan', lastName: 'Knoll'});
    expect(makePerson('Jesse', 'Wang')).toEqual({firstName: 'Jesse', lastName: 'Wang'});
    expect(makePerson('Alex', 'Pelan')).toEqual({firstName: 'Alex', lastName: 'Pelan'});
  });
});

describe('transformPerson()', function() {
  it('should be defined as a function', function() {
    expect(window.transformPerson).toEqual(jasmine.any(Function));
  });

  it('return an object with correct name and age properties', function() {
    expect(transformPerson({firstName: 'Mat', lastName: 'Brown', birthYear: 1983})).toEqual({name: 'Mat Brown', age: 33});
    expect(transformPerson({firstName: 'Aubrey', lastName: 'Graham', birthYear: 1986})).toEqual({name: 'Aubrey Graham', age: 30});
  });
});
