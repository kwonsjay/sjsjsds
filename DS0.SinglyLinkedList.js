/** Class representing a node for a singly linked list */
class ListNodeSingle {
	/**
	 * @param {*}			value	the value stored in this node
	 * @param {ListNodeSingle}	next	the next node
	 */
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	toString() {
		return `(value: ${this.value}, next: ${this.next ? this.next.value : null})`;
	}
}


/** Class representing a singly linked list */
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	/**
	 * Adds a node to the tail of the linked list
	 * @param {ListNodeSingle}	node	the node to be added to the tail of the list
	 */
	push(node) {
		if (this.tail) {				// If a tail node exits, add this node and adjust tail
			this.tail.next = node;
			this.tail = node;
		} else {					// If tail is null, set this node as both head and tail
			this.tail = node;
			this.head = node;
		}
		this.size ++;
	}

	/**
	 * Adds a node to the head of the linked list
	 * @param {ListNodeSingle}	node	the node to be added to the head of the list
	 */
	unshift(node) {
		if (this.head) {				// If a head node exists, add this node and adjust head
			node.next = this.head;
			this.head = node;
		} else {					// If head is null, set this node as both head and tail
			this.head = node;
			this.tail = node;
		}
		this.size ++;
	}

	/**
	 * Searches for a node in the list, and returns a boolean
	 * @param  {ListNodeSingle}	node	the node to search for
	 * @return {Boolean}			true if found, else false
	 */
	has(node) {
		let pointer = this.head;
		let found = false;
		while (pointer && !found) {			// Loop through to exhaustion, or until match found
			if (pointer === node) {
				found = true;
			}
			pointer = pointer.next;
		}
		return found;
	}

	/**
	* Deletes a node from the linked list, if the list has that node
	* This delete method does not assume that the given node is actually a member of this linked list
	* @param {ListNodeSingle}	node
	*/
	delete(node) {
		if (this.size === 0) return;			// If the linked list is empty, return
		if (this.size === 1 && node === this.head) {	// If only one node and it matches the input, set head and tail to null
			this.head = null;
			this.tail = null;
		} else if (this.size === 1) {			// If only one node but it's not the one we want to delete, return
			return;
		} else {					// If there are more nodes, perform a generalized operation
			if (node === this.head) {		// Adjust head pointer if deleting the head node
				this.head = node.next;
				node.next = null;
			} else if (node === this.tail) {	// Adjust tail pointer if deleting the tail node
				let pointer = this.head;
				while (pointer.next.next) {	// A loop is required in this particular implementation of a linked list (tail referenced)
					pointer = pointer.next;
				}
				pointer.next = null;
				this.tail = pointer;
			} else {				// If list has at least 2 nodes, and the node to delete is not head or tail
				if (!this.has(node)) return;	// If no matches, the node we want to delete is not in the list; return
				node.value = node.next.value;	// If found, delete by way of copying the next node's information
				node.next = node.next.next;
			}
		}
		this.size --;					// If we get to this point, decrement list size assuming successful deletion
	}

	toString() {
		let returnString = "";
		if (!this.head) return returnString;
		let pointer = this.head;
		while (pointer) {
			let pointerString = pointer.toString();
			if (pointer.next) pointerString += "->";
			returnString += pointerString;
			pointer = pointer.next;
		}
		return returnString;
	}
}


/** Some test code */
let list = new SinglyLinkedList();
let special;

for (let i = 0; i < 10; i ++) {
	let node = new ListNodeSingle(i);
	if (i % 2 === 0) {
		list.push(node);
	} else {
		list.unshift(node);
	}
	if (i === 3) special = node;
}

console.log(list.toString());
list.delete(special);
console.log(list.toString());
