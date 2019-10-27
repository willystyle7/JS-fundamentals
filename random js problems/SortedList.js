class SortedList {
    constructor(list = []) {
        this.list = list.sort((a, b) =>  a - b);
        // this.size = list.length;
    }

    get size() {
        return this.list.length;
    }

    set size(len) {
        this.list.length = len;
        // this._size = len;
        return;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        // this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            // this.size--;
            return;
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}

class List {
    constructor(list = []) {
        this.list = list.sort((a, b) =>  a - b);
        this.size = list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}

class SortedList2 {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}

let list = new SortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.hasOwnProperty('size'));
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
