import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux';
import * as action from './../../actions';

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.onCloseConfirm = this.onCloseConfirm.bind(this);
        this.onOpenConfirm = this.onOpenConfirm.bind(this);
    }

    onOpenConfirm(task, message) {
        this.props.onOpenConfirm(task, message);
    }

    onCloseConfirm() {
        this.props.onCloseConfirm();
    }

    onConfirmDelete(id) {
        this.props.onDeleteTask(id);
    }

    render() {
        let open = this.props.open ? this.props.open : false;
        let confirm = this.props.confirm ? this.props.confirm : "";
        let message = this.props.message ? this.props.message : "";
        let task = this.props.task ? this.props.task : {};

        return (
            <Modal open={open} onClose={this.onCloseConfirm} center>
                <div className="modal-header">
                    <h4 className="modal-title">{confirm}</h4>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                    <div className="jumbotron">
                        <p>Task Name: {task.name}</p>
                        <p>Time: {task.time}</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-info" data-dismiss="modal"
                            onClick={this.onCloseConfirm}>Cancel
                    </button>
                    <button type="button" className="btn btn-danger" onClick={()=> this.onConfirmDelete(this, task.id)}>Delete</button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        open: state.confirm.openConfirm,
        confirm: state.confirm.confirm,
        message: state.confirm.message,
        task: state.confirm.content
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseConfirm: () => {
            dispatch(action.onCloseConfirm())
        },
        onDeleteTask: (taskId) => {
            dispatch(action.deleteTask(taskId))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
