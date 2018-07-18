import * as types from '../contstants/ActionTypes'

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data : [];

var setId = () => {
  return Date.now();
}

var findTaskById = (tasks, id)  => {
  var result = -1;
  tasks.forEach((task, index) => {
    if(task.id === id) {
      result = index;
    }
  });
  return result;
}

var reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LIST_ALL:
      return state;
    case types.DELETE_TASK:
      var index = findTaskById(state, action.taskId);
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.ADD_TASK:
      console.log(action)
      var newTask = {
        id: setId(),
        name: action.task.taskName,
        time: action.task.time,
        completed: false
      }
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default reducer;
