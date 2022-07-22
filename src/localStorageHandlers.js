import {Umbrella, DynamicDom} from './index.js';
import {Project, Overall, ToDo} from './projectHandlers.js';

const remakeToDos = (project) => {
    let toDoArray = [];
    for (let i = 0; i < project.toDoList.length; i++){
        if(project.toDoList[i].date){
        let newToDo = new ToDo(project.toDoList[i].name, project.toDoList[i].date, project.toDoList[i].notes, project.toDoList[i].complete);
        toDoArray.push(newToDo);
        }
        else{
            let newToDo = new ToDo(project.toDoList[i].name, "", project.toDoList[i].complete);
            toDoArray.push(newToDo);
        }
    }
    return toDoArray;
}

const remakeUmbrella = (emptyObject) => {
    const general = new Project(emptyObject.general.name, remakeToDos(emptyObject.general));
    let projectArray = [];
    for(let i = 0; i< emptyObject.projectList.length; i++){
        let toDoArray = remakeToDos(emptyObject.projectList[i]);
        let newProject = new Project(emptyObject.projectList[i].name, toDoArray);
        projectArray.push(newProject);
        console.log(projectArray);
    }
    const element = new Overall(general, projectArray); 
    return element;
}

export default remakeUmbrella;