import {Umbrella, DynamicDom} from './index.js';
import {Project, Overall, ToDo} from './projectHandlers.js';

const newProjectForm = () =>{
    const element = document.createElement('div');
    element.className="form";
    const formBlock = document.createElement('fieldset');
    element.appendChild(formBlock);
    const name = document.createElement('input');
    name.setAttribute('placeholder', 'Project Name:')
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
    element.classList.add("toDoForm");
    const formBlock = document.createElement('fieldset');
    element.appendChild(formBlock);
    const name = document.createElement('input');
    name.id="name";
    name.setAttribute("placeholder", "Name of Task:")
    formBlock.appendChild(name);
    const date = document.createElement('input');
    date.id = "date";
    date.setAttribute("type", "date");
    formBlock.appendChild(date);
    const notes = document.createElement('input');
    notes.id="notes";
    notes.setAttribute('type', 'textarea');
    notes.setAttribute('placeholder', 'Notes:');
    formBlock.appendChild(notes);
    const submit = document.createElement('button');
    submit.textContent = "Submit";
    submit.onclick = () => {
        const todo = new ToDo(document.querySelector("#name").value, document.querySelector('#date').value, document.querySelector('#notes').value);
        Umbrella.active.addToDo(todo);
        DynamicDom.repopulateDisplay();
        DynamicDom.repopulateMenu();
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