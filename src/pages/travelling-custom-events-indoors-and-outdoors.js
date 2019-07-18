import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Gallery from "react-grid-gallery";
import { Col, Row } from "reactstrap";
import "./index.css";

const IMAGES = [
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-1.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-1.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-2.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-3.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-3.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-4.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-4.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-5.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-5.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-6.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-6.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-7.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-7.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-8.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-8.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-9.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-9.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-10.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-10.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-11.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-11.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/vail-2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/vail-2.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-13.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-13.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-14.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-14.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-15.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-15.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-16.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-16.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-17.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-17.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-18.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-18.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-19.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-19.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-20.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-20.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-21.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-21.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-22.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-22.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-23.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-23.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-24.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-24.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-25.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-25.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-26.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-26.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-27.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-27.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-28.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-28.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-29.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-29.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-30.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-30.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-31.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-31.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-32.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-32.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-33.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-33.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-34.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-34.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-35.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-35.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-36.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-36.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/slide8.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/slide8.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-37.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-37.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-38.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-38.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/custom-39.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/custom-39.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/customs-40.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/customs-40.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/dsoapbw26/image/upload/v1563416946/jackaxethrowing/vail-3.jpg",
    thumbnail:
      "https://res.cloudinary.com/dsoapbw26/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1563416946/jackaxethrowing/vail-3.jpg"
  }
];

class travellingCustomEventsIndoorsAndOutdoorsPage extends React.Component {
  render() {
    const siteTitle = "Custom Events";
    const siteDescription = this.props.data.site.siteMetadata.description;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          {/* <p>
            <b>Standard setup:</b> Our standard Axe Throwing mobile setup is
            economical, practical, and most importantly, safe & functional. We
            offer unlimited indoor and outdoor axe throwing target setups. (1
            target can comfortably serve 40 people per hour. Prices start at
            just $200 to add on additional targets (Plus travel and standard per
            person cost.) Axe us about pricing below, and let’s make your
            private event unforgettable!
          </p>
          <p>
            <b>
              {" "}
              high end mobile events for those looking for something different
              to really impress your clients and send your profits (Not axes)
              through the roof.
            </b>{" "}
            Looking for a complete forest design? A Hawaiian tropical blast to
            go with your axe throwing? No request is too big, and we are one of
            the most experienced in in the western United States when it comes
            to mobile Axe Throwing. With our experienced axe cage building
            knowledge and team of contractors paving the way for high end axe
            throwing setups, there is no design request that is too big for us
            to tackle. With us, your imagination is your limitation.
          </p>
          <p>
            <b>Truck: </b> We can outrig our truck with almost anything you
            request. Colored lights? You got it. Heaters? Yup. Custom color
            scheme? We thought you would never axe! With us, your imagination is
            your limitation.
          </p>*/}
          <h3>The Biggest Brands, The Best Experiences.</h3>
          <p>
            From small and intimate backyard parties to the largest events in
            the world, we can do it all! Every event is fully customizable to
            meet the size of your party, experience desired, and budget
            requirements.
          </p>
          <p>
            We're honored to have worked with some of the world's largest
            companies to create an unforgettable experience. Some of these
            companies include Ford, Lowe's, Young Professional Organization,
            we've been featured at private events with One Republic, and many
            more.
          </p>
          <p>
            Are you a brewery/small business looking to increase your customer
            base?! See our Mobile page for more info! (Make sure mobile page
            connects to mobile axe throwing.)
          </p>
          from
          <p className="mt-2">
            Want your brand to be shown instead of ours? No problem! We'll even
            wear your colors.
          </p>
          <h5>White label package:</h5>
          <ul className="list-unstyled checked">
            <li>Custom Sign</li>
            <li>Custom Engraved Axes</li>
            <li>Custom Decor</li>
            <li>Custom Employee wear to match theme</li>
            <li>Painted Targets</li>
            <li>Painted backboards</li>
            <li>Logo Stenciled on to targets and</li>
          </ul>
          <div>
            <Row>
              <Col sm="12">
                <Gallery images={IMAGES} />
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}
export default travellingCustomEventsIndoorsAndOutdoorsPage;
export const travellingCustomEventsIndoorsAndOutdoorsPageQuery = graphql`
  query travellingCustomEventsIndoorsAndOutdoorsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
