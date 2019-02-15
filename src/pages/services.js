import React from 'react'
import { graphql } from 'gatsby'
import { Container, Col, Row } from "react-bootstrap";
import Layout from '../components/Layout'
// import { LazyLoadComponent } from 'react-lazy-load-image-component';
import SEO from '../components/seo'
import './index.css'

class servicesPage extends React.Component {
  render() {
    const siteTitle = "Services"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>We offer a full range of interactive entertainment services throughout the state of Colorado. Axe Throwing provides an unforgettable experience. We use common tools in uncommon ways, creating lifelong experiences for you and your group. Our motto is Our Work, Your Play. We take objects typically used for work, and turn them into play. We wake up, #ChannelTheFlannel every day and make memories for ages 4-104.</p>
          <p>Active, doing something new and exciting, and even competing against your friends and family to see who the best lumberjack (Or Jill) Around!</p>
          <p>Axe Throwing is seeing rapid growth due to the natural community that it establishes when participating in the fun activities we provide. From Special events to competitive leagues There is always something extraordinary going on at Jack’s Axe Throwing. Our axes are also very light, 1.25 lbs. If you can Swing it, you can throw it! We say 4-104, and really mean that.</p>
          <p>With onsite and mobile offerings, there is something for everyone at Jack’s Axe Throwing.</p>
          <Row>
            <Col md={4}>
              Column 1
            </Col>
            <Col md={4}>
              Column 2
            </Col>
            <Col md={4}>
              Column 3
            </Col>
          </Row>
          <p>Small business owners. We make you profit. Let us handle everything, while you add up the amount of people it brings to your location, consuming your product. We handle all the Supplies, truck, Digital Marketing, and more. All you do is supply the space in the parking lot, we provide the entertainment, and get the party going to make sure your bar has a very profitable 3 hours from our innovative solutions that keeps customers staying for hours longer than they normally would have!</p>
          <p><strong>Interested in having us at your business? Fill out our form, and we’ll get right with you after we get done throwing!</strong></p>
          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
           <form action="">
              <div className="form-group">
              <label htmlFor="inputBname">Business Name</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputBname" placeholder="Enter your business name"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputContactperson">Contact Person</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputContactperson" placeholder="Enter your contact person"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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

export default servicesPage

export const servicesPageQuery = graphql`
  query servicesPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `