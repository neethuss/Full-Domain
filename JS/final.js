//1.........................................................................................................
// const arr = [{firstname:"neethu ",lastname:"S A",age:23},
// {firstname:"akshara ",lastname:"B S",age:20},
// {firstname:"Navya ",lastname:"Krishnan",age:20}]

// const name = arr.map((value)=>{
//   return value.firstname + value.lastname
// })
// console.log(name);

// const result = arr.filter((value)=>value.age==20).map((value)=>value.firstname + value.lastname)
// console.log(result);7


//2...........................................................................................................
// const arr = [5,3,8,1,9,]
// const result = arr.reduce((a,b)=>{
//   if(a<b){
//     return a
//   }
//   else{
//     return b
//   }
// })
// console.log(result);


//..............................................................................................................
// const arr = ["apple","orange","banana"]
// const result = arr.push("cherry")
// console.log(result);
// console.log(arr);


//...............................................................................................................
// const arr = ["apple","orange","banana"]
// const result = arr.pop()
// console.log(result);
// console.log(arr);


//...............................................................................................................
// const arr = ["app","ban","orn"]
// const result = arr.unshift("che")
// console.log(result);
// console.log(arr);


//.................................................................................................................
// const arr = ["app","ban","orn"]
// const result = arr.shift()
// console.log(result);
// console.log(arr);


//.................................................................................................................
// const arr = ["app","ban","orn"]
// const result = arr.indexOf("orn")
// console.log(result);


//................................................................................................................
// const arr = ["app","ban","orn"]
// const result = delete(arr[2])
// console.log(result);
// console.log(arr);


//forof..........................................................................................................
// const numbers = [1,2,3,4,5,6,7]
// const doubled=[]
// for(const num of numbers){
//    doubled.push(num*2)
// }
// console.log(doubled);


//................................................................................................................
// const person = new Map()
// person.set('name','neethu')
// person.set('age',23)
// console.log(person.get('name'));
// console.log(person.get('age'));


//................................................................................................................
// const num = new Set()
// num.add(6)
// num.add(7)
// console.log(num.has(4));
// console.log(num.has(7));
// console.log(num.size);


//.............................................................................................................
// function add(...arg){
//   let sum=0
//   for(num of arg){
//     sum+=num
//   }
//   return sum
// }
// console.log(add(1,2,3,4,5));


//String.includes()...............................................................................................
// const text = "hello world"
// const check = text.includes("world")
// console.log(check);


//String.startsWith()............................................................................................
// const text = "hello world, everyone"
// const check = text.startsWith("hello")
// console.log(check);


//String.endsWith()................................................................................................
// const text = "hello world, everyone"
// const check = text.endsWith("everyone")
// console.log(check);


//Array.from().................................................................................................
// const convert = Array.from("ABCDEF")
// console.log(convert);


//spread ........................................................................................................
// const arr = [10,20,30,40,50]
// const sum  = (a,b,c)=>a+b+c
// console.log(sum(...arr));


//optional chaining..............................................................................................
// const person = {
//   name: 'John',
//   address: {
//     street: '123 Main St',
//     city: 'Exampleville'
//   }
// };
// console.log(person.addr?.city);

// const user = {
//   name: 'Alice',
//   getProfile: () => {
//     return {
//       age: 30,
//       email: 'alice@example.com'
//     };
//   }
// }
// console.log(user.getProf?.().age);


//callback..................................................................................................
// function greet(name,callback){
//   console.log(`hai ${name}`)
//   callback()
// }
// function saygoodBye(){
//   console.log("goodbye");
// }
// greet("neethu",saygoodBye)


//promise.....................................................................................................
// const fetchData = ()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       res("suc")
//     },2000)
//   })
// }
// fetchData()
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })

// const promise = new Promise((res,rej)=>{
//   let a =1,b=2
//   if(a==b){
//     res("suc")
//   }
//   else{
//     rej("fail")
//   }
// })
// promise
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })

// const promise = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("suc")
//   },2000)
// })
// promise
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//Promise.all()................................................................................................
// const promise1 = new Promise((res,rej)=>{
//   let a = 1, b=1
//   if(a==b){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let p = 11, q =11
//   if(p==q){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let x = 111, y = 11
//   if(x==y){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// Promise.all([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//Promise.any()................................................................................................
// const promise1 = new Promise((res,rej)=>{
//   let a = 1, b=11
//   if(a==b){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let p = 11, q =11
//   if(p==q){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let x = 111, y = 111
//   if(x==y){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// Promise.any([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// // })


//Promise.race()................................................................................................
// const promise1 = new Promise((res,rej)=>{
//   let a = 1, b=11
//   if(a==b){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let p = 11, q =11
//   if(p==q){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let x = 111, y = 111
//   if(x==y){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// Promise.race([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//Promise.allSettled()................................................................................................
// const promise1 = new Promise((res,rej)=>{
//   let a = 1, b=1
//   if(a==b){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise2 = new Promise((res,rej)=>{
//   let p = 11, q =11
//   if(p==q){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// const promise3 = new Promise((res,rej)=>{
//   let x = 111, y = 11
//   if(x==y){
//     res("success")
//   }
//   else{
//     rej("failed")
//   }
// })
// Promise.allSettled([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg);
// })
// .catch((err)=>{
//   console.log(err);
// })


//closure..............................................................................................................................
// function outer(){
//   var a =10
//   function inner(){
//     console.log(a);
//   }
//   return inner()
// }
// outer()


//setTimeout......................................................................................................
// console.log("start");
// setTimeout(()=>{
//   console.log("setTimeout");
// },2000)
// console.log("end");


//higher order function............................................................................................
// function x(a,b,y){
//   return y(a,b)
// }
// function add(a,b){
//   return a+b
// }
// console.log(x(2,3,add));


//prototype........................................................................................................
// let personPrototype ={
//   greet:function(){
//     console.log(`${this.name}`);
//   }
// }
// let person1 = Object.create(personPrototype)
// person1.name="neethu"
// let person2 = Object.create(personPrototype)
// person2.name ="akshara"
// person1.greet()
// person2.greet()


//class..........................................................................................................
// class person{
//   constructor(name,age){
//     this.name=name,
//     this.age=age
//   }
//   greet(){
//     console.log(`${this.name},${this.age}`);
//   }
// }
// let person1 = new person("neethu",23)
// person1.greet()


//IIFE...........................................................................................................
// (function(){
//   var a =10
//   console.log(a);
// })()


//currying....................................................................................................
// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(add(10)(20)(30));


//async await....................................................................................................
// function a(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       res("success")
//     },2000)
//   })
// }
// async function b(){
//   let c = await a()
//   console.log(c);
// }
// b()


// const arr = [1,2,3]
// const res = arr.join("")
// let f = parseInt(res)
// console.log(f);
// console.log(typeof(f));
// const ans = f+1
// console.log(ans);

// const arr = [1,2,3]
// const a = arr.join("")
// const b = parseInt(a)
// let c = b+1
// console.log(c);
// const ans = Array.from(String(c))
// console.log(ans);


//for/in........................................................................................................
// const obj = {
//   name:"neethu",
//   age:23
// }
// for(key in obj){
//   console.log(key,obj[key]);
// }


//object shorthand..................used when variable name and key are same.....................................
// let name="neethu"
// let age=23
// const obj={
//   name,                                                                  //name:name
//   age,                                                                   //age:age
//   greet:function(){
//     console.log(`${this.name},${this.age}`);
//   }
// }
// obj.greet()


//clearTimeout....................................................................................................
// console.log("start");
// const time = setTimeout(()=>{
//   console.log("timer");
// },3000)
// clearTimeout(time)
// console.log("end");


//clearInterval...................................................................................................
// console.log("start");
// const stop = setInterval(()=>{
//   console.log("interval");
// },3000)
// clearInterval(stop)


//pure function...................................................................................................
// function add(a,b){
//   return a+b
// }
// console.log(add(10,20));


//side effects...................................................................................................
// let a=0
// function change(x){
//   return a+=x
// }
// change(9)
// console.log(a);


//generators......................................................................................................
// function* myGenerator(){
//   yield 1
//   yield 2 
//   yield 3
// }
// const generator = myGenerator()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* myGenerator(){
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


