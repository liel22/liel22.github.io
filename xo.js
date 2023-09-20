let turnCounter=1;
//           0 1 2 3 4 5 6 7 8
let gameArr=[0,0,0,0,0,0,0,0,0];

const score = JSON.parse(localStorage.getItem("score"))||{
    xwins:0,
    owins:0,
    ties:0
};

const scoreText=document.querySelector(".scores");

window.addEventListener("load", showScore);
function checkStatus(){
    
    if(gameArr[0]===gameArr[4]&&gameArr[4]===gameArr[8]){
        if(gameArr[0]===1){
            return "x";
        }
        else if(gameArr[4]===2){
            return "o";
        }
        
    }
    else if(gameArr[2]===gameArr[4]&&gameArr[4]===gameArr[6]){
        if(gameArr[2]===1){
            return "x";
        }
        else if(gameArr[2]===2){
            return "o";
        } 
    }

    else if(gameArr[0]===gameArr[1]&&gameArr[1]===gameArr[2]){
        if(gameArr[0]===1){
            return "x";
        }
        else if(gameArr[0]===2){
            return "o";
        } 
    }

    else if(gameArr[3]===gameArr[4]&&gameArr[4]===gameArr[5]){
        if(gameArr[3]===1){
            return "x";
        }
        else if(gameArr[3]===2){
            return "o";
        } 
    }

    else if(gameArr[7]===gameArr[8]&&gameArr[8]===gameArr[9]){
        if(gameArr[9]===1){
            return "x";
        }
        else if(gameArr[9]===2){
            return "o";
        } 
    }

    else if(gameArr[0]===gameArr[3]&&gameArr[3]===gameArr[6]){
        if(gameArr[0]===1){
            return "x";
        }
        else if(gameArr[0]===2){
            return "o";
        } 
    }

    else if(gameArr[1]===gameArr[4]&&gameArr[4]===gameArr[7]){
        if(gameArr[1]===1){
            return "x";
        }
        else if(gameArr[1]===2){
            return "o";
        } 
    }

    else if(gameArr[2]===gameArr[5]&&gameArr[5]===gameArr[8]){
        if(gameArr[2]===1){
            return "x";
        }
        else if(gameArr[2]===2){
            return "o";
        } 
    }
    else if(turnCounter===10){
        return "tie";
    }
    return "continue";

}

function playGame(buttonName,index){
    const buttonPressed=document.querySelector(`.${buttonName}`);
    
    if(turnCounter%2===0){
        buttonPressed.classList.add("o-style");
        buttonPressed.innerHTML="o";
        turnCounter++;
        buttonPressed.disabled=true;
        gameArr[index]=2;
        document.querySelector(".turn-of").innerHTML="O turn:";
    }
    else {
        buttonPressed.classList.add("x-style");
        buttonPressed.innerHTML="x";
        turnCounter++;
        buttonPressed.disabled=true;
        gameArr[index]=1;
        document.querySelector(".turn-of").innerHTML="X turn:";
    }

    const resultText = document.querySelector(".result-container");
    let result = checkStatus();

    if(result==='x'){
        resultText.innerHTML="X Wins!"
        score.xwins++;
        disableButtons();
        showScore();

    }
    else if(result==='o'){
        resultText.innerHTML="O Wins!"
        score.owins++;
        disableButtons();
        showScore();

    }
    else if(result==='tie'){
        resultText.innerHTML="It's a tie!"
        score.ties++;
        disableButtons();
        showScore();
    }
    else {
        return;
    }

}

function disableButtons(){
    document.querySelector('.first-button').disabled=true;
    document.querySelector('.first-button').classList.add("end-game-button");

    document.querySelector('.second-button').disabled=true;
    document.querySelector('.second-button').classList.add("end-game-button");

    document.querySelector('.third-button').disabled=true;
    document.querySelector('.third-button').classList.add("end-game-button");

    document.querySelector('.fourth-button').disabled=true;
    document.querySelector('.fourth-button').classList.add("end-game-button");

    document.querySelector('.fifth-button').disabled=true;
    document.querySelector('.fifth-button').classList.add("end-game-button");

    document.querySelector('.sixth-button').disabled=true;
    document.querySelector('.sixth-button').classList.add("end-game-button");

    document.querySelector('.seventh-button').disabled=true;
    document.querySelector('.seventh-button').classList.add("end-game-button");

    document.querySelector('.eigth-button').disabled=true;
    document.querySelector('.eigth-button').classList.add("end-game-button");

    document.querySelector('.ninth-button').disabled=true;
    document.querySelector('.ninth-button').classList.add("end-game-button");



}

function playAgain(){
    document.querySelector('.first-button').disabled=false;
    document.querySelector('.first-button').classList.remove("end-game-button");

    document.querySelector('.second-button').disabled=false;
    document.querySelector('.second-button').classList.remove("end-game-button");

    document.querySelector('.third-button').disabled=false;
    document.querySelector('.third-button').classList.remove("end-game-button");

    document.querySelector('.fourth-button').disabled=false;
    document.querySelector('.fourth-button').classList.remove("end-game-button");

    document.querySelector('.fifth-button').disabled=false;
    document.querySelector('.fifth-button').classList.remove("end-game-button");

    document.querySelector('.sixth-button').disabled=false;
    document.querySelector('.sixth-button').classList.remove("end-game-button");

    document.querySelector('.seventh-button').disabled=false;
    document.querySelector('.seventh-button').classList.remove("end-game-button");

    document.querySelector('.eigth-button').disabled=false;
    document.querySelector('.eigth-button').classList.remove("end-game-button");

    document.querySelector('.ninth-button').disabled=false;
    document.querySelector('.ninth-button').classList.remove("end-game-button");




    for(let i=0;i<9;i++){
        gameArr[i]=0;
    }

    document.querySelector('.first-button').innerHTML='';
    document.querySelector('.second-button').innerHTML='';
    document.querySelector('.third-button').innerHTML='';
    document.querySelector('.fourth-button').innerHTML='';
    document.querySelector('.fifth-button').innerHTML='';
    document.querySelector('.sixth-button').innerHTML='';
    document.querySelector('.seventh-button').innerHTML='';
    document.querySelector('.eigth-button').innerHTML='';
    document.querySelector('.ninth-button').innerHTML='';


    turnCounter=1;
    document.querySelector(".turn-of").innerHTML="X turn:";
    document.querySelector(".result-container").innerHTML="";

    removeStyle('first-button');
    removeStyle('second-button');
    removeStyle('third-button');
    removeStyle('fourth-button');
    removeStyle('fifth-button');
    removeStyle('sixth-button');
    removeStyle('seventh-button');
    removeStyle('eigth-button');
    removeStyle('ninth-button');


}


function removeStyle(buttonName){
    
    const butt=document.querySelector(`.${buttonName}`);
    if(butt.classList.contains('o-style')){
        butt.classList.remove('o-style');
    }
    else if(butt.classList.contains('x-style')){
        butt.classList.remove('x-style');
    }
}

function resetScore(){
    score.xwins=0;
    score.owins=0;
    score.ties=0;
    showScore();
}

function showScore(){
    scoreText.innerHTML=`X Wins: ${score.xwins}, O Wins: ${score.owins},
    Ties: ${score.ties}`;
    localStorage.setItem("score",JSON.stringify(score));

}




