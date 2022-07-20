import {DynamicDom, Umbrella} from './index.js';

const menuReset = () => {
    const menu = document.querySelector("#menu");
    while(menu.firstChild){
        menu.removeChild(menu.firstChild);
    }
    menu.appendChild(addItemToMenu(Umbrella.general));
    for(let i = 0; i < Umbrella.projectList.length; i++){
        let component = addItemToMenu(Umbrella.projectList[i])
        component.setAttribute('id', i);
        menu.appendChild(component);
        const trash = document.createElement('button');
        trash.textContent="Delete"
        trash.onclick = () => {
            Umbrella.projectList.splice(component.id, 1);
            DynamicDom.repopulateMenu();
        }
        component.appendChild(trash);
        
    }
}

const addItemToMenu = (project) => {
    const newItem = document.createElement('div');
    newItem.className="project";
    newItem.textContent=project.name;
    newItem.addEventListener('click', () => {
        Umbrella.activate(project);
        DynamicDom.repopulateDisplay();
    });
    return newItem;
}

const displayReset = (project) =>{
    const display = document.querySelector('#display');
    while (display.firstChild){
        display.removeChild(display.firstChild);
    }
    const title = document.createElement("div");
    title.textContent = project.name;
    display.appendChild(title);
    for(let i = 0; i < project.toDoList.length; i++){
        display.appendChild(addItemToDisplay(project.toDoList[i], i));
    }
    return display;
}

const addItemToDisplay = (toDo, index) =>{
    const task = document.createElement('div');
    task.className="todo";
    task.setAttribute('id', index.toString());
    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    if(toDo.complete == true){
        checkbox.checked = true;
        task.classList.add("doneTask");
    }
    checkbox.addEventListener('click', () => {
        if(checkbox.checked == true){
            toDo.complete = true;
            console.log(toDo.complete);
            task.classList.add("doneTask");
        } else{
            toDo.complete = false;
            console.log(toDo.complete)
            if(task.classList.remove('doneTask'));
        }
    })
       
    task.appendChild(checkbox);
    const toDoName = document.createElement('div');
    toDoName.textContent=toDo.name;
    task.appendChild(toDoName);
    const toDoDate = document.createElement('div');
    toDoDate.textContent = toDo.date;
    task.appendChild(toDoDate);
    const trash = document.createElement('button');
    trash.textContent="Delete";
    trash.onclick = () =>{
        Umbrella.active.toDoList.splice(task.id, 1);
        DynamicDom.repopulateDisplay();
    }
    task.appendChild(trash);
    return task;
}

export {menuReset, displayReset};