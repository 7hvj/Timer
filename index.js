const timeDsply=document.querySelector("#timeDsply");
const startBtn=document.querySelector("#startBtn");
const PauseBtn=document.querySelector("#PauseBtn");
const restBtn=document.querySelector("#restBtn");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused= true;
let intervaild;
let hrs=0;
let min=0;
let sec=0;

startBtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startTime=Date.now()-elapsedTime;
        intervaild= setInterval(updateTime,75);

    }
});
PauseBtn.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elapsedTime= Date.now()-startTime;
        clearInterval(intervaild);
    }
});
restBtn.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervaild);
    startTime=0;
    elapsedTime=0;
    currentTime=0;
    hrs=0;
    min=0;
    sec=0;
    timeDsply.textContent="00:00:00";
});

function updateTime(){
    elapsedTime=Date.now()-startTime;

    sec=Math.floor((elapsedTime/1000)%60);
    min=Math.floor((elapsedTime/(1000*60))%60);
    hrs=Math.floor((elapsedTime/(1000*60*60))%60);

    sec=pad(sec);
    min=pad(min);
    hrs=pad(hrs);


    timeDsply.textContent=`${hrs}:${min}:${sec}`;

    function pad(unit){
        return(("0")+unit).length>2?unit:"0"+unit;
    }
}