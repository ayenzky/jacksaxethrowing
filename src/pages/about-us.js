import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class aboutPage extends React.Component {
  render() {
    const siteTitle = "About Us"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <h1>test</h1>
        </Container>
      </Layout>
    )
  }
}

export default aboutPage

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `