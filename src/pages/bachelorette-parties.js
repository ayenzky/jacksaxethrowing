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
          <p>Having a wedding coming up and need to celebrate?</p>
          <p>We got you covered! We can have it at a local brewery/restaurant we go to, a residential area or business office! (With prior approval, reach out to us before booking to ensure availability and location.)</p>
          <p>All Bachelor/ette parties come with a fun guarantee!</p>

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