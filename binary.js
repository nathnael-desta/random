function Tree() {
    function node(value) {
        return {
            value,
            left: null,
            right: null,
        };
    }
    function prettyPrint(node = root, prefix = "", isLeft = true){
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };

    let root = null;

    function getRoot() {
        return root;
    }

    function bstCreator(array, start, end) {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);

        let root = node(array[mid]);
        root.left = bstCreator(array, start, mid - 1);
        root.right = bstCreator(array, mid + 1, end);

        return root;
    }

    function buildTree(array) {
        let sorted = sorter(array);
        root = bstCreator(sorted, 0, sorted.length - 1);
        return root;
    }

    function insert(key, currentNode = root) {
        let next_node = key >= currentNode.value ? currentNode.right : currentNode.left;
        if (next_node == null) {
            if (key >= currentNode.value) {
                currentNode.right = node(key);
            } else {
                currentNode.left = node(key);
            }
        } else {
            insert(key, next_node);
        }
    }

    function del(key, currentNode = root) {
        // check if next node is equal instead of currentNode
        if (key == root.value) {
            if (root.left == null && root.right == null) {
                root = node();
                return;
            } else if (root.left != null && root.right != null) {
                root.value = leftyDeep(key, root).value;
                return;
            } else {
                root = root.left != null ? root.left : root.right; 
                return;
            }
        }

        let obj = goDeep(currentNode, key);
        if (obj.currentNode.left == null && obj.currentNode.right == null) {
            if (obj.currentNode.value == obj.previousNode.left.value) {
                obj.previousNode.left = null;
                return;
            } else {
                obj.previousNode.right = null;
                return;
            }
        } else if (obj.currentNode.left != null && obj.currentNode.right != null) {
            obj.currentNode.value = leftyDeep(key, obj.currentNode);
            return;
        } else {
            if (obj.currentNode.value == obj.previousNode.left.value) {
                obj.previousNode.left = obj.currentNode.left || obj.currentNode.right;
                return;
            } else {
                obj.previousNode.right = obj.currentNode.left || obj.currentNode.right;
                return;
            }
        }
    }

    function goDeep(currentNode = root, key, previousNode = null) {
        if (currentNode == null) {
            return null;
        }
        if (currentNode.value == key) {
            return {
                currentNode,
                previousNode
            }
        } else {
            previousNode = currentNode;
            let left = null; 
            let right = null;
            left = goDeep(currentNode.left, key, previousNode);
            right = goDeep(currentNode.right, key, previousNode);
            return left || right;
        }
    }

    // function deleter(currentNode, previousNode, key) {
    //     if (currentNode.left == null && currentNode.right == null) {
    //         if (previousNode.left.value == currentNode. )
    //     }
    // }

    function leftyDeep(key, currentNode, count = 0, previousNode = null) {
        if (!count) {
            previousNode = currentNode;
            currentNode = currentNode.right;
            if (currentNode.left == null) {
                let temp = {...currentNode};
                previousNode.right = currentNode.right;
                return temp;
            }
            return leftyDeep(key, currentNode, count + 1, previousNode);   
        }

        if (currentNode.left == null){
            let temp = {...currentNode};
            previousNode.left = null;
            return temp;
        }  else {
            previousNode = currentNode;
            currentNode = currentNode.left;
            return leftyDeep(key, currentNode, count, previousNode);
        }

    }   

    function sorter(array) {
        let nonDuplicate = [];

        for (let num of array) {
            if (nonDuplicate.indexOf(num) == -1) {
                nonDuplicate.push(num);
            }
        }

        function merge(l, r) {
            let result = [];
            while (l.length != 0 && r.length != 0) {
                if (l[0] <= r[0]) {
                    result.push(l[0]);
                    l.shift();
                } else {
                    result.push(r[0]);
                    r.shift();
                }
            }
            if (l.length == 0) {
                result = result.concat(r);
            } else {
                result = result.concat(l);
            }

            return result;
        }
        
        function mergesort(arr) {
            if (arr.length == 1) {
                return arr
            } else {
                let left = arr.splice(0, Math.floor(arr.length / 2));
                let right = arr;
                let leftSorted = mergesort(left);
                let rightSorted = mergesort(right);
                return merge(leftSorted, rightSorted);
            }
        }

        return mergesort(nonDuplicate);

    }

    function find(value) {
        return goDeep(root, value).currentNode
    }

    function levelOrder(callback = arrCreator, queue = [root],count = 0, currentNode = root) {
        if (count == 0) {
            arr = []
            count++
        }
        if (queue.length == 0) {
            return;
        }

        currentNode = queue[0];

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        
        callback(queue.shift().value);
        levelOrder(callback, queue, count);
    }   

    function preOrder(callback = arrCreator, count = 0, currentNode = root) {
        if (count == 0) {
            arr = [];
            count++
        }

        callback(currentNode.value);
        if (currentNode.left) {
            preOrder(callback,count, currentNode.left);
        }
        if (currentNode.right) {
            preOrder(callback,count,currentNode.right);
        }
        

    }

    function inOrder(callback = arrCreator, count = 0, currentNode = root) {
        if (count == 0) {
            arr = [];
            count++
        }

        if (currentNode.left) {
            inOrder(callback,count, currentNode.left);
        }
        callback(currentNode.value);
        if (currentNode.right) {
            inOrder(callback,count,currentNode.right);
        }
    }

    function postOrder(callback = arrCreator, count = 0, currentNode = root) {
        if (count == 0) {
            arr = [];
            count++
        }

        if (currentNode.left) {
            postOrder(callback,count, currentNode.left);
        }
        if (currentNode.right) {
            postOrder(callback,count,currentNode.right);
        }
        callback(currentNode.value);
        
    }

    function arrCreator(value, count = 0) {
        arr.push(value);
    }
    
    let arr = [];

    function getArr() {
        return arr;
    }

    function getHeight(num) {
        let myNode = getNode(num);
        return myNode != null ? getHeightFromNode(myNode) : "node not found";
    }

    function getNode(num, currentNode = root) {
        if (currentNode == null) {
            return null;
        }
        if (currentNode.value == num) {
            return currentNode
        }
        return getNode(num, currentNode.left) || getNode(num, currentNode.right);

    }

    function getDeapth(num, currentNode = root, height = 0) {
        if (currentNode == null) {
            return null
        }
        height++;
        if (currentNode.value == num) {
            return height;
        }
        return getDeapth(num, currentNode.left, height) || getDeapth(num, currentNode.right, height);
    }

    function getDeapest(currentNode = root, height = 0) {
        if (currentNode == null) {
            return height;
        }
        height++;
        let left = getDeapest(currentNode.left, height);
        let right = getDeapest(currentNode.right, height);
        return left > right ? left : right;
    }


    function getHeightFromNode(currentNode = root, height = 0) {
        if (currentNode == null) {
            return height;
        }
        height++;
        let leftHeight = getHeightFromNode(currentNode.left, height);
        let rightHeight = getHeightFromNode(currentNode.right, height);
        return leftHeight > rightHeight ? leftHeight : rightHeight;
    }

    function isBalanced(currentNode = root) {
        if (currentNode == null) {
            return true
        }
        let left = currentNode.left;
        let right = currentNode.right;
        if (!checkNodeBalance(left,right)) {
            return false
        }
        return isBalanced(currentNode.left) && isBalanced(currentNode.right);
    }

    function checkNodeBalance(left, right) {
        return Math.abs(getDeapest(left) - getDeapest(right)) > 1 ? false : true
    }

    function addLast(times,currentNode = root){
        while(currentNode.left != null) {
            currentNode = currentNode.left;
        }
        for (let i = 0; i < times; i++){
            let num = Math.random() * 1000;
            currentNode.left = node(num);
            currentNode = currentNode.left;
        }   
    }

    function rebalance() {
        inOrder();
        buildTree(arr);   
    }

    

    return {
        buildTree,
        insert,
        getRoot,
        del,
        goDeep,
        find,
        levelOrder,
        getArr,
        preOrder,
        inOrder,
        postOrder,
        getHeight,
        getNode,
        getDeapth,
        prettyPrint,
        isBalanced,
        addLast,
        getDeapest,
        rebalance
    }
}


