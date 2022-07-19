import {Project, Overall, ToDo} from './projectHandlers.js';
import {newProjectForm, newTodoForm} from './newForms.js';
import {menuReset, displayReset} from './DOMResets.js';

const content = document.querySelector("#content");
const menu = content.querySelector("#menu");
const display = document.querySelector("#display");

const General = new Project("General");
const Umbrella = new Overall(General);

const DynamicDom = (() => {
    const createProjectForm = () =>{
        menu.removeChild(document.querySelector('#projectButton'));
        const element = newProjectForm();
        menu.appendChild(element);
    }
    const removeForm = () =>{
        menu.removeChild(document.querySelector(".projectForm"));
    }

    const removeTodoForm = () => {
        display.removeChild(document.querySelector(".todoForm"));
    }
    
    const repopulateMenu = () =>{
        menuReset();
        menu.appendChild(projectButton());
    }

    const repopulateDisplay = () => {
        displayReset(Umbrella.active);
        display.appendChild(todoButton());
    }
    const createTodoForm = () => {
        display.removeChild(document.querySelector("#todoButton"));
        const element = newTodoForm();
        display.appendChild(element);
    }
    return {
        createProjectForm,
        removeForm,
        repopulateMenu,
        removeTodoForm,
        repopulateDisplay,
        createTodoForm,
    }
})();


const projectButton = () => {
    const addProject = document.createElement('button');
    addProject.id="projectButton";
    addProject.textContent="New Project";
    addProject.onclick = () => DynamicDom.createProjectForm();

    return addProject;
}

const todoButton = () => {
    const addToDo = document.createElement('button');
    addToDo.id="todoButton";
    addToDo.textContent= "New Task";
    addToDo.onclick = () => DynamicDom.createTodoForm();

    return addToDo;
}


DynamicDom.repopulateMenu();
DynamicDom.repopulateDisplay();

export {Umbrella, DynamicDom};

