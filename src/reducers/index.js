import {combineReducers} from 'redux';
import tasks from './tasks';
import modals from './modals';
import alert from './alert';
import confirm from './confirm';

const reducers = combineReducers({
    tasks,
    modals,
    alert,
    confirm
});

export default reducers;
