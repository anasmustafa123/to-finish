import {hideForm, showForm} from "./formHandler"

const clearAddProject = () =>{
    document.getElementById("projectName").value = "";
};
const newProjectData =() =>{
    const projectName = document.getElementById("projectName").value;
    return {projectName};
};
const addNewProjectOption = (projectName) =>{
    const projectOptionContainer = document.querySelector("select.project-container"); 
    const newProjectOption = projectOptionContainer.lastElementChild.cloneNode(true);
    newProjectOption.value = projectName;
    newProjectOption.innerHTML = projectName;
    projectOptionContainer.appendChild(newProjectOption);
};
const addNewProjectNode = (projectName) =>{
    const projects = document.querySelector(".projects");
    const lastProject = projects.lastElementChild;
    const newProject = lastProject.cloneNode(true);
    newProject.id = Number(lastProject.id) + 1;
    newProject.innerHTML = projectName;
    projects.appendChild(newProject);
};
const hideProjectForm = () => {
    hideForm(".add-project-overlay");
};
const showProjectForm = () => {
    showForm(".add-project-overlay");
};
export {clearAddProject, newProjectData, addNewProjectOption, hideProjectForm, showProjectForm, addNewProjectNode};
