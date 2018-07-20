import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions';
import Modal from 'react-responsive-modal';

class Alert extends Component {

  render() {
    let open = true;
    let content = this.props.content
    return (
      <Modal open={true} center>
          <div class="modal-body">
            <p>{content}</p>
          </div>
      </Modal>
    )
  }
}

export default Alert
