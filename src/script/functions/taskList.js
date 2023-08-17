import {project} from "./project"
let projects = {};
let inbox = [];
let tasks = [];
const addProject = (projectName) => {
    projects[real(projectName)] = project(projectName);
};

const appendtostorage = () => {
    localStorage.setItem('tasks', JSON.stringify(Object.assign({}, tasks)));
}  

/* HERE */
const addTask = (task)=>{
    let lastindex = 0;
    if(tasks[tasks.length-1]){
        lastindex = tasks[tasks.length-1][1];
    }
    /* tasks.push([task,tasks.length+1]); */
    tasks.push([task,lastindex+1]);
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
    console.log(document.querySelector('.p-container:last-of-type'));
    let lastElement = document.querySelector('.p-container:last-of-type');
    let index = 1;
    if(lastElement){
        index = lastElement.getAttribute('index');
    }
    return index;
}
const real = (str) => {
    return str.toLowerCase().replaceAll(' ','');
};
export {addTask, addProject, tasks, projects, getLastTaskIndex, appendtostorage };
