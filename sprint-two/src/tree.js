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
  var doesContain = false;
  //recursive loop through children
  //check if tree value = target
  if(this.value === target){
    doesContain = true;
  }
  if(!doesContain){
    //check if tree has children
    if(this.children.length > 0){
      //if so, call contains on children
      for(var i = 0; i < this.children.length; i++){
        if(!doesContain){
          doesContain = this.children[i].contains(target);
        }
      }
    }
  }
  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
