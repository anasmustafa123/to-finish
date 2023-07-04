import {taskList } from "./taskList"
import {newProjectModule } from  "./newProjectModule"
import {newTaskModule } from "./newTaskModule"
import {newLabelModule } from "./newLabelModule"
import {task} from "./task"
const displayController = () => {
    const mytaskmanager = taskList(); 
    const addingProjectModule = newProjectModule(); 
    const addingTaskModule = newTaskModule();
    const addingLabelModule = newLabelModule();
    /* selecting today as a default date */
    addingTaskModule.selectDefaultDate();
    addingTaskModule.selectDefaultPiority();

    const addNewProject = document.querySelector("button.new-project");
    const projectInput = document.querySelector(".add-project-form");
    const closeAddProject = document.querySelector(".cansel-add-project");
    const closeAddTaskButton = document.querySelector('.add-task-footer  .cansel-add-task');
    const taskInput = document.querySelector(".add-task-form");
    const addTaskButton = document.querySelector('.add-task-button');
    const addNewLabelButton = document.querySelector('.add-label-button');
    const closeNewLabelButton = document.querySelector('.cansel-add-label');
    const addLabelForm = document.querySelector(".add-label-form");
    /* openning addproject form */
    addNewProject.addEventListener("click", () => {
        addingProjectModule.showProjectForm();
    });    
    /* closing addproject form */
    closeAddProject.addEventListener("click", () =>{
        addingProjectModule.clearAddProject();
        addingProjectModule.hideProjectForm();
    })
    /* submit addproject form*/
    projectInput.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const {projectName} = addingProjectModule.newProjectData();
        addingProjectModule.addNewProjectNode(projectName);
        addingProjectModule.clearAddProject();
        mytaskmanager.addProject(projectName);
        console.log(mytaskmanager)
        addingProjectModule.addNewProjectOption(projectName);
        addingProjectModule.hideProjectForm();
    });

    /* close addtask form */
    closeAddTaskButton.addEventListener ("click", ()=>{
        addingTaskModule.hideTaskForm();
        addingTaskModule.clearAddTask();
    })
    /* openning addtask form */
    addTaskButton.addEventListener("click", () =>{
        addingTaskModule.showTaskForm();
    });
    /* submit addtask form */
    taskInput.addEventListener("submit", (event) => {
        event.preventDefault();
        const {taskName, description, date, project, priority, labels} = addingTaskModule.addTaskData();
        const newTask = new task (taskName, description, date, priority, labels, project);
        mytaskmanager.addTask(newTask);
        addingTaskModule.addNewTaskNode(taskName, newTask.project, labels);
        addingTaskModule.clearAddTask();
        addingTaskModule.hideTaskForm();
        console.log(newTask);
        console.log(mytaskmanager)
    });



    const priorityList =  document.querySelector(".priority-list");
    const labelList = document.querySelector(".label-list");
    document.querySelector(".num-of-labels").before("(");
    document.querySelector(".num-of-labels").after(")");


    const isListHidden = (list) =>{
        return list.style.display == "none" || getComputedStyle(list).display == 'none'
    }
    const hideList = (list) => {
        list.style.display = "none";
    };
    const showList = (list) => {
        list.style.display = "block";
    };
    const toggleList = (list) => {
        if(isListHidden(list)){  
            showList(list);
        }
        else{
            hideList(list);
        }
    }

    document.querySelectorAll(".priority-list > li").forEach(priority => {
        priority.addEventListener("click", (e) => { 
            const priorityText = document.querySelector(".priority-text");
            /* priority value 1,2,3,4 */
            priorityText.value = priority.id
            priorityText.textContent = priority.textContent
        })
    })

    document.querySelectorAll(".label-list input").forEach(box =>{
        box.addEventListener("click", ()=>{
            document.querySelector(".num-of-labels").textContent =addingTaskModule.getCheckedLabelsCount();
        })
    })
    /* openning addproject form */
    addNewLabelButton.addEventListener("click", () => {
        addingTaskModule.hideTaskForm();
        addingLabelModule.showLabelForm();
    });    
    /* closing addproject form */
    closeNewLabelButton.addEventListener("click", () =>{
        addingLabelModule.clearAddLabel();
        addingLabelModule.hideLabelForm();
        addingTaskModule.showTaskForm();
    })
    /* submit addproject form*/
    addLabelForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const {labelName} = addingLabelModule.newLabelName();
        addingLabelModule.addNewLabelNode(labelName);
        /* changing number of selected labels */
        const lastLabel = document.querySelector(".label-list div:nth-last-child(2)");
        lastLabel.addEventListener("click", ()=>{
            document.querySelector(".num-of-labels").textContent =addingTaskModule.getCheckedLabelsCount();
        })
        console.log(lastLabel);
        addingLabelModule.hideLabelForm();
        addingLabelModule.clearAddLabel();
        addingTaskModule.showTaskForm();
    });

    /* adding preexisted project */
    const projects = document.querySelectorAll(".projects > .project");
    projects.forEach(project => {
        mytaskmanager.addProject(project.textContent);
        addingProjectModule.addNewProjectOption(project.textContent);
        console.log(mytaskmanager);
    })
};

export {displayController}