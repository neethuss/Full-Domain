class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  //add new node at the beginning of a list
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  //adding element at the end of a list
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  //insert a node at the given index in a list
  insert(value, index){
    if(index < 0 || index > this.size){
      return console.log('Invalid index')
    }
    if(index === 0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i=0 ; i<index-1 ; i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  //remove a node from a given index in the list
  removeFrom(index){
    if(index < 0 || index >= this.size){
      return console.log('Invalid index')
    }
    let removedNode;
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i=0 ; i<index-1 ; i++){
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
  }

  //remove a node from the list given its value
  removeValue(value){
    if(this.isEmpty()){
      return console.log('List is empty')
    }
    if(this.head.value === value){
      this.head = this.head.next
    }else{
      let prev = this.head
      while(prev.next && prev.next.value!=value){
        prev = prev.next
      }
      let removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
  }

  //serach for a value in a list
  search(value){
    if(this.isEmpty()){
      return console.log('List is empty')
    }
    let i=0
    let curr = this.head
    while(curr){
      if(curr.value === value){
        return console.log('Value is present in index', i)
      }
      curr = curr.next
      i++
    }
    return console.log('Value is not present in the list')
  }

  //reverse a list
  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  //printing linked list
  print(){
    if(this.isEmpty()){
      console.log('List is empty')
    }else{
      let curr = this.head
      let listValues = ''
      while(curr){
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print()
list.prepend(10)
list.prepend(20)
list.append(30)
list.insert(40,2)
list.removeFrom(1)
list.removeValue(40)
list.search(30)
list.print()
list.append(60)
list.insert(50,2)
list.reverse()
list.print()