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
const group = (x) => {
  clearGroupTasks()
  tasks.forEach((task) => {
    groupTasks[
      `${'priority' + task[0][x]}`.replaceAll(' ', '').toLowerCase()
    ].push(task)
  })
}
export { group, groupTasks }
