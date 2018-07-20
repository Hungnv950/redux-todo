import React from 'react';
import TaskList from './TaskList';
import TaskForm from './modals/TaskForm';
import Alert from './modals/Alert';

const App = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
