 class Stack{
  constructor(){
    this.queue1 = []
    this.queue2 = []
  }

  push(value){
    this.queue2.push(value)

    while(this.queue1.length > 0){
      this.queue2.push(this.queue1.shift())
    }
    [[this.queue1], [this.queue2]] = [[this.queue2], [this.queue1]]
  }

  pop(){
    return this.queue1.shift()
  }
 }

 const stack = new Stack()
 stack.push(10)
 stack.push(20)
 stack.push(30)
 console.log(stack.pop())
 console.log(stack.pop())