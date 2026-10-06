let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
                                                        

const genCompChoice=()=>{
    //rock,paper,scissors
    let options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#f2d359";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;

        console.log("You win XD");
        msg.innerText=`You Win :)  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#5bec90";
    }
    else{
        console.log("You lost :(");
        compScore++;
        compScorePara.innerText=compScore;

        msg.innerText=`You Lost :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#d84455";
    }
};

const playGame=(userChoice)=>{
    console.log("User choice= ",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("Comp Choice= ",compChoice);


    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;

        if(userChoice==="rock"){
            //scissors,paper remain
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors remain
            userWin=compChoice==="rock"?true:false;
        }
        else{
            //rock,paper remain
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});