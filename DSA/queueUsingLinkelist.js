class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue{
  constructor(){
    this.head = null
  }

 isEmpty(){
  return this.head === null
 }

 enqueue(value){
  const node = new Node(value)
  if(this.isEmpty()){
    this.head = node
  }else{
    let curr = this.head
    while(curr.next){
      curr = curr.next
    }
    curr.next = node
  }
 }

 dequeue(){
  let deleteNode = this.head
  this.head = deleteNode.next
  return deleteNode
 }

 display(){
  if(this.isEmpty()){
    console.log('Queue is empty')
  }else{
    let curr = this.head
    while(curr){
      console.log(curr.value)
      curr = curr.next
    }
  }
 }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(30)
queue.display()