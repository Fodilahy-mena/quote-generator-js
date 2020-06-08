// //Let ask for an input between 0 and 5, 0 and are uninclusive from user

// let numberOfQuoates = Number(prompt("Enter a number between 0 to 5 and you will see what your quoate is:"));


// //Here is my quoate array and I gave elements as its value.

// let quoates = [ 
//                 "You can cry again or You can try again. Choice  is yours.",
//                 "Success may require a lot of days. But progress only requires one.",
//                 "Success is stumbling from failure to failure with no loos of enthusiasm.",
//                 "It is easy to fail, but if you do not pay attention and learn from your mistakes, it will never be possible to succeed.", 
//                 "Visionary decision-making happens at the intersection of intuition and logic."
//             ];

// //Let's call the Math.floor() function to take in a paramiter and round the number downward the nearest number here

// let randomNumber = Math.floor(Math.random() * 4);
// function getMyQuoate() {
//     let randomQuoate = Math.floor(Math.random() * (quoates.length));
//     return quoates[randomQuoate];
// }

// //Here is the code in which users get the quoate depending on the input they give.
// if (numberOfQuoates === 1 ) {
//     console.log(`${quoates[0]}`);
// } else if (numberOfQuoates === 2 ) {
//     console.log(`${quoates[1]}`);
// } else if (numberOfQuoates === 3) {
//     console.log(`${quoates[2]}`); 
// } else if (numberOfQuoates === 4) {
//     console.log(`${quoates[3]} ${quoates[0]}`);
// } else if (numberOfQuoates === 5) {
//     console.log(`${quoates[4]} ${quoates[1]}`);
//  } else {
//     numberOfQuoates = Number(prompt("Incorrect!, enter a number between 0 to 5 and you will see what your quoate is:"));
// }

//// Part1

let array1 = ["You", "maybe", "many", "becomes"];
let array2 = ["Really", "But", "everything", "suppose"];
let array3 = ["Rabbit", "carrot", "his", "all"];

let randomIndex1 = Math.floor(Math.random() * array1.length);
let randomIndex2 = Math.floor(Math.random() * array2.length);
let randomIndex3 = Math.floor(Math.random() * array3.length);

let string1 = array1[randomIndex1];
let string2 = array2[randomIndex2];
let string3 = array3[randomIndex3];

let myQuote = `${string1} ${string2} ${string3}`;
//console.log(myQuote);

//// Part2

//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes

let numberOfQuotes = Number(prompt("Enter a number of time you want to generate a random quoate:"));//I've added prompt here
if (numberOfQuotes >= 1 && numberOfQuotes <= 5) { // and I use an if statement
    const randomQuoteGenerate = () => {
        return myQuote[3];
    }
    for (let i = numberOfQuotes; i < numberOfQuotes; numberOfQuotes++) {// I'm not sure if it is what it meant to be
        console.log(randomQuoteGenerate);
    }
} else {
    numberOfQuoates = Number(prompt('Only enter a number between 1 and 5:'));// To check if the number is between 1 and 5
}