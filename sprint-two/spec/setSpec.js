describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should accept numbers as input values', function(){
    set.add(9);
    expect(set.contains(9)).to.equal(true);
    expect(set.contains(8)).to.equal(false);
  });

  it('should accept objects as input values', function(){
    set.add({name:'Liz'});
    expect(set.contains({name:'Liz'})).to.equal(true);
  expect(set.contains({name:'Ian'})).to.equal(false);  
});

});
