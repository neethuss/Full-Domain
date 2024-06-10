class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
    for(let i=0 ; i<key.length ; i++){
      total += key.charCodeAt(i)
    }
    return total%this.size
  }

  insert(key, value){
    const index = this.hash(key)
    this.table[index] = value
  }

  remove(key){
    const index = this.hash(key)
    this.table[index] = undefined
  }

  display(){
    for(let i=0 ; i<this.table.length ; i++){
      if(this.table[i]){
        console.log(i, this.table[i])
      }
    }
  }

}

const table = new HashTable(10)
table.insert('name','neethu')
table.insert('age',24)
table.insert('name','samad')
table.insert('place','tvm')
table.display()