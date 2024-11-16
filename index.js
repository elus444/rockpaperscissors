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
        cchoice= "scissor";
    }
    return cchoice;
}
function gethumanchoice(){
    let choice;
    while (!choice){
        choice=window.prompt("enter your  choice it must be rock,papper or scissor:" )
    }
    let hchoice=choice.toLowerCase();
    while(choice){
        if(hchoice !="rock" || hchoice !="rock" ||hchoice !="rock" ){
            choice=window.prompt("please enter your  choice again it must be rock,papper or scissor:" )
            hchoice=choice.toLowerCase();
        }else{
            break
        }
    }
    return hchoice
}
function playround(humanchoice,computerchoice){
    if (humanchoice===computerchoice){
        console.log("draw")
    }else if(humanchoice==="rock" && computerchoice==="scissor" ){
        humanScore+=1
        console.log("you won rock beats scissor")
    }else if(humanchoice==="paper" && computerchoice==="rock" ){
        humanScore+=1
        console.log("you won paper beats rock")
    }else if(humanchoice==="scissor" && computerchoice==="paper" ){
        humanScore+=1
        console.log("you won scissor beats paper")
    }else if(computerchoice==="rock" && humanchoice==="scissor" ){
        computerScore+=1
        console.log("you lost rock beats scissor")

    }else if(computerchoice==="paper" && humanchoice==="rock" ){
        computerScore+=1
        console.log("you lost paper beats rock")
    }else if(computerchoice==="scissor" && humanchoice==="paper" ){
        computerScore+=1
        console.log("you lost scissor beats paper")
    }
}
function playgame(){
    for(i=0;i<5;i++){
        const humanselection=gethumanchoice();
        const computerselection=getcomputerchoice();
        playround(humanselection,computerselection);
    }
    if (humanScore>computerScore){
        console.log(`you won the game your score is: ${humanScore} the computer score is ${computerScore}`)
    }else if (humanScore<computerScore){
        console.log(`you lost the game your score is: ${humanScore} the computer score is ${computerScore}`)
    }else{
        console.log(`your score is equal your score is: ${humanScore} the computer score is ${computerScore}`)
       
    }
}
playgame()