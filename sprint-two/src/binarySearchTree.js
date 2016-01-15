var BinarySearchTree = function(value) {

  var newTree = Object.create(BinarySearchTree.prototype);

  //properties: left and right set to undefined
  newTree.left = undefined;
  newTree.right = undefined;

  //value equal to value
  newTree.value = value;

  //return binary search tree instance
  return newTree;

};

BinarySearchTree.prototype.insert = function() {

};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
