//prototype...................................................................
// let personPrototype={
//   greet:function(){
//     console.log(`${this.name },${this.age}`);
//   }
// }
// let person1 = Object.create(personPrototype)
// person1.name="neethu"
// person1.age=23
// person1.greet()

// let person2 = Object.create(personPrototype)
// person2.name="akshara"
// person2.age=18
// person2.greet()



// const person = {
//   name:"jon"
// }
// console.log(person.hasOwnProperty('name'));

// console.log(person.__proto__);

// function Person(age){
//   this.age=age
// }
// Person.prototype.name='jon'
// const jon = new Person(20)
// console.log(jon);

//class and constructor........................................................
// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   greet(){
//     console.log(`${this.name},${this.age}`);
//   }
// }
//  let person1 = new Person("neethu",23)
//  person1.greet()



//polyfill.......................................................................
// if(!Array.prototype.pop){
//   Array.prototype.pop=function(){
//     let lastElement=this[this.length-1]
//     this.length--
//     return lastElement
//   }
// }
// let arr = [1,2,3,4]
// console.log(arr.pop());



//call..........................................................................

// function greet(){
//   console.log(`${this.name}`)
// }
// const person1 = {name:"nethu"}
// const person2 = {name:"akshara"}

// greet.call(person1)


//this in arrow function
// const obj = {
//   value:42,
//   getValue:function(){
//     return ()=>{
//       console.log(this.value);
//     }
//   }
// }
// const getFunc=obj.getValue()
// getFunc()


//default parameter.....................................................................

// function greet(name="neethu"){
//   console.log(`${name}`);
// }
// greet("akshara")



//rest.................................................................................

// function sum(...numbers){
//   return numbers.reduce((a,b)=>a+b)
// }
// const result = sum(1,2,3,4,5,6,7,8,9,10)
// console.log(result);


//spread............................................................................

// const arr1 = [1,2,3]
// const arr2 = [...arr1,4,5,6]
// console.log(arr2);



//promise...........................................................................

// const fetchData = ()=>{
//   return new Promise((resolve,reject)=>{
//     if(success){
//       resolve(data)
//     }
//     else{
//       reject(error)
//     }
//   })
// }



//call........................................................................

// const person = {
//   name:"neethu",
//   greet:function(msg){
//     console.log(`${this.name},${msg}`);
//   }
// }
// // // person.greet()

// const anotherPerson = {name:"akshara"}
// person.greet.call(anotherPerson,"hello")



//apply............................................................................

// const person = {
//   name:"neethu",
//   greet:function(msg1,msg2){
//     console.log(`${this.name},${msg1},${msg2}`);
//   }
// }
// const anotherPerson = {name:"akshara"}

// person.greet.apply(anotherPerson,["hello","user"])



//bind....................................................................................

// const person = {
//   name:"neethu",
//   greet:function(msg){
//     console.log(`${this.name},${msg}`);
//   }
// }
// const anotherPerson = {name:"akshara"}

// const greetAkshara = person.greet.bind(anotherPerson,"haiii")
// greetAkshara()


// "use strict"


// const original = {numbers:[1,2,3,4]}
// const shallowCopy = {...original}
// shallowCopy.numbers.push(5)
// console.log(original);
// console.log(shallowCopy);

// const deepCopy = JSON.parse(JSON.stringify(original))
// deepCopy.numbers.push(5)
// console.log(original);
// console.log(deepCopy);



//JSON.stringify()..........................................................................
// const person = {
//   name:"Neethu",
//   age:23
// }
// const jsonString=JSON.stringify(person)
// console.log(jsonString);



//JSON.parse()....................................................................
// const jsonString = '{"name":"neethu","age":23}'
// const person = JSON.parse(jsonString)
// console.log(person);


//math functions...........................................................................

//Math.round()
// const a = Math.round(4.7)
// console.log(a);

//Math.ceil()
// const a = Math.ceil(4.2)
// console.log(a);

//Math.floor()
// const a = Math.floor(4.7)
// console.log(a);

//Math.abs()
// const a = Math.abs(-3)
// console.log(a);

//Math.random()
// const a = Math.random()
// console.log(a);

//Math.min()
// const a = Math.min(4,7,9,3,5)
// console.log(a);

//Math.max()
// const a = Math.max(4,7,9,3,5)
// console.log(a);

//Math.pow(number,power)
// const a = Math.pow(2,3)
// console.log(a);

