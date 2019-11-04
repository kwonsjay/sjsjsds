import { ListNodeSingle, SinglyLinkedList } from "./DS0.SinglyLinkedList.js";

/** Class representing a queue, implemented using a singly linked list */
export default class Queue {
	constructor() {
		this.data = new SinglyLinkedList();
	}

	/**
	 * Returns the top element value in the queue without dequeueing it
	 * @return {*}		the top element's value
	 */
	peek() {
		return this.data.head ? this.data.head.value : null;
	}

	/**
	 * Adds a value to the end of the queue
	 * @param  {*}	value	the value to add to the queue
	 */
	enqueue(value) {
		this.data.pushValue(value);
	}

	/**
	 * Removes the top element from the queue and returns its value
	 * @return {*}		the removed element's value
	 */
	dequeue() {
		let value = this.peek();
		this.data.delete(this.data.head);
		return value;
	}

	/**
	 * Returns the length of the queue
	 * @return {Number}	length of the queue
	 */
	length() {
		return this.data.size;
	}

	toString() {
		return this.data.toString();
	}
}

/** Some test code */
// let q = new Queue();
// for (let i = 10; i > 0; i --) {
// 	q.enqueue(i);
// }
// console.log(q.toString());
// console.log(q.dequeue());
// console.log(q.toString());
// q.enqueue(404);
// console.log(q.dequeue());
// console.log(q.toString());
// console.log(q.peek());
// console.log(q.toString());
