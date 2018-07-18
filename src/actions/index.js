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
