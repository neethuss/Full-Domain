// const arr = [1,2,3,4,5,6,7,8,9,10]
// let i,j,temp,size=9
// for(i=0,j=size;i<size/2;i++,j--){
//   temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }
// console.log(arr)

// function greet(){
//   console.log(`${this.name},${this.age}`)
// }
// const person1 = {name:"neethu",age:23}
// const person2 = {name:"ak",age:23}
// greet.call(person1)

// function greet(){
//   console.log(`${this.name},${this.age}`)
// }
// const person1 = {name:"neethu",age:23}
// const person2 = {name:"ak",age:23}
// const greetPerson1 = greet.bind(person1)
// greetPerson1()

// const fetchdata = ()=>{
//   return new Promise((res,rej)=>{
//       setTimeout(()=>{
//           res('suc')
//       })
//   })
// }
// fetchdata().then((msg)=>{
//   console.log(msg)
// })