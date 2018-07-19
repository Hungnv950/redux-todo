import React, { Component } from 'react'
import {connect} from 'react-redux';
import TaskItem from './TaskItem';

class TaskList extends Component {
   constructor() {
    super();

  }


  render() {
    let tasks = this.props.tasks;
    return (
      <div id="list-task">
        <ul className="list-group">
          {tasks.map(task =>
            <TaskItem
              key={task.id}
              task={task}
              {...task}
            />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (TaskList);
