function hashMapFactory() {
    let hashArr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
    let modulator = 16;

    function getHashArr() {
        return hashArr;
    }

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }
    

    function setKey(key, value) {
        let myHash = hash(key);
        let index = myHash % modulator;
        if (hashArr[index] == null) {
            hashArr[index] = node(key, value);
        } else {
            goDeep(hashArr[index], key, value)
        }

        if (ratio(hashArr) >= 0.75) {
            hashArr = doubler(hashArr);
        }

    }

    function goDeep(LinkedList, key, value) {
        if (LinkedList[key] != null) {
            LinkedList[key] = value;
        } else if (LinkedList.next == null) {
            LinkedList.next = node(key, value);
        } else {
            goDeep(LinkedList.next, key, value)
        }
    }

    function node(key, value) {
        return {
            [key] : value,
            next : null
         }
    }

    function get(key) {
        let myHash = hash(key);
        return hashArr[myHash % modulator];
    }

    function ratio(array) {
        let count = 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] != null) {
                count++
            }
        }
        return count / array.length;
    }

    function doubler(array) {
        let length = array.length
        for (let index = 0; index < length; index++) {
            array.push(null)
        }
        length = array.length;
        modulator *= 2;
        for (let index = 0; index < length; index++) {
            if (array[index] != null) {
                let temp = {...array[index]};
                let myHash = hash(Object.keys(array[index])[0]);
                array[index] = null;
                array[myHash % modulator] = temp;
            }
        }
        return array;
    }

    function has(key) {
        let myobj = hashArr[hash(key) % modulator];
        let currentNode = myobj;
        while (currentNode != null) {
            if (Object.keys(currentNode)[0] == key) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    function remove(key) {
        let myobj = hashArr[hash(key) % modulator];
        let currentNode = myobj;
        if (Object.keys(currentNode)[0] == key) {
            if (currentNode.next == null) {
                hashArr[hash(key) % modulator] = null
                return true;
            } else {
                hashArr[hash(key) % modulator] = myobj.next;
                return true;
            }
        }
        while (currentNode.next != null) {
            if (Object.keys(currentNode.next)[0] == key) {
                currentNode.next = currentNode.next.next;
                return true;
            }
        }

        return false;
    }

    function length() {
        let count = 0;
        for (let i = 0; i < hashArr.length; i++) {
            if (hashArr[i] != null) {
                let currentNode = hashArr[i];
                while (currentNode != null) {
                    count++;
                    currentNode = currentNode.next; 
                }
            }
        }
        return count;
    }

    function keys() {
        let keys = [];
        for (let i = 0; i < hashArr.length; i++) {
            if (hashArr[i] != null) {
                let currentNode = hashArr[i];
                while (currentNode != null) {
                    keys.push(Object.keys(currentNode)[0])
                    currentNode = currentNode.next; 
                }
            }
        }
        return keys;
    }

    function values() {
        let values = [];
        for (let i = 0; i < hashArr.length; i++) {
            if (hashArr[i] != null) {
                let currentNode = hashArr[i];
                while (currentNode != null) {
                    values.push(Object.values(currentNode)[0])
                    currentNode = currentNode.next; 
                }
            }
        }
        return values;
    }

    function entries() {
        let key_values = [];
        for (let i = 0; i < hashArr.length; i++) {
            if (hashArr[i] != null) {
                let currentNode = hashArr[i];
                while (currentNode != null) {
                    key_values.push([Object.keys(currentNode)[0],Object.values(currentNode)[0]])
                    currentNode = currentNode.next; 
                }
            }
        }
        return key_values;
    }

    function clear() {
        hashArr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
        modulator = 16;
    }

    return {
        hash,
        getHashArr,
        hash,
        setKey,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
    
}

let hashMap = hashMapFactory();
hashMap.setKey('cat', "meow");
hashMap.setKey('cat', "meoza");
hashMap.setKey('cat2', "meoza");
hashMap.setKey('cat3', "meoza");
hashMap.setKey('cat4', "meoza");
hashMap.setKey('cat5', "meoza");
hashMap.setKey('cat6', "meoza");
hashMap.setKey('cat7', "meoza");
hashMap.setKey('cat8', "meoza");
hashMap.setKey('cat9', "meoza");
hashMap.setKey('cat10', "meoza");
hashMap.setKey('cat11', "meoza");
hashMap.setKey('cat12', "meoza");
hashMap.setKey('cat13', "meoza");
hashMap.setKey('cat14', "meoza");
hashMap.setKey('cat15', "meoza");
hashMap.setKey('cat16', "meoza");
// console.log(hashMap.getHashArr());
// console.log(hashMap.get('cat14'))
// console.log(hashMap.has('ca'))

// console.log(hashMap.remove('cat'));

// console.log(hashMap.length())
// hashMap.clear();
// console.log(hashMap.getHashArr())
// console.log(hashMap.keys())
// console.log(hashMap.values())
// console.log(hashMap.entries())