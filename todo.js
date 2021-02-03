toDoForm=document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
todoList=document.querySelector(".js-toDoList");

const TODOS_LS="todos";
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length+1;
    delBtn.innerText="🐥 ";
    delBtn.style.fontSize="25px";
    delBtn.style.border="none";
    delBtn.style.background="none";
    delBtn.style.outline="none";

    delBtn.addEventListener("click",(event)=>{
        const btn=event.target;
        const li=btn.parentNode;
        todoList.removeChild(li);
        const cleanToDos=toDos.filter((toDo)=>{
            return toDo.id!==parseInt(li.id);
        });
        toDos=cleanToDos;
        saveToDos();
    });
    span.innerText=text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;

    todoList.appendChild(li);
    const toDoObj={
        text:text,
        id:newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo)=>{
            paintToDo(toDo.text);
        })
    }
}

function Init(){
    loadToDos();
    toDoForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const currentValue=toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value="";
    });
}

Init();