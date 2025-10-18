class LinkedList {
    length = 0;
    head = null;
    tail = null;

    add(value) {
        if (!this.head) {
            const headNode = new Node(value);
            this.head = headNode;
            this.tail = headNode;
        } else {
            const addNode = new Node(value);
            addNode.prev = this.tail;
            this.tail.next = addNode;
            this.tail = addNode;
        }
        this.length++;
        return this.length;
    }

    testSearch(index) {
        return {
            prev: this.#search(index)?.prev?.value,
            value: this.#search(index)?.value,
            next: this.#search(index)?.next?.value,
        };
    }

    search(index) {
        return this.#search(index)?.value;
    }

    #search(index) {
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current?.next;
            count++;
        }
        return current;
    }

    remove(index) {
        const current = this.#search(index);

        if (current) {
            if (current.prev) {
                if (current.next) {
                    current.prev.next = current.next;
                } else {
                    current.prev.next = null;
                }
            }

            if (current.next) {
                current.next.prev = current.prev;
            }
            this.length--;
            return this.length;
        }
    }
}

class Node {
    next = null;
    prev = null;
    constructor(value) {
        this.value = value;
    }
}

const ll = new LinkedList();
ll.length;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
console.log(ll.search(6)); // undefined
ll.remove(4); // 1 2 3 4 6
console.log(ll.search(4)); // 6
ll.remove(4); // 1 2 3 4
console.log(ll.search(4)); // undefined

// TODO 숙제
// 1. 이전거 연결했을때 추가하기 Node에 prev 넣기
// 2. 삽입을 O(1) 으로 만들기 => LinkedList에 tail 넣기
