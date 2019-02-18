import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './index.css'

class performancePage extends React.Component {
  render() {
    const siteTitle = "Performances"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>We love designing your lumberjack performance or live demonstration to wow your audience!</p>
          <p>We offer kid friendly, lumberjack shows at fairs and festivals to keep you entertained and your guests coming back for more to see all the live axe throwing!</p>
          <p>Trick throws? You bet. Live tournament? Sure thing. The crowd trying out how to throw on stage? You know it! Lumberjack jokes? YES! We thought you would never axe.  Explore all this and more in Lumber-land where our Lumberjack’s and Lumberjill’s grew up!</p>
          <p>Our shows can be as short as 10 minutes, all the way up to 1 hour of AXE-citing entertainment for all ages!</p>

          <p className="text-danger">Insert PICS (13, 14, 15)</p>
          <p>Fill out our form below for a performance request.</p>
          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
           <form action="">
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
              <label htmlFor="inputVenue">Venue</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputVenue" placeholder="Enter venue"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Describe Your Audience</label>
              <textarea className="form-control form-control-lg p-2" id="inputMessage" />
            </div>
            <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
          </form>
        </div>
        </div>
        <LazyLoadComponent>
          <iframe title="video" width="100%" height="400" src="https://embed.wix.com/video?instanceId=21388e2d-d8d8-4852-a820-2d588999c4d8&biToken=b2c34adb-917f-086c-0b55-639a02d50d8c&pathToPage=&channelId=12f6f17c4f3d4acdbe1cb038f3c11428&videoId=9e0f512bd506403da782e8aed3decb26&compId=comp-jqq8z8af&sitePageId=idajh" frameBorder="0" allowFullScreen></iframe>
        </LazyLoadComponent>
        <p>Jack is a lumberjack, born and raised in the Rocky Mountain National Forest, coming to location near you to help you and everyone you know how to throw an axe. Jack is no specific person, but rather the life and breath of this business. Jack is everywhere you turn. Once you lumberjack, you can’t Lumberback.  From our Lumberjack family to yours, we hope you #ChannelTheFlannel, pick up that axe and start tossing with us! All while in a safe and controlled environment with trained instructors with extensive training and development on how to throw and teach others how to throw.</p>
        <p>Plus, who doesn’t love a Lumberjack named Jack?</p>

        </Container>
      </Layout>
    )
  }
}

export default performancePage

export const performancePageQuery = graphql`
  query performancePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `