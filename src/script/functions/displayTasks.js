import { tasks } from './taskList'
import { sortAll, sortGroups } from './sortBy'
import { group, groupTasks } from './groupBy'
import {
  addAllGroups as appendGroups,
  addAllTasks as appendTasks
} from './view-task-controller'

const sortByDefault = () => {
  const defaultSort = document.querySelector('.sort-container #s0')
  const defaultGroup = document.querySelector('.group-container #g0')

  if (!isSelected(defaultSort)) {
    if (isSelected(defaultGroup)) {
      appendTasks(tasks)
    } else {
      appendGroups(sortGroups('date'))
    }
    toggleSelectAttribute(selecetdSortObtion())
    toggleSelectAttribute(defaultSort)
  }
}
const sortByDate = () => {
  const dateSort = document.querySelector('.sort-container #s1')
  const defaultGroup = document.querySelector('.group-container #g0')

  if (!isSelected(dateSort)) {
    if (isSelected(defaultGroup)) {
      appendTasks(sortAll('date'))
    } else {
      appendGroups(groupTasks)
    }
    toggleSelectAttribute(selecetdSortObtion())
    toggleSelectAttribute(dateSort)
  }
}
const groupByDefault = () => {
  const defaultSort = document.querySelector('.sort-container #s0')
  const defaultGroup = document.querySelector('.group-container #g0')
  if (!isSelected(defaultGroup)) {
    if (isSelected(defaultSort)) {
      appendTasks(tasks)
    } else {
      appendTasks(sortAll(currentSortType()))
    }
    toggleSelectAttribute(selecetedGroupObtion())
    toggleSelectAttribute(defaultGroup)
  }
}
const groupByPriotiry = () => {
  const defaultSort = document.querySelector('.sort-container #s0')
  const priorityGroup = document.querySelector('.group-container #g1')
  if (!isSelected(priorityGroup)) {
    group('priority')
    if (!isSelected(defaultSort)) {
      sortGroups(currentSortType())
    }
    appendGroups(groupTasks)
    toggleSelectAttribute(selecetedGroupObtion())
    toggleSelectAttribute(priorityGroup)
  }
}
const toggleSelectAttribute = (node) => {
  if (node.getAttribute('selected') === 't') {
    node.setAttribute('selected', 'f')
  } else {
    node.setAttribute('selected', 't')
  }
}
const isSelected = (obtion) => {
  const isObtionSelected = obtion.getAttribute('selected')
  return isObtionSelected === 't'
}
const selecetdSortObtion = () => {
  return document.querySelector('.sort-container [selected = "t"]')
}
const selecetedGroupObtion = () => {
  return document.querySelector('.group-container [selected = "t"]')
}
const currentSortType = () => {
  return selecetdSortObtion().textContent.replaceAll(' ', '').toLowerCase()
}
export { sortByDefault, sortByDate, groupByDefault, groupByPriotiry }
