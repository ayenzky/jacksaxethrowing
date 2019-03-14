import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import './exit.css'

export default class Exit extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src= `/js/bioep.js`
    document.body.appendChild(script);

    setTimeout(function() {
      window.bioEp.init({
        width: 550
      });
    }, 2000)
  }
  

  
  render () {
    return (
        <div id="bio_ep" className="exit-modal">
          <div className="modal-dialog">
            <div className="modal-content">
        <div className="modal-header  pl-5 border-0 pt-2">
          <h3 className="modal-title mt-0">Leaving Already?</h3>
        </div>
        <div className="modal-body bg-yellow px-5 pb-4">
        <p>Sign up here to get the latest news, update and special offers delivered directly to your inbox.</p>
            <form name='Exit Subscribe Form' method='POST' data-form-id="5c89fe5a1012621f96b1764d" webriq="true">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="email" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <Button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</Button>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
  }
}
