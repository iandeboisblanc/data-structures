

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
  // var gsadf = this._contentCount;
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
    // this._storage.each(function(valueObj, index, hashTab){
    //   for(var key in valueObj){
    //     // key = first names, valueObj[key] = last names/values
    //     //rehash keys
    //     index = getIndexBelowMaxForKey(key, this._limit);
    //     if(this._storage.get(index) === undefined){
    //       var hashObj = {};
    //       hashObj[key] = valueObj[key];
    //       this._storage.set(index, hashObj);
    //     }
    //     else{
    //       var objToAddTo = this._storage.get(index);
    //       objToAddTo[key] = valueObj[key];
    //     }
    //     // newStorage.set(index, hashObj);
    //     // newStorage.set(getIndexBelowMaxForKey(item[firstName], this._limit), item);
    //   }
    // });
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
  this._contentCount = this._contentCount - 1;
  if(this._contentCount <= this.determineThreshold(this._limit / 2)){
    //create new storage array
    this._limit = this._limit / 2;
    var newStorage = LimitedArray(this._limit);
    //iterate through old array
    this._storage.each(function(item,index){
      newStorage.set(index, item);
    });
    this._storage = newStorage;
  }
};

HashTable.prototype.determineThreshold = function(limit) {
  return Math.floor(0.75 * limit);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


