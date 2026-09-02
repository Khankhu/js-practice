// const numbers = [
//   12, -5, 8, 23, -9, 23, 4, -31, 15, -2, 7, -14, 0, 19, -8, 26, -45, 3, -11, -6,
//   10, -23, 18, -4, 29, -16, 5, -38, 29,
// ];
// let max = numbers[0];
// let maxIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//     maxIndex = i;
//   }
// }
// console.log(maxIndex);

// const numbers = [
//   12, -5, 8, 23, -9, 23, 4, -31, 15, -2, 7, -14, 0, 19, -8, 26, -45, 3, -11, -6,
//   10, -23, 18, -4, 29, -16, 5, -38, 29,
// ];

// for (let i = 28; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// const numbers = [
//   12, -5, 8, 23, -9, 23, 4, -31, 15, -2, 7, -14, 0, 19, -8, 26, -45, 3, -11, -6,
//   10, -23, 18, -4, 29, -16, 5, -38, 29,
// ];

// for (let i = 1; i < numbers.length - 1; i++) {
//   if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
//     console.log(numbers[i]);
//   }
// }

// const numbers = [12, -5, 8, 7];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     console.log(numbers[i], numbers[j]);
//   }
// }

// const users = [
//   { name: "Bat", age: 20 },
//   { name: "Bold", age: 25 },
//   { name: "Dorj", age: 30 },
// ];
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }

// const fruits = ["apple", "banana"];

// fruits.push("orange");

// console.log(fruits);

// array.push(value);

// const users = [
//   { name: "Bat", age: 20 },
//   { name: "Bold", age: 25 },
//   { name: "Dorj", age: 30 },
// ];
// for (let i = 0; i < users.length; i++) {
//   const names = [];
//   names++;
//   console.log(names);
// }

const arr = [1, 2, 3, 4, 5, 6];
const squares = arr.map((currentElement) => {
  return currentElement - 1;
});
console.log(squares);
