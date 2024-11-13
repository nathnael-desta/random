function LinkedList() {
    let myHead = Node();

    function Node(value = null, next = null){
        return {
            value,
            next
        }
    }

    function head() {
        return myHead;
    }

    function tail(){
        let currentNode = myHead;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    function append(value){
        
        let mytail = tail();
        if (mytail.value == null) {
            myHead.value = value
        } else {
            mytail.next = Node(value);
        }
    };

    function prepend(value) {
        let temp = myHead.value != null ? {...myHead} : null;
        myHead.value = value;
        myHead.next = temp;
    }

    function size() {
        let count = 0;
        let currentNode = myHead;
        if (currentNode.value == null) {
            return 0;
        }
        count++;
        while (currentNode.next != null) {
            count++;
            currentNode = currentNode.next
        }
        return count;
    }

    function at(index) {
        let count = 0;
        let currentNode = myHead;
        while (currentNode != null) {
            if (count == index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        return "no node at index";
    }

    function pop() {
        let currentNode = myHead;
        if (currentNode.next == null){
            myHead = Node();
        } else {
            while (currentNode.next.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = null;
        }
    }

    function contains(value) {
        let currentNode = myHead;
        while (currentNode != null) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    function find(value) {
        let count = 0;
        let currentNode = myHead;
        while (currentNode != null) {
            if (currentNode.value == value) {
                return count;
            }
            count++;
            currentNode = currentNode.next;
        }
        return null;
    }

    function toString() {
        let str = '';
        let currentNode = myHead;
        while (currentNode != null) {
            str += `(${currentNode.value}) --> `;
            currentNode = currentNode.next;
        }
        if (str != '') {
            let random = str.slice(0, str.length - 4);
            return random
        }
        return str;
    }

    function insertAt(value, index) {
        let currentNode = myHead;
        let count = 0;
        while (currentNode != null) {
            if (count == index) {
                let temp = {...currentNode};
                currentNode.value = value;
                currentNode.next = temp;  
                return;
            }
            count++;
            if (currentNode.next == null && count == index) {
                currentNode.next = Node(value);
                return;
            }
            currentNode = currentNode.next;
        }
    }

    function removeAt(index) {
        let currentNode = myHead;
        let count = 0;
        if (index == 0) {
            if (currentNode.next == null) {
                myHead = Node();
            return;
            } else {
                myHead = currentNode.next
            }
            
        }
        while (currentNode.next != null) {
            if (count + 1 == index) {
                if (currentNode.next.next == null) {
                    currentNode.next = null;
                    return;
                } else {
                    currentNode.next = currentNode.next.next;
                }   
            }
            count++;
            currentNode = currentNode.next;
        }
    }

    return {
        head,
        tail,
        append,
        prepend,
        size,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

let myLinkedList = LinkedList();
// myLinkedList.append(1);
// myLinkedList.append(2);
// myLinkedList.append(3);

// console.log(myLinkedList.size())
// myLinkedList.prepend(0);
// console.log(myLinkedList.head())
// console.log(myLinkedList.at(3));
// console.log(myLinkedList.tail());
// myLinkedList.pop();
// console.log(myLinkedList.tail());
// console.log(myLinkedList.contains(0))
// console.log(myLinkedList.find(3));
// myLinkedList.insertAt(1.5, 5);
// myLinkedList.removeAt()

// console.log(myLinkedList.toString())






