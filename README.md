# About
This repository is dedicated to documenting my journey through 100 days of learning and coding with codecademy.com. I will be uploading the projects I build on codecademy or in general here.

# Motivation
I started this challenge to improve my backend development skills and become more confident in building real-world projects. This repository will showcase my progress along the way.

# Day 1-15
## Back-End Engineer carrer path
Started the Back-End Engineer carrer path on codecademy.com

# Day 15
## Sleep Debt Calculator
This project calculates your sleep debt by comparing the hours you've slept each night with your ideal sleep goal. It gives feedback on whether you're getting enough sleep and tracks your progress over time.

[SleepDebtCalculator.js](https://github.com/georgebsr/100-days-of-code/blob/main/Sleep%20Debt%20Calculator/SleepDebtCalculator.js)

# Day 16
## JavaScript Syntax: Scope
Learned about:
- Global scope
- Module scope
- Function scope
- Code block scope

# Day 17
## Leetcode
I had very little free time today so all I did was to solve some easy Leetcode challenges.

# Day 18 
## JavaScript Syntax: Training Days
Today, I worked on the Training Days project, which focuses on improving variable scope in JavaScript. The project simulates a training schedule for athletes by assigning them a random event and determining how many days they need to train.

## Concepts Learned:
- Global vs. Local Scope: Moved variables to the appropriate scope to avoid unexpected behavior.
- Function Parameters: Made functions more reusable by passing variables as arguments instead of relying on global scope.
- Code Optimization: Reduced redundant variable declarations and improved maintainability.
  
[TrainingDays.js](https://github.com/georgebsr/100-days-of-code/blob/main/Training%20Days/TrainingDays.js)

# Day 19
## Code Challenges: JavaScript Fundamentals
I practiced on JavaScript Syntax: Variables, Data Types, Conditionals, Functions

# Day 20
## Code Challenges: JavaScript Fundamentals
I continued practicing on JavaScript challenges on Codecademy

My progress so far:

![progress](https://github.com/georgebsr/100-days-of-code/blob/main/My%20progress/05_02_2025.png)

# Day 21
## JavaScript Practice: Data Types, Conditional, Functions
Practiced JavaScript conditionals and functions with these 3 code challenges:

1) Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

  If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

  If not, return the string 'That is a nice color.'


```
const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return 'The shirt is your favorite color!';
  } else {
    return 'That is a nice color.';
  }
}
```

2) Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.

```
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

3) Create a function numberDigits() that takes the variable x as its only parameter.

   If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

```
'One digit: 5'
```
  
  If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

```
'Two digits: 12'
```

  Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

```
'The number is: -202'
```

- Using if:
```
function numberDigits(x) {
    if (x >= 0 && x <= 9) {
        return `One digit: ${x}`;
    } else if (x >= 10 && x <= 99) {
        return `Two digits: ${x}`;
    } else {
        return `The number is: ${x}`;
    }
}

console.log(numberDigits(5));    //Test
console.log(numberDigits(12));   //Test
console.log(numberDigits(-202)); //Test
```

- Using switch:

```
function numberDigits(x) {
    switch (true) {
        case (x >= 0 && x <= 9):
            return `One digit: ${x}`;
        case (x >= 10 && x <= 99):
            return `Two digits: ${x}`;
        default:
            return `The number is: ${x}`;
    }
}

```

Also I brushed up on my knowledge of Running JavaScript in the Browser Console and JavaScript Runtime Environments.

# Day 22
## Number Guesser
Today, I completed the Number Guesser project from Codecademy's JavaScript Syntax, Part I. This project focused on writing JavaScript functions to power a small guessing game that runs in the browser.

### Learned concepts:
- Generating random numbers with Math.random()
- Using Math.abs() to calculate absolute differences
- Implementing game logic using conditional statements
- Keeping track of scores and rounds

### Features implemented:
- generateTarget() – Generates a random number between 0 and 9.
- compareGuesses() – Determines the winner by comparing guesses to the target number. The human player wins in case of a tie.
- updateScore() – Updates the score based on the round’s winner.
- advanceRound() – Increments the round counter.
- getAbsoluteDistance() – Refactored distance calculation into a separate function.
- Input validation – Prevents users from entering numbers outside the 0-9 range.

[Number Guesser](https://github.com/georgebsr/100-days-of-code/tree/main/number-guesser)

# Day 23 & Day 24
## Break
No coding this days as I was in the village without access to a PC. Taking a short break!

# Day 25
## Secret Message
Today, I worked on a JavaScript challenge that involved manipulating arrays using various array methods. The goal was to transform an array of words into a secret message by performing different operations like removing, adding, and replacing elements.

### Learned concepts:
- Array methods such as .pop(), .push(), .shift(), .unshift(), and .splice() for modifying arrays.
- Using indexing to directly change values within an array.
- Using .join(' ') to convert an array into a readable string

[SecretMessage.js](https://github.com/georgebsr/100-days-of-code/blob/main/Secret%20Message/secretmessage.js)

# Day 26
## Loops & Whale Talk
Today, I revisited loops in JavaScript and worked on a fun mini-project that translates a phrase into whale language! 
Loops are incredibly useful for string manipulation! This challenge was a great refresher on iteration and conditional logic. 
The rules for whale talk:
- Only vowels (a, e, i, o, u) are used.
- "e" and "u" are doubled.
- The final output is in uppercase to match the whale's singing style.

### Used/Learned concepts:
- For loops to iterate through strings.
- Nested loops for comparing characters against an array.
- .push() method to add elements to an array dynamically.
- .join() method to convert an array into a string.
- .toUpperCase() to modify string case.

[WhaleTalk.js](https://github.com/georgebsr/100-days-of-code/blob/main/Whale%20Talk/whaletalk.js)
