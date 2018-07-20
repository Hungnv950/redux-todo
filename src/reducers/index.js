import { combineReducers } from 'redux';
import tasks from './tasks';
import modals from './modals';

const reducers = combineReducers({
  tasks,
  modals
});

export default reducers;
