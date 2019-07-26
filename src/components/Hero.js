import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="video-background">
          <LazyLoadComponent>
            <iframe
              title="video"
              src="https://player.vimeo.com/video/323622512?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </LazyLoadComponent>
        </div>
        <div className="hero-content">
          <Container>
            <Row className="d-xl-flex align-items-stretch align-content-center">
              <Col
                md={12}
                xl={8}
                className="text-center text-lg-left align-self-center"
              >
                <h1 className="hero-heading">
                  Colorado's Premiere Mobile Axe Throwing Company
                </h1>

                <h3 className="hero-subheading">
                  Providing memorable experiences for all ages.
                </h3>
                <p className="d-none d-md-inline-block hero-text">
                  We are proud to be the first axe throwing entertainment
                  business in Colorado Springs, and one of the very few in the
                  state of Colorado. From our onsite to our mobile events, there
                  is truly something for everyone here.&nbsp;
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                  <a
                    className="booknow hvr-pulse"
                    href="https://www.peek.com/s/e0375b96-369a-436a-9855-d29bf5c844c6/Mqkjk"
                    title="fareharbor booking"
                  >
                    Book Now
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
