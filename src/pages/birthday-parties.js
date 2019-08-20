import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import './index.css'

class birthdayPage extends React.Component {
    componentDidMount() {
      if (window) {
        new Swiper('.swiper-container', {
          slidesPerView: 1,
          centeredSlides: true,
          autoplay: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }); 
      }
    }
  render() {
    const siteTitle = "Birthday Parties"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>We are the perfect way to celebrate your birthday! With mobile options that can go nearly anywhere from inside of garages, backyards, driveways, corporate offices and more, let us make your day a special one for only $15/hour/person! (Minimum of 2 hours and 10 people for our custom designed axe throwing truck!)</p>
          <p>Let us make your party unforgettable! With parent or guardian approval and signature of our waiver, we do parties of all sizes and types!</p>
          <h5>All Birthday Parties include:</h5>
          <ul className="list-unstyled checked">
            <li>Certified Lumber Jill/Lumberjack</li>
            <li>2 hours of throwing with games and tournaments</li>
            <li>21 Lumberjack style? Texas Hold Em with axes? Tournaments? You bet! All these games and more included.</li>
            <li>Free throwing for the birthday we are celebrating</li>
            <li>After warmup, Balloons provided to throw at to get the party Poppin’ (Literally, no lie)</li>
            <li>A few lumberjack jokes sprinkled in throughout your experience? We thought you would never axe!</li>
            <li>Fully licensed &amp; insured for mobile axe throwing at any location (A one-time fee applies to be added as additional insured, inquire for details.)</li>
          </ul>
          <h5>End of event:</h5>
          <ul className="list-unstyled checked">
            <li>A 25% non-refunded event deposit is required, subtracted from the total at the end. The remaining balance will be collected by card only at the end of your experience.</li>
            <li>If you enjoyed your experience, please consider leaving a tip and a google review for our hardworking, well trained, funny Lumberjills/Lumberjacks</li>
          </ul>
          <p>Have any additional concerns/questions? Please fill out our form below and a representative will get back to you as soon as we can!</p>



          
          <div className="row">
            <div className="col-md-6 mx-auto bg-yellow p-5">
            <form name='Contact Form' method='POST' data-form-id="5c8743cc6d01764f7a541747" webriq="true">
              <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" name="name" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter your name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" name="email address" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" required/>
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
          <div className="swiper-container mt-5">
            <div className="swiper-wrapper align-items-center text-center">
              <div className="swiper-slide">
                <LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1551061506/jackaxethrowing/slide3.jpg"/>
              </div>
              <div className="swiper-slide">
                <LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1551061506/jackaxethrowing/slide4.jpg"/>
              </div>
              <div className="swiper-slide">
                <LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1551061506/jackaxethrowing/slide5.jpg"/>
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default birthdayPage

export const birthdayPageQuery = graphql`
  query birthdayPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `