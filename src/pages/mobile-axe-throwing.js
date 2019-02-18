import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class mobileAxePage extends React.Component {
  render() {
    const siteTitle = "Mobile Axe Throwing"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Waiting for content.</p>

        </Container>
      </Layout>
    )
  }
}

export default mobileAxePage

export const mobileAxePageQuery = graphql`
  query mobileAxePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `