/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/components/alltasks.js":
/*!*******************************************!*\
  !*** ./src/script/components/alltasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alltasks": () => (/* binding */ alltasks)
/* harmony export */ });
/* harmony import */ var _styles_alltasks_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/alltasks.css */ "./src/styles/alltasks.css");

var alltasks = document.createElement("div");
alltasks.className = "all-tasks";
alltasks.innerHTML = " \n<div class = \"view-container\">\n<div class = \"view-border\">\n<svg class = \"\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill=\"var(--dark-grey)\" d=\"M21.2995 7.57969H15.7195C15.3295 7.57969 15.0195 7.26969 15.0195 6.87969C15.0195 6.48969 15.3295 6.17969 15.7195 6.17969H21.2995C21.6895 6.17969 21.9995 6.48969 21.9995 6.87969C21.9995 7.26969 21.6895 7.57969 21.2995 7.57969Z\" fill=\"#292D32\"/>\n    <path fill=\"var(--dark-grey)\" d=\"M6.42 7.57969H2.7C2.31 7.57969 2 7.26969 2 6.87969C2 6.48969 2.31 6.17969 2.7 6.17969H6.42C6.81 6.17969 7.12 6.48969 7.12 6.87969C7.12 7.26969 6.8 7.57969 6.42 7.57969Z\" fill=\"#292D32\"/>\n    <path fill=\"var(--dark-grey)\" d=\"M10.1395 10.8297C12.321 10.8297 14.0895 9.06121 14.0895 6.87969C14.0895 4.69816 12.321 2.92969 10.1395 2.92969C7.95793 2.92969 6.18945 4.69816 6.18945 6.87969C6.18945 9.06121 7.95793 10.8297 10.1395 10.8297Z\" fill=\"#292D32\"/>\n    <path fill=\"var(--dark-grey)\"d=\"M21.3009 17.8102H17.5809C17.1909 17.8102 16.8809 17.5002 16.8809 17.1102C16.8809 16.7202 17.1909 16.4102 17.5809 16.4102H21.3009C21.6909 16.4102 22.0009 16.7202 22.0009 17.1102C22.0009 17.5002 21.6909 17.8102 21.3009 17.8102Z\" fill=\"#292D32\"/>\n    <path fill=\"var(--dark-grey)\"d=\"M8.28 17.8102H2.7C2.31 17.8102 2 17.5002 2 17.1102C2 16.7202 2.31 16.4102 2.7 16.4102H8.28C8.67 16.4102 8.98 16.7202 8.98 17.1102C8.98 17.5002 8.66 17.8102 8.28 17.8102Z\" fill=\"#292D32\"/>\n    <path fill=\"var(--dark-grey)\"d=\"M13.8602 21.0719C16.0417 21.0719 17.8102 19.3034 17.8102 17.1219C17.8102 14.9404 16.0417 13.1719 13.8602 13.1719C11.6786 13.1719 9.91016 14.9404 9.91016 17.1219C9.91016 19.3034 11.6786 21.0719 13.8602 21.0719Z\" fill=\"#292D32\"/>\n</svg>\n<div class = \"view\">\n   view\n</div>\n<div class=\"view-option-container\">\n    <div class=\"sort-container\">\n        <h2 class=\"header\">sort by:</h2>\n        <h3  id = \"s0\" class=\"sort-option\" selected = \"t\" >Default (None)</h3>\n        <h3 class=\"sort-option\" id = \"s1\" selected = \"f\">Date</h3>\n    </div>\n    <div class=\"group-container\">\n        <h2 class=\"header\">group by:</h2>\n        <h3 id = \"g0\" class=\"group-option\" selected = \"t\">Default (None)</h3>\n        <h3 id = \"g1\" class=\"group-option\" selected = \"f\">priority</h3>\n    </div>\n</div>\n</div>\n</div> \n\n</div>";


/***/ }),

/***/ "./src/script/components/header.js":
/*!*****************************************!*\
  !*** ./src/script/components/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/header.css */ "./src/styles/header.css");

var header = document.createElement("div");
header.classList.add("main-header");
header.innerHTML = "\n<div class=\"header-title-container\">\n      <img src=\"#\" alt=\"\" class=\"header-img\">\n      <div class=\"header-text\">to finish</div>\n</div>\n<button class=\"add-task-button\">&plus;</button>\n";


/***/ }),

/***/ "./src/script/components/labeloverlay.js":
/*!***********************************************!*\
  !*** ./src/script/components/labeloverlay.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "labeloverlay": () => (/* binding */ labeloverlay)
/* harmony export */ });
/* harmony import */ var _styles_labeloverlay_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/labeloverlay.css */ "./src/styles/labeloverlay.css");

var labeloverlay = document.createElement('div');
labeloverlay.classList.add("add-label-overlay");
labeloverlay.classList.add("hide");
labeloverlay.innerHTML = "<form class=\"add-label-form\">\n<div class=\"add-label-header\">\n    <button type=\"button\" class=\"cansel-add-label\">cancel</button>\n    <div class=\"add-project-title\">Add Label</div>\n    <button type = \"submit\" class=\"add-label\">add</button>\n</div>\n<input type=\"text\" placeholder=\"name\" name=\"label-name\" id = \"labelName\" required>\n</form>\n";


/***/ }),

/***/ "./src/script/components/main-container.js":
/*!*************************************************!*\
  !*** ./src/script/components/main-container.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContainer": () => (/* binding */ mainContainer)
/* harmony export */ });
/* harmony import */ var _styles_main_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/main-container.css */ "./src/styles/main-container.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/script/components/header.js");
/* harmony import */ var _sidetrack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidetrack */ "./src/script/components/sidetrack.js");
/* harmony import */ var _alltasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alltasks */ "./src/script/components/alltasks.js");




var mainContainer = document.createElement("div");
mainContainer.className = "main-container";
mainContainer.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header);
mainContainer.appendChild(_sidetrack__WEBPACK_IMPORTED_MODULE_2__.sidetrack);
mainContainer.appendChild(_alltasks__WEBPACK_IMPORTED_MODULE_3__.alltasks);


/***/ }),

/***/ "./src/script/components/projectoverlay.js":
/*!*************************************************!*\
  !*** ./src/script/components/projectoverlay.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectoverlay": () => (/* binding */ projectoverlay)
/* harmony export */ });
/* harmony import */ var _styles_projectoverlay_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/projectoverlay.css */ "./src/styles/projectoverlay.css");

var projectoverlay = document.createElement("div");
projectoverlay.classList.add("add-project-overlay");
projectoverlay.classList.add("hide");
projectoverlay.innerHTML = "<form class=\"add-project-form\">\n<div class=\"add-project-header\">\n    <button type=\"button\" class=\"cansel-add-project\">cancel</button>\n    <div class=\"add-project-title\">Add Project</div>\n    <button type = \"submit\" class=\"add-project\">add</button>\n</div>\n<input type=\"text\" placeholder=\"name\" name=\"project-name\" id = \"projectName\" required>\n</form>\n";


/***/ }),

/***/ "./src/script/components/sidetrack.js":
/*!********************************************!*\
  !*** ./src/script/components/sidetrack.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidetrack": () => (/* binding */ sidetrack)
/* harmony export */ });
/* harmony import */ var _styles_sidetrack_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sidetrack.css */ "./src/styles/sidetrack.css");

var sidetrack = document.createElement("div");
sidetrack.className = "sidetrack";
sidetrack.innerHTML = "<div class=\"all-projects\">\n<div class=\"Inbox\">Inbox</div>\n<div class=\"projects\">\n<div class=\"projects-container\">\n    <div class=\"projects-title\">Projects</div>\n    <button class=\"new-project\">&plus;</button>\n</div>\n<div class=\"project\" id=\"1\">college</div>\n</div>\n</div>";


/***/ }),

/***/ "./src/script/components/taskoverlay.js":
/*!**********************************************!*\
  !*** ./src/script/components/taskoverlay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskoverlay": () => (/* binding */ taskoverlay)
/* harmony export */ });
/* harmony import */ var _styles_taskoverlay_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/taskoverlay.css */ "./src/styles/taskoverlay.css");

