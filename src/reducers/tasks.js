import * as types from '../contstants/ActionTypes'

const data = JSON.parse(localStorage.getItem('tasks'));

const initialState = data ? data : [];

const setId = () => {
    return Date.now();
};

const findTaskById = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.DELETE_TASK:
            const index = findTaskById(state, action.taskId);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.ADD_TASK:
            debugger
            const newTask = {
                id: setId(),
                name: action.state.taskName,
                time: action.state.time,
                completed: false
            };
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.EDIT_TASK:
            console.log(action);
            return state;

        case types.UPDATE_TASK:
            console.log(action);
            return state;

        default:
            return state;
    }
};

export default reducer;
