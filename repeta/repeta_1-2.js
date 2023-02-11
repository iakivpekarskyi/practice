// 1. cумма всех чисел

// const cart = [1, 2, 3, 4, 5];
// // let total = 0;

// for (const item of cart) {
//   total += item;
// }

// console.log("Total:", total);

// 2. Сумма четных чисел

// let total = 0;

// for (const item of cart) {
//   if (item % 2 === 0) {
//     total += item;
//   }
// }
// console.log("Total:", total);

// 2. Совпадение паролей

// const logins = ["abb", " bba", "bab", "rar"];
// const loginToFind = "bab";
// let message = "";

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Password ${loginToFind} is found`;
//     break;
//   }
// }

// const message = logins.includes(loginToFind) ? "yep" : "nope";

// console.log(message);

// let smallestNumber = number[0]  ;
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// MODULE JS 2/2 //

//  const cart = [1, 2, 3, 4, 5];

// const calculateTotalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3, 4, 5]));

// const logins = ["abb", " bba", "bab", "rar"];
// // const loginToFind = "bab";
// // let message = "";

// const findLogins = function (Allogins, loginToFind) {
//   for (const login of logins) {
//     if (login === loginToFind) {
//       let message = `Password ${loginToFind} is found`;
//       return message;
//     }
//     return (message = `Password ${loginToFind} is NOT found`);
//   }
// };

// console.log(findLogins(logins, "bab"));
// console.log(findLogins(logins, "bbb"));

// const message = logins.includes(loginToFind) ? "yep" : "nope";

// console.log(message);

// const fn = function (...args) {

// }

// fn('hello', 1, 2, 3);
// fn("hello", 1, 2, 3);
// fn("hello", 1, 2, 3);

// const add = function (...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2));
