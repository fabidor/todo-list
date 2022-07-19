import {DynamicDom, Umbrella} from './index.js';

const menuReset = () => {
    const menu = document.querySelector("#menu");
    while(menu.firstChild){
        menu.removeChild(menu.firstChild);
    }
    menu.appendChild(addItemToMenu(Umbrella.general));
    for(let i = 0; i < Umbrella.projectList.length; i++){
        menu.appendChild(addItemToMenu(Umbrella.projectList[i]));
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
    console.log(project);
    for(let i = 0; i < project.toDoList.length; i++){
        display.appendChild(addItemToDisplay(project.toDoList[i]));
    }
    return display;
}

const addItemToDisplay = (toDo) =>{
    const task = document.createElement('div');
    task.className="todo";
    task.textContent=toDo.name;
    return task;
}

export {menuReset, displayReset};