//Object.assign()...................................................................................................
// const a = {name:"neethu",age:23}
// const b = {plave:"Tvm",state:"Kerala"}
// Object.assign(a,b)
// console.log(a);


//forEach.........................................................................................................
// const array = [1,2,3,4,5]
// array.forEach((num)=>{
//   console.log(num*2);
// })


//JSON.stringify().............................................................................................
// const obj = {
//   name:"Neethu",
//   age:23
// }
// const stringify = JSON.stringify(obj)
// console.log(stringify);


//JSON.parse()....................................................................................................
// const objstring = '{"name":"neethu", "age":23}'
// const obj = JSON.parse(objstring)
// console.log(obj);


//call().......................................................................................................
// const person ={
//   name:"neethu",
//   age:23,
//   greet:function(msg){
//     console.log(msg,`${this.name}`);
//   }
// }
// const anotherPerson = {
//   name:"akshara"
// }
// person.greet.call(anotherPerson,"hello")


//apply()......................................................................................................
// const person ={
//   name:"neethu",
//   age:23,
//   greet:function(msg){
//     console.log(msg,`${this.name}`);
//   }
// }
// const anotherPerson = {
//   name:"akshara"
// }
// person.greet.apply(anotherPerson,["hello"])


//bind()..........................................................................................................
// const person ={
//   name:"neethu",
//   age:23,
//   greet:function(msg){
//     console.log(msg,`${this.name}`);
//   }
// }
// const anotherPerson = {
//   name:"akshara"
// }
// const newFun = person.greet.bind(anotherPerson)
// newFun("hello")


//event handling..............................................................................................
// const myButton = document.getElementById('myButton')
// myButton.addEventListener('click',function(){
//   alert('Button clicked')
// })


//Map().................................................................................
// const myMap = new Map()
// myMap.set('name',"neethu")
// myMap.set("age",23)
// console.log(myMap.get("name"));

// const myMap = new Map()
// myMap.set('name','akshara')
// myMap.set('age',18)
// console.log(myMap.get('name'));
// console.log(myMap.has('name'));
// myMap.delete('age')
// console.log(myMap.has('age'));
// console.log(myMap.size);
// myMap.clear()
// console.log(myMap.get('name'));


//Set()................................................................................................
// const mySet = new Set()
// mySet.add(1)
// console.log(mySet.has(1));


//
// const a = [ 1,2,9,3]
// let b = ''
// for(let i = 0;i<a.length;i++){
//   b+=a[i]
// }
// console.log(b);
// console.log(typeof(b));
// const b = a.toString()
// console.log(b);
// console.log(typeof(b));

//
// const http = require('http')
// http.createServer((req,res)=>{
//   res.write('hello')
//   res.end()
// })
// .listen(3000,()=>{
//   console.log('port conc');
// })





// function a(c) {
//   console.log("first");
// c()
// }
// function b(c){
//   console.log("second");
//   c()
// }
// function d(){
//   console.log("third");

// }
// a(()=>{
//   b(()=>{
//     d(()=>{

//     })
//   })
// })

// const expres = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//   const a = req.query.name
//   console.log(a);
//   res.send('hello')
// })


// const a = {num:[1,2,3,4]}
// const shallowCopy = {...a}
// shallowCopy.num.push(5)
// console.log(shallowCopy.num);
// console.log(a.num);


// const a = {num:[1,2,3,4]}
// const deepCopy = JSON.parse(JSON.stringify(a))
// deepCopy.num.push(5)
// console.log(deepCopy.num);
// console.log(a.num);


// let x = new String("adjs")
// console.log(typeof(x));


//string methods.................................................................................................

//slice().........a parameter is negative, the position is counted from the end of the string
// let text = "apple,orange"
// let part = text.slice(3,7)
// console.log(part);

//substring()......... start and end values less than 0 are treated as 0
// let text = "apple,orange"
// let part = text.substring(3,7)
// console.log(part);

//substr().................the second parameter specifies the length of the extracted part
// let text = "apple,orange"
// let part = text.substr(5,3)
// console.log(part);

//replace()....................................................
// let text = "brocamp,tvm"
// let newText = text.replace("brocamp","brototype")
// console.log(text);
// console.log(newText);

