let counter=0;
let countdownInterval=null;

const counterDisplay =document.getElementById("counter");
const IncrementBtn = document.getElementById("increment");
const DecrementBtn = document.getElementById("decrement");
const reset=document.getElementById("reset");
const start=document.getElementById("start");

function updateCounter() {
    counterDisplay.textContent = counter;
}

IncrementBtn.addEventListener("click",() =>{
    counter++;
    updateCounter();
});

DecrementBtn.addEventListener("click",() => {
    counter--;
    updateCounter();
});

reset.addEventListener("click",() => {
    counter=0;
    updateCounter();

    if(countdownInterval){
        clearInterval(countdownInterval);
        countdownInterval=null;
    }
});

start.addEventListener("click",() =>{
    if(countdownInterval){
        clearInterval(countdownInterval);
    }

    countdownInterval=setInterval(()=> {
        if(counter>0){
            counter--;
        }else if(counter<0){
            counter ++;
        }else{
            clearInterval(countdownInterval);
            countdownInterval=null;
        }

        updateCounter();
    },1000)
});
