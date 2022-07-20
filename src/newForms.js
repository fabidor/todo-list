import {Umbrella, DynamicDom} from './index.js';
import {Project, Overall, ToDo} from './projectHandlers.js';

const newProjectForm = () =>{
    const element = document.createElement('div');
    element.className="form";
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
        DynamicDom.repopulateMenu();
    }
    const cancel = document.createElement("button");
    cancel.textContent = "Cancel";
    cancel.onclick = () => {
        DynamicDom.repopulateMenu();
    }
    element.appendChild(submit);
    element.appendChild(cancel);
    return element;
}

const newTodoForm = () => {
    const element = document.createElement('div');
    element.className="form";
    const formBlock = document.createElement('fieldset');
    element.appendChild(formBlock);
    const name = document.createElement('input');
    name.id="name";
    formBlock.appendChild(name);
    const date = document.createElement('input');
    date.id = "date";
    date.setAttribute("type", "date");
    formBlock.appendChild(date);
    const submit = document.createElement('button');
    submit.textContent = "Submit";
    submit.onclick = () => {
        const todo = new ToDo(document.querySelector("#name").value, document.querySelector('#date').value);
        Umbrella.active.addToDo(todo);
        DynamicDom.repopulateDisplay();
    }
    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";
    cancel.onclick = () => {
        DynamicDom.repopulateDisplay();
    }
    element.appendChild(submit);
    element.appendChild(cancel);
    return element;
}

export {newProjectForm, newTodoForm};