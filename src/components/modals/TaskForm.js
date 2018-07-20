import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-responsive-modal';
import './TaskForm.css';

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
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  addTask(e) {
    if (this.state.taskName !== '') {
      this.props.onAddTask(this.state);
      this.setState({
        taskName: '',
        time: moment(),
        open: false
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

  onOpenModal() {
    this.props.onOpenFormTask();
  }

  onCloseModal() {
    this.props.onCloseFormTask();
  }

  render() {
    let open = this.props.open;
    return (
      <div>
        <i className="btn btn-info far fa-calendar-plus" onClick={this.onOpenModal} title="add task"></i>
        <br/>
        <br/>
        <Modal open={open} onClose={this.onCloseModal} center>
          <form onSubmit={this.addTask} className="custom-modal">
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
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    open: state.modals.openFormTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task))
    },
    onOpenFormTask: () => {
      dispatch(action.openFormTask())
    },
    onCloseFormTask: () => {
      dispatch(action.closeFormTask())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskForm)