var taskoverlay = document.createElement('div');
taskoverlay.classList.add('add-task-overlay');
taskoverlay.classList.add('hide');
taskoverlay.innerHTML = " <form class = \"add-task-form\">\n<input type=\"text\" id=\"taskName\" name=\"task-name\" placeholder=\"Task Name\" required>\n<input type=\"text\" name=\"description\" id=\"description\" placeholder=\"description\">\n<div class=\"input-button-container\">\n    <div class=\"date-container\">\n        <img src=\"#\" alt=\"\" class=\"date-img\">\n        <input type=\"date\" name=\"date\" id=\"date\" required>\n    </div>\n    <div class=\"priority-container\">\n        <img src=\"#\" alt=\"\" class=\"priority-img\">\n        <div class=\"priority-text\">Priority 4</div>\n        <ul class=\"priority-list\">\n            <li id=\"1\">prioirty 1</li>\n            <li id=\"2\">prioirty 2</li>\n            <li id=\"3\">prioirty 3</li>\n            <li id=\"4\">prioirty 4</li>\n        </ul>\n    </div>\n    <div class=\"label-container\">\n        <img src=\"\" alt=\"\" class=\"label-img\">\n        <div class=\"label-text\">Labels</div>\n        <div class=\"num-of-labels\">0</div>\n        <ul class=\"label-list\">\n            <div class=\"label\"><input type=\"checkbox\" name=\"\" id=\"\" value =\"some label1\">some label1</div>\n            <div class=\"label\"><input type=\"checkbox\" name=\"\" id=\"\" value =\"some label2\">some label2</div>\n            <div class=\"add-new-label\">\n              <button type=\"button\" class=\"add-label-button\">new</button>\n            </div>\n        </ul>\n    </div>\n    <div class=\"more-container\">\n        <img src=\"\" alt=\"\" class=\"more-img\">\n        <div class=\"more-text\">&mldr;</div>\n    </div>\n</div>\n<div class=\"add-task-footer\">\n    <select class=\"project-container\" name=\"project\" id=\"project\">\n        <option value=\"inbox\">Inbox</option>\n    </select>\n    <div>\n        <button type = \"button\"class=\"cansel-add-task\">Cansel</button>\n        <button type = \"submit\" class=\"addTask\"> Add task </button>  \n    </div>\n</div>\n</form> \n";


/***/ }),

/***/ "./src/script/functions/displayController.js":
/*!***************************************************!*\
  !*** ./src/script/functions/displayController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/script/functions/taskList.js");
/* harmony import */ var _newProjectModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectModule */ "./src/script/functions/newProjectModule.js");
/* harmony import */ var _newTaskModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTaskModule */ "./src/script/functions/newTaskModule.js");
/* harmony import */ var _newLabelModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newLabelModule */ "./src/script/functions/newLabelModule.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/script/functions/task.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayTasks */ "./src/script/functions/displayTasks.js");





/* import {} from "./displayTasks" */

var displayController = function displayController() {
  /* selecting today as a default date */
  (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.selectDefaultDate)();
  (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.selectDefaultPiority)();
  var addNewProject = document.querySelector('button.new-project');
  var projectInput = document.querySelector('.add-project-form');
  var closeAddProject = document.querySelector('.cansel-add-project');
  var closeAddTaskButton = document.querySelector('.add-task-footer  .cansel-add-task');
  var taskInput = document.querySelector('.add-task-form');
  var addTaskButton = document.querySelector('.add-task-button');
  var addNewLabelButton = document.querySelector('.add-label-button');
  var closeNewLabelButton = document.querySelector('.cansel-add-label');
  var addLabelForm = document.querySelector('.add-label-form');
  /* openning addproject form */
  addNewProject.addEventListener('click', function () {
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.showProjectForm)();
  });
  /* closing addproject form */
  closeAddProject.addEventListener('click', function () {
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.clearAddProject)();
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.hideProjectForm)();
  });
  /* submit addproject form */
  projectInput.addEventListener('submit', function (event) {
    event.preventDefault();
    var _newProjectData = (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.newProjectData)(),
      projectName = _newProjectData.projectName;
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.addNewProjectNode)(projectName);
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.clearAddProject)();
    (0,_taskList__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName);
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.addNewProjectOption)(projectName);
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.hideProjectForm)();
  });

  /* close addtask form */
  closeAddTaskButton.addEventListener('click', function () {
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.hideTaskForm)();
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.clearAddTask)();
  });
  /* openning addtask form */
  addTaskButton.addEventListener('click', function () {
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.showTaskForm)();
  });
  /* submit addtask form */
  taskInput.addEventListener('submit', function (event) {
    event.preventDefault();
    var _addTaskData = (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.addTaskData)(),
      taskName = _addTaskData.taskName,
      description = _addTaskData.description,
      date = _addTaskData.date,
      project = _addTaskData.project,
      priority = _addTaskData.priority,
      labels = _addTaskData.labels;
    var newTask = new _task__WEBPACK_IMPORTED_MODULE_4__.task(taskName, description, date, priority, labels, project);
    (0,_taskList__WEBPACK_IMPORTED_MODULE_0__.addTask)(newTask);
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.addNewTaskNode)(taskName, newTask.project, labels);
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.clearAddTask)();
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.hideTaskForm)();
    console.log(newTask);
  });
  var priorityList = document.querySelector('.priority-list');
  var labelList = document.querySelector('.label-list');
  document.querySelector('.num-of-labels').before('(');
  document.querySelector('.num-of-labels').after(')');
  var isListHidden = function isListHidden(list) {
    return list.style.display == 'none' || getComputedStyle(list).display == 'none';
  };
  var hideList = function hideList(list) {
    list.style.display = 'none';
  };
  var showList = function showList(list) {
    list.style.display = 'block';
  };
  var toggleList = function toggleList(list) {
    if (isListHidden(list)) {
      showList(list);
    } else {
      hideList(list);
    }
  };
  document.querySelectorAll('.priority-list > li').forEach(function (priority) {
    priority.addEventListener('click', function (e) {
      var priorityText = document.querySelector('.priority-text');
      /* priority value 1,2,3,4 */
      priorityText.value = priority.id;
      priorityText.textContent = priority.textContent;
    });
  });
  document.querySelectorAll('.label-list input').forEach(function (box) {
    box.addEventListener('click', function () {
      document.querySelector('.num-of-labels').textContent = (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.getCheckedLabelsCount)();
    });
  });
  /* openning addproject form */
  addNewLabelButton.addEventListener('click', function () {
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.hideTaskForm)();
    (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.showLabelForm)();
  });
  /* closing addproject form */
  closeNewLabelButton.addEventListener('click', function () {
    (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.clearAddLabel)();
    (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.hideLabelForm)();
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.showTaskForm)();
  });
  /* submit addproject form */
  addLabelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var _newLabelName = (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.newLabelName)(),
      labelName = _newLabelName.labelName;
    (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.addNewLabelNode)(labelName);
    /* changing number of selected labels */
    var lastLabel = document.querySelector('.label-list div:nth-last-child(2)');
    lastLabel.addEventListener('click', function () {
      document.querySelector('.num-of-labels').textContent = (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.getCheckedLabelsCount)();
    });
    console.log(lastLabel);
    (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.hideLabelForm)();
    (0,_newLabelModule__WEBPACK_IMPORTED_MODULE_3__.clearAddLabel)();
    (0,_newTaskModule__WEBPACK_IMPORTED_MODULE_2__.showTaskForm)();
  });
  /* adding preexisted project */
  var projects = document.querySelectorAll('.projects > .project');
  projects.forEach(function (project) {
    (0,_taskList__WEBPACK_IMPORTED_MODULE_0__.addProject)(project.textContent);
    (0,_newProjectModule__WEBPACK_IMPORTED_MODULE_1__.addNewProjectOption)(project.textContent);
    console.log(null);
  });
  document.querySelector('.sort-container #s0').addEventListener('click', function () {
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_5__.sortByDefault)();
  });
  document.querySelector('.sort-container #s1').addEventListener('click', function () {
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_5__.sortByDate)();
  });
  document.querySelector('.group-container #g0').addEventListener('click', function () {
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_5__.groupByDefault)();
  });
  document.querySelector('.group-container #g1').addEventListener('click', function () {
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_5__.groupByPriotiry)();
  });
};


/***/ }),

