class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    traverse = () => {
        let current = this.head

        while (current) {
            console.log(current)
            current = current.next
        }
    }

    push = (val) => {
        const node = new Node(val)

        if(!this.head) {
            this.head = node
        } else {
            this.tail.next = node
        }

        this.tail = node
        this.length++

        return this
    }

    pop = () => {
        if(!this.head) return undefined
        let current = this.head
        this.length--

        if(!this.length) {
            this.head = null
            this.tail = null

            return current
        }

        while (current.next !== this.tail) {
            current = current.next
        }

        const popped = this.tail
        this.tail = current
        this.tail.next = null

        return popped
    }

    shift = () => {
        if(!this.head) return undefined
        let current = this.head
        this.length--

        if(!this.length) {
            this.head = null
            this.tail = null

            return current
        }

        this.head = this.head.next

        return current
    }

    unshift = (val) => {
        const node = new Node(val)
        this.length++

        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node

        }


        return this
    }

    get = (index) => {
        if(index < 0 || index >= this.length) return null
        let _index = 0
        let node = this.head
        while (_index !== index) {
            _index++
            node = node.next
        }

        return node
    }

    set = (val, index) => {
        if(index < 0 || index > this.length || !this.length) return false
        const node = this.get(index)
        node.val = val

        return true
    }

    insert = (val, index) => {
        if(index < 0 || index > this.length) return false
        if(!index) {
            this.unshift(val)
        } else {
            this.length++
            const newNode = new Node(val)
            const node = this.get(index - 1)

            newNode.next = node.next
            node.next = newNode
        }

        return true
    }

    remove = (index) => {
        if(index < 0 || index >= this.length) return false
        if(!index) return this.shift()
        this.length--
        const node = this.get(index - 1)
        const removedNode = node.next
        node.next = node.next.next

        return removedNode
    }

    reverse = () => {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next, prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }
}

const list = new SinglyLinkedList()
list.push('1')
list.push('2')
list.push('3')
list.unshift('0')

console.log(list.reverse())

