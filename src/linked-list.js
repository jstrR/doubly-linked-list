const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
    }

    append(data) {
        if(this.length == 0) {
            this._head.data = data;
            this._tail = this._head;
            this.length++;
        } else {
            this.t = new Node();
            this.t.data = data;
            this.t.prev = this._tail;
            this._tail.next = this.t;
            this._tail = this.t;
            this.length++;
        }
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let i = 0, j = this._head;
        while(i != index) {
            j = j.next;
            i++;
        }
        return j.data;
    }

    insertAt(index, data) {
        if(this.length == 0) {
            this._head.data = data;
            this._tail = this._head;
            return this;
        }
        let i = 0, j = this._head;
        while(i != index) {
            j = j.next;
            i++;
        }
        j.data = data;
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this._head.data = this._head.next = this._head.prev = null;
        this._tail.data = this._tail.next = this._tail.prev = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if(this.length == 1) {
            this.length = 0;
            this._head.data = null;
            this._tail.data = null;
            return this;
        }
        let i = 0, j = this._head;
        while(i != index) {
            j = j.next;
            i++;
        }
        j.prev.next = j.next;
        j.next.prev = j.prev;
        j = null;
        this.length--;
        return this;
    }

    reverse() {
        if(this.length == 1) {
            return this;
        }
        let i = 0;
        this.t=this._tail;
        this.head1 = new Node();
        this.head1.data = this._tail.data;
        this.h = this.head1;
        while(i < this.length-1) {
            this.h.next = new Node();
            this.h.next.prev = this.h;
            this.h.next.data = this.t.prev.data;
            this.h = this.h.next;
            this.t = this.t.prev;
            i++;
        }
        this._head = this.head1;
        this._tail = this.t;
        return this;
    }

    indexOf(data) {
        let i = 0, j = this._head;
        while(i < this.length) {
            if(j.data == data) return i;
            j = j.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
