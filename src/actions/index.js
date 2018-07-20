import * as types from '../contstants/ActionTypes'

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const deleteTask = (taskId) => {
    return {
        type: types.DELETE_TASK,
        taskId
    }
};

export const addTask = (dispatch, state, successCallback) => {
    debugger
    dispatch({type: types.ADD_TASK, state})
    successCallback()
};

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
};

export const openFormTask = () => {
    return {
        type: types.OPEN_MODAL_FORM_TASK
    }
};

export const closeFormTask = () => {
    return {
        type: types.CLOSE_MODAL_FORM_TASK
    }
};

export const openAlert = (task, message) => {
    return {
        type: types.OPEN_ALERT,
        task,
        message
    }
};

export const closeAlert = () => {
    return {
        type: types.CLOSE_ALERT
    }
};

export const onOpenConfirm = (task, confirm, message) => {
    return {
        type: types.OPEN_CONFIRM,
        task,
        confirm,
        message
    }
};

export const onCloseConfirm = () => {
    return {
        type: types.CLOSE_CONFIRM
    }
};