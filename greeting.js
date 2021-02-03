const form=document.querySelector(".js-form"),
input=form.querySelector(".formInput"),
greeting=document.querySelector(".js-greetings");
toDoForm=document.querySelector(".js-toDoForm");

const USER_LS="currentUser",
SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const currentValue=input.value;
        paintGreeting(getTime,currentValue);
        saveName(currentValue);
        toDoForm.classList.add(SHOWING_CN);
    });
}

function paintGreeting(operator,text){
    form.classList.remove(SHOWING_CN);
    const hours=operator();
    if(hours>=12&&hours<17){
        greeting.innerText=`Good Afternoon, ${text}`;
    }
    if(hours>=17&&hours<24){
        greeting.innerText=`Good Evening, ${text}`;
    }
    if(hours>=0&&hours<6){
        greeting.innerText=`Good Night, ${text}`;
    }
    if(hours>=6&&hours<12){
        greeting.innerText=`Good Morning, ${text}`;
    }
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(getTime,currentUser);
        toDoForm.classList.add(SHOWING_CN);
    }
}

loadName();