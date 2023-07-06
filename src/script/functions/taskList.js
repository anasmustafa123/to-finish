import {project} from "./project"
const taskList = () => {
    let projects = {};
    let inbox = [];
    let tasks = [];
    const addProject = (projectName) => {
        console.log(projectName);
        projects[real(projectName)] = project(projectName);
    };
    const addTask = (task)=>{
        tasks.push(task);
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
    const real = (str) => {
        return str.toLowerCase().replaceAll(' ','');
    };
    return {addTask, addProject, tasks};
};
export {taskList}