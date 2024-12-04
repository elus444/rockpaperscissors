let humanScore=0;
let computerScore=0;
function getcomputerchoice(){
    result=Math.floor(Math.random()*3);
    let cchoice;
    if (result===0){
        cchoice="rock"
    }else if (result===1){
        cchoice= "paper";
    }else{
        cchoice= "scissors";
    }
    return cchoice;
}
function playround(humanchoice,computerchoice){
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");
    let resultmessage = `Player: ${humanchoice}, Computer: ${computerchoice}<br>`;
    let score;
    if (humanchoice===computerchoice){
        resultmessage+="draw";
        score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
    }else if(humanchoice==="rock" && computerchoice==="scissors" ){
        humanScore+=1;
        score=`your score is : ${humanScore} the computer's score is :  ${computerScore} `
        resultmessage+="you won rock beats scissors";
    }else if(humanchoice==="paper" && computerchoice==="rock" ){
        humanScore+=1;
        resultmessage+="you won paper beats rock";
        score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
    }else if(humanchoice==="scissors" && computerchoice==="paper" ){
        humanScore+=1;
        resultmessage+="you won scissor beats paper";
        score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
    }else if(computerchoice==="rock" && humanchoice==="scissors" ){
        computerScore+=1;
        resultmessage+="you lost rock beats scissors";
        score=`your score is : ${humanScore} the computer's score is : ${computerScore} `

    }else if(computerchoice==="paper" && humanchoice==="rock" ){
        computerScore+=1;
        resultmessage+="you lost paper beats rock";
        score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
    }else if(computerchoice==="scissors" && humanchoice==="paper" ){
        computerScore+=1;
        resultmessage+="you lost scissors beats paper ";
        score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
    }
    if (humanScore == 5){
            resultmessage="you won the game"
            score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
            computerScore=0
            humanScore=0
    }
    else if (computerScore == 5) {
            resultmessage="you lost the game"
            score=`your score is : ${humanScore} the computer's score is : ${computerScore} `
            computerScore=0
            humanScore=0
    }
    resultDiv.innerHTML=resultmessage;
    scoreDiv.innerHTML=score;
}
document.getElementById("rock").addEventListener("click", function() { playround("rock",getcomputerchoice()); });
document.getElementById("paper").addEventListener("click", function() { playround("paper",getcomputerchoice()); }); 
document.getElementById("scissors").addEventListener("click", function() { playround("scissors",getcomputerchoice()); });


