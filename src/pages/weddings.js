import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import "./index.css";

class weddingsPage extends React.Component {
  render() {
    const siteTitle = "Weddings";
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>We can offer a customized wedding experience for all!</p>
          <p>Wedding flyer (Downloadable)</p>
          <p>
            Axe Throwing makes the perfect Bachelor Party Idea, Axe Throwing
            fits the many Lumberjack themed events held in Colorado, Interactive
            corporate team events, Birthday Parties, and more.
          </p>
        </Container>
      </Layout>
    );
  }
}

export default weddingsPage;

export const weddingsPageQuery = graphql`
  query weddingsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