//Math.sqrt()
// const a = Math.sqrt(16)
// console.log(a);

//Math.PI
// const a = Math.PI
// console.log(a);


//indexOf.......................................................
// const fruits = ["apple","orange","cherry"]
// const indexOfOrange = fruits.indexOf('orange')
// console.log(indexOfOrange);

// const a = [1,3,4,57,42]
// const b = a.indexOf(57)
// console.log(b);



//typeof............................................................................................
// const num = 42
// const text = "hello"
// const bool = true
// const arr = [1,2,3,4,5]
// const obj = {name:"neethu",age:23}

// console.log(typeof num);
// console.log(typeof text);
// console.log(typeof bool);
// console.log(typeof arr);
// console.log(typeof obj);

// const b =Array.isArray(obj)
// console.log(b);


//instanceof............................................................................................
// function Car(make,model){
//   this.make=make
//   this.model=model
// }
// const myCar = new Car('Toyota','Camry')
// console.log(myCar instanceof Car);


//function composition..........................................................................................
// function addTwo(x){
//   return x+2
// }
// function multipleByThree(x){
//   return x*3
// }
// const addTwoAndMultipleByThree = (x) => multipleByThree(addTwo(x))
// console.log(addTwoAndMultipleByThree(5));


//pure functions..........................................................................................................
// function add(a,b){
//   return a+b
// }
// console.log(add(5,4));


//side effects....................................................................................................
// let total = 0
// function addTotal(amount){
//   total+=amount
// }
// addTotal(5)
// console.log(total);


//higher order function................................................................................................
// function operate(a,b,operation){
//   return operation(a,b)
// }
// function add(a,b){
//   return a+b
// }
// function subctract(a,b){
//   return a-b
// }
// const result1 = operate(3,4,add)
// console.log(result1);


//first class function.................................................................................................

//assigned to variables
// const sayHello = function(){
//   console.log("hello world");
// }
// sayHello()

//passed as arguments
// function executeFunction(func){
//   func()
// }

//returned from functions


//callback funtions......................................................................................
// function greet(name,callbck){
//   console.log(`${name}`);
//   callbck()
// }
// function sayGoodbye(){
//   console.log("Goodbye");
// }
// greet("neethu",sayGoodbye)


//callback hell.........................................................................................


//synchronous.......................................................................................................
// console.log("start");
// function syncFunction(){
//   for(let i=0;i<3;i++){
//     console.log("sync operation" +i);
//     }
// }
// syncFunction()
// console.log("end");


//asynchronous...........................................................................................
// console.log("start");
// function asyncFunction(){
//   setTimeout(()=>{
//     console.log("async operation");
//   },2000)
// }
// asyncFunction()
// console.log("end");


// console.log("Start");
// function singleThreaded() {
//     for (let i = 0; i < 3; i++) {
//         console.log("Task " + i);
//         // Simulate a slow task
//         for (let j = 0; j < 100000000; j++) {}
//     }
// }
// singleThreaded();
// console.log("End");

// console.log("Start");
// function multiThreaded() {
//     for (let i = 0; i < 3; i++) {
//         // Simulate a slow task with a separate thread
//         setTimeout(() => {
//             console.log("Task " + i);
//         }, 1000 * i); // Tasks start at different times
//     }
// }
// multiThreaded();
// console.log("End");
1

//promise..............................................................................................
// const promise  = new Promise((res,rej)=>{
//   let i=8
//   if(i>0){
//     res("success")
//   }
//   else{
//     rej("fail")
//   }
// })
// promise.then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })



//async await.........................................................................................
// function a(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       res("j")
//     },2000)
//   })
// }
// async function b(){

//   const c = await a()
//   console.log(c);


// }
// b()


//Promise.all()..................................................................................

// const promise1 = new Promise((res,rej)=>{
//   let a=1,b=1
//   if(a==b){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let c=2,d=2
//   if(c==d){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let e=3,f=3
//   if(e==f){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// Promise.all([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//Promise.race()............................................................................
// const promise1 = new Promise((res,rej)=>{
//   let a=1,b=1
//   if(a==b){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let c=2,d=2
//   if(c==d){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let e=3,f=3
//   if(e==f){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// Promise.race([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//Promise.any()......................................................................................
// const promise1 = new Promise((res,rej)=>{
//   let a=1,b=1
//   if(a==b){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let c=2,d=1
//   if(c==d){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let e=3,f=1
//   if(e==f){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// Promise.any([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//Promise.allSettled()
// const promise1 = new Promise((res,rej)=>{
//   let a=1,b=2
//   if(a==b){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let c=2,d=2
//   if(c==d){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let e=3,f=3
//   if(e==f){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// Promise.allSettled([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//event loop..............................................................................
// console.log("start");
// setTimeout(()=>{
//   console.log("timeout callback");
// },0)
// Promise.resolve().then(()=>{
//   console.log("promise resolved");
// })
// console.log("end");


