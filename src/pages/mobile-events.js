import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class mobileEventsPage extends React.Component {
  render() {
    const siteTitle = "Mobile Events"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <h2>Let us come to you!</h2>
          <p>With affordable prices and liability insurance included, we can help you celebrate any occasion, big and small! We work with groups of all sizes for maximum engagement during your next event, and make your guests talk about your event for years afterward!</p>

        </Container>
      </Layout>
    )
  }
}

export default mobileEventsPage

export const mobileEventsPageQuery = graphql`
  query mobileEventsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `