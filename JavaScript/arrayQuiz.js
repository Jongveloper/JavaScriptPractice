'use strict';
// 1. make a string out of an array
// const fruits = ['apple', 'banana', 'orange'];
// fruits.forEach((fruit) => console.log(fruit));

// // 2. make an array out of a stirng
// const fruits = ['🍎, 🥝, 🍌, 🍒'];

// // 3. make this array look like this: [5, 4, 3, 2, 1]
// const array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array);

// // 4. make new array without the first two elements
// const array = [1, 2, 3, 4, 5];
// array.splice(0, 2);
// console.log(array);

// 5. find a student with the score 90
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

const findBestStudents = students.find((student) => {
  return student.score >= 90;
});

console.log(findBestStudents);

// 6. make an array of enrolled students
students.forEach((student) => {
  if (student.enrolled == true) {
    console.log(student.name);
  }
});

// 7. make an array containing only the students' scores
const studentsScore = [];
const studentScore = students.forEach((student) => {
  studentsScore.push(student.score);
});
console.log(studentsScore);

// 8. check if there is a student with the score lower than 50
const findLowCheck = students.find((student) => {
  if (student.score < 50) {
    return console.log('50점 미만인 학생이 존재합니다.');
  }
});

// 9. compute students' average score
function average(array) {
  let avg = array.reduce((sum, current) => sum + current, 0) / array.length;
  return avg;
}
console.log(average(studentsScore));

// 10. make a string containing all the scores
const stringScore = studentsScore.join();
console.log(stringScore);

// Bonus.orted in ascending order
const sortedScore = studentsScore.sort(function (a, b) {
  return a - b;
});
const stringSorted = sortedScore.join();
console.log(stringSorted);
