import { group } from "./groupBy"
import { getLastTaskIndex } from "./taskList"

const createGroupNode = (groupName) => {
  const groupContainer = document.createElement('div')
  groupContainer.classList.add(`${groupName}`)
  groupContainer.classList.add('task-container')
  const title = document.createElement('h2')
  title.className =  `priority-header`
  title.textContent = groupName
  groupContainer.appendChild(title)
  return groupContainer
}
const clearEmptyRGroupNodes = () => {
  const groupContainers = document.querySelectorAll('.task-container')
  groupContainers.forEach(groupContainer => {
    if(groupContainer.childNodes.length === 1) {
      groupContainer.remove()         
    }
  })
}
const addNewTaskNode = (taskName, project, labels) => {
  const taskContainer = document.querySelector(".all-tasks");
  const lastTask = document.querySelector(`[index = '${getLastTaskIndex()}']`);
  let newTaskNode = undefined;
  if(lastTask){
      newTaskNode = lastTask.cloneNode(true);
      newTaskNode.setAttribute("index" ,`${Number(lastTask.getAttribute("index")) + 1}`);
      newTaskNode.querySelector(".p-title").textContent = taskName;
      newTaskNode.querySelector(".p-name").textContent =  project;
      const labelList =  newTaskNode.querySelector(".labels-list");
      newTaskNode.querySelector("#task").checked = false;
      labelList.textContent = "";
      labels.forEach(label =>{
          labelList.appendChild(createNewLabelNode(label));
      })
  }else{
  newTaskNode = createNewTaskNode("1",taskName, project, labels);
  }
  newTaskNode.querySelector("input").addEventListener("change",()=>{
      document.querySelector(".all-tasks").removeChild(newTaskNode);
  });
  taskContainer.appendChild(newTaskNode); 
  console.log("check is task added to origin:")
  console.log(taskContainer)  
};
const createNewTaskNode = (index, taskTitle, pName, labels)=>{
  const labelsList = document.createElement("div");
  labelsList.className = "labels-list";
  labels.forEach(label =>{
      labelsList.appendChild(createNewLabelNode(label));
  })
  const newTaskNode = document.createElement("div");
  const taskFirstLine = document.createElement("div");
  taskFirstLine.classList.add("task-first-line");
  const taskSecondLine = document.createElement("div");
  taskSecondLine.classList.add("task-second-line");
  newTaskNode.classList.add("p-container");
  newTaskNode.setAttribute("index",index)
  const checkbox = document.createElement("input");
  const ptitle = document.createElement("div");
  const pname = document.createElement("div");
  ptitle.classList.add("p-title");
  pname.classList.add("p-name");
  ptitle.textContent = taskTitle;
  pname.textContent = pName;
  checkbox.type = "checkbox";
  checkbox.id = "task"
  checkbox.value = "task"
  taskFirstLine.appendChild(checkbox);
  taskFirstLine.appendChild(ptitle);
  taskFirstLine.appendChild(labelsList);
  taskSecondLine.appendChild(pname);
  newTaskNode.appendChild(taskFirstLine);
  newTaskNode.appendChild(taskSecondLine);
  return newTaskNode;
};
const createNewLabelNode =  (labelName) => {
  const labelNode = document.createElement("div");
  labelNode.className = "label";
  labelNode.textContent = labelName;
  return labelNode;
};
const addAllTasks = (tasks) => {
  const allTasksNode = document.querySelector('.all-tasks')
  tasks.forEach((taskContainer) => {
    const old = allTasksNode.querySelector(`[index = '${taskContainer[1]}']`)
    if (old) {
      const task = old.cloneNode(true)
      old.remove()
      allTasksNode.appendChild(task)
    }
  })
  clearEmptyRGroupNodes()
  removeGroupsContainer()
}
/* const appendSingleTaskNodeToGroup = (singleGroup, key) =>{
  const allTasksNode = document.querySelector('.all-tasks')

    let groupNode = document.querySelector(`.${key}`)
    if (!groupNode) {
      groupNode = createGroupNode(key)
    }
    singleGroup.forEach((taskContainer) => {
      const old = allTasksNode.querySelector(
        `[index = '${taskContainer[1]}']`
      )
      const task = old.cloneNode(true)
      old.remove()
      groupNode.appendChild(task)
    })
    allTasksNode.appendChild(groupNode)
    addGroupsContainer();
} */
const addGroupsContainer = () => {
  const allTasksNode = document.querySelector('.all-tasks')
  let groupsWrapper = document.querySelector('.groups-wrapper')
  if (!groupsWrapper){
  groupsWrapper = document.createElement('div')
  groupsWrapper.classList = 'groups-wrapper'
}
  document.querySelectorAll('.task-container').forEach(group => {
    const tempGroup  = group.cloneNode(true)
    group.remove()
    groupsWrapper.appendChild(tempGroup)
  })
  allTasksNode.appendChild(groupsWrapper)
}
const removeGroupsContainer = () => {
  const groupsWrapper = document.querySelector('.groups-wrapper')
  if (groupsWrapper){
    groupsWrapper.remove()
  }
}


const addAllGroups = (groupTasks) => {
  const allTasksNode = document.querySelector('.all-tasks')
  for (const key in groupTasks) {
    if (groupTasks[key].length !== 0) {
      let groupNode = document.querySelector(`.${key}`)
      if (!groupNode) {
        groupNode = createGroupNode(key)
      }
      groupTasks[key].forEach((taskContainer) => {
        const old = allTasksNode.querySelector(
          `[index = '${taskContainer[1]}']`
        )
        const task = old.cloneNode(true)
        old.remove()
        groupNode.appendChild(task)
      })
      allTasksNode.appendChild(groupNode)
    }
  }
  clearEmptyRGroupNodes()
  addGroupsContainer();
}
export { addAllGroups, addAllTasks, addNewTaskNode }
