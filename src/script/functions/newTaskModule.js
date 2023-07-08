import {hideForm, showForm} from "./formHandler"

const clearAddTask = () =>{
    document.getElementById("taskName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    document.getElementById("project").selectedIndex = 0;
    document.querySelector(".priority-text").textContent = "priority 4"
    selectDefaultPiority();
    selectDefaultDate();
    clearLabels();
};
const addTaskData =() =>{
    const taskName = document.getElementById("taskName").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const project = document.getElementById("project").value;
    const priority = document.querySelector(".priority-text").value;
    const labels = getCheckedLabels();
    return {taskName, description, date, project, priority, labels};
};
const getCheckedLabels =() =>{ return getCheckedLabelsAndCount()[0];};
const getCheckedLabelsCount =() =>{ return getCheckedLabelsAndCount()[1];};
const getCheckedLabelsAndCount =() =>{
    let checkedLabels = [];
    let checkedLabelsCount = 0;  
    document.querySelectorAll(".label-list input").forEach(box =>{
        if(box.checked == true){
            console.log(checkedLabelsCount)
            checkedLabels.push(box.value);
            checkedLabelsCount += 1;
        }
    })
    return [checkedLabels,checkedLabelsCount];
};
const selectDefaultPiority = () =>{
    document.querySelector(".priority-text").value = 4
};
const clearLabels = () => {
    document.querySelectorAll(".label-list input").forEach(box =>{
        box.checked = false;
    })
    document.querySelector(".num-of-labels").textContent = "0";
};
const selectDefaultDate = () => {
    const date = document.getElementById("date");
    const today = new Date().toISOString().split('T')[0];
    date.value = today;
};
const addNewTaskNode = (taskName, project, labels) => {
    const taskContainer = document.querySelector(".all-tasks");
    const lastTask = document.querySelector(".all-tasks .p-container:last-of-type");
    console.log("fasd");
    console.log(lastTask);
    
    let newTaskNode = undefined;
    if(lastTask){
        newTaskNode = lastTask.cloneNode(true);
        newTaskNode.id = Number(lastTask.id) + 1;
        newTaskNode.querySelector(".p-title").textContent = taskName;
        newTaskNode.querySelector(".p-name").textContent =  project;
        const labelList =  newTaskNode.querySelector(".labels-list");
        newTaskNode.querySelector("#task").checked = false;
        labelList.textContent = "";
        labels.forEach(label =>{
            labelList.appendChild(getNewLabelNode(label));
        })
    }else{
    newTaskNode = getNewTaskNode(1,taskName, project);
    }
    newTaskNode.querySelector("input").addEventListener("change",()=>{
        document.querySelector(".all-tasks").removeChild(newTaskNode);
    });
    taskContainer.appendChild(newTaskNode); 
};
const getNewTaskNode = (id, taskTitle, pName)=>{
    const newTaskNode = document.createElement("div");
    const taskFirstLine = document.createElement("div");
    const taskLastLine = document.createElement("div");
    taskFirstLine.classList.add("task-first-line");
    taskLastLine.classList.add("task-cecond-line");
    newTaskNode.classList.add("p-container");
    newTaskNode.id = id;
    const checkbox = document.createElement("input");
    const ptitle = document.createElement("div");
    const pname = document.createElement("div");
    ptitle.classList.add("p-title");
    pname.classList.add("p-name");
    ptitle.textContent = taskTitle;
    pname.textContent = pName;
    taskFirstLine.appendChild(checkbox);
    taskLastLine.appendChild(pname);
    checkbox.type = "checkbox";
    checkbox.id = "task"
    checkbox.value = "task"
    newTaskNode.appendChild(taskFirstLine);
    return newTaskNode;
};
const getNewLabelNode =  (labelName) => {
    const labelNode = document.createElement("div");
    labelNode.className = "label";
    labelNode.textContent = labelName;
    return labelNode;
};
const hideTaskForm = () => {
    hideForm(".add-task-overlay");
};
const showTaskForm = () => {
    showForm(".add-task-overlay");
};
export {clearAddTask, addTaskData, hideTaskForm, showTaskForm, selectDefaultDate, addNewTaskNode,selectDefaultPiority, getCheckedLabelsCount};
