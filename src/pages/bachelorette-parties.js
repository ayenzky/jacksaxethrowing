import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class bachelorettePage extends React.Component {
  render() {
    const siteTitle = "Bachelorette Parties"
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

export default bachelorettePage

export const bachelorettePageQuery = graphql`
  query bachelorettePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `