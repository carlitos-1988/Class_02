'use strict';

// Declare variable for total score

let totalScore =0;

// Question 1 as a function

function askQuestion1() {
    // Ask a question and store the answer
    let home = prompt("Do I currently reside in Washington?").toLowerCase();
    if(home === 'true'){
        // If correct, increment and display correct message
        totalScore +=1;
        alert("Correct, I live in Washington");
        console.log('Correct, I live in Washington');
    }
    else {
        // Incorrect answer, show incorrect message
        alert('Incorrect, I live in Washington');
    }
}
// Call the askQuestion1 function we just made
askQuestion1();

// Question 2 as a function

function askQuestion2() {
    let job = prompt('Was I in the Air Force?').toLowerCase();
    if (job === 'true') {
        // Increment total score if true
        totalScore += 1;
        // Show message for if correct
        alert('Correct, I was in the Air Force');
    }
    else {
        // Show the message for if incorrect
        alert('Incorrect, I was in the Air Force');
    }
}
// Call the askQuestion2 function we just made
askQuestion2();

// Question 3 as a function

function askQuestion3() {
    let certification = prompt('Do I have any certifications?').toLowerCase();
    // Increment total score if true
    if (certification === 'true') {
        totalScore += 1;
        // Show the message for if correct
        alert('Correct, I have a Sec+ certification');
    }
    // Show the message for if incorrect
    else {
        alert('Incorrect, I have a Sec+ certification');
    }
}

// Call the askQuestion3 function
askQuestion3();

// Question 4 as a function
function askQuestion4() {
    let job2 =prompt("Have I worked at Applebee's?").toLowerCase();
    if(job2 === 'true') {
        // Show the message for if incorrect
        alert("Incorrect, I have not worked at applebee's");
        // Increment total score by 1 
    }
    else {
        totalScore += 1;
        // Show the message for if correct
        alert("Correct, I have not worked at Applebee's");
    }
}
// Call the askQuestion4 function
askQuestion4();

// Question 5 as a function
function askQuestion5() {
    let goal = prompt('Do I want to work on the cloud?').toLowerCase();
    if (goal === 'true') {
        // Increment score by 1
        totalScore += 1;
        // Show the message for if correct
        alert('Correct, I want to work in the cloud');
    }
    // Show the message for if incorrect
    else {
        alert('Incorrect, I do want to work in the cloud');
    }
}
// Call the askQuestion5 function
askQuestion5();

function askQuestion6() {
    // Ask for a random number between 1-10 with 3 attempts
    let guessedNumber = prompt('Please guess a number between 1-10. You will have a total of 3 guesses.');
    let myAnswer = 8;
    let totalAttempts = 0;

    for(let i=0; i <= 2; i++) {
        if(guessedNumber == myAnswer) {
            //Increment score if the guess was correct and show the correct message
            totalAttempts++;
            totalScore += 1;
            alert('That is correct!  You did it in ' + totalAttempts + 'attempts.');
            break;
        }
        else if(guessedNumber > myAnswer){
            //If number too high, we give them another attempt and the message for incorrect
            totalAttempts ++;
            alert('The number was too high, attempt #' + totalAttempts);
            guessedNumber = prompt('Please guess a number between 1-10');
        }
        else if(guessedNumber < myAnswer) {
            // If number too low, we give them another attempt and the message for incorrect
            totalAttempts++;
            alert('The number was too low, attempt # ' + totalAttempts);
            guessedNumber = prompt('Please guess again, attempt # ' + totalAttempts);
        }
        else if(totalAttempts == '2') {
            // If all three attempts have been made, show a maximum attempts message
            alert('the maximum number of entries have been exhausted');
            break;

        }
    }
}
// Call the askQuestion6 function
askQuestion6();

// Question 7 as a function
function askQuestion7() {
    let possibleGuesses =0;
    let answers = ['dragonBall z', 'pokemon', 'shamanKing', 'demon slayer', 'one-punch man', 'naruto']; // You do not need to camel case strings. You're going to get weird results
    let question7 =0;
    while(question7 < 7) {
        // Ask to guess favorite anime, provide a list of possible answers
        question7++;
        alert('Choose from the following answers ' + answers);
        let anime = prompt('Question 7: Please tell me what is my current anime?').toLocaleLowerCase();
        if(anime == answers[5]) {
            // If user guessed the correct answer, increment the score and show the message for correct
            totalScore += 1;
            alert('That is correct!');
            break;
        }
        else {
            // If the user guessed the incorrect answers, show the message for incorrect
            question7++;
            alert('That was not correct.');
        }
    }
}
// Call the askQuestion7 function
askQuestion7();
