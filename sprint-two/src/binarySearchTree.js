var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.value = value;
  newTree.nodeDepth = 0;
  newTree.maxDepth = 0;
  newTree.depthTracker = [1];
  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var recursor = function(node) {
    newNode.nodeDepth++;
    if(value < node.value) {
      if(node.left) {
        recursor.call(this, node.left);
      } else {
        node.left = newNode;
        if(newNode.nodeDepth > this.maxDepth) {
          this.maxDepth = newNode.nodeDepth;
        }
        if(this.depthTracker[newNode.nodeDepth]){
          this.depthTracker[newNode.nodeDepth]++;
        } else {
          this.depthTracker[newNode.nodeDepth] = 1;
        }
      }
    } else {
      if(node.right) {
        recursor.call(this, node.right);
      } else {
        node.right = newNode;
        if(newNode.nodeDepth > this.maxDepth) {
          this.maxDepth = newNode.nodeDepth;
        }
        if(this.depthTracker[newNode.nodeDepth]){
          this.depthTracker[newNode.nodeDepth]++;
        } else {
          this.depthTracker[newNode.nodeDepth] = 1;
        }
      }
    }
  };
  recursor.call(this, this);
  var minDepth;
  for(var depth = 0; depth < this.depthTracker.length; depth++){
    if(minDepth === undefined){
      if(this.depthTracker[depth] < Math.pow(2, depth)){
        minDepth = depth - 1;
      }
    }
  }
  if(this.maxDepth > 2 * minDepth && this.maxDepth > 2){
    this.rebalanceTree();
  }
};
//O(log n)

BinarySearchTree.prototype.contains = function(value) {
  var recursor = function(node) {
    if(node.value === value) {
      return true;
    } else if (value < node.value) {
      if(node.left) {
        return recursor(node.left);
      } else {
        return false;
      }
    } else {
      if(node.right) {
        return recursor(node.right);
      } else {
        return false;
      }
    }
  };
  return recursor(this);
};
//O(log n)

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var recursor = function(node) {
    callback(node.value);
    if(node.left) {
      recursor(node.left);
    }
    if(node.right) {
      recursor(node.right);
    }
  };
  recursor(this);
};
//O(n)

BinarySearchTree.prototype.breadthFirstLog = function(callback) {
  var buffer = [];
  var addressNode = function(node) {
    callback(node.value);
    if(node.left) {
      buffer.push(node.left);
    } 
    if(node.right) {
      buffer.push(node.right);
    }
    if(buffer.length > 0) {
      addressNode(buffer.shift());
    }
  };
  addressNode(this);
};

BinarySearchTree.prototype.rebalanceTree = function(){
  var treeValues = [];
  this.depthFirstLog(function(nodeValue){
    treeValues.push(nodeValue);
  });
  treeValues.sort(function(a, b){return a-b;});
  var orderedArray = [];
  var buildOrderedArray = function(array) {
    var midpoint = Math.floor(array.length/2);
    orderedArray.push(array[midpoint]);
    if(array[midpoint - 1] !== undefined){
      var leftArray = array.slice(0,midpoint);
      buildOrderedArray(leftArray);
    }
    if(array[midpoint + 1]){
      var rightArray = array.slice(midpoint + 1);
      buildOrderedArray(rightArray);
    }
  };
  buildOrderedArray(treeValues);
  this.value = orderedArray[0];
  this.left = undefined;
  this.right = undefined;
  this.nodeDepth = 0;
  this.maxDepth = 0;
  this.depthTracker = [1];
  for(var i = 1; i < orderedArray.length; i++){
    this.insert(orderedArray[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
