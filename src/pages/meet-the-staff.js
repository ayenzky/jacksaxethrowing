import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import {
  LazyLoadComponent,
  LazyLoadImage
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SEO from "../components/seo";
import "./index.css";
class MeetthePage extends React.Component {
  render() {
    const siteTitle = "Meet the Staff";
    const siteDescription = this.props.data.site.siteMetadata.description;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <div className="row align-items-start mb-5">
            <div className="col-md-3">
              <LazyLoadImage
                className="mb-0"
                effect="blur"
                src="https://res.cloudinary.com/dsoapbw26/image/upload/w_300,c_fill,ar_1:1,g_auto,r_max/v1562637565/jackaxethrowing/luke.jpg"
                alt="luke"
              />
            </div>
            <div className="col">
              <h4 className="mb-0 mt-md-0">Meet Luke!</h4>
              <p className="font-weight-bold">Jack of all trades</p>
              <p>
                Luke is our definition of our 'Jack of All Trades' Luke seems to
                get it all done around here. When Luke is not putting targets
                together, cutting, cleaning or building any of our crazy games,
                you can find him on the field teaching you how to throw an axe!
                Wanna request him at your next event? Mention Luke in your
                booking and we'll work something out!
              </p>
              <p>
                Better yet, ask him about our giant corn hole and his crazy
                building skills, you won't regret it!
              </p>
            </div>
          </div>

          <div className="row align-items-start mb-5">
            <div className="col-md-3">
              <LazyLoadImage
                className="mb-0"
                effect="blur"
                src="https://res.cloudinary.com/dsoapbw26/image/upload/w_300,c_fill,ar_1:1,g_auto,r_max/v1562637565/jackaxethrowing/bryan.jpg"
                alt="bryan"
              />
            </div>
            <div className="col">
              <h4 className="mb-0 mt-md-0">Bryan Rossmanith</h4>
              <p className="font-weight-bold">Founder & Owner</p>
              <p>
                HI there! Name is Bryan, some people call me Jack, but contrary
                to popular belief, I am not Jack. Jack is all of our inner
                lumberjacks, and at Jack's Axe Throwing, we allow you to unleash
                your lumberjack in a controlled funtastic manner.
              </p>

              <p>
                I got my first swing at axe throwing in Denver, and absolutely
                loved it. It reminded me of everything I enjoy in life. (Not to
                brag, but I got a bullseye my first throw ever.) Sports were a
                huge part of my life growing up, and continue to influence my
                life in a great way. Axe Throwing reminded me of all of these
                things. Friends, Community, Fun and a little bit of perceived
                danger. I worked in retail sales, but wanted more challenge, so
                I tried to work in Finance, and that was a disaster, then tried
                government work, and got bored to tears, then we stumbled upon
                chucking sharp objects at wood and never came out.
              </p>

              <p>
                Having loads of credit card debt before I even started, I just
                decided to go for it and see what happens. Our first setup makes
                me laugh and also cry a bit. It was so bad, but I had a blast
                and a lot of others did too.
              </p>

              <p>
                After working with large brands at some of the most iconic
                venues in the world this last year such as Young Professionals
                Organization, Lowe's, Ford, US Air Force Academy, private
                concerts with One Republic, among others and event planners of
                all sizes, being featured in multiple news organizations, radio
                stations and working with dozens of festivals, breweries and
                small businesses, we are here to stay for the long haul and
                excited to bring the the sharpest entertainment option with me
                wherever I go. Myself and our stellar staff cannot wait to meet
                you and teach you how to stick it like the great future
                Lumberjill/jack you are!
              </p>
              <p>Now let's go kick some axe!!</p>
            </div>
          </div>

          <div className="row align-items-start mb-5">
            <div className="col-md-3">
              <LazyLoadImage
                className="mb-0"
                effect="blur"
                src="https://res.cloudinary.com/dsoapbw26/image/upload/w_300,c_fill,ar_1:1,g_auto,r_max/v1562637565/jackaxethrowing/autumn.jpg"
                alt="autumn"
              />
            </div>
            <div className="col">
              <h4 className="mb-0 mt-md-0">Meet Autumn!</h4>
              <p className="font-weight-bold">Certified Lumberjill</p>
              <p>
                Autumn is one of our stellar staff members and is one of the
                originals of Jack's Axe Throwing when we first started in
                Colorado Springs. She's probably the nicest person on this
                planet, and has one of the raddest axe throws on earth. Axe her
                about it and learn some more! When she's not teaching people how
                to chuck axes, you can find her in school at the University of
                Colorado, Colorado Springs or at her other job. Make sure to
                give her a high 10 at the next event!
              </p>
              <h5 className="mt-0">Why do you love working here?</h5>
              <p>
                I love working for Jack's Axe Throwing because it's something
                completely different! Seeing the excitement on people's faces
                when they finally get an axe to stick is such a great feeling.
              </p>
              <h5 className="my-0">Fun Fact #1</h5>
              <p>I love weight lifting and being in the gym.</p>
              <h5 className="my-0">Fun Fact #2</h5>
              <p>
                I have the best puppy in the world. She's a border collie/blue
                healer named Pistol.
              </p>
              <h5 className="my-0">Fun Fact #3</h5>
              <p>I will never say no to wine and chocolate.</p>
            </div>
          </div>

          <div className="row align-items-start mb-5">
            <div className="col-md-3">
              <LazyLoadImage
                className="mb-0"
                effect="blur"
                src="https://res.cloudinary.com/dsoapbw26/image/upload/w_300,c_fill,ar_1:1,g_auto,r_max/v1562637565/jackaxethrowing/Mike.jpg"
                alt="autumn"
              />
            </div>
            <div className="col">
              <h4 className="mb-0 mt-md-0">Meet Mike!</h4>
              <p className="font-weight-bold">Certified Lumberjack</p>
              <p>
                Mike is one of our awesome league competitors and happens to be
                a bomb axe coach as well!
              </p>
              <p>
                Mike does it all. When he's not working his full time job, you
                can find him leading the way with his Non-Profit,
                <a
                  href="https://pawsitivekidnections.com/"
                  className="mx-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://pawsitivekidnections.com/
                </a>
                , which connects foster dogs to foster children.
              </p>

              <p>
                When he's not doing all of that, we get him! You can catch him
                on most Sunday's at Black Forest Brewing Company from 2-6pm!
              </p>

              <p>Let's sling em with MIKE!</p>
            </div>
          </div>

          <div id="who-is-jack">
            <h2>Who is Jack?</h2>
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
              we’re sorry for the sad news. BUT, we can all aspire to be the
              best Lumberjill or lumberjack we can be. Happy Throwing!
            </p>
            <h3>Jack’s Axe Throwing. #ChannelTheFlannel.</h3>
            <h4>Our work, Your Play</h4>
          </div>
        </Container>
      </Layout>
    );
  }
}
export default MeetthePage;
export const meetThePageQuery = graphql`
  query meetThePageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
