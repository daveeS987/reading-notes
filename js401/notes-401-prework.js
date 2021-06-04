// ES6 Classes & Data Modeling

/*
Prototypes makes objects more memory efficient since it doesn't actually need to have the property part of the object.  

*/

// const Animal = function (name, legs) {
//   this.name = name;
//   this.legs = legs;
//   this.eat = function () {
//     this.isEating = true;
//   };
// };

// Animal.prototype.walk = function () {
//   this.isWalking = true;
// };

// // use .call() to use other Constructor Obj
// const Dog = function (name, leg) {
//   Animal.call(this, name, legs);
// };

// // use Object.create() to use prototype
// Dog.prototype = Object.create(Animal.prototype);

// let puppy = new Dog('blake', 4);
// puppy.walk();
// puppy.eat();

// // new method instanceof will return true or false
// console.log(puppy instanceof Animal);
// console.log(puppy instanceof Dog);

class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk() {
    this.isWalking = true;
  }

  eat() {
    this.isEating = true;
  }
}

////// extends will allow new class to take on property of parent class
////// Dog will now be considered subclass
class Dog extends Animal {
  constructor(name, legs, furtype) {
    //// user super to pull parent class properties. then just use this method for remaining
    super(name, legs);
    this.furtype = furtype;
  }

  speak() {
    console.log('Woof!');
  }
}

// --------------------------
//    Callbacks
// --------------------------

// File System Module for Node.js
const fs = require('fs');

// first paramater is location, 2nd parameter is error first calback
fs.readFile('./words.text', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

/*
Look into ASCii table
*/

// --------------------------
//    Promises
// --------------------------

//

//

// --------------------------
//    Async/ Await
// --------------------------
