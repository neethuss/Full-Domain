//flatten an array
// let arr = [4,[5,7],5,8,[9,3,1]]
// let a = []
// for(let i=0 ; i<arr.length ; i++){
//   if(arr[i].length>1){
//     for(let j=0 ; j<arr[i].length ; j++){
//       a.push(arr[i][j])
//     }
//   }else{
//     a.push(arr[i])
//   }
// }
// console.log(a)


//duplicates in a string
let str = 'neethu'
let occ = {}
for(const char of str){
  if(!occ[char]){
    occ[char] = 1
  }else{
    occ[char]++
  }
}
let unique = []
for(const char in occ){
  if(occ[char] != 1){
    unique.push(char)
  }
}
console.log(unique)


