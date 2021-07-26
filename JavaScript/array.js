'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// d. Addtion, deletion, copy
// push: add an item to the end
fruits.push('lemon', 'peach');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('lemon', 'peach');
console.log(fruits);

// shift: remove add an item to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index postion
fruits.push('peach', 'lemon', 'kiwi');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'strawberry', 'watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['coconut', 'pear'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('ice'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.lastIndexOf('apple'));
