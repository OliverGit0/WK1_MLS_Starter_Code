// Part 1 Exercises (use Copilot inline suggestions)
let x = 5;

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number 
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Exercise 2: Array Operations
const numList = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = numList.filter(num => num % 2 === 0);
const oddNumbers = numList.filter(num => num % 2 !== 0);

// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Exercise 4: Process User Data
