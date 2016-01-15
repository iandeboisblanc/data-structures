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

BinarySearchTree.prototype.insert = function(value) {

  var newNode = BinarySearchTree(value);

  var recursor = function(node) {
    if(value < node.value) {
      if(node.left) {
        recursor(node.left);
      } else {
        node.left = newNode;
      }

    } else {
      if(node.right) {
        recursor(node.right);
      } else {
        node.right = newNode;
      }
    }
  };
  recursor(this);
};

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

BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
