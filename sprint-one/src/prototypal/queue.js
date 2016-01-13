var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.topSpot = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.topSpot] = value;
    this.topSpot++;
    this.queueSize++;
  },
  dequeue: function(){
    var result = this.storage[this.topSpot - this.queueSize];
    delete this.storage[this.topSpot - this.queueSize];
    this.queueSize--;
    return result;
  },
  size: function(){
    if(this.queueSize >= 0){
      return this.queueSize;
    }
    else{
      return 0;
    }
  },
};


