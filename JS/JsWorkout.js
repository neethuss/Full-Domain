//prototype
// function Person(name){
//   this.name = name
// }
// Person.prototype.sayHello = function(){
//   console.log(`Hello, ${this.name}`)
// }
// let person1 = new Person('Neethu')
// person1.sayHello()


//polyfill
// if(!Array.prototype.pop){
//   Array.prototype.pop = function(){
//     let lastElement = this[this.length-1]
//     this.length--
//     return lastElement
//   }
// }
// let arr = [1,2,3,4,5]
// console.log(arr.pop())


//destructuring
// let person = {name:'neethu', age:24}
// const {name, age} = person
// console.log(name)


//default parameters
// function say(par1 = 'hello'){
//   console.log(par1)
// }
// say('hai')
// say()


//call
// function greet(greeting){
//   console.log(greeting,this.name)
// }
// const person = {name:'neethu'}
// greet.call(person,'Hello')

// const person = {
//   name : 'neethu',
//   sayName : function(){
//     console.log(`My name is ${this.name}`)
//   }
// }
// const person1 = {name : 'akshara'}
// person.sayName.call(person1)


//apply
// function greet(greeting,punctuation){
//   console.log(greeting, this.name, punctuation)
// }
// const person = {name:'Neethu'}
// greet.apply(person, ["Hello", '!'])


//bind
// function greet(greeting, punctuation){
//   console.log(greeting, this.name, punctuation)
// }
// const person = {name: 'Neethu'}
// const greetPerson = greet.bind(person)
// greetPerson('Hello', '.')
// greetPerson('Hai', '!')


// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const merged = [...array1,...array2]
// console.log(merged)


// function sum(...nums){
//   let result = 0
//   for(const num of nums){
//     result += num
//   }
//   return result
// }
// console.log(sum(1,2,3))
// console.log(sum(1,2,3,4,5,6,7))


// const original = { numbers: [1, 2, 3] }
// let shallowCopy = {...original}
// shallowCopy.numbers.push(4)
// console.log(original)
// console.log(shallowCopy)


// const original = { numbers: [1, 2, 3] }
// const deepCopy = JSON.parse(JSON.stringify(original))
// deepCopy.numbers.push(4)
// console.log(original)
// console.log(deepCopy)


//function composition
// function addTwo(x){
//   return x+2
// }
// function multipleByThree(x){
//   return x*3
// }
// const addTwoAndMultipleByThree = (x)=>multipleByThree(addTwo(x))
// const result = addTwoAndMultipleByThree(5)
// console.log(result);


// function operate(a,b, operation){
//   return operation(a,b)
// }
// function add(a,b){
//   return a+b
// }
// function subtract(a,b){
//   return a-b
// }
// const res1 = operate(5,3, add)
// console.log(res1)
// const res2 = operate(5,3, subtract)
// console.log(res2)


// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); 
// }
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye); 


// const fetchData = () => new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     const data = {message : "Data fetched successfully"}
//     resolve(data)
//   },2000)
// })
// fetchData()
// .then((result) => {
//   console.log(result.message)
// })
// .catch((error)=>{
//   console.log(error)
// })


// const asyncFunction = () => new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     const data = {message:'data suc'}
//     resolve(data)
//   },2000)
// }) 
// async function fetchDataAsync(){
//   try {
//     const res = await asyncFunction()
//     console.log(res.message)
//   } catch (error) {
//     console.log(error)
//   }
// }



// const promise1 = new Promise((res,rej)=>{
//   let a=1,b=1
//   if(a==b){
//     res("suc1")
//   }
//   else{
//     rej("fail1")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let c=2,d=2
//   if(c==d){
//     res("suc2")
//   }
//   else{
//     rej("fail2")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let e=3,f=3
//   if(e==f){
//     res("suc3")
//   }
//   else{
//     rej("fail3")
//   }
// })
// Promise.allSettled([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


// const person = {
//   name:"neethu",
//   age:23,
//   address:{
//     place:"balaramapuram",
//     city:"thiruvananthapuram"
//   }
// }
// console.log(person.con.name);
// console.log(person.con?.name);


// const user = {
//   name: null,
//   age: 25,
// };

// console.log(user.name??'neethu')


// const map = new Map()
// map.set('name','neethu')
// console.log(map.get('name'))


// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(1)


// function* gene(){
//   let num =1
//   while(true){
//     yield num
//     num++
//   }
// }
// const mygen = gene()
// console.log(mygen.next().value)
// console.log(mygen.next().value)
// console.log(mygen.next().value)
// console.log(mygen.next().value)


// function add(x,y,z){
//   return x+y+z
// }
// function curryAdd(x){
//   return function(y){
//     return function(z){
//       return x+y+z
//     }
//   }
// }
// const adds = curryAdd(2)(3)(4)
// console.log(adds)


// console.log('start')
// const a = setTimeout(()=>{
//   console.log('jdi')
// },2000)
// console.log('end')
// clearTimeout(a)


// let count = 0 
// console.log('start')
// const intervalIs = setInterval(()=>{
//   count++
//   console.log(count)
//   if(count > 5){
//     clearInterval(intervalIs)
//     console.log('stopped')
//   }
// },1000)