class MaxHeap{
  constructor(){
    this.values = []
  }

  insert(value){
    this.values.push(value)
    this.bubbleUp()
  }

  bubbleUp(){
    let index = this.values.length-1
    let value = this.values[index]
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2)
      let parent = this.values[parentIndex]
      if(value > parent){
        this.values[parentIndex] = value
        this.values[index] = parent
        index = parentIndex
      }
    }
    return this.values
  }

extractMax(){
  let max = this.values[0]
  let end = this.values.pop()
  if(this.values.length > 0){
    this.values[0] = end
    this.sinkDown()
  }
  return max
}

sinkDown(){
  let index = 0
  let length = this.values.length
  while(true){
   let largest = index
   let leftIndex = 2*index+1
   let rightIndex = 2*index+2
   if(leftIndex<length && this.values[leftIndex] > this.values[largest]){
    largest = leftIndex
   }
   if(rightIndex<largest && this.values[rightIndex] > this.values[largest]){
    largest = rightIndex
   }

   if(largest === index) break
   [this.values[largest], this.values[index]] = [this.values[index], this.values[largest]]
   index = largest
  }
}

heapify(arr){
  let lastNonLeafNode = Math.floor(arr.length-1/2)
  for(let i=0 ; i>lastNonLeafNode ; i--){
    this.sinkDown()
  }
}

heapSort(){
  let sorted = []
  while(this.values.length){
    sorted.unshift(this.extractMax())
  }
  return sorted
}

print(){
  console.log(this.values)
}

}

const max = new MaxHeap()
max.insert(10)
max.insert(20)
max.insert(50)
max.print()