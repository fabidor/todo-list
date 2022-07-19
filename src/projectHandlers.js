class Project{
    constructor(name){
        this.name=name;
        this.toDoList=[];
        this.idGenerator=0;
    }
    addToDo(todo){
        this.toDoList.push(todo);
    }
}

class Overall{
    constructor(gen){
        this.projectList=[];
        this.general=gen;
        this.active=gen;
    }
    addProject(project){
        this.projectList.push(project);
    }
    activate(project){
        this.active=project;
    }
    get displayedProject(){
        return this.active;
    }
}

class ToDo{
    constructor(name, date="No Date Set", complete=false){
        this.name=name;
        this.date=date;
        this.complete=complete;
    }
}
export {Project, Overall, ToDo};

