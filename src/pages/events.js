import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class eventsPage extends React.Component {
  render() {
    const siteTitle = "Events"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>- We are the perfect choice for your Bachelor/Bachelorette Party, Festival or fair, Birthday Party, Corporate event, family day out, and more.</p>

        </Container>
      </Layout>
    )
  }
}

export default eventsPage

export const eventsPageQuery = graphql`
  query eventsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `