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
const hideTaskForm = () => {
    hideForm(".add-task-overlay");
};
const showTaskForm = () => {
    showForm(".add-task-overlay");
};
export {clearAddTask, addTaskData, hideTaskForm, showTaskForm, selectDefaultDate,selectDefaultPiority, getCheckedLabelsCount};