//IIFE...................................................................................
// var a= 2
// console.log(a);
// (function(){
//  var a= 10
//  var b=20
//   console.log(a+b);
// })()
// console.log(a);


// //optional chaining..................................................................
// const person = {
//   name:"neethu",
//   age:23,
//   address:{
//     place:"balaramapuram",
//     city:"thiruvananthapuram"
//   }
// }
// console.log(person.con?.);

// const user = {
//   name:"neethu",
//   getProfile:()=>{
//     return{
//       age:23,
//       email:"neethu@gmail.com"
//     }
//   }
// }
// console.log(user.getProfile?.().email);



//nullish coalescing.............................................................
// const user={
//   name:null,
//   age:23
// }
// const defaultName=user.name??"guest"
// console.log(defaultName);

// function greetUser(userName){
//   const nameToGreet=userName??"guest"
//   console.log(`hello,${nameToGreet}`);
// }
// greetUser()


//Map..........................................................................
// const myMap = new Map()
// myMap.set('name','neethu')
// myMap.set('age',23)
// console.log(myMap.get('name'));


//Set.........................................................................
// const mySet = new Set()
// mySet.add(1)
// mySet.add(2)
// mySet.add(1)
// console.log(mySet);
// console.log(mySet.has(1));
// console.log(mySet.has(3));



// //map.........................................................................
// const numbers = [1,2,3,4,5]
// const a = numbers.map((num)=>num*2)
// console.log(a);


//filter............................................................................
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const a = numbers.filter((num)=>num%2==0)
// console.log(a);


//reduce..........................................................................
// const numbers = [1,2,3,4,5]
// const a = numbers.reduce((ac,cu)=>ac+cu)
// console.log(a);


// //object shorthand.................................................................
// const name="neethu"
// const age=23

// // const person={
// //   name:name,
// //   age:age
// // }
// // console.log(person);

// const person ={
//   name,
//   age
// }
// console.log(person);


//regular vs arrow..................................................................

//this ket=yword
// const obj={
//   name:"neethu",
//   sayHello:function(){
//     console.log(`Hello, ${this.name}`);
//   }
// }
// obj.sayHello()

// const obj={
//   name:"neethu",
//   sayHello:()=>{
//     console.log(`Hello, ${this.name}`);
//   }
// }
// obj.sayHello()


//argument object
// function regularFunction(){
//   console.log(arguments);
// }
// regularFunction(1,2,3)

// const arrowFunction = ()=>{
//   console.log(arguments);
// }
// arrowFunction(1,2,3)


//generator................................................................
// function *myGenerator(){
//   yield 1
//   yield 2
//   yield 3
// }
// const generator = myGenerator()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function *myGenerator(){
//   let evenNumber=2
//   while(true){
//     yield evenNumber
//     evenNumber+=2
//   }
// }
// const generator = myGenerator()
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


//currying..................................................................
// function add(x,y){
//   return x+y
// }
// console.log(add(2,3));

// function add(x){
//   return function (y){
//     return x+y
//   }
// }
// console.log(add(2)(3));


//to stop setTimeout()...........................................................
// console.log("start");
// const timeout = setTimeout(()=>{
//   console.log("runs after 3 seconds");
// },3000)
// clearTimeout(timeout)
// console.log("end");


//to stop setInterval().....................................................
// console.log("start");
// const interval = setInterval(()=>{
//   console.log("runs every 2 sec");
// },2000)
// clearInterval(interval)
// console.log("end");

// console.log("start");
// const interval = setInterval(()=>{
//   console.log("runs every 2 sec");
// },2000)
// setTimeout(()=>{
//   clearInterval(interval)
// },8000)
// console.log("end");


// const a = "anj,afj,ajdf"
// const res = a.split(',')
// console.log(res);

// const a = ['app','bna','mfdj']
// const res = a.join()
// console.log(res);