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

class vailAspenPage extends React.Component {
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
    const siteTitle = "Vail Valley / Aspen";
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p className="mt-5">
            Let our Vail/Aspen Crew take care of all your entertainment needs.
            We don't just do Axe throwing, we also have a slew of other
            lumberjack inspired games:
          </p>
          <ul className="list-unstyled checked">
            <li>Giant Cornhole (4x regulation)</li>
            <li>
              Thump the Stump (Hammer and nail game, known in germany as
              Hammerschaggen)
            </li>
            <li>
              crosscut saw Our setup is fully customizable to meet our clients
              desire
            </li>
          </ul>
          <p>
            Our full axe throwing white label package is also availabe in our
            Vail Valley destination packages.
          </p>

          <div className="swiper-container mt-5">
            <div className="swiper-wrapper align-items-center text-center">
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_550,w_450/v1563333614/jackaxethrowing/vail-1.jpg"
                />
              </div>
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_550,w_450/v1563333614/jackaxethrowing/vail-2.jpg"
                />
              </div>
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_550,w_450/v1563333614/jackaxethrowing/vail-3.jpg"
                />
              </div>
              <div className="swiper-slide">
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_550,w_450/v1563333614/jackaxethrowing/vail-4.jpg"
                />
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>

          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
              <p>
                For event inquiry, please fill out this form and a
                representative will be right with you!
              </p>
              <form
                name="Form - Vail Valley"
                method="POST"
                data-form-id="5d2eb391f3079458ea122f9d"
                webriq="true"
              >
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg p-2"
                    id="inputName"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Phone Number</label>
                  <input
                    type="text"
                    name="phone number"
                    className="form-control form-control-lg p-2"
                    id="inputPhone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Date of Event</label>
                  <input
                    type="text"
                    name="date of event"
                    className="form-control form-control-lg p-2"
                    id="inputDate"
                    placeholder="Enter your Date of Event"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Amount of People</label>
                  <input
                    type="text"
                    name="amount of people"
                    className="form-control form-control-lg p-2"
                    id="inputAmount"
                    placeholder="Enter your Amount of People"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Any Special Request</label>
                  <input
                    type="text"
                    name="any special request"
                    className="form-control form-control-lg p-2"
                    id="inputRequest"
                    placeholder="Enter your Special Request"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="webriq-recaptcha" />
                </div>

                <button type="submit" className="booknow hvr-shadow mt-1">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default vailAspenPage;

export const vailAspenPageQuery = graphql`
  query vailAspenPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
