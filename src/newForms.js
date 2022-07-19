import {Umbrella, DynamicDom} from './index.js';
import {Project, Overall, ToDo} from './projectHandlers.js';

const newProjectForm = () =>{
    const element = document.createElement('div');
    element.className="projectForm";
    const formBlock = document.createElement('fieldset');
    element.appendChild(formBlock);
    const name = document.createElement('input');
    name.id = "name";
    formBlock.appendChild(name);
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.onclick = () => {
        const project = new Project(document.querySelector("#name").value);
        Umbrella.addProject(project);
        DynamicDom.removeForm();
        DynamicDom.repopulateMenu();
    }
    formBlock.appendChild(submit);
    return element;
}

const newTodoForm = () => {
    const element = document.createElement('div');
    element.className="todoForm";
    const formBlock = document.createElement('fieldset');
    element.appendChild(formBlock);
    const name = document.createElement('input');
    name.id="name";
    formBlock.appendChild(name);
    const submit = document.createElement('button');
    submit.textContent = "Submit";
    submit.onclick = () => {
        const todo = new ToDo(document.querySelector("#name").value);
        Umbrella.active.addToDo(todo);
        DynamicDom.repopulateDisplay();
    }
    element.appendChild(submit);
    return element;
}

export {newProjectForm, newTodoForm};