const hourUp = document.getElementById("up1"),hourDown = document.getElementById("down1");
const minuteUp = document.getElementById("up2"), minuteDown = document.getElementById("down2");
const secondUp = document.getElementById("up3"), secondDown = document.getElementById("down3");
const play = document.getElementById("start");
const pause = document.getElementById("pause");
const ring = document.getElementById("ring");
let ringSound = document.getElementById("ringSound");
let hours=0;
let minutes=0;
let seconds=0;
function hourIncrease(){
    play.addEventListener("click",playFunction);
    hours++;
    if(hours>24){
        hours=0;
    }
    document.getElementById("hour").value=hours;
}
function hourDecrease(){
    play.addEventListener("click",playFunction);
    hours--;
    if(hours<0){
        hours=24;
    }
    document.getElementById("hour").value=hours;
}
hourUp.addEventListener("click",hourIncrease);
hourDown.addEventListener("click",hourDecrease);
function minuetIncrease(){
    play.addEventListener("click",playFunction);
    minutes++;
    if(minutes>59){
        minutes=0;
    }
    document.getElementById("minute").value=minutes;
}
function minuetDecrease(){
    play.addEventListener("click",playFunction);
    minutes--;
    if(minutes<0){
        minutes=59;
    }
    document.getElementById("minute").value=minutes;
}
minuteUp.addEventListener("click",minuetIncrease);
minuteDown.addEventListener("click",minuetDecrease);
function secondIncrease(){
    play.addEventListener("click",playFunction);
    seconds++;
    if(seconds>59){
        seconds=0;
    }
    document.getElementById("second").value=seconds;
}
function secondDecrease(){
    play.addEventListener("click",playFunction);
    seconds--;
    if(seconds<0){
        seconds=59;
    }
    document.getElementById("second").value=seconds;
}

secondDown.addEventListener("click",secondDecrease);
secondUp.addEventListener("click",secondIncrease);
let timerInterval;
pause.style.display="none"
function playFunction(){
    if(pause.style.display=="none"){
        pause.style.display="inherit";
        play.style.display="none";
        timerInterval=setInterval(timerStartFunction,1000);
    }else{
        play.style.display="inherit";
        pause.style.display="none";
        clearInterval(timerInterval);
        ring.pause();
    }
    
    
}
function timerStartFunction(){
    
    if(hours>0 || minutes > 0 || seconds >0){
        
        
        if(seconds>0){
            seconds--; 
        }else{
            
            if(minutes>0){
                minutes--;
                seconds=59;

            }else{
               if(hours>0){
                hours--;
                minutes=59;
               }else{
                   
               }
            }
        }
    
   
}else{
    clearInterval(timerInterval);
    ringSound.src = "ringSound.mp4";
    ring.setAttribute("autoplay","autoplay");
    ring.load();
} 
document.getElementById("hour").value=hours;
document.getElementById("minute").value=minutes;
document.getElementById("second").value=seconds;
}



pause.addEventListener("click",playFunction);
