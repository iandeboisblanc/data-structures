var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = [];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueSize++;
    storage.push(value);
  };

  someInstance.dequeue = function() {
    if(queueSize > 0){
      queueSize--;
      return storage.pop();
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