// let myTree = Tree();
// myTree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 63, 34]);
// myTree.addLast(20);
// console.log(myTree.isBalanced())
// myTree.rebalance();
// myTree.prettyPrint();
// myTree.inOrder();
// console.log(myTree.getArr());
// console.log(myTree.getDeapest(myTree.getNode(7)))
// console.log(myTree.getRoot())
// myTree.del(4);
// console.log(myTree.getRoot())
// console.log(myTree.find(4))

// console.log("go deeeeeeeep", myTree.goDeep())

// myTree.levelOrder();
// myTree.preOrder()
// myTree.inOrder();
// myTree.getArr();
// console.log(myTree.getHeight())
// console.log(myTree.getNode(1343));
// console.log(myTree.getHeight(4));
// console.log(myTree.getDeapth(13412));
// console.log(myTree.isBalanced())



function driver(arr) {
 let theTree = Tree();
 theTree.buildTree(arr);
 console.log("is the tree balanced: ", theTree.isBalanced());
 theTree.levelOrder();
 console.log("inlevel", theTree.getArr());
 theTree.preOrder();
 console.log("preorder", theTree.getArr());
 theTree.postOrder();
 console.log("postorder", theTree.getArr());
 theTree.inOrder();
 console.log("inorder", theTree.getArr());
 theTree.addLast(20);
 console.log("is the tree balanced: ", theTree.isBalanced());
 theTree.rebalance();
 console.log("is the tree balanced: ", theTree.isBalanced());
 theTree.levelOrder();
 console.log("inlevel", theTree.getArr());
 theTree.preOrder();
 console.log("preorder", theTree.getArr());
 theTree.postOrder();
 console.log("postorder", theTree.getArr());
 theTree.inOrder();
 console.log("inorder", theTree.getArr());
}

driver([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 63, 34]);