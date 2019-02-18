import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class contactPage extends React.Component {
  render() {
    const siteTitle = "Contact"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Contact Form Here</p>

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