import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'
class travellingCustomEventsIndoorsAndOutdoorsPage extends React.Component {
  render() {
    const siteTitle = "Travelling Custom Events Indoors and outdoors"
    const siteDescription = this.props.data.site.siteMetadata.description
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>
           <b>Standard setup:</b>  Our standard Axe Throwing mobile setup is economical, practical, and most importantly, safe & functional. We offer unlimited indoor and outdoor axe throwing target setups. (1 target can comfortably serve 40 people per hour. Prices start at just $200 to add on additional targets (Plus travel and standard per person cost.) Axe us about pricing below, and let’s make your private event unforgettable!
          </p>

          <p>
           <b> high end mobile events for those looking for something different to really impress your clients and send your profits (Not axes) through the roof.</b>  Looking for a complete forest design? A Hawaiian tropical blast to go with your axe throwing? No request is too big, and we are one of the most experienced in in the western United States when it comes to mobile Axe Throwing. With our experienced axe cage building knowledge and team of contractors paving the way for high end axe throwing setups, there is no design request that is too big for us to tackle. With us, your imagination is your limitation.
          </p>
          <p>
           <b>Truck: </b>  We can outrig our truck with almost anything you request. Colored lights? You got it. Heaters? Yup. Custom color scheme? We thought you would never axe! With us, your imagination is your limitation. 
          </p>

        </Container>
      </Layout>
    )
  }
}
export default travellingCustomEventsIndoorsAndOutdoorsPage
export const travellingCustomEventsIndoorsAndOutdoorsPageQuery = graphql `
  query travellingCustomEventsIndoorsAndOutdoorsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `
