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
    let index = this.hash(key)
    let i=1
    while(this.table[index] != undefined){
      if(this.table[index][0] === key){
        this.table[index][1] = value
        return
      }else{
        index = (index+(i**2))%this.size
        i++
      }
    }
    this.table[index] = [key, value]
  }


}