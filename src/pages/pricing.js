import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import './pricing.css'

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
              </Card.Body>
            </Card>
          </Col>
        </Row>
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