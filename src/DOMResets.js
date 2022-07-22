import { DynamicDom, Umbrella } from "./index.js";

const menuReset = () => {
  const menu = document.querySelector("#menu");
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
  menu.appendChild(addItemToMenu(Umbrella.general));
  const projects = document.createElement("div");
  projects.className = "projects";
  const projectTitle = document.createElement("div");
  projectTitle.textContent = "Projects";
  projectTitle.id = "menuProjectTitle";
  projects.appendChild(projectTitle);
  for (let i = 0; i < Umbrella.projectList.length; i++) {
    let component = addItemToMenu(Umbrella.projectList[i]);
    component.setAttribute("id", i);
    projects.appendChild(component);
    component.addEventListener("mouseenter", () => {
      activeProject(component);
    });
    component.addEventListener("mouseleave", () => {
      inactiveProject(component);
    });
  }
  menu.appendChild(projects);
};

const addItemToMenu = (project) => {
  const newItem = document.createElement("div");
  newItem.className = "project";
  const taskCount = document.createElement("div");
  taskCount.textContent = project.toDoList.length.toString();
  taskCount.className = "taskCount";
  newItem.appendChild(taskCount);
  const projectName = document.createElement("div");
  projectName.textContent = project.name;
  newItem.appendChild(projectName);
  newItem.addEventListener("click", () => {
    if (
      Umbrella.projectList.indexOf(project) != -1 ||
      project == Umbrella.general
    ) {
      //To test to see if the project still exists. Important for when we delete projects.
      Umbrella.activate(project);
      DynamicDom.repopulateDisplay();
    }
  });
  return newItem;
};

const activeProject = (component) => {
  if (!component.contains(component.querySelector(".trash"))) {
    const trash = document.createElement("button");
    trash.textContent = "X";
    trash.className = "trash";
    trash.onclick = () => {
      Umbrella.activate(Umbrella.general);
      Umbrella.projectList.splice(component.id, 1);
      DynamicDom.repopulateDisplay();
      DynamicDom.repopulateMenu();
      localStorage.clear();
      localStorage.setItem("Umbrella", JSON.stringify(Umbrella));
    };
    component.appendChild(trash);
  }
};
const inactiveProject = (component) => {
  component.removeChild(component.querySelector(".trash"));
};

const displayReset = (project) => {
  const display = document.querySelector("#display");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  const title = document.createElement("div");
  title.textContent = project.name;
  title.id = "projectTitle";
  display.appendChild(title);
  for (let i = 0; i < project.toDoList.length; i++) {
    display.appendChild(addItemToDisplay(project.toDoList[i], i));
  }
  return display;
};

const addItemToDisplay = (toDo, index) => {
  const task = document.createElement("div");
  task.className = "todo";
  task.addEventListener("mouseenter", () => {
    activeToDo(task);
  });
  task.addEventListener("mouseleave", () => {
    inactiveToDo(task);
  });
  task.setAttribute("id", index.toString());
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (toDo.complete == true) {
    checkbox.checked = true;
    task.classList.add("doneTask");
  }
  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      toDo.complete = true;
      console.log(toDo.complete);
      task.classList.add("doneTask");
    } else {
      toDo.complete = false;
      console.log(toDo.complete);
      if (task.classList.remove("doneTask"));
    }
    localStorage.clear();
    localStorage.setItem("Umbrella", JSON.stringify(Umbrella));
  });

  task.appendChild(checkbox);
  const toDoName = document.createElement("div");
  toDoName.textContent = toDo.name;
  task.appendChild(toDoName);
  const toDoDate = document.createElement("div");
  toDoDate.textContent = toDo.date;
  task.appendChild(toDoDate);
  if (toDo.notes) {
    const notes = document.createElement("div");
    notes.className = "notes";
    notes.textContent = toDo.notes;
    task.appendChild(notes);
  }

  return task;
};

const activeToDo = (task) => {
  task.classList.add("activeToDo");
  if (!task.contains(task.querySelector(".trash"))) {
    const trash = document.createElement("button");
    trash.className = "trash";
    trash.textContent = "X";
    trash.onclick = () => {
      Umbrella.active.toDoList.splice(task.id, 1);
      DynamicDom.repopulateDisplay();
      DynamicDom.repopulateMenu();
      localStorage.clear();
      localStorage.setItem("Umbrella", JSON.stringify(Umbrella));
    };
    task.appendChild(trash);
  }
};

const inactiveToDo = (task) => {
  task.removeChild(task.querySelector(".trash"));
  task.classList.remove("activeToDo");
};

export { menuReset, displayReset };
