import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import "./index.css";

class bookOnlinePage extends React.Component {
  render() {
    const siteTitle = "Book Online";
    const siteDescription = this.props.data.site.siteMetadata.description;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <a
            class="booknow hvr-pulse"
            href="https://www.peek.com/s/e0375b96-369a-436a-9855-d29bf5c844c6/Mqkjk?gaClientId=78250558.1560844700"
          >
            Book Now
          </a>
        </Container>
      </Layout>
    );
  }
}

export default bookOnlinePage;

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
`;