/***/ "./src/script/functions/displayTasks.js":
/*!**********************************************!*\
  !*** ./src/script/functions/displayTasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupByDefault": () => (/* binding */ groupByDefault),
/* harmony export */   "groupByPriotiry": () => (/* binding */ groupByPriotiry),
/* harmony export */   "sortByDate": () => (/* binding */ sortByDate),
/* harmony export */   "sortByDefault": () => (/* binding */ sortByDefault)
/* harmony export */ });
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/script/functions/taskList.js");
/* harmony import */ var _sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortBy */ "./src/script/functions/sortBy.js");
/* harmony import */ var _groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupBy */ "./src/script/functions/groupBy.js");
/* harmony import */ var _view_task_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-task-controller */ "./src/script/functions/view-task-controller.js");




var sortByDefault = function sortByDefault() {
  var defaultSort = document.querySelector('.sort-container #s0');
  var defaultGroup = document.querySelector('.group-container #g0');
  if (!isSelected(defaultSort)) {
    if (isSelected(defaultGroup)) {
      (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)(_taskList__WEBPACK_IMPORTED_MODULE_0__.tasks);
    } else {
      (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllGroups)((0,_sortBy__WEBPACK_IMPORTED_MODULE_1__.sortGroups)('date'));
    }
  }
  toggleSelectAttribute(selecetedGroupObtion());
  toggleSelectAttribute(defaultSort);
};
var sortByDate = function sortByDate() {
  var dateSort = document.querySelector('.sort-container #s1');
  var defaultGroup = document.querySelector('.group-container #g0');
  if (!isSelected(dateSort)) {
    if (isSelected(defaultGroup)) {
      (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)((0,_sortBy__WEBPACK_IMPORTED_MODULE_1__.sortAll)('date'));
    } else {
      (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllGroups)(_groupBy__WEBPACK_IMPORTED_MODULE_2__.groupTasks);
    }
  }
  toggleSelectAttribute(selecetdSortObtion());
  toggleSelectAttribute(dateSort);
};
var groupByDefault = function groupByDefault() {
  var defaultSort = document.querySelector('.sort-container #s0');
  var defaultGroup = document.querySelector('.group-container #g0');
  if (!isSelected(defaultGroup)) {
    if (isSelected(defaultSort)) {
      (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)(_taskList__WEBPACK_IMPORTED_MODULE_0__.tasks);
    } else {
      (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)((0,_sortBy__WEBPACK_IMPORTED_MODULE_1__.sortAll)(currentSortType()));
    }
  }
  toggleSelectAttribute(selecetedGroupObtion());
  toggleSelectAttribute(defaultGroup);
};
var groupByPriotiry = function groupByPriotiry() {
  var defaultSort = document.querySelector('.sort-container #s0');
  var priorityGroup = document.querySelector('.group-container #g1');
  if (!isSelected(priorityGroup)) {
    (0,_groupBy__WEBPACK_IMPORTED_MODULE_2__.group)('priority');
    if (!isSelected(defaultSort)) {
      (0,_sortBy__WEBPACK_IMPORTED_MODULE_1__.sortGroups)(currentSortType());
    }
    (0,_view_task_controller__WEBPACK_IMPORTED_MODULE_3__.addAllGroups)(_groupBy__WEBPACK_IMPORTED_MODULE_2__.groupTasks);
  }
  toggleSelectAttribute(selecetedGroupObtion());
  toggleSelectAttribute(priorityGroup);
};
var toggleSelectAttribute = function toggleSelectAttribute(node) {
  if (node.getAttribute('selected') === 't') {
    node.setAttribute('selected', 'f');
  } else {
    node.setAttribute('selected', 't');
  }
};
var isSelected = function isSelected(obtion) {
  var isObtionSelected = obtion.getAttribute('selected');
  return isObtionSelected === 't';
};
var selecetdSortObtion = function selecetdSortObtion() {
  console.log(document.querySelector('.sort-container [selected = "t"]'));
  return document.querySelector('.sort-container [selected = "t"]');
};
var selecetedGroupObtion = function selecetedGroupObtion() {
  return document.querySelector('.group-container [selected = "t"]');
};
var currentSortType = function currentSortType() {
  return selecetdSortObtion().textContent.replaceAll(' ', '');
};


/***/ }),

/***/ "./src/script/functions/formHandler.js":
/*!*********************************************!*\
  !*** ./src/script/functions/formHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideForm": () => (/* binding */ hideForm),
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
var hideForm = function hideForm(className) {
  document.querySelector(className).classList.add("hide");
};
var showForm = function showForm(className) {
  document.querySelector(className).classList.remove("hide");
};


/***/ }),

/***/ "./src/script/functions/groupBy.js":
/*!*****************************************!*\
  !*** ./src/script/functions/groupBy.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "group": () => (/* binding */ group),
/* harmony export */   "groupTasks": () => (/* binding */ groupTasks)
/* harmony export */ });
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/script/functions/taskList.js");

var groupTasks = {
  priority1: [],
  priority2: [],
  priority3: [],
  priority4: []
};
var clearGroupTasks = function clearGroupTasks() {
  groupTasks = {
    priority1: [],
    priority2: [],
    priority3: [],
    priority4: []
  };
};
var group = function group(x) {
  console.log('entered');
  clearGroupTasks();
  _taskList__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (task) {
    console.log(_taskList__WEBPACK_IMPORTED_MODULE_0__.tasks);
    console.log(task);
    console.log(groupTasks["".concat('priority' + task[0][x])]);
    console.log(task[0][x]);
    groupTasks["".concat('priority' + task[0][x]).replaceAll(' ', '').toLowerCase()].push(task);
  });
  console.log(groupTasks);
};


/***/ }),

/***/ "./src/script/functions/newLabelModule.js":
/*!************************************************!*\
  !*** ./src/script/functions/newLabelModule.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewLabelNode": () => (/* binding */ addNewLabelNode),
/* harmony export */   "clearAddLabel": () => (/* binding */ clearAddLabel),
/* harmony export */   "hideLabelForm": () => (/* binding */ hideLabelForm),
/* harmony export */   "newLabelName": () => (/* binding */ newLabelName),
/* harmony export */   "showLabelForm": () => (/* binding */ showLabelForm)
/* harmony export */ });
/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ "./src/script/functions/formHandler.js");

var clearAddLabel = function clearAddLabel() {
  document.getElementById("labelName").value = "";
};
var newLabelName = function newLabelName() {
  var labelName = document.getElementById("labelName").value;
  return {
    labelName: labelName
  };
};
var newLabelNode = function newLabelNode(labelName) {
  var labelContainer = document.createElement('div');
  labelContainer.className = "label";
  var labelInput = document.createElement('input');
  var labelNameNode = document.createElement("div");
  labelNameNode.textContent = labelName;
  labelInput.type = "checkbox";
  labelInput.value = labelName;
  labelContainer.appendChild(labelInput);
  labelContainer.appendChild(labelNameNode);
  return labelContainer;
};
var addNewLabelNode = function addNewLabelNode(labelName) {
  var addnewlabelButton = document.querySelector(".add-new-label");
  var newLabel = newLabelNode(labelName);
  addnewlabelButton.insertAdjacentElement("beforebegin", newLabel);
};
var hideLabelForm = function hideLabelForm() {
  (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.hideForm)(".add-label-overlay");
};
var showLabelForm = function showLabelForm() {
  (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.showForm)(".add-label-overlay");
};


/***/ }),

/***/ "./src/script/functions/newProjectModule.js":
/*!**************************************************!*\
  !*** ./src/script/functions/newProjectModule.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProjectNode": () => (/* binding */ addNewProjectNode),
/* harmony export */   "addNewProjectOption": () => (/* binding */ addNewProjectOption),
/* harmony export */   "clearAddProject": () => (/* binding */ clearAddProject),
/* harmony export */   "hideProjectForm": () => (/* binding */ hideProjectForm),
/* harmony export */   "newProjectData": () => (/* binding */ newProjectData),
/* harmony export */   "showProjectForm": () => (/* binding */ showProjectForm)
/* harmony export */ });
/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ "./src/script/functions/formHandler.js");

var clearAddProject = function clearAddProject() {
  document.getElementById("projectName").value = "";
};
var newProjectData = function newProjectData() {
  var projectName = document.getElementById("projectName").value;
  return {
    projectName: projectName
  };
};
var addNewProjectOption = function addNewProjectOption(projectName) {
  var projectOptionContainer = document.querySelector("select.project-container");
  var newProjectOption = projectOptionContainer.lastElementChild.cloneNode(true);
  newProjectOption.value = projectName;
  newProjectOption.innerHTML = projectName;
  projectOptionContainer.appendChild(newProjectOption);
};
var addNewProjectNode = function addNewProjectNode(projectName) {
  var projects = document.querySelector(".projects");
  var lastProject = projects.lastElementChild;
  var newProject = lastProject.cloneNode(true);
  newProject.id = Number(lastProject.id) + 1;
  newProject.innerHTML = projectName;
  projects.appendChild(newProject);
};
var hideProjectForm = function hideProjectForm() {
  (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.hideForm)(".add-project-overlay");
};
var showProjectForm = function showProjectForm() {
  (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.showForm)(".add-project-overlay");
};


/***/ }),

/***/ "./src/script/functions/newTaskModule.js":
/*!***********************************************!*\
  !*** ./src/script/functions/newTaskModule.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTaskNode": () => (/* binding */ addNewTaskNode),
/* harmony export */   "addTaskData": () => (/* binding */ addTaskData),
/* harmony export */   "clearAddTask": () => (/* binding */ clearAddTask),
/* harmony export */   "getCheckedLabelsCount": () => (/* binding */ getCheckedLabelsCount),
/* harmony export */   "hideTaskForm": () => (/* binding */ hideTaskForm),
/* harmony export */   "selectDefaultDate": () => (/* binding */ selectDefaultDate),
/* harmony export */   "selectDefaultPiority": () => (/* binding */ selectDefaultPiority),
/* harmony export */   "showTaskForm": () => (/* binding */ showTaskForm)
/* harmony export */ });
/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ "./src/script/functions/formHandler.js");

var clearAddTask = function clearAddTask() {
  document.getElementById("taskName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("project").selectedIndex = 0;
  document.querySelector(".priority-text").textContent = "priority 4";
  selectDefaultPiority();
  selectDefaultDate();
  clearLabels();
};
var addTaskData = function addTaskData() {
  var taskName = document.getElementById("taskName").value;
  var description = document.getElementById("description").value;
  var date = document.getElementById("date").value;
  var project = document.getElementById("project").value;
  var priority = document.querySelector(".priority-text").value;
  var labels = getCheckedLabels();
  return {
    taskName: taskName,
    description: description,
    date: date,
    project: project,
    priority: priority,
    labels: labels
  };
};
var getCheckedLabels = function getCheckedLabels() {
  return getCheckedLabelsAndCount()[0];
};
var getCheckedLabelsCount = function getCheckedLabelsCount() {
  return getCheckedLabelsAndCount()[1];
};
var getCheckedLabelsAndCount = function getCheckedLabelsAndCount() {
  var checkedLabels = [];
  var checkedLabelsCount = 0;
  document.querySelectorAll(".label-list input").forEach(function (box) {
    if (box.checked == true) {
      console.log(checkedLabelsCount);
      checkedLabels.push(box.value);
      checkedLabelsCount += 1;
    }
  });
  return [checkedLabels, checkedLabelsCount];
};
var selectDefaultPiority = function selectDefaultPiority() {
  document.querySelector(".priority-text").value = 4;
};
var clearLabels = function clearLabels() {
  document.querySelectorAll(".label-list input").forEach(function (box) {
    box.checked = false;
  });
  document.querySelector(".num-of-labels").textContent = "0";
};
var selectDefaultDate = function selectDefaultDate() {
  var date = document.getElementById("date");
  var today = new Date().toISOString().split('T')[0];
  date.value = today;
  console.log(today);
};
var addNewTaskNode = function addNewTaskNode(taskName, project, labels) {
  var taskContainer = document.querySelector(".all-tasks");
  var lastTask = document.querySelector(".all-tasks .p-container:last-of-type");
  var newTaskNode = undefined;
  if (lastTask) {
    newTaskNode = lastTask.cloneNode(true);
    newTaskNode.setAttribute("index", "".concat(Number(lastTask.getAttribute("index")) + 1));
    newTaskNode.querySelector(".p-title").textContent = taskName;
    newTaskNode.querySelector(".p-name").textContent = project;
    var labelList = newTaskNode.querySelector(".labels-list");
    newTaskNode.querySelector("#task").checked = false;
    labelList.textContent = "";
    labels.forEach(function (label) {
      labelList.appendChild(getNewLabelNode(label));
    });
  } else {
    newTaskNode = getNewTaskNode("1", taskName, project, labels);
  }
  newTaskNode.querySelector("input").addEventListener("change", function () {
    document.querySelector(".all-tasks").removeChild(newTaskNode);
  });
  taskContainer.appendChild(newTaskNode);
};
var getNewTaskNode = function getNewTaskNode(index, taskTitle, pName, labels) {
  var labelsList = document.createElement("div");
  labelsList.className = "labels-list";
  labels.forEach(function (label) {
    labelsList.appendChild(getNewLabelNode(label));
  });
  var newTaskNode = document.createElement("div");
  var taskFirstLine = document.createElement("div");
  taskFirstLine.classList.add("task-first-line");
  var taskSecondLine = document.createElement("div");
  taskSecondLine.classList.add("task-second-line");
  newTaskNode.classList.add("p-container");
  newTaskNode.setAttribute("index", index);
  var checkbox = document.createElement("input");
  var ptitle = document.createElement("div");
  var pname = document.createElement("div");
  ptitle.classList.add("p-title");
  pname.classList.add("p-name");
  ptitle.textContent = taskTitle;
  pname.textContent = pName;
  checkbox.type = "checkbox";
  checkbox.id = "task";
  checkbox.value = "task";
  taskFirstLine.appendChild(checkbox);
  taskFirstLine.appendChild(ptitle);
  taskFirstLine.appendChild(labelsList);
  taskSecondLine.appendChild(pname);
  newTaskNode.appendChild(taskFirstLine);
  newTaskNode.appendChild(taskSecondLine);
  return newTaskNode;
};
{/* <div class="p-container" index="1">
 <div class="task-first-line">
    <input type="checkbox" id="task" value="task">
    <div class="p-title">some title1</div>
    <div class="labels-list">
        <div class="label">hj</div>
        <div class="label">adfs</div>
    </div>
 </div>
 <div class="task-second-line">
    <div class="p-name">project1</div>
 </div> */}
var getNewLabelNode = function getNewLabelNode(labelName) {
  var labelNode = document.createElement("div");
  labelNode.className = "label";
  labelNode.textContent = labelName;
  return labelNode;
};
var hideTaskForm = function hideTaskForm() {
  (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.hideForm)(".add-task-overlay");
};
var showTaskForm = function showTaskForm() {
  (0,_formHandler__WEBPACK_IMPORTED_MODULE_0__.showForm)(".add-task-overlay");
};


/***/ }),

/***/ "./src/script/functions/project.js":
/*!*****************************************!*\
  !*** ./src/script/functions/project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
var project = function project(name) {
  var tasks = [];
  var addTask = function addTask(task) {
    tasks.push(task);
  };
  return {
    name: name,
    tasks: tasks,
    addTask: addTask
  };
};


/***/ }),

/***/ "./src/script/functions/sortBy.js":
/*!****************************************!*\
  !*** ./src/script/functions/sortBy.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortAll": () => (/* binding */ sortAll),
/* harmony export */   "sortGroups": () => (/* binding */ sortGroups)
/* harmony export */ });
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/script/functions/taskList.js");
/* harmony import */ var _groupBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupBy */ "./src/script/functions/groupBy.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var sortAll = function sortAll(x) {
  var tasks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _taskList__WEBPACK_IMPORTED_MODULE_0__.tasks;
  return Array.from(tasks).sort(function (t1, t2) {
    console.log("is :    ".concat(sort[x]));
    return sort[x](t1, t2);
  });
};
var dateSort = function dateSort(t1, t2) {
  return new Date(t2[0].date) - new Date(t1[0].date);
};
/* mapping sort keys to sort functions for interfacing */
var sort = {
  date: dateSort
};
var defaultGroup = document.querySelector('.group-container #g0');
var priorityGroup = document.querySelector('.group-container #g1');
console.log(defaultGroup);
console.log(priorityGroup);
var sortGroups = function sortGroups(x) {
  var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _groupBy__WEBPACK_IMPORTED_MODULE_1__.groupTasks;
  var groupsCopy = _objectSpread({}, groups);
  for (var key in groupsCopy) {
    groupsCopy[key] = sortAll(x, groupsCopy[key]);
  }
  return groupsCopy;
};


