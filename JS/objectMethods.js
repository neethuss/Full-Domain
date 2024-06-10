//Object.assign() - copies properties from one or more source objects to a target object.
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// const person2 = {firstName: "Anne",lastName: "Smith"};
// console.log(Object.assign(person1, person2))


//Object.create() - creates an object from an existing object.
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };
// const man = Object.create(person)
// man.firstName = 'akshara'
// console.log(man)


//Object.defineProperties() - adds or changes object properties
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// }
// Object.defineProperties(person,{
//   age:{value:20,enumerable: true}
// })
// console.log(person)


//Object.defineProperty()
// const person = {
//   firstName : "john",
//   lastName : "Doe"
// }
// Object.defineProperty(person,"age",{value:20,enumerable:true})
// console.log(person)


//Object.entries() - returns an array of the key/value pairs of an object
// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };
// console.log(Object.entries(person))


// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };
// Object.freeze(person)
// person.place = 'Tvm'
// delete person.age
// person.firstName = 'Jeen'
// console.log(person)


// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };
// Object.seal(person)
// person.place = 'Tvm'
// delete person.age
// person.firstName = 'Jeen'
// console.log(person)


//isSealed()


// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };
// console.log(person.hasOwnProperty('firstName'))


// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue",
//   greet : function(){
//     console.log(`hello, ${this.firstName}`)
//   }
// };
// console.log(person.firstName)
// person.greet()



const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};
for(const key in person){
  console.log(key, person[key])
}