/*
1. How do we assign a value to a variable?
   A. With the assignment operator (=)

2. How do we change the value of a variable?
   A. By reassigning a new value to it using the assignment operator (=)

3. How do we assign an existing variable to a new variable?
   A. By using the assignment operator to set the new variable equal to the existing variable (e.g., newVar = existingVar)

4. Remind me, what are declare, assign, and define?
   A. Declare: To create a variable (e.g., let x;).
   B. Assign: To give a variable a value (e.g., x = 5;).
   C. Define: Usually means both declaring and assigning a value (e.g., let x = 5;).

5. What is pseudocoding and why should you do it?
   A. Pseudocoding is the process of writing an algorithm in plain language. It helps plan out logic and structure before coding.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
   A. It is generally recommended to spend about 70-80% of the time on planning and thinking, and 20-30% on coding.
*/
// B. Strings
let firstVariable = "Hello World"; 
firstVariable = 42; 

let secondVariable = firstVariable; 
secondVariable = "Goodbye"; 

console.log(firstVariable);

let yourName = "Carita Ingram"; 
let greeting = "Hello, my name is " + yourName; 
console.log(greeting); 

//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); // true
console.log(c > d); // true
console.log('Name' === 'Name'); // true
console.log(true || false); // true
console.log(false || false || false || false || false || true); // true
console.log(false || false); //false
console.log(e === 'Kevin'); //true
console.log(a + b === c); //true
console.log(a + a === d); // true 
console.log(48 == '48'); // true 

//D. The farm
let animal = "cow"; 

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");

}
//E. Driver's Ed
let age = 16; 

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

//II. Loops
//A. The basics

for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  

  for (let i = 10; i <= 400; i++) {
    console.log(i);
  }
  
  
  for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }
 // B. Get even 
 
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`${i} <-- is an even number`);
    } else {
      console.log(i);
    }
  }
 //C. Give me Five
 
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`I found a ${i}. Three is a crowd`);
    }
    if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`);
    }
  }
  //D. Savings account
  
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account); /


bank_account = 0;