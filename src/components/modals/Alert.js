import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux';
import * as action from './../../actions';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    onCloseModal() {
        this.props.onCloseAlert();
    }

    render() {
        let open = this.props.open;
        let content = this.props.content ? this.props.content : "";
        let message = this.props.message ? this.props.message : {};
        return (
            <Modal open={open} onClose={this.onCloseModal} center>
                <div className="modal-header">
                    <h4 className="modal-title">{message}</h4>
                </div>
                <div className="modal-body">
                    <p>Task Name: {content.taskName}</p>
                    <p>Time: {content.time.toString()}</p>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        open: state.alert.openAlert,
        content: state.alert.content,
        message: state.alert.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseAlert: () => {
            dispatch(action.closeAlert())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
