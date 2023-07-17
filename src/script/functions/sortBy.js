import { tasks as originalTasks } from './taskList'
import { groupTasks } from './groupBy'
import { compareAsc } from 'date-fns'


const sortAll = (x, tasks = originalTasks) => {
  return Array.from(tasks).sort((t1, t2) => {
    return sort[x](t1, t2)
  })
}
const dateSort = (t1, t2) => {
  return compareAsc(new Date(t1[0].date) , new Date(t2[0].date))
}
/* mapping sort keys to sort functions for interfacing */
const sort = {
  date: dateSort
}

const sortGroups = (x, groups = groupTasks) => {
  const groupsCopy = { ...groups }
  for (const key in groupsCopy) {
    groupsCopy[key] = sortAll(x, groupsCopy[key])
  }
  return groupsCopy
}

export { sortAll, sortGroups }
