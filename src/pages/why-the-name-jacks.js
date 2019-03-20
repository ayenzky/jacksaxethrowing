import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import SEO from "../components/seo";
import "./index.css";
class whyNamePage extends React.Component {
  render() {
    const siteTitle = "Why the name, Jack’s?";
    const siteDescription = this.props.data.site.siteMetadata.description;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <h2>Who is Jack?</h2>
          {/*<p className="text-red">Insert  PIC 05 here</p>*/}
          <LazyLoadComponent>
            <iframe
              title="video"
              width="100%"
              height="500"
              src="https://embed.wix.com/video?instanceId=21388e2d-d8d8-4852-a820-2d588999c4d8&biToken=b2c34adb-917f-086c-0b55-639a02d50d8c&pathToPage=&channelId=12f6f17c4f3d4acdbe1cb038f3c11428&videoId=9e0f512bd506403da782e8aed3decb26&compId=comp-jqq8z8af&sitePageId=idajh"
              frameBorder="0"
              allowFullScreen
            />
          </LazyLoadComponent>
          <p>
            Jack is not a person, but the business inspiring us all. I know,
            we’re sorry for the sad news. BUT, we can all aspire to be the best
            Lumberjill or lumberjack we can be. Happy Throwing!
          </p>
          <h3>Jack’s Axe Throwing. #ChannelTheFlannel.</h3>
          {/*<p className="text-red">Insert PIC 06 here</p>*/}
          <h4>Our work, Your Play</h4>
        </Container>
      </Layout>
    );
  }
}
export default whyNamePage;
export const whyNamePageQuery = graphql`
  query whyNamePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
