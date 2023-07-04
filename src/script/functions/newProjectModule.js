import {formHandler} from "./formHandler"

const newProjectModule = () =>{
    const formHelber = formHandler();

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
        formHelber.hideForm(".add-project-overlay");
    };
    const showProjectForm = () => {
        formHelber.showForm(".add-project-overlay");
    };
    return {clearAddProject, newProjectData, addNewProjectOption, hideProjectForm, showProjectForm, addNewProjectNode};
};
export {newProjectModule}