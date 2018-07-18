import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      time: moment()
    };

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  addTask(e) {
    if (this.state.taskName !== '') {
      this.props.onAddTask(this.state);
      this.setState({
        taskName: '',
        time: moment()
      });
    }
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({taskName: event.target.value});
  }

  handleChangeTime(date) {
    this.setState({
      time: date
    });
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="form-group">
          <label htmlFor="task">Task name</label>
          <input
            type="text"
            className="form-control"
            id="task"
            value={this.state.taskName}
            onChange={this.handleChange}
          />
          <DatePicker selected={this.state.time} onChange={this.handleChangeTime} className="form-control" dateFormat="LLL" />
          <br/>
          <button
            type="submit"
            className="form-control btn btn-primary btn-sm"
          >
              Create
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      console.log(task)
      dispatch(action.addTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskForm)
