const arr = [1,2,3,4,5]
// let i ,sum=0,count=0,average
// for(i=0;i<arr.length;i++){
//   if(arr[i]%2!=0){
//     sum=sum+arr[i]
//     count++
//   }
// }
// average=sum/count
// console.log(average);

const a = arr.filter((value)=>value%2!=0)
const b =a.reduce((x,y)=>x+y)
let average = b/a.length
console.log(average);