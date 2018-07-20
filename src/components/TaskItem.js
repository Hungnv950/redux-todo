import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from './../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.completeTask = this.completeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  completeTask = (id) => {
    this.props.onCompleteTask(id);
  }

  editTask = (id) => {
    this.props.onEditTask(id);
  }

  render() {
    const task = this.props;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-7">
            {task.name}
          </div>
          <div className="col-md-2">
          <DatePicker selected={moment(task.time)} className="form-control" dateFormat="LLL" />
          </div>
          <i className="btn col-md-1 fa fa-check-double" title="done"></i>
          <i
            className="btn col-md-1 fa fa-edit"
            title="edit"
            onClick={this.editTask.bind(this, task.id)}
          ></i>
          <i
            className="col-md-1 btn far fa-times-circle"
            disabled={task.completed}
            onClick={this.completeTask.bind(this, task.id)}
            title="Delete"
          ></i>
        </div>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCompleteTask: (taskId) => {
      dispatch(action.completeTask(taskId))
    },
    onEditTask: (taskId) => {
      dispatch(action.editTask(taskId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskItem)
