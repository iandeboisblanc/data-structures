

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._contentCount = 0;
  this._threshold = 6;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var isIn = index in this._storage;
  var alreadyUsed = false;
  this._contentCount = this._contentCount + 1;
  var gsadf = this._contentCount;
  //debugger;
  if(this._storage.get(index) === undefined){
    var hashObj = {};
    hashObj[k] = v;
    this._storage.set(index, hashObj);
  }
  else{
    var objToAddTo = this._storage.get(index);
    objToAddTo[k] = v;
  }
  if(this._contentCount > this.determineThreshold(this._limit)){
    //create new storage array
    this._limit = this._limit * 2;
    var newStorage = LimitedArray(this._limit);
    //iterate through old array
    for(var i = 0; i < this._limit; i++){
      //copy values to new array
      newStorage[i] = this._storage[i];
    }
    this._storage = newStorage;
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
  //remove object entirely if empty
};

HashTable.prototype.determineThreshold = function(limit) {
  return Math.floor(0.75 * limit);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


