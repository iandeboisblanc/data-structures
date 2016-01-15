

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var isIn = index in this._storage;
  var alreadyUsed = false;

  if(this._storage.get(index) === undefined){
    var hashObj = {};
    hashObj[k] = v;
    this._storage.set(index, hashObj);
  }
  else{
    var objToAddTo = this._storage.get(index);
    objToAddTo[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objToEdit = this._storage.get(index);
  delete objToEdit[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


