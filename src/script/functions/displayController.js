import { addTask, addProject } from './taskList'
import {linkClickable} from '../../../node_modules/linkclickablenode/src/scripts/linkClickable'
import {
  clearAddProject,
  newProjectData,
  addNewProjectOption,
  hideProjectForm,
  showProjectForm,
  addNewProjectNode
} from './newProjectModule'
import {
  clearAddTask,
  addTaskData,
  hideTaskForm,
  showTaskForm,
  selectDefaultDate,
  selectDefaultPiority,
  getCheckedLabelsCount
} from './newTaskModule'
import {
  clearAddLabel,
  newLabelName,
  showLabelForm,
  hideLabelForm,
  addNewLabelNode
} from './newLabelModule'
import { task } from './task'
import {
  sortByDefault,
  sortByDate,
  groupByDefault,
  groupByPriotiry,
  appendNewTaskNode
} from './displayTasks'
const displayController = () => {
  /* selecting today as a default date */
  selectDefaultDate()
  selectDefaultPiority()

  const addNewProject = document.querySelector('.new-project')
  const projectInput = document.querySelector('.add-project-form')
  const closeAddProject = document.querySelector('.cansel-add-project')
  const closeAddTaskButton = document.querySelector(
    '.add-task-footer  .cansel-add-task'
  )
  const taskInput = document.querySelector('.add-task-form')
  const addTaskButton = document.querySelector('.add-task-button')
  const addNewLabelButton = document.querySelector('.add-label-button')
  const closeNewLabelButton = document.querySelector('.cansel-add-label')
  const addLabelForm = document.querySelector('.add-label-form')
  /* openning addproject form */
  addNewProject.addEventListener('click', () => {
    showProjectForm()
  })
  /* closing addproject form */
  closeAddProject.addEventListener('click', () => {
    clearAddProject()
    hideProjectForm()
  })
  /* submit addproject form */
  projectInput.addEventListener('submit', (event) => {
    event.preventDefault()
    const { projectName } = newProjectData()
    addNewProjectNode(projectName)
    clearAddProject()
    addProject(projectName)
    addNewProjectOption(projectName)
    hideProjectForm()
  })

  /* close addtask form */
  closeAddTaskButton.addEventListener('click', () => {
    hideTaskForm()
    clearAddTask()
  })
  /* openning addtask form */
  addTaskButton.addEventListener('click', () => {
    showTaskForm()
  })
  /* submit addtask form */
  taskInput.addEventListener('submit', (event) => {
    event.preventDefault()
    const { taskName, description, date, project, priority, labels } =
      addTaskData()
    const newTask = new task(
      taskName,
      description,
      date,
      priority,
      labels,
      project
    )
    /* first add to (default) tasks */
    addTask(newTask)
    /* till here working */
    appendNewTaskNode(newTask)
    clearAddTask()
    hideTaskForm()
  })

  const priorityList = document.querySelector('.priority-list')
  const labelList = document.querySelector('.label-list')
  document.querySelector('.num-of-labels').before('(')
  document.querySelector('.num-of-labels').after(')')

  const isListHidden = (list) => {
    return (
      list.style.display == 'none' || getComputedStyle(list).display == 'none'
    )
  }
  const hideList = (list) => {
    list.style.display = 'none'
  }
  const showList = (list) => {
    list.style.display = 'block'
  }
  const toggleList = (list) => {
    if (isListHidden(list)) {
      showList(list)
    } else {
      hideList(list)
    }
  }

  document.querySelectorAll('.priority-list > li').forEach((priority) => {
    priority.addEventListener('click', (e) => {
      const priorityText = document.querySelector('.priority-text')
      /* priority value 1,2,3,4 */
      priorityText.value = priority.id
      priorityText.textContent = priority.textContent
    })
  })

  document.querySelectorAll('.label-list input').forEach((box) => {
    box.addEventListener('click', () => {
      document.querySelector('.num-of-labels').textContent =
        getCheckedLabelsCount()
    })
  })
  /* openning addproject form */
  addNewLabelButton.addEventListener('click', () => {
    hideTaskForm()
    showLabelForm()
  })
  /* closing addproject form */
  closeNewLabelButton.addEventListener('click', () => {
    clearAddLabel()
    hideLabelForm()
    showTaskForm()
  })
  /* submit addproject form */
  addLabelForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const { labelName } = newLabelName()
    addNewLabelNode(labelName)
    /* changing number of selected labels */
    const lastLabel = document.querySelector(
      '.label-list div:nth-last-child(2)'
    )
    lastLabel.addEventListener('click', () => {
      document.querySelector('.num-of-labels').textContent =
        getCheckedLabelsCount()
    })
    hideLabelForm()
    clearAddLabel()
    showTaskForm()
  })
  /* adding preexisted project */
  const projects = document.querySelectorAll('.projects > .project')
  projects.forEach((project) => {
    addProject(project.textContent)
    addNewProjectOption(project.textContent)
  })

  document.querySelector('.sort-container #s0')
    .addEventListener('click', () => {
      sortByDefault()
    })
  document.querySelector('.sort-container #s1')
    .addEventListener('click', () => {
      sortByDate()
    })
  document.querySelector('.group-container #g0')
    .addEventListener('click', () => {
      groupByDefault()
    })
  document.querySelector('.group-container #g1')
    .addEventListener('click', () => {
      groupByPriotiry()
    })
    const viewBorder = document.querySelector('.view-border');
    linkClickable(viewBorder, document.querySelector('.view-option-container'));
}

export { displayController }
