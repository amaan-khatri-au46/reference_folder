// 1. Print following pattern in any language (if this is solved no need to solve second pattern)
// Here I Am Solving This Using Javascript ....

let print = "";
for (let i = 1; i <= 7; i++) {
  if (i % 2 == 0) {
    print += "#";
  } else {
    print += i;
    console.log(print);
  }
}

// Solve all of following ( built in function is not allowed )

// Q1. reverse the number
// EG: 352 will be 253
// Approach 1 ...
let number = 352;
let reverse = number.toString().split("").reverse().join("");
console.log(parseInt(reverse));

// Approach 2 ..
let num = 352;
let reversed = 0;

while (num > 0) {
  reversed = reversed * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log(reversed);

// Q2. swap two number without third variable
// with the help of desturcturing we can swap the two numbers ...
let a = 39;
let b = 54;
[a, b] = [b, a];
console.log(a);
console.log(b);

// Q3. Write a program find domain name from given email string
// EG: admin@gmail.com answer should be gmail.com
var email = "admin@gmail.com";
var domain = email.split("@")[1];
console.log(domain);

// Solving The Question Using Javascript .... 
let numbersArray = [
  { name: "Ganesh", fruits: 3 },
  { name: "Ashu", fruits: 19 },
  { name: "Sneha", fruits: 89 },
  { name: "Vishu", fruits: 33 },
  { name: "Suraj", fruits: 73 },
  { name: "Prem", fruits: 29 },
  { name: "Pranita", fruits: 51 },
  { name: "Pratik", fruits: 47 },
  { name: "Himesh", fruits: 4 },
  { name: "Vishal", fruits: 12 },
  { name: "Raj", fruits: 58 },
  { name: "Sumit", fruits: 42 },
  { name: "Rudra", fruits: 30 },
  { name: "Bakula", fruits: 66 },
  { name: "Amruta", fruits: 76 },
  { name: "Sandip", fruits: 80 },
];

let evenFruits = [];
let oddFruits = [];

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i].fruits % 2 === 0) {
    evenFruits.push(numbersArray[i]);
  } else {
    oddFruits.push(numbersArray[i]);
  }
}

let evenFruitsTotal = 0;
let oddFruitsTotal = 0;

for (let i = 0; i < evenFruits.length; i++) {
  evenFruitsTotal += evenFruits[i].fruits;
}

for (let i = 0; i < oddFruits.length; i++) {
  oddFruitsTotal += oddFruits[i].fruits;
}

console.log("Total Even Fruits:", evenFruitsTotal);
console.log("Total Odd Fruits:", oddFruitsTotal);
