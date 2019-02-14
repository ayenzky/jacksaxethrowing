import React, { Component } from 'react'
import exitIntent from 'exit-intent'
import { Modal, Button } from "react-bootstrap";
import './exit.css'

export default class Exit extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  render () {
    const removeExitIntent = exitIntent({
        threshold: 5,
        maxDisplays: 2,
        eventThrottle: 100,
        onExitIntent: () => {
          this.handleShow();
        }    
      })
    return (
        <Modal show={this.state.show} onHide={this.handleClose} className="exit-modal fade">
          <Modal.Header closeButton className="pl-5 border-0 pt-2">
            <h3 className="modal-title mt-0">Leaving Already?</h3>
          </Modal.Header>
          <Modal.Body className="bg-yellow px-5 pb-4">
            <p>Sign up here to get the latest news, update and special offers delivered directly to your inbox.</p>
            <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="email" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
                </form>
          </Modal.Body>
        </Modal>
    )
  }
}
