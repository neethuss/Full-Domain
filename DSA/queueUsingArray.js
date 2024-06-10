class Queue{
  constructor(){
    this.items = []
  }

  isEmpty(){
    return this.items.length === 0
  }

  enqueue(value){
    this.items.push(value)
  }

  dequeue(){
    this.items.shift()
  }

  peek(){
    return this.items[0]
  }

  print(){
    if(this.isEmpty()){
      console.log('Queue is empty')
    }else{
      console.log(this.items)
    }
  }
}

const queue = new Queue()
queue.enqueue(7)
queue.enqueue(8)
queue.print()