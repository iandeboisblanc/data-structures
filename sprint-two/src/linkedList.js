var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new node
    //set node value to value
    var newNode = Node(value);
    //set the previous tail.next to equal new node
    if(list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var headNode = list.head;
    list.head = headNode.next;
    return headNode.value;
  };

  list.contains = function(target) {
    var isFound = false;

    var nodeChecker = function(node) {
      //starting with head, check if head.value === target
      if(!isFound) {
        if(node.value === target) {
          isFound = true;
        } else {
          if(node.next) {
            isFound = nodeChecker(node.next);
          }
        }
      }
      return isFound;
    };

    return nodeChecker(list.head);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
