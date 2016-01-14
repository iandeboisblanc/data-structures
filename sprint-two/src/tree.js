var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree,treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //recursive loop through children
  //check if tree value = target
  if(this.value === target){
    debugger;
    return true;
  }
  //check if tree has children
  if(this.children.length > 0){
    //if so, call contains on children
    debugger;
    for(var i = 0; i < this.children.length; i++){
      return this.children[i].contains(target);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
