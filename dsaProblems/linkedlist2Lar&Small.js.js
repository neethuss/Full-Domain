//write a function to sum the second largest and second smallest elements of Linked list
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

  prepend(value){
    const node = new Node(value)
    if(this.size === 0){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  secondLargest(){
    if(this.size === 0){
      return console.log('Empty linked list')
    }
    let largest = -Infinity
    let secondLargest = -Infinity
    let current = this.head
    while(current){
      if(current.value > largest){
        secondLargest = largest
        largest = current.value
      }else if(current.value > secondLargest && current.value <= largest){
        secondLargest = current.value
      }
      current = current.next
    }
    return secondLargest
  }

  secondSmallest(){
    if(this.size === 0){
      return console.log('Empty')
    }
    let smallest = Infinity
    let secondSmallest = Infinity
    let current = this.head
    while(current){
      if(current.value < smallest){
        secondSmallest = smallest
        smallest = current.value
      }else if(current.value < secondSmallest && current.value >= smallest){
        secondSmallest = current.value
      }
      current = current.next
    }
    return secondSmallest
  }

}




const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
console.log(list.secondLargest())
console.log(list.secondSmallest())
