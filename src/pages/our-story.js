import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SEO from '../components/seo'
import './index.css'

class storyPage extends React.Component {
  render() {
    const siteTitle = "Our Story"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Jack’s Axe Throwing, LLC was founded after our Founder & Owner, Bryan Rossmanith, was looking to pursue a career in Finance, after graduating from the University of Colorado Colorado Springs. After failing to get into the industry after not passing entrance exams. Soon after, he discovered axe throwing, and the amazing community behind it. It took him back to the competitive sports days and a love for the outdoors and friends. After some time working odd jobs to make ends meet, and dreaming of the business ahead, and one day made a business. After a few months of calls to insurance companies and many setbacks, he finally found a company to insure the business. The rest is history, and we continue to grow and expand with our amazing team behind it pushing us forward to allow more people experience our lumberjack brand.</p>
          <p>Bryan hopes his story of going from pursuing a career to only make the “Big bucks” to doing something you love or simply desire to do can inspire more people to pursue what they are truly passionate about and doing whatever it is they want to do for THEM. Whether that be to own their own business, being a stay at home parent and raising a family, being a public speaker, going into corporate banking, graduating College, being a schoolteacher, living overseas, Working in Corporate Law, or traveling the world. The point is that you are enjoying your life and fulfilling whatever it is that you want out of life. If you are not enjoying life and content with it, what are you really living for? “Get to know yourself a little bit, and find that purpose.  The purpose currently for me is to help create unforgettable experiences.” – Bryan</p>
          <p>Bryan loves to regularly attend community events and establish mutually beneficial relationships. If you own a business, or want to start a business, we would love to meet with you and see what kind of magic we can cook up together! The world is truly better by working together.</p>
          <p>Fill out this form to schedule a meeting and get to know Bryan!</p>
          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
           <form action="">
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

      
            
            <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
          </form>
        </div>
          </div>
          <p>Fast forward to December 2018, we have served over 7,000 guests. With onsite, and many different mobile services, there is something for everyone at Jack’s Axe Throwing, where Our Work, is Your Play.</p>
          <p>We have had the privilege of being featured in The Colorado Springs Business Journal, Fox 21 News, Living Local. Challenge Christina, KOAA, KOAA Pueblo, and was nominated for the top 6 in the Colorado Springs Independent BEST OF for Place for Adrenaline Junkies. We have many 5-star ratings from our guests.</p>
          <ul className="d-flex list-unstyled align-items-center flex-wrap justify-content-center">
            <li className="m-3 bg-dark-blue"><a href="https://www.csbj.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_250/v1550136845/jackaxethrowing/csbj.png" alt="business journal"/></a></li>
            <li className="m-3"><a href="https://www.fox21news.com/living-local" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_250/v1550136845/jackaxethrowing/living-local.png" alt="living local"/></a></li>
            <li className="m-3"><a href="https://www.fox21news.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_250/v1550136845/jackaxethrowing/fox21.png" alt="fox21"/></a></li>
            <li className="m-3 bg-dark-blue p-2"><a href="https://www.fox21news.com/soco-cw/challenge-christina-weight-lifting/1525263779" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_250/v1550136845/jackaxethrowing/soco" alt="soco"/></a></li>
            <li className="m-3"><a href="https://www.csindy.com/coloradosprings/adrenaline-junkies/Content?oid=1320336" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_250/v1550136845/jackaxethrowing/independent.png" alt="colorado springs independent"/></a></li>
            <li className="m-3"><a href="https://koaa.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_250/v1550136845/jackaxethrowing/koaa.png" alt="koaa"/></a></li>
          </ul>
          <p>Jack’s Axe Throwing was founded on the principle of community, and we realize without community with us, we are nothing.</p>
          <p className="text-red">Insert  PIC 07 here</p>
          <p>We host experiential entertainment for guests of all ages, we are for 4 - 104 year old’s with adult approval. If our guests can hold 1.25 lbs, they are clear to throw. Everyone can learn how to throw an axe.</p>
          <p className="text-red">Insert Pic here</p>
        </Container>
      </Layout>
    )
  }
}

export default storyPage

export const storyPageQuery = graphql`
  query storyPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `