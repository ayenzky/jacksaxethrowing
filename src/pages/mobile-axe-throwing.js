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
          <div className="d-flex justify-content-center mt-4">
            <a
              className="booknow hvr-pulse"
              href="https://www.peek.com/s/e0375b96-369a-436a-9855-d29bf5c844c6/Mqkjk"
            >
              Book Now
            </a>
          </div>

          <p className="mt-5">
            Let our Vail/Aspen Crew take care of all your entertainment needs.
            We don't just do Axe throwing, we also have a slew of other
            lumberjack inspired games: (Checklist these items) Giant Cornhole
            (4x regulation) Thump the Stump (Hammer and nail game, known in
            germany as Hammerschaggen), crosscut saw Our setup is fully
            customizable to meet our clients desire. Our full axe throwing white
            label package is also availabe in our Vail Valley destination
            packages. For event inquiry, please fill out this form and a
            representative will be right with you!{" "}
          </p>

          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
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
