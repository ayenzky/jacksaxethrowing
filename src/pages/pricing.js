import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import './pricing.css'
import Modal from '../components/Modal'

class pricingPage extends React.Component {
   componentDidMount() {
      if (window) {
        new Swiper('.left .swiper-container', {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 0,
          autoplay: {
            delay: 5000,
          },
          watchOverflow:true

        });
        new Swiper('.right .swiper-container', {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 0,
          autoplay: {
            delay: 6000,
          },
          watchOverflow:true

        }); 
      }
    }
  render() {
    const siteTitle = "Pricing"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
        <Row>
        <Col md={6} lg={4} className="mb-4">
            <Card className="text-center h-100">
            <Card.Header as="h5" className="p-4 mt-0 font-weight-normal bg-dark-blue text-white">Mobile Truck Rental</Card.Header>
              <Card.Body className="p-5">
                <h2 className="mb-0 font-weight-normal">$30</h2>
                <p>Person for 2.5 hours of throwing</p>
                <p>Games & professional instruction included</p>
                <p>Lumberjack jokes provided free of charge.</p>
                <div className="d-flex justify-content-center mt-4"><a className="booknow" href="/contact">Contact Us</a></div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Header as="h5" className="p-4 mt-0 font-weight-normal bg-yellow">Outdoor Location</Card.Header>
              <Card.Body className="p-5">
                  <h2 className="mb-0 font-weight-normal">$15</h2>
                  <p>Hour per person/<br/>4 person minimum</p>
                  <h2 className="mb-0 font-weight-normal">$22</h2>
                  <p>Person for a 2 hour event /<br/> 6 person minimum</p>
                  <p>Includes a Certified & Experienced Coach to go over everything.</p>
                  <div className="d-flex justify-content-center mt-4"><a className="booknow" href="/contact">Contact Us</a></div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={12} lg={4} className="mb-4">
            <Card className="text-center h-100">
            <Card.Header as="h5" className="p-4 mt-0 font-weight-normal bg-red text-white">Mobile Locations</Card.Header>
              <Card.Body className="p-5">
                <h5 className="font-weight-normal">Colorado Springs</h5>
                <h2 className="my-0 font-weight-normal">$10</h2>
                <p>For 2 hours of unlimited throwing and instruction during league season, off league is 3 hours of unlimited throwing.</p>
                <h5 className="font-weight-normal">Denver</h5>
                <h2 className="my-0 font-weight-normal">$15-$20</h2>
                <p>For 2-3 hours of unlimited open throwing.</p>
                <div className="d-flex justify-content-center mt-4"><a className="booknow" href="/contact">Contact Us</a></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h4>Find map below of where we are!</h4>
        <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/peaks-and-pines.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/peaks-and-pines.jpg)'}}/>
                          <div className="item-map-content p-4">
                            <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>Monday's Peaks N Pines Brewery</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>4005 Tutt Blvd, Colorado Springs, CO 80922</span></li>
                          </ul>
                          </div>
                        </div>
                    </Modal>
                    <div className="item-map-venue">
                      <h5 className="text-white">Peaks N Pines Brewery</h5>
                    </div>
                    </div>

                    
                </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/rocky-mountain.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/rocky-mountain.jpg)'}}/>
                          <div className="item-map-content p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Wednesday's Rocky Mountain Brewery</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>625 Paonia Street</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                          </ul>
                          </div>
                        </div>
                        </Modal>
                        <div className="item-map-venue">
                          <h5 className="text-white">Rock Mountain Brewery</h5>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/fh-beerworks-east.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/fh-beerworks-east.jpg)'}}/>
                          <div className="item-map-content p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Thursday's FH Beer Works East</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>2490 Victor Pl, Colorado Springs, CO 80915</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                          </ul>
                          </div>
                        </div>
                        </Modal>
                        <div className="item-map-venue">
                          <h5 className="text-white">FH Beer Works East</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://static1.squarespace.com/static/59625a9e9de4bb7b8d110ca4/t/59b441706f4ca36cb5f90952/1504985461265/LLA-Final-Logo.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://static1.squarespace.com/static/59625a9e9de4bb7b8d110ca4/t/59b441706f4ca36cb5f90952/1504985461265/LLA-Final-Logo.jpg)'}}/>
                          <div className="item-map-content p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Friday's Landlocked Ales</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>3225 S Wadsworth Blvd, Lakewood, CO 80227</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                          </ul>
                          </div>
                        </div>
                        </Modal>
                        <div className="item-map-venue">
                          <h5 className="text-white">Landlocked Ales</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/java-and-punk.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/java-and-punk.jpg)'}}/>
                          <div className="item-map-content p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Friday's Java Punk Coffee</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>4029 Tutt Blvd, Colorado Springs, CO 80922</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                          </ul>
                          </div>
                        </div>
                        </Modal>
                        <div className="item-map-venue">
                          <h5 className="text-white">Java Punk Coffee</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/boggy-brew.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/boggy-brew.jpg)'}}/>
                          <div className="item-map-content p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Saturday's Boggy Draw Brewery</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>3535 S Platte River Dr Unit L, Sheridan, CO 80110</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>2-5pm</span></li>
                          </ul>
                          </div>
                        </div>
                        </Modal>
                        <div className="item-map-venue">
                          <h5 className="text-white">Boggy Draw Brewery</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="item-map">
                    <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/black-forest-brewing.jpg)'}}>
                        <Modal
                            mclass="modal-450w"
                            size="sm"
                            btnclass="item-map-play" 
                            html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                        >
                        <div class="item-map-body bg-white p-0">
                          <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/black-forest-brewing.jpg)'}}/>
                          <div className="item-map-content p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Sunday's Black Forest Brewing Company</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>11590 Black Forest Rd #50, Colorado Springs, CO 80908</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>1-4pm</span></li>
                            <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/money-bag.svg" className="mr-1"/><span>$10 unlimited</span></li>
                          </ul>
                          </div>
                        </div>
                        </Modal>
                        <div className="item-map-venue">
                          <h5 className="text-white">Black Forest Brewing Company</h5>
                        </div>
                    </div>
                </div>
                </div>
              </div>
          <p>If you are a business owner and looking to get on our mobile list, please fill out our contact form below for your custom plan to drive more traffic to your business!</p>
          
          <div className="row mt-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
            <form name='Contact Form' method='POST' data-form-id="5c8743cc6d01764f7a541747" webriq="true">
              <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" name="name" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter your name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail1">Email Address</label>
              <input type="email" name="email address" className="form-control form-control-lg p-2" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" required/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" name="phone number" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number" required/>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">How Can We Help You?</label>
              <textarea type="text" name="message" className="form-control form-control-lg p-2" id="inputMessage"/>
            </div>
            <div className="form-group">
                <div className="webriq-recaptcha"></div>
            </div>
            <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
          </form>
            </div>
          </div>
          <h3>League Pricing</h3>
          <p>Our leagues are proudly ran through the governing body, USA Axe Throwing, Please go to <a className="text-red" href="mailto:usaaxethrowing.org">usaaxethrowing.org</a> for more details on locations and pricing and to get registered!</p>
        </Container>
      </Layout>
    )
  }
}

export default pricingPage

export const pricingPageQuery = graphql`
  query pricingPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `