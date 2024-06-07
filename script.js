let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const userInput = document.querySelector("#userInput");
const compInput = document.querySelector("#compInput");

const msg = document.querySelector(".msgContainer");

const choices = document.querySelectorAll(".choise");

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawGame = ()=>{
    console.log("Game Draw");
    msg.innerText = "Game Draw. play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";

        userScore++;
        userScorePara.innerText =userScore;
    }
    else {
        console.log("You Loose");
        msg.innerText = "You Loose!";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";

        compScore++;
        compScorePara.innerText = compScore;
    }
} 

const displayInput = (userChoice,compChoice)=>{
    userInput.innerText = userChoice;
    compInput.innerText = compChoice;
}

const playGame = (userChoice)=>{
    console.log(`user choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }

    displayInput(userChoice,compChoice);
};
choices.forEach( (choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        //console.log(`choice was pressed ${userChoice}`);
        playGame(userChoice);
    });
});