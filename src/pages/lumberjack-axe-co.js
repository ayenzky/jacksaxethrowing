import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class lumberjackPage extends React.Component {
  render() {
    const siteTitle = "Lumberjack Axe Co."
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Est 2019. Same company as jack’s, different brand.</p>
          <p>We are proud to offer some of the most unique and different Throwing Axe designs you will not find anywhere else. Our axes go through a thorough 11 step process. Our axes are all genuine hickory handles that go through a thorough 11 step process. 1. We custom select the handle width for your preference, 2. Sand, 3. prep, 4. prime, 5. Sand. 6. Prime. 7. Paint 8. Paint again. 9 Sand. 10.  Paint a 3rd time 11. Seal and shine. (Make this an interactive infographic, with the lettering getting larger when you go over it with a mouse)</p>
          <p>Through our sister company (Same ownership, different name), we offer these custom engraved and painted axes for you to display with pride above your fireplace, bedroom, or anywhere else you find fitting. Even throw with these axes! Truly a one of a kind you will not find anywhere else! With us, your imagination is your limitation.</p>
          <p><strong>Fill out this form to request a custom axe! Starting at just $50, going up to $200 for our high-end designs.</strong></p>
          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
           <form name='Describe Design Form' method='POST' data-form-id="5c87444d6d01764f7a541749" webriq="true">
              <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail1">Email Address</label>
              <input type="email" className="form-control form-control-lg p-2" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Describe Your Design</label>
              <textarea className="form-control form-control-lg p-2" id="inputMessage" />
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

export default lumberjackPage

export const lumberjackPageQuery = graphql`
  query lumberjackPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `