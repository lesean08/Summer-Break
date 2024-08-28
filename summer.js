
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
console.log(a + b === c); //true (4 + 53 = 57)
console.log(a + a === d); // true (4 + 4 = 8, not 16)
console.log(48 == '48'); // true (comparison)

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
console.log(bank_account); 
bank_account = 0;

//III. Arrays & Control Flow
/*A. Talk about it
What are the things in an array called?

The items in an array are called elements.
Do Arrays guarantee those things will be in order?

Yes, arrays maintain the order of their elements. The order in which elements are added to an array is preserved.
What real-life thing could you model with an array?

You can model a list of things such as a grocery list, a list of names, or a series of steps in a recipe with an array.*/

//B. Easy Does It
const quotes = [
  "Here today, gone tomorrow.",
  "Whats meant to be will be.",
  "Live and let learn."
]; 
console.log(quotes);

/// C. Accessing elements
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);

randomThings[2] = "World";
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]); 

ourClass[4] = "Octocat";
ourClass.push("Cloud City");

console.log(ourClass); 

// E. Mix It Up
const myArray = [5, 10, 500, 20];

myArray.push("Aegon");

myArray.push("Another String");

myArray.shift();

myArray.unshift("Bob Marley");

myArray.pop();

myArray.reverse();

console.log(myArray); 

// F. Biggie Smalls
let number = 150;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}
// G. Monkey in the Middle
let number = 7; 

if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}
// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!"); 
kristynsCloset.splice(6, 0, "raybans");
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset); 
const thomsCloset = [
  [
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
let shirt = thomsCloset[0][0]; 
let pants = thomsCloset[1][1]; 
let accessory = thomsCloset[2][1];

console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${accessory}!`);
thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset[1]); 
//IV. Functions
//A. printGreeting
function printGreeting(name) {
  return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer")); 
//B. printCool
function printCool(name) {
  console.log(`${name} is cool`);
}
printCool("Captain Reynolds");
//C. calculateCube
function calculateCube(num) {
  return num ** 3;
}
console.log(calculateCube(5)); 
//D. isVowel
function isVowel(char) {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(char);
}
console.log(isVowel("a")); //true
console.log(isVowel("b")); //false
//E. getTwoLengths
function getTwoLengths(str1, str2) {
  return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous")); // [4, 13]
//F. getMultipleLengths
function getMultipleLengths(arr) {
  return arr.map(str => str.length);
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // [5, 4, 2, 2, 4]
//G. maxOfThree
function maxOfThree(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;
  return max;
}
console.log(maxOfThree(6, 9, 1)); // 9
//H. printLongestWord
function printLongestWord(words) {
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); // "Peanutbutter"
//Objects
//A. Make a user object
const user = {
  name: "Carita Ingram",
  email: "carita.ingram@example.com",
  age: 52,
  purchased: []
};
//B. Update the user
const updatedUser = { ...user, email: "rob.new@example.com" };
updatedUser.age++;
//C. Adding keys and values
const updatedUserWithLocation = { ...updatedUser, location: "Columbus"};
//D. Shopaholic!
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(user.purchased[2]); 
//E. Object-within-object
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "San Francisco",
  purchased: []
};

console.log(user.friend.name); // "Connie Ingram"
console.log(user.friend.location); // "Phoenix"

user.friend.age = 55;
user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend.purchased[1]); // "A latte"
//F. Loops
for (let item of user.purchased) {
  console.log(item);
}
for (let item of user.friend.purchased) {
  console.log(item);
}
//G. Functions can operate on objects
function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}

updateUser();
oldAndLoud(user);

//Cat Combinator
//1. Mama Cat
const cat1 = {
  name: "Howie",
  breed: "Siamese",
  age: 1
};

console.log(cat1.age);   // Output: 1
console.log(cat1.breed); // Output: Siamese

//2. Papa Cat
const cat2 = {
  name: "Cher",
  breed: "Persian",
  age: 2
};
//3. Combine Cats!
function combineCats(mama, papa) {
  return {
    name: mama.name + papa.name,            // Combine names
    age: 1,                                  // Fixed age of 1
    breed: mama.breed + '-' + papa.breed     // Combine breeds with a hyphen
  };
console.log(combineCats(cat1, cat2));
// Expected output: { name: "HowieCher", age: 1, breed: "Siamese-Persian" }

//4. Cat Brain Bender
const combined1 = combineCats(cat1, cat2);
const combined2 = combineCats(cat1, cat2);

// Two levels deep
console.log(combineCats(combined1, combined2));/*
{
  name: "HowieCherHowieCher",
  age: 1,
  breed: "Siamese-Persian-Siamese-Persian"
}
*/

// Three levels deep
const combinedA = combineCats(cat1, cat2);
const combinedB = combineCats(cat1, cat2);

const combinedAA = combineCats(combinedA, combinedB);
const combinedBB = combineCats(combinedA, combinedB);

console.log(combineCats(combinedAA, combinedBB));
/* Output should be something like:
{
  name: "HowieCherHowieCherHowieCherHowieCherHowieCherHowieCher",
  age: 1,
  breed: "Siamese-Persian-Siamese-Persian-Siamese-Persian-Siamese-Persian-Siamese-Persian-Siamese-Persian-Siamese-Persian
}
*/

//






