import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Col, Row } from "reactstrap";
import Gallery from "react-grid-gallery";
import "./index.css";

const IMAGES = [
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563775943/jackaxethrowing/axe-truck-img-1.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563775943/jackaxethrowing/axe-truck-img-1.jpg",
    thumbnailWidth: 900,
    thumbnailHeight: 400,
    alt: "Mobile Axe Throwing, Axe Throwing League, axe throwing in colorado"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563775943/jackaxethrowing/axe-truck-img-2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563775943/jackaxethrowing/axe-truck-img-2.jpg",
    thumbnailWidth: 900,
    thumbnailHeight: 400,
    alt: "Mobile Axe Throwing, Axe Throwing League, axe throwing in colorado"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563775943/jackaxethrowing/axe-truck-img-3.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563775943/jackaxethrowing/axe-truck-img-3.jpg",
    thumbnailWidth: 900,
    thumbnailHeight: 400,
    alt: "Mobile Axe Throwing, Axe Throwing League, axe throwing in colorado"
  }
];

class axeTruckPage extends React.Component {
  render() {
    const siteTitle = "Sponsor the Axe Truck!";
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          description={siteDescription}
          keywords={[
            `Mobile Axe Throwing`,
            `Axe Throwing League, axe throwing in colorado`
          ]}
        />
        <Container>
          <h3>Our sponsors help offset our operating costs,</h3>

          <div className="fluid my-4">
            <Row>
              <Col sm="12">
                <Gallery images={IMAGES} />
              </Col>
            </Row>
          </div>

          {/*<div className="d-flex justify-content-center mt-4">
            <a
              className="booknow hvr-pulse"
              href="https://www.peek.com/s/e0375b96-369a-436a-9855-d29bf5c844c6/Mqkjk"
            >
              Book Now
            </a>
          </div>*/}
        </Container>
      </Layout>
    );
  }
}

export default axeTruckPage;

export const axeTruckPageQuery = graphql`
  query axeTruckPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
