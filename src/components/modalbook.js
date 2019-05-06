import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class Vmodal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button
          className="booknow mx-auto"
          onClick={this.handleShow}
          role="button"
          aria-label="button"
        >
          Book A Call
        </Button>
        <Modal
          size={this.props.size}
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName={this.props.mclass}
          centered
        >
          <Button className="close" />
          <Modal.Body className="p-0">{this.props.children}</Modal.Body>
        </Modal>
      </>
    );
  }
}