// let text = "brocamp,tvm,brocamp"
// let newText = text.replace(/brocamp/g,"brototype")
// console.log(text);
// console.log(newText);

// let text = "Brocamp,tvm"
// let newText = text.replace(/brocamp/i,"brototype")
// console.log(text);
// console.log(newText);

//replaceAll().........................................................
// let text = "brocamp,tvm,brocamp"
// let newText = text.replaceAll(/brocamp/g,"brototype")
// console.log(newText);

//topperCase().................................................................
// let text = "Hello world"
// let newText = text.toUpperCase()
// console.log(newText);

//concat()..............................................................
// let text1 = "hello"
// let text2 = "world"
// let text3 = text1.concat(text2)
// console.log(text3);

//trim().....................................................................
// let text = "    hello  "
// let newText = text.trim()
// console.log(newText);

//trimStart()

//trimEnd()

//padStart()
// let text = "5"
// let padded = text.padStart(4,"0")
// console.log(padded);

//to pad a number,convert the string to number
// let num = 5
// let text = num.toString()
// let padded = text.padStart(4,"x")
// console.log(padded);

//padEnd()
// let text = "6"
// let padded = text.padEnd(4,"0")
// console.log(padded);

//charAt().....................	Returns the character at a specified index
// let text = "hello world"
// let single = text.charAt(0)
// console.log(single);

//charCodeAt().....................Returns the Unicode of the character at a specified index
// let text = " HELLO WORLD"
// let newText = text.charCodeAt(0)
// console.log(newText);

// text = "Hello world"
// let char = text[2]
// console.log(char);

//split()
// let text = "hello"
// let newOne = text.split("")
// let newOne = text.split(",")
// let newOne = text.split("|")
// console.log(newOne);



//string search methods.................................................................................

//indexOf()
// let text = "hello world welcome"
// let index = text.indexOf("world")
// console.log(index);

//lastIndexOf()
// let text = "hello world welcome"
// let index = text.lastIndexOf("world")
// console.log(index);

//search()
// let text = "hello world welcome"
// let index = text.search("world")
// console.log(index);

//match()
// let text =  "The rain in SPAIN stays mainly in the plain"
// let newText = text.match("ain")
// console.log(newText);

//matchAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// let newText = text.matchAll("Cats")
// console.log(Array.from(newText));

//incudes()
// let text = "Hello world, welcome to the universe."
// let check = text.includes("world")
// console.log(check);

// let text = "Hello world, welcome to the universe."
// let check = text.includes("world",12)
// console.log(check);

//startsWith()
// let text = "hello world welcome"
// let check = text.startsWith("hello")
// console.log(check);

// let text = "hello world welcome"
// let check = text.startsWith("world",6)
// console.log(check);

//endsWith()
// let text = "hello world welcome"
// let check = text.endsWith("welcome")
// console.log(check);

// let text = "hello world welcome"
// let check = text.endsWith("world",11)
// console.log(check);

// let x = 100/"apple"
// console.log(x);

// let x = 100/"10"
// console.log(x);

// let x = 100/"apple"
// console.log(isNaN(x));

// let x = Number.MAX_SAFE_INTEGER
// console.log(x);

// let x = Number.MIN_SAFE_INTEGER
// console.log(x);

// let x = Number.isInteger(10.5)
// console.log(x);


//number methods..................................................................

//toString()
// let x = 123
// let b = x.toString()
// console.log(typeof(b));

// Number.isInteger()	Returns true if the argument is an integer
// Number.isSafeInteger()	Returns true if the argument is a safe integer
// Number.parseFloat()	Converts a string to a number
// Number.parseInt()	Converts a string to a whole number

//array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// let size = fruits.length
// console.log(size);

//toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// let convert = fruits.toString()
// console.log(convert);

//join()
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// let convert = fruits.join()
// console.log(convert);

//flat()
// const myArr = [[1,2],[3,4],[5,6]]
// const newArr = myArr.flat()
// console.log(newArr);

const arr = [1,9,9]
let c =0
for (let i = 0; i < arr.length; i++) {
  
   c = c*10+arr[i]
}

let a = c+1 

let b=[]

while(a!==0){

    b.push(Math.floor(a%10))

   a=Math.floor(a/10)

}

console.log(b.reverse());