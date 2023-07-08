import {group, groupTasks} from './groupBy'
import {addTask, addProject, tasks} from './taskList'
const taskListCopy = taskList();
const createGroupNode = (groupName) => {
    const groupContainer = document.createElement('div');
    groupContainer.className = `${groupName}`;
    const title = document.createElement('h2');
    title.textContent = groupName;
    groupContainer.appendChild(title);
    return groupContainer;
}
const addAllGroups = () => {
    const allTasksNode = document.querySelector(".all-tasks");
    for (key in groupTasks) {
        if(groupTasks[key].length != 0 ){
            const groupNode = createGroupNode(key);
            const old = allTasksNode.getElementById(groupTasks[key][1]);
            const task = old.cloneNode(true);
            console.log("bullshit")
            console.log(task);
            old.remove();
            groupNode.appendChild(task);
            allTasksNode.appendChild(groupNode);
        }
    }
} 
document.querySelector(".Inbox").addEventListener("click",()=>{
    console.log(groupTasks);
    group('date');
    console.log(groupTasks);
})
export {};