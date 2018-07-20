import React from 'react';
import TaskList from './TaskList';
import TaskForm from './modals/TaskForm';
import Alert from './modals/Alert';
import Confirm from './modals/Confirm';

const App = () => {
    return (
        <div>
            <TaskForm/>
            <TaskList/>
            <Alert/>
            <Confirm />
        </div>
    )
}

export default App
