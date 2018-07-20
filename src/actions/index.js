import * as types from '../contstants/ActionTypes'

export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
}

export const completeTask = (taskId) => {
  return {
    type: types.DELETE_TASK,
    taskId
  }
}

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task
  }
}

export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task
  }
}

export const openFormTask = () => {
  return {
    type: types.OPEN_MODAL_FORM_TASK
  }
}

export const closeFormTask = () => {
  return {
    type: types.CLOSE_MODAL_FORM_TASK
  }
}

export const openAlert = () => {
  return {
    type: types.OPEN_ALERT
  }
}

export const closeAlert = () => {
  return {
    type: types.CLOSE_ALERT
  }
}
