'use strict'

    let welcomeUser = prompt("Hello What is your name?");
    alert("Welcome " + welcomeUser + " I'm glad you have come to my site")

    let home = prompt("do I currently reside in Washington?").toLowerCase();
    if(home === "true"){
        //console.log("That is correct I live in Washington");
        alert("That is correct I live in Washington")
    }else{
        //console.log("That is not correct I live in Washington");
        alert("That is not correct I live in Washington");
    }
    
    let job = prompt("Was I in the Air Force?").toLowerCase();
    if(job === 'true'){
        //console.log("That is correct I was in the Air Force");
        alert("That is correct I was in the Air Force");
    }else{
        //console.log("Incorrect I was in the Air Force");
        alert("Incorrect I was in the Air Force");
    }
    
    let certification = prompt("Do I have any certifications?").toLowerCase();
    if(certification === 'true'){
        //console.log("Correct I have a sec+");
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
        console.log("Correct I have not worked at Applebees");
        alert("Correct I have not worked at Applebees");
    }
    
    let goal = prompt("Do I want to work on the cloud?").toLowerCase();
    if(goal === "true"){
       // console.log("Correct I want to work in the cloud");
       alert("Correct I want to work in the cloud");
    }else{
        console.log("Incorrect I do want to work in the cloud");
        alert("Incorrect I do want to work in the cloud");
    }


   


    



   


