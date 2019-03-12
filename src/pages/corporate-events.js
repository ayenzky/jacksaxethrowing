import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class corporatePage extends React.Component {
  render() {
    const siteTitle = "Corporate Events"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Our Corporate events make an unforgettable experience for all ages!</p>
          <p>Give your employees the gift of experiences and something they will never forget during your next team builder!</p>
          <p>Experiential entertainment is by far pone of the best ways to connect a multi-generational workforce
doing an activity that is very easy to pick up, yet impossible to master. Invest in your employees, and
they will invest back into you as a business owner. With our innovative axe throwing tournaments, axe
throwing games, and trick axe throwing, we’ll keep the party engaged for hours!</p>
          <h5>Every corporate booking with Jack’s Axe Throwing includes:</h5>
          <ul className="list-unstyled checked">
            <li className="m-3">Lumberjack Themed Events</li>
            <li className="m-3">1-3 professional coaches</li>
            <li className="m-3">Games, Tournaments and trick throw instruction</li>
            <li className="m-3">When you hit “book Now” Below, you will get a real time calendar for our available days.</li>
            <li className="m-3">Simply pick which option you are interested in, and go for it!</li>
          </ul>
<div className="d-flex justify-content-center mt-4"><a className="booknow hvr-pulse" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a></div>
        </Container>
      </Layout>
    )
  }
}

export default corporatePage

export const corporatePageQuery = graphql`
  query corporatePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `