//reverese an array
// const arr = [1,2,3,4,5,6,7,8,9,10]
// let i,j,temp
// for( i=0,j=(arr.length)-1;i<=[(arr.length)-1]/2;i++,j--){
//   temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] =temp
// }
// console.log(arr)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.reverse()
// console.log(arr);



// insert 0 after each even number
// const arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     arr.length+1==undefined
//     for(let j=arr.length-1;j>i+1;j--){
//       arr[j+1]=arr[j]
//     }
//     arr[i+1]=0
//     i++
//   }
// }
// console.log(arr);



// prime number
// const arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//   let flag=0
//   for(let j=2;j<=Math.sqrt(arr[i]);j++){
//     if(arr[i]%j==0){
//       flag=1
//       break
//     }
//   }
//   if(flag==0){
//     console.log(arr[i])
//   }
// }

// function isPrime(a){
//   for(let i=2;i<=Math.sqrt(a);i++){
//     if(a%i==0){
//       return false
//     }
//   }
//   return true
// }
// console.log(isPrime(8));



// even number
// const arr =[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     console.log(arr[i])
//   }
// }

// const arr = [1,2,3,4,5,6,7,8,9,10]
// function evenNumber(arr){
//   return arr.filter(number=>number%2==0)
// }
// console.log(evenNumber(arr));



// odd number./ 
// const arr = [1,2,3,4,5,6,7,8,9,10]
// function oddNumber(arr){
//   return arr.filter(Number=>Number%2!=0)
// }
// console.log(oddNumber(arr));



// unique number
// const arr = [1,2,3,4,2,5,6,5,7]
// const unique = [...new Set(arr)]
// console.log(unique);


// sum
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const sum = arr.reduce((a,b)=>{
//   return a+b
// })
// console.log(sum);



// sort in ascending order
// const arr = [5,2,9,7,1,3]
// const sort = arr.sort()
// console.log(sort);



// in descending order
// const arr = [5,2,9,7,1,3]
// const sort = arr.sort((a,b)=>b-a)
// console.log(sort);



// reverse
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const reversed = arr.reverse()
// console.log(reversed);
// console.log(arr);

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const reversed = [...arr].reverse()
// console.log(reversed);
// console.log(arr);



// switch
// let day = 6
// switch(day){
//   case 1:
//     case 2:
//       case 3:
//         case 4:
//           case 5:
//             console.log("Weekday");
//             break
//             case 6:
//               case 7:
//                 console.log("Weekend");
//                 break
//                 default:
//                   console.log("Invalid day");
// }



// if, else if
// const day =6
// if(day>=1 && day<=5){
//   console.log("Weekday");
// }else if(day==6 || day==7){
//   console.log("Weekend");
// }else{
//   console.log("Invalid day");
// }



// find largest using reduce
// const arr = [5,7,3,9,1,8]
// const large = arr.reduce((a,b)=>Math.max(a,b))
// console.log(large);


// find smallest using reduce
// const arr = [5,7,3,9,2,8]
// const small = arr.reduce((a,b)=>Math.min(a,b))
// console.log(small);



// deconstuction (object)
// const person = {name:"John",age:20,place:"TVM"}
// const {name,age,place} = person
// console.log(name);



// deconstruction (array)
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const [one,two,three,...rest] = arr
// console.log(two);


// const a = [
//   {fruit:"apple",
//   color:"red"},
//   {fruit:"orange", 
//   color:"green"}
// ]
// console.log(`${a[0].fruit}`);



// this
// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   id:"5566",
//   fullName:function(){
//     return this.firstName+""+this.lastName
//   }
// }
// console.log(person.fullName());

// let x=this
// console.log(x);

// "use strict"
// function myFunction(){
//   return this
// }
// console.log(myFunction());


// const person = {
//   firstName  : "John",
//   lastName   : "Doe",
//   id     : 5566,
//   myFunction : function() {
//     return this;
//   }
// };
// console.log(person.myFunction());



//push
// const a = ["apple","orange"]
// a.push("mango")
// console.log(a);



//pop
// const a = ["apple","orange","mango"]
// a.pop()
// console.log(a);


//unshift
// const a = ["ap","or",",ma"]
// a.unshift("ba")
// console.log(a);



//shift
// const a = ["ap","or","ma","ba"]
// a.shift()
// console.log(a);



//concat
// const a = [1,2,3,4,5]
// const b = [6,7,8,9,10]
// const c = a.concat(b)
// console.log(c);


// const a = [1,2,3,4,5]
// const b = [6,7,8,9,10]
// const c = [11,12,13,14,15]
// const d = [16,17,18,19,20]
// const e = a.concat(b,c,d)
// console.log(e);



//check array is empty
// const arr = []
// if(arr.length==0){
//   console.log("array is empty");
// }else{
//   console.log("array is not empty");
// }



//slice
// const a = [1,2,3,4,5,6,7,8,9,10]
// const b = a.slice(5,8)
// console.log(b);



//splice
// const a = [1,2,3,4,5,6,7,8,9,10]
// const b = a.splice(2,0,11,12)
// console.log(a);



//indexOf
// const a = [1,2,3,4,5,6,7,8,9,10]
// const b = a.indexOf(5)
// console.log(b);



//forEach
// const a = [1,2,3,4,5]
// a.forEach((num)=>console.log(num*2))



//map
// const a = [1,2,3,4,5]
// const b = a.map((num)=>num*2)
// console.log(b);






//Object in-built Methods


//Object.keys()
// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:30
// }
// const a = Object.keys(person)
// console.log(a);



//Object.values()
// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:30
// }
// const a = Object.values(person)
// console.log(a);



//Object.entries()
// const person = {
//   firstName:"John",
//     lastName:"Doe",
//     age:30
// }
// const a = Object.entries(person)
// console.log(a);



//object methods
// const person = {
//     firstName:"John",
//       lastName:"Doe",
//       age:30,
//       fullName:function(){
//         return this.firstName+""+this.lastName
//       }
//   }
//   console.log(person.firstName);
//   console.log(person.lastName);
//   console.log(person.age);
//   console.log(person.fullName());



//use strict
// "use strict"
// x=10



//octal literals
// "use strict"
// let num = 0123



//deleting variables
// "use strict"
// let person = {name:"John"}
// delete person.name


// "use strict"
// undefined = 5



//spread operator
// const originalArray = [1,2,3,4,5]
// const copiedArray = [...originalArray]
// console.log(copiedArray);

//merging arrays
// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const mergedArray = [...arr1,...arr2]
// console.log(mergedArray);



//rest operator
// function sum(...numbers){
//   let result = 0
//   for(const num of numbers){
//     result += num
//   }
//   return result
// }
// console.log(sum(1,2,3,4,5));



//shallow copy
// const original = {numbers : [1,2,3,4]}
// const shallowCopy = {...original}
// shallowCopy.numbers.push(5)
// console.log(original.numbers);



//deep copy
// const original = {numbers : [1,2,3,4]}
// const deepCopy = JSON.parse(JSON.stringify(original))
// deepCopy.numbers.push(5)
// console.log(original.numbers);
// console.log(deepCopy.numbers);




//JSON.stringify()
// const person = {
//   name : "John Doe",
//   age : 30
// }
// const jsonString = JSON.stringify(person)
// console.log(jsonString);



//JSON.parse()
// const jsonString = '{"name":"JOhn Doe","age":30}'
// const person = JSON.parse(jsonString)
// console.log(person.name);



//indexOf()
// const fruits = ["apple","orange","cherry"]
// const index = fruits.indexOf("orange")
// console.log(index);



//indexOf string
// const sentence = 'This is a simple sentence'
// const index = sentence.indexOf('simple')
// console.log(index);



//typeOf
// const number = 42
// console.log(typeof(number));

// const text = 'Hello World'
// console.log(typeof(text));

// const bool = true
// console.log(typeof(bool));

// const arr = [1,2,3,4,5]
// console.log(typeof(arr));

// const obj = {name:"John",age:30}
// console.log(typeof(obj));



//instanceof
// function Car(make,model){
//   this.make = make
//   this.model = model
// }
// const myCar = new Car('Toyota','Camry')
// console.log(myCar instanceof Car);



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



//pure functions
// function add(a,b){
//   return a+b
// }
// const result = add(2,3)
// console.log(result);



//side effects
// let total = 0
// function addTotal(amount){
//   total+=amount
// }
// addTotal(5)
// console.log(total);



//higher order functions
// function operate(a,b,operation){
//   return operation(a,b)
// }
// function add(a,b){
//   return a+b
// }
// function subtract(a,b){
//   return a-b
// }
// const result1 = operate(3,4,add)
// console.log(result1);
// const result2 = operate(8,5,subtract)
// console.log(result2);



//first class function

//assigned to variables
// const sayHello = function(){
//   console.log('Hello World');
// }

// //passed as arguments
// function executeFunction(func){
//   func()
// }
// executeFunction(sayHello)

//retured from functions
// function createMultiplier(factor){
//   return function(number){
//     return number*factor
//   }
// }
// const double = createMultiplier(2)
// console.log(double(5));



//callback functions
// function greet(name,callback){
//   console.log(`hello, ${name}`);
//   callback()
// }
// function sayGoodebye(){
//   console.log("Goodbye");
// }
// greet("Neethu",sayGoodebye)



//callback hell - callback pyramid



//synchronous
// console.log('Start');
// function syncfunction(){
//   for(let i=0;i<3;i++){
//     console.log('Sync Operstion'+i);
//   }
// }
// syncfunction()
// console.log('End');



//asynchronous
// console.log('Start');
// function asyncFunction(){
//   setTimeout(()=>console.log("Async Operation"),2000)
// }
// asyncFunction()
// console.log('End');



//single thread
// console.log('Start');
// function singleThreaded(){
//   for(let i=0;i<3;i++){
//     console.log('Task'+i);
//     for(let j=0;j<100;j++){
//       console.log('Task2'+j);
//     }
//   }
// }
// singleThreaded()
// console.log('End');



//multi thread
// console.log('Start');
// function multiThreaded(){
//   for(let i=0;i<3;i++){
//     setTimeout(()=>console.log('Task'+i),1000*i)
//   }
// }
// multiThreaded()
// console.log('End');



//promise
// const fetchData = ()=> new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     const data = {message:"Data fetched successfully"}
//     resolve(data)
//   },2000)
// })
// fetchData()
// .then((result)=>{
//   console.log(result.message);
// })
// .catch((error)=>{
//   console.log(error);
// })


//async await
// async function fetchDataAsync(){
//   try{
//     const result = await fetchDataAsync()
//     console.log(result.message);
//   }catch(error){
//       console.log(error);
//     }
// }
// fetchDataAsync()



//promise methods

//then()
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Data fetched successfully" };
//       resolve(data);
//     }, 2000);
//   });
// };
// fetchData()
// .then((result)=>console.log(result.message))

//catch()
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Data fetched successfully" };
//       resolve(data);
//     }, 2000);
//   });
// };
// fetchData()
// .then((result)=>console.log(result.message))
// .catch((error)=>console.log('error',error))

//finally()
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { message: "Data fetched successfully" };
//       resolve(data);
//     }, 2000);
//   });
// };
// fetchData()
// .then((result)=>
// console.log(result.message))
// .catch((error)=>
// console.log('error',error))
// .finally(()=>
// console.log('cleanup code here'))



// call()
// function a(){
//     return this.name;
// }
// const p={
//     name:"ak"
// }
// console.log(a.call(p));



//global execution -Namaste javascript

// getName()
// console.log(x);
// var x = 7
// function getName(){
//   console.log("Neethu");
// }

// var x = 1
// a()
// b()
// console.log(x);
// function a(){
//   var x = 10
//   console.log(x);
// }
// function b(){
//   var x = 100
//   console.log(x);
// }

// console.log(a);
// var a = 7 
// console.log(a);

// function a(){
//   console.log(b);
// }
// var b = 10
// a()




//generator function
// function* generateEvenNumbers(){
//   let evenNumber = 2
//   while(true){
//     yield evenNumber
//     evenNumber+=2
//   }
// }
// const evenNumberGenerator = generateEvenNumbers()
// console.log(evenNumberGenerator.next().value);
// console.log(evenNumberGenerator.next().value);
// console.log(evenNumberGenerator.next().value);
// console.log(evenNumberGenerator.next().value);
// console.log(evenNumberGenerator.next().value);









//node

//application-level middleware
// const express = require('express')
// const app = express()
// app.use(express.json())


//router-level middlewware
// const express = require('express')
// const router = express.Router()
// router.use((req,res,next)=>{
//   console.log("router middleware");
//   next()
// })


//error handling middleware
// app.use((err,req,res,next)=>{
//   console.log(err);
//   res.status(500).send('internal server error')
// })


//third-party middleware
// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// app.use(morgan('dev'))


//custom middleware
// function customMiddleware(req,res,next){
//   console.log('custom middleware');
//   next()
// }
// app.use(customMiddleware)



// app.get('/users/:id',(req,res)=>{
//   const userId = req.params/id 
//   res.send(`User ID: ${userId}`)
// })

// const express = require('express')
// const app = express()

// app.get('/',(req,res,next)=>{
//   const a = req.query.name
//   console.log(a)
//   res.send('haii')
// })

// app.get('/:id',(req,res,next)=>{
//   const a = req.params.id
//   console.log(a)
//   res.send('haii')
// })
 
// app.listen(4000,()=>{
//   console.log('port connected')
// })

// const promise =new Promise((res,rej)=>{
//   const a = 5;
//   if(a==5){
//     res("succes")
//   }else{
//     rej("not succes")
//   }
// })

// promise.then((mes)=>{
//   console.log("yes "+mes);
// })
// .catch((msg)=>{
//   console.log("no");
// })


// function a(){
//   return new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("success")
//   },1000)
//   })
// }
// async function b(){
//   const c = await a()
//   console.log(c);
// }
// b()


// const promise1 = new Promise((res,rej)=>{
//   const a = 1
//   if(a==1){
//     res("success")
//   }else{
//     rej("failed")
//   }
// })

// const promise2 = new Promise((res,rej)=>{
//   const b =5
//   if(b==5){
//     res("success")
//   }else{
//     rej("failed")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   const c=5
//   if(c==5){
//     res("success")
//   }else{
//     rej("failed")
//   }
// })
 
// Promise.all([promise1,promise2,promise3]).then((msg)=>{
//   console.log("all" +msg);
// })
// .catch((err)=>{
//   console.log("all" +err);
// })




// const fruits = ["apple","orange","jackfruit","mango"]
// const longest = fruits.reduce((currentLongest,fruit)=>{
//   if(currentLongest.length>fruit.length){
//     return currentLongest
//   }else{
//     return fruit
//   }
// })
// console.log(longest);




// class person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
// }



// const person = class{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
// }


// const a = {num:[1,2,3,4]}
// const b = {...a}
// b.num.push(5)
// console.log(a);
// console.log(b);


// const a = {num:[1,2,3,4,5]}
// const b = JSON.parse(JSON.stringify(a))
// b.num.push(6)
// console.log(a);
// console.log(b);


// const a = [1,2,3,4,5]
// const b = a.map((num)=>{
//   return num+2
// })
// console.log(a);
// console.log(b);



//unique
// const a = [3,2,3,4,2,5]
// const b = [...new Set(a)]
// console.log(b);



//pure function
// num1=2
// num2=3
// function a(){
//   sum=num1+num2
//   console.log(sum)
// }
// a()0

// a=2
// a+=2;


//optional chaining
// const obj = {name:"Neethu",a:{
//   age:23
// }}
// console.log(obj.a.age.h??"kk");


// const user = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state:"sss",
//     country: "USA"
//   }
// };
// console.log(user.address.state??"kerala");



// const a = {name:"neethu"}
// const aa = {name:"ak"}

// function b(){
//   return this.name
// }

// console.log(b.call(aa));


// function num (a,b){
//   return a+b
// }
// const numbers = [1,2]
// console.log(num.apply(null,numbers));




// const a = "12345"
// const b = [1,2,3,4,5]
//  const b = a.split("")
// const a = b.join()
// console.log(a);

// const a = "123458"
// const b = a.split("")
// console.log(b);


//prototype
// function Person(firstName,lastName){
//   this.firstName=firstName
//   this.lastName=lastName
// }
// Person.prototype.getFullName = function(){
//   return this.firstName+" "+this.lastName
// }
// const john = new Person("John","Doe")
// console.log(john.getFullName());


//closure
// function a(){
//   let c = 10
//    function b(){
//     console.log(c);
//   }
// return b()
// }
// a()



// const a = [1,2,3,4,5]
// const b = a.map((num)=>num*2)
// console.log(b);

// const a = [1, 2, 3, 4, 5];
// const b = [];

// a.forEach((num) => {
//   b.push(num * 2);
// });

// console.log(b);



// const a = 5
// const b= a.toString()
// console.log(typeof(b));



// let a = 10;
// let b = 20;

// a = a+b;
// b = a-b;
// a = a-b;

// console.log(a);
// console.log(b);


// const a = [1,2,3,4,5,6,7,8,9,10]
// const b = a.filter((num)=>num%2==0)
// console.log(b);


// const a = [1,2,3]
// const b = [4,5,6]
// const c = [...a,...b]
// console.log(c);




// const user = {
//   id: 1,
//   name: 'Alice',
//   address: {
//     street: '123 Main St',
//     city: 'Exampleville',
//   },
// };

// const street = user?.address?.street; 
// const zipCode = user?.address?.zipCode??123; 

// console.log(street);
// console.log(zipCode);


// promise in setTimeout
// const promise = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("success")
//   },1000)
// })
// promise.then((msg)=>{
//   console.log(msg);
// })
// .catch((mes)=>{
//   console.log(mes);
// })




// currying
// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(add(1)(2)(3));


//setTimeout()
// setTimeout(()=>{
//   console.log("hello");
// },6000)


//prototype
// function a(name){
//   this.name=name
// }
// a.prototype.hello = function (){
//   console.log(`${this.name}`);
// }
// a1 = new a("neethu")
// a1.hello()


//IIFE
// (function(){
//   let a =10
//   let b =20
//   console.log(a+b);
// })()



//async await
// function a(){
//   return new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("success")
//   },1000)
//   })
// }
// async function b(){
//   const c = await a()
//   console.log(c);
// }
// b()


// const interval = setInterval(()=>{
//   console.log('hi');
// },1000)

// setTimeout(()=>{
//   clearInterval(interval)
// },8000)



//impure
// let total = 0
// function a(value){
//   total+=value
// }
// a(5)
// console.log(total);



//Object.keys()
// const a = {name:"Neethu",age:23}
// const keys = Object.keys(a)
// console.log(keys);



//Object.values()
// const a = {name:"Neethu",age:23}
// const values = Object.values(a)
// console.log(values);


//Object.entries()
// const a = {name:"Neethu",age:23}
// const entries = Object.entries(a)
// console.log(entries)


//Object.assign(target,source)
// const x = {a:1}
// const y = {b:2}
// Object.assign(x,y)
// console.log(x);


// function a(){
//   let x = 1
//   function b (){
//     console.log(x);
//   }
//   return b()
// }



// const a = [1,2,3,4,5]
// const b = [6,7,8,9,10]

// const c = []

// for(i=0;i<a.length;i++){
//   c.push(a[i])
// }
// for(i=0;i<b.length;i++){
//   c.push(b[i])
// }
// console.log(c);


// const a = [1,2,3,4,5]
// const b = a.map((num)=>{
//   return num**3
// })
// .filter((num)=>{
//    return num%2==0
// })
// .reduce((a,b)=>a+b)
// console.log(b);


// const a = [
//   {name:"neethu",
// age:23},
// {name:"nischal",
// age:21}
// ]
// for(const obj of a){
//   const b = Object.keys(obj)
//   console.log(b);
// }


// const a = [
//     {name:"neethu",
//   age:23},
//   {name:"nischal",
//   age:21}
//   ]
//   for(const obj of a){
//     const b = Object.values(obj)
//     console.log(b);
//   }



// const a = [
//     {name:"neethu",
//   age:23},
//   {name:"nischal",
//   age:21}
//   ]
//  a.forEach((ele)=>{
//   console.log(ele.name);
//  })



// const a = ["apple","orange","mango"]
// const b = a.map((element)=>element.toUpperCase())
// console.log(b);


// const a = "  mango"
// const b = a.trim()
// console.log(a);
// console.log(b);


// const a = [1,2,3,4,5]
// const b = a.lastIndexOf(4)
// console.log(b);


// const a = {num:[1,2,3,4,5]}
// const b = a.num.reduce((x,y)=>x+y)
// console.log(b);



// setTimeout(()=>{
//   console.log("Timer");
// },5000)

// function x(y){
//   console.log("x");
//   y()
// }
// x(function y(){
//   console.log("y");
// })



// const arr = [1,2,3,1]

// let i ,j
//  for(i=0;i<arr.length;i++){
//      for(j=i+1;j<arr.length;j++){
//          if(arr[i]==arr[j]){
//           console.log("true");
//           break
//          }
//          else{
//           console.log("false");
//           break
//          }
    
//      }
// break
//  }



// const arr = [{firstname:"neethu ",lastname:"S A",age:23},
// {firstname:"akshara ",lastname:"B S",age:20},
// {firstname:"Navya ",lastname:"Krishnan",age:20}]

// const output = arr.filter((value)=>{return value.age==20}).map((value)=>{return value.firstname})

// console.log(output);

// let x=5
// let y="5"
// if(x===y){
//   console.log("yes");
// }
// else{
//   console.log("no");
// }


//create a counter , using closure and if the increment
//  function call counter increment by one nad if decrement 
// function is called then then decement by one and if the reset 
// is called then counter shoukd reset

// function counter(){
//   let count = 0

//   function increment(){
//     count+=1;
//   }
//   function decrment(){
//     count--
//   }
//   function reset(){
//     count=0
//   }
//   function getcount(){
//     return count
//   }
//   return{
//     increment,decrment,reset,getcount
//   }
// }
// let result = new counter
// result.increment()
// result.increment()
// console.log(result.getcount());
// result.reset()
// console.log(result.getcount());
// result.increment()
// console.log(result.getcount());

// let a = [4,8,2,9,1,3]

// let res = a.reduce((ac,va)=>{
//   if(ac>va){
//     return ac
//   }else{
//     return va
//   }
// })

// console.log(res);