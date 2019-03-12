import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './hero.css'

export default class Hero extends Component  {
  render () {
    return (
      <div className="hero">
              <div className="video-background">
                <LazyLoadComponent>
                <video className="bg-dark shadow-lg" width="100%" height="100%" autoPlay={true} muted loop objectfit="cover">
                  <source src="https://video.wixstatic.com/video/d64b37_b7e57a3b004846cab4685e4d9e2a4e2d/1080p/mp4/file.mp4" type="video/mp4"/>
                </video>
              </LazyLoadComponent>
                </div>
              <div
                  className="hero-content">
                  <Container>
                      <Row className="d-xl-flex align-items-stretch align-content-center">
                          <Col md={12} xl={8} className="text-center text-lg-left align-self-center">
                              <h1 className="hero-heading">Jack's Axe Throwing COS. Locally Owned and Operated.</h1>
                              <h3 className="hero-subheading">Providing memorable experiences for all ages. </h3>
                              <p className="d-none d-md-inline-block hero-text">We are proud to be the first axe throwing entertainment business in Colorado Springs, and one of the very few in the state of Colorado. From our onsite to our mobile events, there is truly something for everyone here.&nbsp;</p>
                              <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                                <a className="booknow hvr-pulse" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a>
                              </div>
                      </Col>
                  </Row>
          </Container>
          </div>
          </div>
  )
}
}
  

