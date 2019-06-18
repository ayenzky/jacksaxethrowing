import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Swiper from "swiper/dist/js/swiper.esm.bundle";
import "./index.css";

class familyreunionsPage extends React.Component {
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
    const siteTitle = "Family Reunions";
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>
            Family reunions are the perfect opportunity to gather, share
            memories and create new ones.
          </p>
          <p>
            <strong>Options:</strong>
          </p>
          <h5>Outdoor Location</h5>
          <ul className="list-unstyled checked">
            <li>8 dedicated targets of your choosing.</li>
            <li>
              Mobile location to your corporate office or residential address.
            </li>
            <li>
              On location pricing: $22/person 6-10 people, $18/person 11+ people
            </li>
            <li>$15/Hr. per person, min. of 2 hours and 10 people</li>
          </ul>
          <p>
            Axe Throwing Truck rental for unlimited people for 4 hours and
            additional mobile target on side. Ideal for 30 people or more (Must
            be semi open area for additional mobile target for safety): $1,200
          </p>
          <p>
            <strong>Additional Targets:</strong>
          </p>
          <p>
            Custom color targets/branded targets available to fit your theme for
            $50 extra.
          </p>
          <div className="swiper-container mt-5">
            <div className="swiper-wrapper align-items-center text-center">
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/v1551061506/jackaxethrowing/slide9.jpg"
                />
              </div>
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/v1551061506/jackaxethrowing/slide10.jpg"
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

export default familyreunionsPage;

export const familyreunionsPageQuery = graphql`
  query familyreunionsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
