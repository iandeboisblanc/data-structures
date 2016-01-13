var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.topSpot = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.storage[this.topSpot] = value;
    this.topSpot++;
    this.queueSize++;
  };

Queue.prototype.dequeue = function(){
    var result = this.storage[this.topSpot - this.queueSize];
    delete this.storage[this.topSpot - this.queueSize];
    this.queueSize--;
    return result;
  };
Queue.prototype.size = function(){
    if(this.queueSize >= 0){
      return this.queueSize;
    }
    else{
      return 0;
    }
  };

