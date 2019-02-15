import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export default class Vmodal extends Component {
  componentDidMount() {
      if(window) {
        const jqscript = document.createElement("script");
        jqscript.src= `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js`
        document.body.appendChild(jqscript);

        const iziscript = document.createElement("script");
        iziscript.src= `https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.5.1/js/iziModal.min.js`
        document.body.appendChild(iziscript);

    }
  }
  
  render () {
    return (
        <>
        <Modal className="modal fade" id={this.props.modalId}>
          <Modal.Header closeButton className="pl-5 border-0 pt-2">
            <h3 className="modal-title mt-0">Leaving Already?</h3>
          </Modal.Header>
          <Modal.Body className="bg-yellow px-5 pb-4">
            test
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
