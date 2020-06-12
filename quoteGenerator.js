
//// Part1

// First set of quote

let array1 = ["You", "maybe", "alone", "becomes"];
let array2 = ["Really", "But", "everything", "suppose"];
let array3 = ["Rabbit", "carrot", "his", "all"];
const generateQuote = () => {
let randomIndex1 = Math.floor(Math.random() * array1.length);
let randomIndex2 = Math.floor(Math.random() * array2.length);
let randomIndex3 = Math.floor(Math.random() * array3.length);

let string1 = array1[randomIndex1];
let string2 = array2[randomIndex2];
let string3 = array3[randomIndex3];

let myQuote = `${string1} ${string2} ${string3}`;
return myQuote;
}

// Second set of quote

let otherArray1 = ["True", "according to", "can you", "Robert"];
let otherArray2 = ["It depends", "On the beach", "on they went", "supposingly"];
let otherArray3 = ["salad", "yammy", "cool", "movies"];

const generateNewQuote = () => {
let randomIndexOther1 = Math.floor(Math.random() * otherArray1.length);
let randomIndexOther2 = Math.floor(Math.random() * otherArray2.length);
let randomIndexOther3 = Math.floor(Math.random() * otherArray3.length);

let stringOther1 = otherArray1[randomIndexOther1];
let stringOther2 = otherArray2[randomIndexOther2];
let stringOther3 = otherArray3[randomIndexOther3];

let newQuote = `${stringOther1} ${stringOther2} ${stringOther3}`;
return newQuote;
}

        //// Part2

// Part 2 of old set of quote

// let numberOfQuotes = Number(prompt("Enter a number of time you want to generate a random quoate:"));
// if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
//     for (let i = 0; i < numberOfQuotes; i++) {
//         console.log(generateQuote());
//    
// } else {
//         console.error('Only enter a number between 1 and 5:');// To check if the number is between 1 and 5
//     }

        //// Part 3


/// Part2 

//Part 2 of second New set of quote

//  let numberOfQuotes = Number(prompt("Enter a number of time you want to generate a random quoate:"));
//  if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
//      for (let i = 0; i < numberOfQuotes; i++) {
//          console.log(generateNewQuote());
//      } 
//  } else {
//          console.error('Only enter a number between 1 and 5:');// To check if the number is between 1 and 5
//      }

//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes

let numberOfSets = Number(prompt("Enter a number 1 or 2 to help you which quote of set are you looking for:"));
if (numberOfSets === 1) {
    numberOfQuotes = Number(prompt("Enter a number of time you want to generate a random quoate:"));
    if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
        for (let i = 0; i < numberOfQuotes; i++) {
            console.log(generateQuote());
        }
} else {
        console.error('Only enter a number between 1 and 5:');// To check if the number is between 1 and 5
    }
} else if (numberOfSets === 2) {
    numberOfQuotes = Number(prompt("Enter a number of time you want to generate a random quoate:"));
if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
    for (let i = 0; i < numberOfQuotes; i++) {
        console.log(generateNewQuote());
    } 
} else {
        console.error('Only enter a number between 1 and 5:');// To check if the number is between 1 and 5
    }
} else {
    console.error('Only enter a number 1 or 2:');
}



