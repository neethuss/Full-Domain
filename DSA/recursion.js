//recursive fibonacci sequence
// function recursiveFibonacci(n){
//   if(n<2){
//     return n
//   }
//   return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(6))


//recursive factorial
// function recursiveFactorial(n){
//   if(n === 0){
//     return 1
//   }
//   return n * recursiveFactorial(n-1)
// }
// console.log(recursiveFactorial(5))


//sum of elements in an array
// function recursiveSum(arr, n){
//   if(n<1){
//     return 0
//   }
//   return arr[n-1] + recursiveSum(arr, n-1)
// }
// console.log(recursiveSum([3,7,1,4], 4))


//reverse a string
function recursiveReverse(name, n){
  if(n < 1){
    return ''
  }
  return name[n-1] + recursiveReverse(name, n-1)
}
console.log(recursiveReverse('neethu', 6))