import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Swiper from "swiper/dist/js/swiper.esm.bundle";
import "swiper/dist/css/swiper.min.css";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import "./index.css";

class mobileAxePage extends React.Component {
  componentDidMount() {
    if (window) {
      new Swiper(".swiper-container", {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
  render() {
    const siteTitle = "Mobile Axe Throwing";
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>
            Mobile axe throwing is how we got started in this business and is
            our specialty. Our custom-built Axe Throwing Truck is made for your
            play, and our work. We’re fully enclosed except for the back and can
            add on a full cage option if you are concerned about safety and need
            extra protection. If you’d like us to go into your garage, backyard,
            or other area, we can fit there too with custom built targets by one
            of our professionals!
          </p>
          <h5>Every truck rental includes:</h5>
          <ul className="list-unstyled checked">
            <li>
              In house developed games and tournaments included with every event
            </li>
            <li>Commercial Offices</li>
            <li>Residential Areas</li>
            <li>Business parking lots and more!</li>
            <li>
              Flexible pricing options to fit any size group and most budgets.
            </li>
          </ul>

          <div className="swiper-container mt-5">
            <div className="swiper-wrapper align-items-center text-center">
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/v1552355366/jackaxethrowing/slide6.jpg"
                />
              </div>
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/v1552355366/jackaxethrowing/slide7.jpg"
                />
              </div>
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/v1552355366/jackaxethrowing/slide8.jpg"
                />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <a
              className="booknow hvr-pulse"
              href="https://www.peek.com/s/e0375b96-369a-436a-9855-d29bf5c844c6/Mqkjk"
            >
              Book Now
            </a>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default mobileAxePage;

export const mobileAxePageQuery = graphql`
  query mobileAxePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