/***/ }),

/***/ "./src/script/functions/task.js":
/*!**************************************!*\
  !*** ./src/script/functions/task.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
function task(name, description, date, priority, label) {
  var project = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "inbox";
  this.name = name;
  this.date = date;
  this.description = description;
  this.priority = priority;
  this.label = label;
  this.subTasks = [];
  this.project = project;
  this.finished = false;
  this.addSubTask = function () {
    subTasks.push(task);
  };
}
;


/***/ }),

/***/ "./src/script/functions/taskList.js":
/*!******************************************!*\
  !*** ./src/script/functions/taskList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/script/functions/project.js");

var projects = {};
var inbox = [];
var tasks = [];
var addProject = function addProject(projectName) {
  console.log(projectName);
  projects[real(projectName)] = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(projectName);
};
var addTask = function addTask(task) {
  tasks.push([task, tasks.length + 1]);
  console.log(tasks);
  var projectName = task.project;
  var projectId = real(projectName);
  if (projectId == "inbox") {
    inbox.push(task);
  } else {
    if (projects.hasOwnProperty(projectId)) {
      projects[projectId].tasks.push(task);
    }
  }
};
var real = function real(str) {
  return str.toLowerCase().replaceAll(' ', '');
};


/***/ }),

/***/ "./src/script/functions/view-task-controller.js":
/*!******************************************************!*\
  !*** ./src/script/functions/view-task-controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAllGroups": () => (/* binding */ addAllGroups),
/* harmony export */   "addAllTasks": () => (/* binding */ addAllTasks)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var createGroupNode = function createGroupNode(groupName) {
  var groupContainer = document.createElement('div');
  groupContainer.className = "".concat(groupName);
  var title = document.createElement('h2');
  title.textContent = groupName;
  groupContainer.appendChild(title);
  return groupContainer;
};
var addAllTasks = function addAllTasks(tasks) {
  var allTasksNode = document.querySelector('.all-tasks');
  tasks.forEach(function (taskContainer) {
    var old = allTasksNode.querySelector("[index = '".concat(taskContainer[1], "']"));
    if (old) {
      var task = old.cloneNode(true);
      old.remove();
      allTasksNode.appendChild(task);
    }
  });
};
var addAllGroups = function addAllGroups(groupTasks) {
  var allTasksNode = document.querySelector('.all-tasks');
  var _loop = function _loop() {
    if (groupTasks[key].length !== 0) {
      console.log(groupTasks);
      var groupNode = document.querySelector(".".concat(key));
      if (!groupNode) {
        groupNode = createGroupNode(key);
      }
      groupTasks[key].forEach(function (taskContainer) {
        console.log(_typeof(taskContainer[1]));
        var old = allTasksNode.querySelector("[index = '".concat(taskContainer[1], "']"));
        var task = old.cloneNode(true);
        console.log('bullshit');
        console.log(task);
        old.remove();
        groupNode.appendChild(task);
      });
      allTasksNode.appendChild(groupNode);
    }
  };
  for (var key in groupTasks) {
    _loop();
  }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/alltasks.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/alltasks.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".all-tasks {\n  display: inline-grid;\n  grid-auto-rows: 70px;\n  grid-auto-columns: 500px;\n  padding-top: 70px;\n  justify-content: center;\n  grid-column: 3/-1;\n  background-color: var(--dark-soft);\n  position: relative;\n}\n.view-container {\n  position: absolute;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  width: 100%;\n  padding-top: 10px;\n}\n.view-border {\n  display: flex;\n  gap: 5px;\n  padding: 2px;\n  margin-right: 11%;\n  position: relative;\n}\n.view-border:hover {\n  border: 1px solid var(--light-soft);\n  border-radius: 7px;\n  cursor: pointer;\n}\n.view-option-container {\n  position: absolute;\n  border: 1px solid var(--dark-black);\n  padding: 10px 20px 10px 20px;\n  top: 125px;\n  left: 50%;\n  right: 50%;\n  width: 135px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background-color: var(--dark-black);\n  z-index: 2;\n  border-radius: 10px;\n  color: var(--dark-soft);\n}\n.view-border:hover .view-option-container {\n  display: flex;\n}\n.sort-container,\n.group-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nh3.sort-option,\nh3.group-option {\n  padding: 2px;\n  margin-left: 15px;\n  text-align: center;\n}\nh3.sort-option:hover,\nh3.group-option:hover {\n  color: var(--dark-black);\n  border-radius: 10px;\n  background: var(--meduim-soft);\n}\nh3.sort-option:active h3.group-option:active {\n  color: var(--dark-black);\n  border: 1px solid var(--dark-black);\n}\n\n.p-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 7px;\n  outline: 1px dashed var(--dark-black);\n  position: relative;\n  gap: 5px;\n}\n.task-first-line {\n  display: flex;\n  gap: 7px;\n}\n.labels-list {\n  display: flex;\n  gap: 7px;\n}\n.labels-list > .label {\n  background: var(--dark-black);\n  color: var(--light-soft);\n  border-radius: 7px;\n  padding: 2px;\n}\n.p-title {\n  font-weight: bold;\n  font-size: large;\n  align-self: center;\n  color: var(--dark-black);\n}\n.p-name {\n  position: absolute;\n  bottom: 7px;\n  right: 7px;\n}\n@media (max-width: 700px) {\n  .all-tasks {\n    grid-auto-rows: 64px;\n    grid-auto-columns: 400px;\n    padding-top: 40px;\n  }\n  .view-option-container {\n    width: 67px;\n  }\n  h3.sort-option {\n    font-size: medium;\n  }\n  h2.header {\n    font-size: medium;\n  }\n}\n@media (max-width: 550px) {\n  .all-tasks {\n    grid-auto-rows: 59px;\n    grid-auto-columns: 282px;\n    padding-top: 40px;\n  }\n  .p-title {\n    font-weight: bold;\n    font-size: medium;\n    align-self: center;\n    color: var(--dark-black);\n  }\n  .p-name {\n    position: absolute;\n    bottom: 7px;\n    right: 7px;\n    font-size: small;\n  }\n  .labels-list {\n    font-size: small;\n  }\n  h3.sort-option {\n    font-size: smaller;\n  }\n  h2.header {\n    font-size: smaller;\n  }\n}\n@media (max-width: 380px) {\n  .all-tasks {\n    grid-auto-rows: 40px;\n    grid-auto-columns: 192px;\n    padding-top: 40px;\n  }\n  .p-title {\n    font-weight: bold;\n    font-size: small;\n    align-self: center;\n    color: var(--dark-black);\n  }\n  .p-name {\n    position: absolute;\n    bottom: 7px;\n    right: 7px;\n    font-size: x-small;\n  }\n  .labels-list {\n    font-size: x-small;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/alltasks.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,uBAAuB;EACvB,iBAAiB;EACjB,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,QAAQ;EACR,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,4BAA4B;EAC5B,UAAU;EACV,SAAS;EACT,UAAU;EACV,YAAY;EACZ,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mCAAmC;EACnC,UAAU;EACV,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;;EAEE,wBAAwB;EACxB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,wBAAwB;EACxB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,6BAA6B;EAC7B,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;AACA;EACE;IACE,oBAAoB;IACpB,wBAAwB;IACxB,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;AACF;AACA;EACE;IACE,oBAAoB;IACpB,wBAAwB;IACxB,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;EAC1B;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,oBAAoB;IACpB,wBAAwB;IACxB,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,wBAAwB;EAC1B;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF","sourcesContent":[".all-tasks {\n  display: inline-grid;\n  grid-auto-rows: 70px;\n  grid-auto-columns: 500px;\n  padding-top: 70px;\n  justify-content: center;\n  grid-column: 3/-1;\n  background-color: var(--dark-soft);\n  position: relative;\n}\n.view-container {\n  position: absolute;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  width: 100%;\n  padding-top: 10px;\n}\n.view-border {\n  display: flex;\n  gap: 5px;\n  padding: 2px;\n  margin-right: 11%;\n  position: relative;\n}\n.view-border:hover {\n  border: 1px solid var(--light-soft);\n  border-radius: 7px;\n  cursor: pointer;\n}\n.view-option-container {\n  position: absolute;\n  border: 1px solid var(--dark-black);\n  padding: 10px 20px 10px 20px;\n  top: 125px;\n  left: 50%;\n  right: 50%;\n  width: 135px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background-color: var(--dark-black);\n  z-index: 2;\n  border-radius: 10px;\n  color: var(--dark-soft);\n}\n.view-border:hover .view-option-container {\n  display: flex;\n}\n.sort-container,\n.group-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nh3.sort-option,\nh3.group-option {\n  padding: 2px;\n  margin-left: 15px;\n  text-align: center;\n}\nh3.sort-option:hover,\nh3.group-option:hover {\n  color: var(--dark-black);\n  border-radius: 10px;\n  background: var(--meduim-soft);\n}\nh3.sort-option:active h3.group-option:active {\n  color: var(--dark-black);\n  border: 1px solid var(--dark-black);\n}\n\n.p-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 7px;\n  outline: 1px dashed var(--dark-black);\n  position: relative;\n  gap: 5px;\n}\n.task-first-line {\n  display: flex;\n  gap: 7px;\n}\n.labels-list {\n  display: flex;\n  gap: 7px;\n}\n.labels-list > .label {\n  background: var(--dark-black);\n  color: var(--light-soft);\n  border-radius: 7px;\n  padding: 2px;\n}\n.p-title {\n  font-weight: bold;\n  font-size: large;\n  align-self: center;\n  color: var(--dark-black);\n}\n.p-name {\n  position: absolute;\n  bottom: 7px;\n  right: 7px;\n}\n@media (max-width: 700px) {\n  .all-tasks {\n    grid-auto-rows: 64px;\n    grid-auto-columns: 400px;\n    padding-top: 40px;\n  }\n  .view-option-container {\n    width: 67px;\n  }\n  h3.sort-option {\n    font-size: medium;\n  }\n  h2.header {\n    font-size: medium;\n  }\n}\n@media (max-width: 550px) {\n  .all-tasks {\n    grid-auto-rows: 59px;\n    grid-auto-columns: 282px;\n    padding-top: 40px;\n  }\n  .p-title {\n    font-weight: bold;\n    font-size: medium;\n    align-self: center;\n    color: var(--dark-black);\n  }\n  .p-name {\n    position: absolute;\n    bottom: 7px;\n    right: 7px;\n    font-size: small;\n  }\n  .labels-list {\n    font-size: small;\n  }\n  h3.sort-option {\n    font-size: smaller;\n  }\n  h2.header {\n    font-size: smaller;\n  }\n}\n@media (max-width: 380px) {\n  .all-tasks {\n    grid-auto-rows: 40px;\n    grid-auto-columns: 192px;\n    padding-top: 40px;\n  }\n  .p-title {\n    font-weight: bold;\n    font-size: small;\n    align-self: center;\n    color: var(--dark-black);\n  }\n  .p-name {\n    position: absolute;\n    bottom: 7px;\n    right: 7px;\n    font-size: x-small;\n  }\n  .labels-list {\n    font-size: x-small;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-header{\n  grid-column: 1/-1;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50%;\n  background-color: var(--dark-black);\n}\n.header-title-container{   \n  display: flex;\n  gap: 80px;   \n  font-size: 26px;\n  font-weight: bolder;\n}\n.header-text{\n  color: var(--dark-soft);\n}\n.add-task-button{\n  font-size: 20px;\n  cursor: pointer;\n  border-radius: 100px;\n  border: none;\n  width: 25px;\n  background-color: var(--dark-soft);\n}", "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,kCAAkC;AACpC","sourcesContent":[".main-header{\n  grid-column: 1/-1;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50%;\n  background-color: var(--dark-black);\n}\n.header-title-container{   \n  display: flex;\n  gap: 80px;   \n  font-size: 26px;\n  font-weight: bolder;\n}\n.header-text{\n  color: var(--dark-soft);\n}\n.add-task-button{\n  font-size: 20px;\n  cursor: pointer;\n  border-radius: 100px;\n  border: none;\n  width: 25px;\n  background-color: var(--dark-soft);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/labeloverlay.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/labeloverlay.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".add-label-form{\n    display: flex;\n    flex-direction: column;\n    --label-width: 500px;\n    width: var(--label-width);\n    border-radius: 15px;\n    border: 1px solid black;\n}\n.add-label-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: var(--light-soft);\n    height: 40px;\n    padding: 10px;\n}\n\n#labelName { \n    height: 40px; \n    width: calc(var(--label-width) - 50px); \n    font-size: 18px; margin: 0; \n    align-self: center;\n    border: 1px solid grey; \n    padding: 0px  10px; \n    border-radius: 5px; \n    margin: 15px; \n    background: var(--dark-black);\n    color: var(--light-soft); \n}\nbutton.add-label, .cansel-add-label {\n    border-radius: 10px;\n    border: none;\n    cursor: pointer;\n    height: 60%;\n}\n.add-label-header > button {\n    background-color: var(--dark-black);\n    color: var(--light-soft);\n}\n.add-label-overlay{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: scale(1);\n    transition: transform 300ms ease-in-out;\n    background-color: rgba(43, 43, 43, 0.877);\n    pointer-events: all;\n}\n.add-label-overlay.hide{\n    transform: scale(0);\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/labeloverlay.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sCAAsC;IACtC,eAAe,EAAE,SAAS;IAC1B,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,6BAA6B;IAC7B,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,WAAW;AACf;AACA;IACI,mCAAmC;IACnC,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,uCAAuC;IACvC,yCAAyC;IACzC,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,oBAAoB;AACxB","sourcesContent":[".add-label-form{\n    display: flex;\n    flex-direction: column;\n    --label-width: 500px;\n    width: var(--label-width);\n    border-radius: 15px;\n    border: 1px solid black;\n}\n.add-label-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: var(--light-soft);\n    height: 40px;\n    padding: 10px;\n}\n\n#labelName { \n    height: 40px; \n    width: calc(var(--label-width) - 50px); \n    font-size: 18px; margin: 0; \n    align-self: center;\n    border: 1px solid grey; \n    padding: 0px  10px; \n    border-radius: 5px; \n    margin: 15px; \n    background: var(--dark-black);\n    color: var(--light-soft); \n}\nbutton.add-label, .cansel-add-label {\n    border-radius: 10px;\n    border: none;\n    cursor: pointer;\n    height: 60%;\n}\n.add-label-header > button {\n    background-color: var(--dark-black);\n    color: var(--light-soft);\n}\n.add-label-overlay{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: scale(1);\n    transition: transform 300ms ease-in-out;\n    background-color: rgba(43, 43, 43, 0.877);\n    pointer-events: all;\n}\n.add-label-overlay.hide{\n    transform: scale(0);\n    pointer-events: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-container.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main-container.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n}\n:root{\n    --dark-black: rgb(7, 7, 7);\n    --light-soft: #f5f5f5;\n    --meduim-soft: #f2ead3;\n    --dark-soft: #dfd7bf;\n}\nul{\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.main-container{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: 65px;\n    grid-auto-rows: 1fr;\n}\nh2{\n    font-size: 20px;\n    \n}\nh3{\n    font-size: 16px;\n    font-weight: 600;\n}", "",{"version":3,"sources":["webpack://./src/styles/main-container.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;AACA;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,aAAa;IACb,qCAAqC;IACrC,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,eAAe;;AAEnB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["*{\n    margin: 0;\n}\n:root{\n    --dark-black: rgb(7, 7, 7);\n    --light-soft: #f5f5f5;\n    --meduim-soft: #f2ead3;\n    --dark-soft: #dfd7bf;\n}\nul{\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.main-container{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: 65px;\n    grid-auto-rows: 1fr;\n}\nh2{\n    font-size: 20px;\n    \n}\nh3{\n    font-size: 16px;\n    font-weight: 600;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/projectoverlay.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/projectoverlay.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".add-project-header > button{\n    background-color: var(--dark-soft);\n    color: var(--dark-black);\n}\n.add-project-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n    background: var(--dark-black);\n    padding: 10px;\n}\n.add-project-title{\n    font-weight: 700;\n    font-size: 25px;\n    line-height: 1.1;\n    color: var(--dark-soft);\n}\n\n\nbutton.add-project, .cansel-add-project{\n    border-radius: 10px;\n    border: none;\n    cursor: pointer;\n    height: 60%;\n} \n\n#projectName { \n    height: 40px; \n    width: calc(var(--project-width) - 50px); \n    font-size: 18px; margin: 0; \n    align-self: center;\n    border: 1px solid grey; \n    padding: 0px  10px; \n    border-radius: 5px; \n    margin: 15px; \n    background: var(--meduim-soft);\n    color: var(--dark-black); \n}\n\n\n.add-project-form{\n    display: flex;\n    flex-direction: column;\n    width: var(--project-width);\n    --project-width: 500px;\n    border-radius: 15px;\n    background: var(--light-soft);\n}\n.add-project-overlay{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: scale(1);\n    transition: transform 300ms ease-in-out;\n    background-color: rgba(43, 43, 43, 0.877);\n    pointer-events: all;\n}\n.add-project-overlay.hide{\n    transform: scale(0);\n    pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/projectoverlay.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;AAC3B;;;AAGA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,wCAAwC;IACxC,eAAe,EAAE,SAAS;IAC1B,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,wBAAwB;AAC5B;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,uCAAuC;IACvC,yCAAyC;IACzC,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,oBAAoB;AACxB","sourcesContent":[".add-project-header > button{\n    background-color: var(--dark-soft);\n    color: var(--dark-black);\n}\n.add-project-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n    background: var(--dark-black);\n    padding: 10px;\n}\n.add-project-title{\n    font-weight: 700;\n    font-size: 25px;\n    line-height: 1.1;\n    color: var(--dark-soft);\n}\n\n\nbutton.add-project, .cansel-add-project{\n    border-radius: 10px;\n    border: none;\n    cursor: pointer;\n    height: 60%;\n} \n\n#projectName { \n    height: 40px; \n    width: calc(var(--project-width) - 50px); \n    font-size: 18px; margin: 0; \n    align-self: center;\n    border: 1px solid grey; \n    padding: 0px  10px; \n    border-radius: 5px; \n    margin: 15px; \n    background: var(--meduim-soft);\n    color: var(--dark-black); \n}\n\n\n.add-project-form{\n    display: flex;\n    flex-direction: column;\n    width: var(--project-width);\n    --project-width: 500px;\n    border-radius: 15px;\n    background: var(--light-soft);\n}\n.add-project-overlay{\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: scale(1);\n    transition: transform 300ms ease-in-out;\n    background-color: rgba(43, 43, 43, 0.877);\n    pointer-events: all;\n}\n.add-project-overlay.hide{\n    transform: scale(0);\n    pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidetrack.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sidetrack.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidetrack{\n    grid-column: 1/span 2;\n    background-color: var(--dark-black);\n    display: grid;\n    justify-content: center;\n}\n.all-projects{\n    display: grid;\n    grid-auto-rows: 35px;\n    grid-auto-columns: 220px;\n    padding-top: 50px;\n}\n\n.Inbox , .projects{\n    font-weight: bold;\n    color: var(--dark-soft);\n}\n.projects-container{\n    display: flex;\n    justify-content: space-between;\n    height: 30px;\n    align-items: center;\n}\n.projects-container > .new-project{\n    border-radius: 20px;\n    border: none;\n    cursor: pointer;\n    background-color: var(--dark-soft);\n}\n.projects > .project{\n    padding-left: 15px;\n    color: var(--dark-soft);\n    padding: 15px;\n}\n@media (max-width: 910px){\n    .all-projects{\n        display: grid;\n        grid-auto-rows: 24px;\n        grid-auto-columns: 189px;\n        padding-top: 50px;\n    }\n}\n@media (max-width: 650px){\n    .all-projects{\n        display: grid;\n        grid-auto-rows: 20px;\n        grid-auto-columns: 112px;\n        padding-top: 50px;\n    }\n    .projects > .project{\n        padding-left: 15px;\n        color: var(--light-soft);\n        font-size: smaller;\n    }\n    .Inbox , .projects{\n        font-weight: bold;\n        font-size: small;\n    }\n}\n@media (max-width: 455px){\n    .all-projects{\n        display: grid;\n        grid-auto-rows: 20px;\n        grid-auto-columns: 78px;\n        padding-top: 50px;\n    }\n    .projects > .project{\n        padding-left: 15px;\n        color: var(--light-soft);\n        font-size: x-small;\n    }\n    .Inbox , .projects{\n        font-weight: bold;\n        color: var(--dark-soft);\n        font-size: smaller;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/sidetrack.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,oBAAoB;IACpB,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kCAAkC;AACtC;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI;QACI,aAAa;QACb,oBAAoB;QACpB,wBAAwB;QACxB,iBAAiB;IACrB;AACJ;AACA;IACI;QACI,aAAa;QACb,oBAAoB;QACpB,wBAAwB;QACxB,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,wBAAwB;QACxB,kBAAkB;IACtB;IACA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,aAAa;QACb,oBAAoB;QACpB,uBAAuB;QACvB,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,wBAAwB;QACxB,kBAAkB;IACtB;IACA;QACI,iBAAiB;QACjB,uBAAuB;QACvB,kBAAkB;IACtB;AACJ","sourcesContent":[".sidetrack{\n    grid-column: 1/span 2;\n    background-color: var(--dark-black);\n    display: grid;\n    justify-content: center;\n}\n.all-projects{\n    display: grid;\n    grid-auto-rows: 35px;\n    grid-auto-columns: 220px;\n    padding-top: 50px;\n}\n\n.Inbox , .projects{\n    font-weight: bold;\n    color: var(--dark-soft);\n}\n.projects-container{\n    display: flex;\n    justify-content: space-between;\n    height: 30px;\n    align-items: center;\n}\n.projects-container > .new-project{\n    border-radius: 20px;\n    border: none;\n    cursor: pointer;\n    background-color: var(--dark-soft);\n}\n.projects > .project{\n    padding-left: 15px;\n    color: var(--dark-soft);\n    padding: 15px;\n}\n@media (max-width: 910px){\n    .all-projects{\n        display: grid;\n        grid-auto-rows: 24px;\n        grid-auto-columns: 189px;\n        padding-top: 50px;\n    }\n}\n@media (max-width: 650px){\n    .all-projects{\n        display: grid;\n        grid-auto-rows: 20px;\n        grid-auto-columns: 112px;\n        padding-top: 50px;\n    }\n    .projects > .project{\n        padding-left: 15px;\n        color: var(--light-soft);\n        font-size: smaller;\n    }\n    .Inbox , .projects{\n        font-weight: bold;\n        font-size: small;\n    }\n}\n@media (max-width: 455px){\n    .all-projects{\n        display: grid;\n        grid-auto-rows: 20px;\n        grid-auto-columns: 78px;\n        padding-top: 50px;\n    }\n    .projects > .project{\n        padding-left: 15px;\n        color: var(--light-soft);\n        font-size: x-small;\n    }\n    .Inbox , .projects{\n        font-weight: bold;\n        color: var(--dark-soft);\n        font-size: smaller;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskoverlay.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/taskoverlay.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input-button-container{\n    display: flex;\n    gap: 20px;\n   --input-button-height: 30px;\n}\n\n\n\n.add-task-form{\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    gap: 20px;\n    border: 2px solid black;\n    padding: 15px;\n    border-radius: 15px;\n    background-color: var(--light-soft);\n    color: var(--dark-black);\n}\n\n\n.input-button-container > div{\n    border: 1px solid black;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    display: flex;\n    height: var(--input-button-height);\n    border-radius: 5px;\n    cursor: pointer;\n    padding: 4px 6px 4px 4px;\n}\n#taskName{\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n#taskName, #description{\n    border: none;\n}\n.add-task-footer{\n    display: flex;\n    justify-content: space-between;\n    gap: 7px;\n}\n\n/* priority  */\n.priority-container, .label-container{\n    position: relative;\n}\n.priority-list,.label-list{\n    display: none;\n    position: absolute;\n    top: var(--input-button-height);\n    background-color: white;\n    padding: 3px;\n    border-radius: 6px;\n}\n.priority-list{\n    width: 78px;\n}\n.priority-list > li{\n    padding: 4px;\n    color: var(--dark-black);\n}\n\nli:hover{\n    background:  var(--dark-black);\n    color: var(--light-soft);\n    border-radius: 6px;\n}\n\n\n\n\n/* label */\n.label-list{\n    width: 100px;\n}\n.label-list > div.label{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 8px;\n    color: var(--dark-black);\n}\n\n.add-task-overlay{\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    pointer-events: all;\n    background: rgba(2, 2, 26, 0.642);\n    z-index: 1;\n    transform: scale(1);\n    transition: transform 300ms ease-in-out ;\n}\n.add-task-overlay.hide{\n    transform: scale(0);\n    pointer-events: none;\n}\n.project-container{\n    align-self: flex-start;\n}\nbutton.add-label-button:active { \n    background: var(--dark-soft); \n}; \nbutton.add-label-button:hover { \n    background: var(--dark-black); \n};\nbutton.add-label-button {\n    border: none;\n    font-size: smaller;\n    font-weight: bolder;\n    width: 50%;\n    background: var(--dark-black);\n    color: var(--light-soft);\n}\n\n.input-button-container > div:hover {\n    background: var(--dark-black);\n    color: var(--light-soft);\n}\n\n.priority-container:hover .priority-list {\n    display: block;\n}\n.label-container:hover .label-list {\n    display: block;\n}\n@media (max-width: 450px){\n    .add-task-form{\n        display: flex;\n        flex-direction: column;\n        width: 281px;\n        gap: 20px;\n        border: 2px solid black;\n        padding: 15px;\n        border-radius: 15px;\n        background-color: var(--light-soft);\n        color: var(--dark-black);\n        font-size: 14px;\n    }\n    #taskName, #description {\n        border: none;\n        font-size: 17px;\n    }\n    .input-button-container {\n        display: flex;\n        gap: 0px;\n        --input-button-height: 30px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/taskoverlay.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;GACV,2BAA2B;AAC9B;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,mCAAmC;IACnC,wBAAwB;AAC5B;;;AAGA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,kBAAkB;IAClB,eAAe;IACf,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA,cAAc;AACd;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,+BAA+B;IAC/B,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,wBAAwB;IACxB,kBAAkB;AACtB;;;;;AAKA,UAAU;AACV;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,SAAS;IACT,MAAM;IACN,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,iCAAiC;IACjC,UAAU;IACV,mBAAmB;IACnB,wCAAwC;AAC5C;AACA;IACI,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,4BAA4B;AAChC,CAAA;AACA;IACI,6BAA6B;AACjC,CAAA;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;IACV,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,YAAY;QACZ,SAAS;QACT,uBAAuB;QACvB,aAAa;QACb,mBAAmB;QACnB,mCAAmC;QACnC,wBAAwB;QACxB,eAAe;IACnB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,aAAa;QACb,QAAQ;QACR,2BAA2B;IAC/B;AACJ","sourcesContent":[".input-button-container{\n    display: flex;\n    gap: 20px;\n   --input-button-height: 30px;\n}\n\n\n\n.add-task-form{\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    gap: 20px;\n    border: 2px solid black;\n    padding: 15px;\n    border-radius: 15px;\n    background-color: var(--light-soft);\n    color: var(--dark-black);\n}\n\n\n.input-button-container > div{\n    border: 1px solid black;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    display: flex;\n    height: var(--input-button-height);\n    border-radius: 5px;\n    cursor: pointer;\n    padding: 4px 6px 4px 4px;\n}\n#taskName{\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n#taskName, #description{\n    border: none;\n}\n.add-task-footer{\n    display: flex;\n    justify-content: space-between;\n    gap: 7px;\n}\n\n/* priority  */\n.priority-container, .label-container{\n    position: relative;\n}\n.priority-list,.label-list{\n    display: none;\n    position: absolute;\n    top: var(--input-button-height);\n    background-color: white;\n    padding: 3px;\n    border-radius: 6px;\n}\n.priority-list{\n    width: 78px;\n}\n.priority-list > li{\n    padding: 4px;\n    color: var(--dark-black);\n}\n\nli:hover{\n    background:  var(--dark-black);\n    color: var(--light-soft);\n    border-radius: 6px;\n}\n\n\n\n\n/* label */\n.label-list{\n    width: 100px;\n}\n.label-list > div.label{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 8px;\n    color: var(--dark-black);\n}\n\n.add-task-overlay{\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    pointer-events: all;\n    background: rgba(2, 2, 26, 0.642);\n    z-index: 1;\n    transform: scale(1);\n    transition: transform 300ms ease-in-out ;\n}\n.add-task-overlay.hide{\n    transform: scale(0);\n    pointer-events: none;\n}\n.project-container{\n    align-self: flex-start;\n}\nbutton.add-label-button:active { \n    background: var(--dark-soft); \n}; \nbutton.add-label-button:hover { \n    background: var(--dark-black); \n};\nbutton.add-label-button {\n    border: none;\n    font-size: smaller;\n    font-weight: bolder;\n    width: 50%;\n    background: var(--dark-black);\n    color: var(--light-soft);\n}\n\n.input-button-container > div:hover {\n    background: var(--dark-black);\n    color: var(--light-soft);\n}\n\n.priority-container:hover .priority-list {\n    display: block;\n}\n.label-container:hover .label-list {\n    display: block;\n}\n@media (max-width: 450px){\n    .add-task-form{\n        display: flex;\n        flex-direction: column;\n        width: 281px;\n        gap: 20px;\n        border: 2px solid black;\n        padding: 15px;\n        border-radius: 15px;\n        background-color: var(--light-soft);\n        color: var(--dark-black);\n        font-size: 14px;\n    }\n    #taskName, #description {\n        border: none;\n        font-size: 17px;\n    }\n    .input-button-container {\n        display: flex;\n        gap: 0px;\n        --input-button-height: 30px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/alltasks.css":
/*!*********************************!*\
  !*** ./src/styles/alltasks.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_alltasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./alltasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/alltasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_alltasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_alltasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_alltasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_alltasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/labeloverlay.css":
/*!*************************************!*\
  !*** ./src/styles/labeloverlay.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_labeloverlay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./labeloverlay.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/labeloverlay.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_labeloverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_labeloverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_labeloverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_labeloverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main-container.css":
/*!***************************************!*\
  !*** ./src/styles/main-container.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_container_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main-container.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-container.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_container_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_container_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/projectoverlay.css":
/*!***************************************!*\
  !*** ./src/styles/projectoverlay.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectoverlay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projectoverlay.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/projectoverlay.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/sidetrack.css":
/*!**********************************!*\
  !*** ./src/styles/sidetrack.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidetrack_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidetrack.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidetrack.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidetrack_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidetrack_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidetrack_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidetrack_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/taskoverlay.css":
/*!************************************!*\
  !*** ./src/styles/taskoverlay.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskoverlay_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskoverlay.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/taskoverlay.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskoverlay_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _script_components_main_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/components/main-container */ "./src/script/components/main-container.js");
/* harmony import */ var _script_components_taskoverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/components/taskoverlay */ "./src/script/components/taskoverlay.js");
/* harmony import */ var _script_components_projectoverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/components/projectoverlay */ "./src/script/components/projectoverlay.js");
/* harmony import */ var _script_components_labeloverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/components/labeloverlay */ "./src/script/components/labeloverlay.js");
/* harmony import */ var _script_functions_displayController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/functions/displayController */ "./src/script/functions/displayController.js");





var content = document.querySelector("#content");
content.appendChild(_script_components_main_container__WEBPACK_IMPORTED_MODULE_1__.mainContainer);
content.appendChild(_script_components_taskoverlay__WEBPACK_IMPORTED_MODULE_2__.taskoverlay);
content.appendChild(_script_components_projectoverlay__WEBPACK_IMPORTED_MODULE_3__.projectoverlay);
content.appendChild(_script_components_labeloverlay__WEBPACK_IMPORTED_MODULE_4__.labeloverlay);

(0,_script_functions_displayController__WEBPACK_IMPORTED_MODULE_5__.displayController)();
console.log(" to finish");
})();

/******/ })()
;
//# sourceMappingURL=bundle.5adc710a9cc99c22e932.js.map