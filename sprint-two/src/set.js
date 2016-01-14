var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  for(var key in this._storage){
    if(key){
      return true;
    }
    else{
      return false;
    }
  }
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
