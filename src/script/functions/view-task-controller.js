import { getLastTaskIndex, tasks, appendtostorage } from "./taskList";
import { showForm } from "./formHandler";
const createGroupNode = (groupName) => {
  const groupContainer = document.createElement("div");
  groupContainer.classList.add(`${groupName}`);
  groupContainer.classList.add("task-container");
  const title = document.createElement("h2");
  title.className = `priority-header`;
  title.textContent = groupName;
  groupContainer.appendChild(title);
  return groupContainer;
};
const clearEmptyRGroupNodes = () => {
  const groupContainers = document.querySelectorAll(".task-container");
  groupContainers.forEach((groupContainer) => {
    if (groupContainer.childNodes.length === 1) {
      groupContainer.remove();
    }
  });
};

const searchKey = (arr, s, e, key) => {
  if(s > e) return "not found";
  else{
      let mid = s + parseInt((e-s) / 2);
      console.log(s);
      console.log(e);
      console.log(mid);
      console.log(`value=  ${arr[mid][1]}`);
      if(arr[mid][1] === key) return mid;
      else if(arr[mid][1] > key) return searchKey(arr, s, mid-1, key);
      else if(arr[mid][1] < key) return searchKey(arr, mid+1, e, key); 
  }
}

const addNewTaskNode = (
  newTask,
  newindex
) => {
  const taskContainer = document.querySelector(".all-tasks");
  const lastTask = document.querySelector(`[index = '${getLastTaskIndex()}']`);
  let newTaskNode = undefined;
  if (lastTask) {
    newTaskNode = lastTask.cloneNode(true);
    newTaskNode.setAttribute(
      "index",
      `${newindex}`
    );
    newTaskNode.querySelector(".p-title").textContent = newTask.name;
    newTaskNode.querySelector(".p-name").textContent = newTask.project;
    newTaskNode.querySelector(".tdate").textContent = newTask.date;
    const labelList = newTaskNode.querySelector(".labels-list");
    newTaskNode.querySelector("#task").checked = false;
    labelList.textContent = "";
    newTask.label.forEach((label) => {
      labelList.appendChild(createNewLabelNode(label));
    });
  } else {
    newTaskNode = createNewTaskNode("1", newTask.name , newTask.project, newTask.date, newTask.label);
  }
  /* showing task Content when clicked */
  console.log(taskContainer[0]);
  console.log(newTaskNode);
  addTaskListners(newTaskNode, newTask);
  taskContainer.appendChild(newTaskNode);
};
const addTaskListners = (newTaskNode, taskData) => {
  console.log("entereeed")
  newTaskNode.addEventListener("click", (event) => {
    console.log(event.target)
    if (event.target !== newTaskNode.querySelector(".task-first-line input")) {
      loadTaskContent(taskData);
      showForm("section.taskContent-container");
      showForm(".overlay-container");
    }
  });
  newTaskNode.querySelector("input").addEventListener("change", () => {
    console.log(`tasks before: ${tasks}`);
    document.querySelector(".all-tasks").removeChild(newTaskNode);
    let indexKey = searchKey(tasks, 0, tasks.length-1, parseInt(newTaskNode.getAttribute('index')));
    tasks.splice(indexKey, 1);
    appendtostorage();
    console.log(`tasks after: ${tasks}`);
  });
};
const loadTaskContent = (taskData) => {
  /* taskName, project, date, labels */
  document.querySelector(".taskContent-taskName-name").textContent =
    taskData.name;
  document.querySelector(".taskContent-box-projectName").textContent =
    taskData.project;
  document.querySelector(".taskContent-box-date").textContent = taskData.date;
  document.querySelector(
    ".taskContent-box-priorityName"
  ).textContent = `priority ${taskData.priority}`;
  document.querySelector(".taskContent-description").textContent =
    taskData.description;
};
const createNewTaskNode = (index, taskTitle, pName, taskdate_, labels) => {
  const labelsList = document.createElement("div");
  labelsList.className = "labels-list";
  labels.forEach((label) => {
    labelsList.appendChild(createNewLabelNode(label));
  });
  const newTaskNode = document.createElement("div");
  const taskFirstLine = document.createElement("div");
  taskFirstLine.classList.add("task-first-line");
  const taskSecondLine = document.createElement("div");
  taskSecondLine.classList.add("task-second-line");
  newTaskNode.classList.add("p-container");
  newTaskNode.setAttribute("index", index);
  const checkbox = document.createElement("input");
  const ptitle = document.createElement("div");
  const taskDate = document.createElement("div");
  const pname = document.createElement("div");
  ptitle.classList.add("p-title");
  taskDate.classList.add("tdate");
  pname.classList.add("p-name");
  ptitle.textContent = taskTitle;
  taskDate.textContent = taskdate_;
  pname.textContent = pName;
  checkbox.type = "checkbox";
  checkbox.id = "task";
  checkbox.value = "task";
  taskFirstLine.appendChild(checkbox);
  taskFirstLine.appendChild(ptitle);
  taskFirstLine.appendChild(labelsList);
  taskSecondLine.appendChild(taskDate);
  taskSecondLine.appendChild(pname);
  newTaskNode.appendChild(taskFirstLine);
  newTaskNode.appendChild(taskSecondLine);
  return newTaskNode;
};
const createNewLabelNode = (labelName) => {
  const labelNode = document.createElement("div");
  labelNode.className = "label";
  labelNode.textContent = labelName;
  return labelNode;
};
const addAllTasks = (tasks) => {
  const allTasksNode = document.querySelector(".all-tasks");
  tasks.forEach((taskContainer) => {
    const old = allTasksNode.querySelector(`[index = '${taskContainer[1]}']`);
    if (old) {
      const task = old.cloneNode(true);
      addTaskListners(task, taskContainer[0]);
      old.remove();
      allTasksNode.appendChild(task);
    }
  });
  clearEmptyRGroupNodes();
  removeGroupsContainer();
};

const addGroupsContainer = () => {
  const allTasksNode = document.querySelector(".all-tasks");
  let groupsWrapper = document.querySelector(".groups-wrapper");
  if (!groupsWrapper) {
    groupsWrapper = document.createElement("div");
    groupsWrapper.classList = "groups-wrapper";
  }
  document.querySelectorAll(".task-container").forEach((group) => {
    const tempGroup = group.cloneNode(true);
    group.remove();
    groupsWrapper.appendChild(tempGroup);
  });
  allTasksNode.appendChild(groupsWrapper);
};
const removeGroupsContainer = () => {
  const groupsWrapper = document.querySelector(".groups-wrapper");
  if (groupsWrapper) {
    groupsWrapper.remove();
  }
};

const addAllGroups = (groupTasks) => {
  const allTasksNode = document.querySelector(".all-tasks");
  for (const key in groupTasks) {
    if (groupTasks[key].length !== 0) {
      /* get group node if exist */
      let groupNode = document.querySelector(`.${key}`);
      /* if not exist create it */
      if (!groupNode) {
        groupNode = createGroupNode(key);
      }
      groupTasks[key].forEach((taskContainer) => {
        const old = allTasksNode.querySelector(
          `[index = '${taskContainer[1]}']`
        );
        /* assume all tasks are added already to the dom (p error)*/
        const task = old.cloneNode(true);
        addTaskListners(task, taskContainer[0]);
        old.remove();
        groupNode.appendChild(task);
      });
      allTasksNode.appendChild(groupNode);
    }
  }
  clearEmptyRGroupNodes();
  addGroupsContainer();
};
export { addAllGroups, addAllTasks, addNewTaskNode };
