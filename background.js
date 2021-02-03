const body=document.querySelector("body");

const IMG_NUMBER=12;

function paintImage(imgNumber){
    const image=new Image();
    image.src=`img/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER);
    return number
}

const randomNumber=getRandom();
paintImage(randomNumber);