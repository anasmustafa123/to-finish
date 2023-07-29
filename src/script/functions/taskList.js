import {project} from "./project"
let projects = {};
let inbox = [];
let tasks = [];
const addProject = (projectName) => {
    projects[real(projectName)] = project(projectName);
};

const appendtostorage = () => {
    localStorage.setItem('tasks', JSON.stringify(Object.assign({}, tasks)));
/*     localStorage.setItem('labels', JSON.stringify(Object.assign({}, tasks))); */
}  

/* HERE */
const addTask = (task)=>{
    tasks.push([task,tasks.length+1]);
    appendtostorage();
    const projectName = task.project;
    const projectId = real(projectName);
    if(projectId == "inbox"){
        inbox.push(task);
    }else {
        if(projects.hasOwnProperty(projectId)){
            projects[projectId].tasks.push(task);
        }
    }
}

const getLastTaskIndex = () => {
    return tasks.length-1;
}
const real = (str) => {
    return str.toLowerCase().replaceAll(' ','');
};
export {addTask, addProject, tasks, projects, getLastTaskIndex};
