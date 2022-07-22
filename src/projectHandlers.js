import {Umbrella, DynamicDom} from './index.js'

class Project{
    constructor(name, toDoList = []){
        this.name=name;
        this.toDoList=toDoList;
    }
    addToDo(todo){
        this.toDoList.push(todo);
        localStorage.clear();
        localStorage.setItem("Umbrella", JSON.stringify(Umbrella));
    
    }
}

class Overall{
    constructor(gen, projectList = []){
        this.projectList=projectList;
        this.general=gen;
        this.active=gen;
    }
    addProject(project){
        this.projectList.push(project);
        localStorage.clear();
        localStorage.setItem("Umbrella", JSON.stringify(Umbrella));
    }
    activate(project){
        this.active=project;
    }
    get displayedProject(){
        return this.active;
    }
}

class ToDo{
    constructor(name, date="No Date Set", notes = "", complete=false){
        this.name=name;
        this.date=date;
        this.notes = notes;
        this.complete=complete;
    }
}
export {Project, Overall, ToDo};

