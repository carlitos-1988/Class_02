'use strict'

let totalScore = 0;

    let welcomeUser = prompt("Hello What is your name?");
    alert("Welcome " + welcomeUser + " I'm glad you have come to my cite")

    let home = prompt("do I currently reside in Washington?").toLowerCase();
    if(home === "true"){
        //console.log("That is correct I live in Washington");
        totalScore +=1
        alert("That is correct I live in Washington")
    }else{
        //console.log("That is not correct I live in Washington");
        alert("That is not correct I live in Washington");
    }
    
    let job = prompt("Was I in the Air Force?").toLowerCase();
    if(job === 'true'){
        //console.log("That is correct I was in the Air Force");
        totalScore +=1;
        alert("That is correct I was in the Air Force");
    }else{
        //console.log("Incorrect I was in the Air Force");
        alert("Incorrect I was in the Air Force");
    }
    
    let certification = prompt("Do I have any certifications?").toLowerCase();
    if(certification === 'true'){
        //console.log("Correct I have a sec+");
        totalScore +=1;
        alert("Correct I have a sec+");
    }else{
       // console.log("Incorrect I have a sec+")
       alert("Incorrect I have a sec+");
    }
    
    let job2 = prompt("Have I worked at applebees?").toLocaleLowerCase();
    if(job2 === 'true'){
        //console.log("Incorrect I have not worked at applebees");
        alert("Incorrect I have not worked at applebees");
    }else{
        //console.log("Correct I have not worked at Applebees");
        totalScore +=1;
        alert("Correct I have not worked at Applebees");
    }
    
    let goal = prompt("Do I want to work on the cloud?").toLowerCase();
    if(goal === "true"){
       // console.log("Correct I want to work in the cloud");
       totalScore +=1;
       alert("Correct I want to work in the cloud");
    }else{
        console.log("Incorrect I do want to work in the cloud");
        alert("Incorrect I do want to work in the cloud");
    }


// while(totalAttempts<=4){
//     if(guessedNumber === myAnser){
//         alert("That is Correct that was my number you did it in " + (4-totalAttempts) + " attempts" );
//         break;
//     }else if(guessedNumber>myAnser && totalAttempts<= 4){
//         totalAttempts++;
//         alert("number whas too high, You have" + (4-totalAttempts) + " left");
//     }else if(guessedNumber<myAnser && totalAttempts<=4){
//         totalAttempts++;
//         alert("number was too low, you have " + (4-totalAttempts) + "left")
//     }else{
//         console.log("Something went wrong");
//     }
// }

let guessedNumber =  prompt("please guess a number between 1-10 you will have a total of 4 guesses");
let myAnser = 8;//I know it's spelled answer
let totalAttempts = 0;
// let maxAttempts = 3;

for(let i = 0;i<=2; i++){
   
    if(guessedNumber == myAnser){
        totalAttempts++;
        alert("That is Correct you did it in "+ totalAttempts + " attempts");
        console.log(typeof guessedNumber);
        totalScore +=1;
        break;
    }else if(guessedNumber>myAnser){
        totalAttempts++;
        alert("number whas too high, Attempt# " + totalAttempts);
        guessedNumber =  prompt("please guess a number between 1-10");
        //console.log(typeof guessedNumber);
    }else if(guessedNumber<myAnser){
        totalAttempts++;
        alert("number was too low, Attempt# " + totalAttempts);
        guessedNumber =  prompt("please guess a number between 1-10");
        //console.log(typeof guessedNumber);
    }else if(totalAttempts == '4'){
        alert("maximum number of entries exausted");
        break;
    }
}
   

let possibleGuesses = 0;
let answers = ["dragonBall z","pokemon","shamanKing", "demon slayer", "one-punch man","naruto"];

let question7 = 0;
while(question7<7){
    question7+=1;
    console.log(answers[5]);
    alert("Choose from the following answers" + answers);
    let anime = prompt("Question 7: Please tell me what is my current Anime?").toLocaleLowerCase();
    if(anime == answers[5]){
        alert("that is correct");
        totalScore +=1;
        break
    }else{
        question7+=1;
        alert("that was not correct");
    }
}

alert("Your total score is " + totalScore );


    



   


