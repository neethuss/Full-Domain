//fibonacci sequence - each number is the sum of preceeding ones
// function fibonacci(n){
//   let fib = [0,1]
//   for(let i=2 ; i<n ; i++){
//     fib[i] = fib[i-1] + fib[i-2]
//   }
//   return fib
// }
// console.log(fibonacci(7))



//factorial
// function factorial(n){
//   let fact = 1
//   for(let i=2 ; i<=n ; i++){
//     fact = fact*i
//   }
//   return fact
// }
// console.log(factorial(5))


//prime number
// function isPrime(n){
//   if(n < 2){
//     return false
//   }else{
//     for(let i=2 ; i<=n/2 ; i++){
//       if(n%i === 0){
//         return false
//       }
//     }
//     return true
//   }
// }
// console.log(isPrime(7))


//power of two
// function powerOfTwo(n){
//   if(n < 1){
//     return false
//   }else{
//     while(n > 1){
//       if(n%2 != 0){
//         return false
//       }
//       n = n/2
//     }
//     return true
//   }
// }