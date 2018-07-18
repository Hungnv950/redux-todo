import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <TaskForm />
        </div>
        <div className="col-md-8">
          <TaskList />
        </div>
      </div>
    </div>
  )
}

export default App
