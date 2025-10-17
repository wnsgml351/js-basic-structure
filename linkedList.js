class LinkedList {
    length = 0;
    head = null;

    add(value) {
        if (this.head) {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        } else {
            this.head = new Node(value);
        }
        this.length++;
        return this.length;
    }

    search(index) {
        return this.#search(index)[1]?.value;
    }

    #search(index) {
        let count = 0;
        let prev;
        let current = this.head;
        while (count < index) {
            prev = current;
            current = current?.next;
            count++;
        }
        return [prev, current];
    }
    remove(index) {
        const [prev, current] = this.#search(index);
        if (prev && current) {
            prev.next = current.next;
            this.length--;
            return this.length;
        } else if (current) {
            this.head = current.next;
            this.length--;
            return this.length;
        } else {
            // 삭제하고자하는 대상이 없을때
        }
    }
}

class Node {
    next = null;
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
