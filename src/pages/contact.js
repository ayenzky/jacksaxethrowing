import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css'

class contactPage extends React.Component {
  render() {
    const siteTitle = "Contact"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <Row>
            <Col md={6}>
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
            </Col>
            <Col md={6}>
              
              <div className="contact-info text-white bg-dark-blue p-5">
              <h3 className="mt-0">Contact Information</h3>
              <ul className="list-unstyled m-0 topinfo text-white">
                        <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/002-telephone.svg" className="mr-2 mt-1"/><a className="text-white" href="tel://7194979709">(719)497-9709</a></li>
                        <li className="d-flex align-items-start"><LazyLoadImage effect="blur" src="/img/003-envelope.svg" className="mr-2 mt-1"/><a className="text-white" href="mailto:jack@jacksaxethrowing.com" title="email">jack@jacksaxethrowing.com</a></li>
                        <li className="d-flex align-items-start"><LazyLoadImage effect="blur" src="/img/001-placeholder.svg" className="mr-2 mt-1"/><span>625 Paonia Street Colorado springs, CO 80915</span></li>
                    </ul>
              </div>
            </Col>
          </Row>

        </Container>
      </Layout>
    )
  }
}

export default contactPage

export const contactPageQuery = graphql`
  query contactPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `