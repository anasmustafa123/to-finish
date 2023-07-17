import { tasks } from './taskList'
import { sortAll, sortGroups } from './sortBy'
import { group, groupTasks } from './groupBy'
import {
  addAllGroups as appendGroups,
  addAllTasks as appendTasks
} from './view-task-controller'

const sortByDefault = () => {
  const defaultSort = document.querySelector('.sort-container #s0')
  if (!isSelected(defaultSort)) {
    if (isGrouped()) {
      appendGroups(groupTasks)
    } else {
      appendTasks(tasks)
    }
    toggleSortOption(defaultSort)
  }
}
const sortByDate = () => {
  const dateSort = document.querySelector('.sort-container #s1')
  if (!isSelected(dateSort)) {
    if (isGrouped()) {
      appendGroups(sortGroups('date'))
    } else {
      appendTasks(sortAll('date'))
    }
    toggleSortOption(dateSort);
  }
}
const groupByDefault = () => {
  const defaultGroup = document.querySelector('.group-container #g0')
  if (!isSelected(defaultGroup)) {
    if (isSorted()) {
      appendTasks(sortAll(currentSortType()))
    } else {
      appendTasks(tasks)
    }
    toggleGroupOption(defaultGroup);
  }
}
const groupByPriotiry = () => {
  const priorityGroup = document.querySelector('.group-container #g1')
  if (!isSelected(priorityGroup)) {
    group('priority')
    if (isSorted()) {
      sortGroups(currentSortType())
    }
    appendGroups(groupTasks)
    toggleGroupOption(priorityGroup)
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
const isSorted = () => {
  return !isSelected(document.querySelector('.sort-option#s0'));
}
const isGrouped = () => {
  return !isSelected(document.querySelector('.group-option#g0'));
}
const toggleSortOption = (newOption) => {
  toggleSelectAttribute(selecetdSortObtion())
  toggleSelectAttribute(newOption)
}
const toggleGroupOption = (newOption) => {
  toggleSelectAttribute(selecetedGroupObtion())
  toggleSelectAttribute(newOption)
}
export { sortByDefault, sortByDate, groupByDefault, groupByPriotiry }
