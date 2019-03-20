import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SEO from "../components/seo";
import "./index.css";

class aboutPage extends React.Component {
  render() {
    const siteTitle = "About Us";
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>
            We throw axes. We just said it…For fun, entertainment, recreation,
            sport, performances and MORE! It’s a little like darts, archery and
            bowling. But a million times more fun. There is nothing more
            exhilarating than hitting your first bullseye, and we guarantee you
            will at least stick it once during your time with us if for It is
            our mission to spread community, laughter and fun to as many people
            as possible. Everyone can learn how to throw an axe, Axe Throwing
            requires no special skill or ability, simply listen to your coach,
            and keep tossing until the party stops.
          </p>
          <p>
            We throw axes, for sport and entertainment. No way!? Yes way. It’s
            fun, like ridiculous fun, you have no idea. To put this in
            perspective, it’s like taking the best part of bowling, camping,
            watching your favorite tv show & uncontrollably laughing at your
            best friend at 3am because you are so tired while eating a gigantic
            bowl of ice cream, times all that by 100, and you have axe throwing.
          </p>
          <p>
            Want to learn how to throw an axe? Click here to read our blog post
            on how to throw an axe! Of course, you’ll actually have to show up
            to throw to actually learn…{" "}
          </p>
          {/*<p className="text-red">Insert Pic here</p>*/}
          <h4>Where we have been:</h4>
          <p>
            In 2018, we were in the Colorado Medieval Festival, El Paso County
            Fair, The Colorado State Fair, Lakewood Cider Days, Sugar Plum
            Holiday Food and Gift mart, Haunted Mines (All 23 days), and the
            Colorado Springs Gun and Knife Show. We regularly go around to
            different breweries, bars and coffee shops around Colorado to help
            other businesses and provide a unique and memorable experience to
            all.
          </p>
          <p>We’ve served over 7,000 people.</p>
          <ul className="d-flex list-unstyled align-items-center flex-wrap justify-content-center">
            <li className="m-3">
              <a
                href="http://www.coloradocastle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/colorado-medieval-festival.jpg"
                  alt="colorado medieval festival"
                />
              </a>
            </li>
            <li className="m-3">
              <a
                href="https://www.elpasocountyfair.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/epc-fair.jpg"
                  alt="el paso county fair"
                />
              </a>
            </li>
            <li className="m-3">
              <a
                href="https://www.coloradostatefair.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/colorado-state-fair.jpg"
                  alt="colorado state fair"
                />
              </a>
            </li>
            <li className="m-3">
              <a
                href="http://www.lakewood.org/ciderdays/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/cider-days.jpg"
                  alt="cidar days"
                />
              </a>
            </li>
            <li className="m-3">
              <a
                href="http://rjpromotions.com/event/colorado-springs-sugar-plum-food-gift-mart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/sugarplum-gift-mart.jpg"
                  alt="sugarplum gift and mart"
                />
              </a>
            </li>
            <li className="m-3">
              <a
                href="https://hauntedmines.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/haunted-mines.jpg"
                  alt="haunted mines"
                />
              </a>
            </li>
            <li className="m-3">
              <a
                href="http://rjpromotions.com/event/colorado-springs-gun-knife-show/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,h_100/v1550196668/jackaxethrowing/gunknife.jpg"
                  alt="colorado spring gun and knife show"
                />
              </a>
            </li>
          </ul>
          <h3>Check out our News Features and reviews!</h3>
          <p>
            <a
              href="https://www.fox21news.com/news/local/axe-throwing-business-coming-to-colorado-springs/949680023"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.fox21news.com/news/local/axe-throwing-business-coming-to-colorado-springs/949680023
            </a>
          </p>
          <p>
            <a
              href="https://www.fox21news.com/living-local/get-ready-for-a-choppin-good-time-at-jack-s-axe-throwing/1291844708"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.fox21news.com/living-local/get-ready-for-a-choppin-good-time-at-jack-s-axe-throwing/1291844708
            </a>
          </p>
          <h3>Colorado Springs Business Journal</h3>
          <p>
            <a
              href="https://www.csbj.com/2018/08/10/springs-native-aims-to-create-memorable-experience/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.csbj.com/2018/08/10/springs-native-aims-to-create-memorable-experience/
            </a>
          </p>
          <p>
            <a
              href="https://www.fox21news.com/news/local/axe-throwing-business-coming-to-colorado-springs/949680023"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.fox21news.com/news/local/axe-throwing-business-coming-to-colorado-springs/949680023
            </a>
          </p>
        </Container>
      </Layout>
    );
  }
}

export default aboutPage;

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
