let stringsArray = ["apple", "banana", "kiwi", "strawberry", "orange"];
const a = stringsArray.reduce((acc, cur)=>{
  // if(acc.length > cur.length){
  //   return acc
  // }else{
  //   return cur
  // }
  return acc.length > cur.length ? acc : cur
})
console.log(a)