let gameSeq=[];
let userSeq=[];
let score=0;
let hscore=0;

let btns=["red","yellow","green","purple"];
let started=false;

let level=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game start");
    if(started==false){
        console.log("game is started");
        started=true;

        setTimeout(levelUp,1000);

    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}


function levelUp(){

    userSeq=[];

    level++;

    h2.innerText=`level ${level}`;

    score=level;

    if(score>=hscore){

        hscore=score;
    }


    let randIdx=Math.floor(Math.random()*4);

    let randColor=btns[randIdx];

    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);

    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx){

    // console.log("curr level :",level);
    // let idx=level-1;

    if(userSeq[idx]==gameSeq[idx]){

        if(userSeq.length==gameSeq.length){

        setTimeout(levelUp,1000);
        }
        
    }
    else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b><br>High Score:${hscore}<br> Press any key to start.`;

        let body=document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){

            document.querySelector("body").style.backgroundColor="White";

        },100)

        reset();

    }
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){

    btn.addEventListener("click",btnPress);
}

function btnPress(){
    // console.log(this);

    let btn=this;

    let userColor=btn.getAttribute("id");

    // console.log(userColor);
    userSeq.push(userColor);
    
    userFlash(btn);

    checkAns(userSeq.length-1);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}