var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var topSpot = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[topSpot] = value;
    queueSize++;
    topSpot++;
  };

  someInstance.dequeue = function() {
    var result = storage[topSpot - queueSize];
    delete storage[topSpot - queueSize];
    queueSize--;
    return result;
  };

  someInstance.size = function() {
    if (queueSize >= 0){
      return queueSize;
    }
    else{
      return 0;
    }
  };

  return someInstance;
};
