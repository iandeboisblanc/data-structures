

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._contentCount = 0;
  this._threshold = 6;
};

HashTable.prototype.insert = function(k, v) {
  this._contentCount = this._contentCount + 1;
  if(this._contentCount > Math.floor(0.75 * this._limit)){
    this._limit = this._limit * 2;
    var newStorage = LimitedArray(this._limit);
    //loop through old array indicies
    this._storage.each(function(bucket){
      //this._storage.get(indices), this will return a bucket
      _.each(bucket, function(tuple){
        //create new hash from tuple[0]
        var newIndex = getIndexBelowMaxForKey(tuple[0], this._limit);
        //newStorage.set(new hash, tuple[1]), but doesnt necessarily have buckets yet
        storageSetter(newStorage, newIndex, tuple[0], tuple[1]);
      });
    });
    this._storage = newStorage;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  storageSetter(this._storage, index, k, v);
};
//O(1), except when expanding, then O(n) or maybe even O(n^2)

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  _.each(bucket, function(tuple){
    if(tuple[0] === k){
      value = tuple[1];
    }
  });
  return value;
};
//O(1), but could be O(n)

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  _.each(bucket, function(tuple,tupleIndex){
    if(tuple[0] === k){
      bucket.splice(tupleIndex,1);
    }
  });
  this._contentCount = this._contentCount - 1;
  if(this._contentCount < Math.floor(0.25 * this._limit)){
    this._limit = this._limit / 2;
    var newStorage = LimitedArray(this._limit);
    //loop through old array indicies
    this._storage.each(function(bucket){
      //this._storage.get(indices), this will return a bucket
      _.each(bucket, function(tuple){
        //create new hash from tuple[0]
        var newIndex = getIndexBelowMaxForKey(tuple[0], this._limit);
        //newStorage.set(new hash, tuple[1]), but doesnt necessarily have buckets yet
        storageSetter(newStorage, newIndex, tuple[0], tuple[1]);
      });
    });
    this._storage = newStorage;
  }
};
//O(n) when resizing, O(1) or maybe O(n) otherwise
function storageSetter(storage, index, k, v){
  if(storage.get(index) === undefined){
    var bucket = [];
    storage.set(index, bucket);
  }
  var tuple = [k,v];
  var currentBucket = storage.get(index);
  currentBucket.push(tuple);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


