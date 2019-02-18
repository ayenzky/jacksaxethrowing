import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class nonProfitPage extends React.Component {
  render() {
    const siteTitle = "Non-Profit Events"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>We are proud to offer Random axe of kindness, an initiative where we partner with select non-profits and donate 50% of proceeds to them, to assist in empowering those around us to accomplish everything they want to in life on this earth. Together we can all make a difference, make an impact, and if we can take part in changing 1 life, we have fulfilled our goal with this initiative.</p>
          <p className="text-danger">Pics 12, 13 (Downloadable flyer, pic 13)</p>

        </Container>
      </Layout>
    )
  }
}

export default nonProfitPage

export const nonProfitPageQuery = graphql`
  query nonProfitPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `