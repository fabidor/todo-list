import { Project, Overall, ToDo } from "./projectHandlers.js";
import { newProjectForm, newTodoForm } from "./newForms.js";
import { menuReset, displayReset } from "./DOMResets.js";
import remakeUmbrella from "./localStorageHandlers.js";
import "./style.css";

const content = document.querySelector("#content");
const menu = content.querySelector("#menu");
const display = document.querySelector("#display");

if (!localStorage.getItem("Umbrella")) {
  var General = new Project("General");
  var Umbrella = new Overall(General);
} else {
  Umbrella = JSON.parse(localStorage.getItem("Umbrella"));
  Umbrella = remakeUmbrella(Umbrella);
}

const DynamicDom = (() => {
  const createProjectForm = () => {
    menu.removeChild(document.querySelector("#projectButton"));
    const element = newProjectForm();
    menu.appendChild(element);
  };
  const repopulateMenu = () => {
    menuReset();
    menu.appendChild(projectButton());
  };

  const repopulateDisplay = () => {
    displayReset(Umbrella.active);
    display.appendChild(todoButton());
  };
  const createTodoForm = () => {
    display.removeChild(document.querySelector("#todoButton"));
    const element = newTodoForm();
    display.appendChild(element);
  };
  return {
    createProjectForm,
    repopulateMenu,
    repopulateDisplay,
    createTodoForm,
  };
})();

const projectButton = () => {
  const addProject = document.createElement("button");
  addProject.id = "projectButton";
  addProject.textContent = "+";
  addProject.onclick = () => DynamicDom.createProjectForm();

  return addProject;
};

const todoButton = () => {
  const addToDo = document.createElement("button");
  addToDo.id = "todoButton";
  addToDo.textContent = "+";
  addToDo.onclick = () => DynamicDom.createTodoForm();

  return addToDo;
};

DynamicDom.repopulateMenu();
DynamicDom.repopulateDisplay();

export { Umbrella, DynamicDom };
