import React from 'react'
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class bookOnlinePage extends React.Component {
  render() {
    const siteTitle = "Book Online"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <iframe title="book online" frameBorder="0" height="800" width="100%" src="https://fareharbor.com/embeds/book/jacksaxethrowing/items/calendar/2019/03/"></iframe>

        </Container>
      </Layout>
    )
  }
}

export default bookOnlinePage

export const bookOnlinePageQuery = graphql`
  query bookOnlinePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `