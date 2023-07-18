import { tasks } from './taskList'
let groupTasks = {
  priority1: [],
  priority2: [],
  priority3: [],
  priority4: []
}
const clearGroupTasks = () => {
  groupTasks = {
    priority1: [],
    priority2: [],
    priority3: [],
    priority4: []
  }
}
const addOneTaskToGroup = (task) => {
  let key = `${'priority' + task.priority}`.replaceAll(' ','').toLowerCase()
  groupTasks[key].push(tasks[tasks.length - 1])
  return {key}
}
const group = (x) => {
  clearGroupTasks()
  tasks.forEach((task) => {
    groupTasks[
      `${'priority' + task[0][x]}`.replaceAll(' ', '').toLowerCase()
    ].push(task)
  })
}
export { group, groupTasks, addOneTaskToGroup }
