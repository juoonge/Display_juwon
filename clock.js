const clockContainer=document.querySelector(".js-clock"),
clockTitle=clockContainer.querySelector("h1");

const BASE_COLOR="rgb(255, 255, 255)"; // 
const CLICKED_CLASS="clicked";

function getTime(){
    const date=new Date();
    seconds=date.getSeconds();
    minutes=date.getMinutes();
    hours=date.getHours();
    hours<10?hours=`0${hours}`:hours;
    minutes<10?minutes=`0${minutes}`:minutes;
    seconds<10?seconds=`0${seconds}`:seconds;

    clockTitle.innerText=`${hours}:${minutes}:${seconds}`;
    return hours;
}

clockTitle.style.color=BASE_COLOR;
clockTitle.addEventListener("mouseenter",()=>{
    const currentColor=clockTitle.style.color;
    const OTHER_COLOR="#"+Math.round(Math.random()*0xFFFFFF).toString(16);
    if(currentColor===BASE_COLOR){
        clockTitle.style.color=OTHER_COLOR;
    }else{
        clockTitle.style.color=BASE_COLOR;
    }
});

getTime();
setInterval(getTime,1000);
