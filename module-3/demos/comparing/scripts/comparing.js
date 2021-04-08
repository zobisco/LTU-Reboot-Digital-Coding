
// comparison operators
let score1 = 90; // Round 1 score
let score2 = 95; // Round 2 score
let highScore1 = 75; // Round 1 high score
let highScore2 = 95; // Round 2 high score

//Check if scores are higher than current high scores
let comparison = ( score1 + score2 ) > ( highScore1 + highScore2 );


// Write the message into the page
let el = document.getElementById('answer');
    el.textContent = `New high score:  ${ comparison }`;

// comparison operators

// logical operators and

// let score1 = 8; // Round 1 score
// let score2 = 8; // Round 2 score
// let pass1 = 6;  // Round 1 pass mark
// let pass2 = 6;  // Round 2 pass mark

// // Check whether user passed both rounds, store result in variable
// let passBoth = ( score1 >= pass1 ) && ( score2 >= pass2 );

// // Create message 
// let msg = `Both rounds passed : ${passBoth}`;

// // Write the message into the page
// let el = document.getElementById('answer');
//     el.textContent = msg;

// logical operators and

// logical or and logical not

// let score1 = 8; // Round 1 score
// let score2 = 8; // Round 2 score
// let pass1 = 6;  // Round 1 pass mark
// let pass2 = 6;  // Round 2 pass mark

// // Check whether user passed one of the two rounds, store result in variable
// let minPass = (( score1 >= pass1 ) || ( score2 >= pass2 ));

// // Create message 
// let msg = `Resit required : ${!minPass}`;

// // Write the message into the page
// let el = document.getElementById('answer');
//     el.textContent = msg;

// logical or and logical not