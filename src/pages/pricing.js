import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import './index.css'

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
        <h2>Mobile Truck</h2>
        <p>Simple and easy to follow axe throwing pricing. No additional markup, all tax included.</p>
          <div className="row">
            <div className="col-md-6 left">
              <Card className="h-100">
                  <div className="swiper-container w-100">
                    <div className="swiper-wrapper text-left">
                      <div className="swiper-slide">
                        <LazyLoadImage className="mb-0 w-100 h-100" effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_fill,h_380,w_651/v1551064697/jackaxethrowing/DSC01231.jpg"/>
                      </div>
                      <div className="swiper-slide">
                        <LazyLoadImage className="mb-0 w-100 h-100" effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_fill,h_380,w_651/v1551061506/jackaxethrowing/slide1.jpg"/>
                      </div>
                    </div>
                  </div>
                <Card.Body>
                  <h4 className="card-title">Individual hosting on own</h4>
                    <ul className="list-unstyled">
                      <li>$15/hr/person (minimum of 2 hours and 10 people)</li>
                      <li>$100 travel, setup, tear down and cleanup fee in Colorado Springs, Denver Metro & Pueblo</li>
                      <li>$200 in Fort Collins</li>
                    </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 right">
              <Card className="h-100">
                <div className="swiper-container w-100">
                    <div className="swiper-wrapper text-left">
                      <div className="swiper-slide">
                        <LazyLoadImage className="mb-0 w-100 h-100" effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_fill,h_380,w_651/v1551064699/jackaxethrowing/DSC01281.jpg"/>
                      </div>
                      <div className="swiper-slide">
                        <LazyLoadImage className="mb-0 w-100 h-100" effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_fill,h_380,w_651/v1551061506/jackaxethrowing/slide5.jpg"/>
                      </div>
                    </div>
                  </div>
                <Card.Body>
                  <h4 className="card-title">Business</h4>
                    <p>(Brewery, Coffee Shop, Bar, etc...)</p>
                    <p><strong>Brewery options:</strong></p>
                    <ul className="list-unstyled">
                      <li>$500 Flat rental rate + Travel Expense</li>
                      <li>3 hours of Dedicated throwing time</li>
                      <li>$50/hour after that, if available.</li>
                      <li>$200 + Normal fees passed on to our guests.</li>
                    </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
          <h3>League</h3>
          <p>Adding your business on as additionally insured recommend, but not required. Fill out this form for your custom quote.</p>
          <div className="row mt-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
            <form action="" webriq="true">
              <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">How Can We Help You?</label>
              <textarea type="text" className="form-control form-control-lg p-2" id="inputMessage"/>
            </div>        
            <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
          </form>
            </div>
          </div>
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