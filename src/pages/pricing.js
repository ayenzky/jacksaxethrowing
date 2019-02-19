import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class pricingPage extends React.Component {
  render() {
    const siteTitle = "Pricing"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Content Here</p>

        </Container>
      </Layout>
    )
  }
}

export default pricingPage

export const pricingPageQuery = graphql`
  query pricingPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `