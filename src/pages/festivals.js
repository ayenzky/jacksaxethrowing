import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class festivalsPage extends React.Component {
  render() {
    const siteTitle = "Festivals"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>Let’s make your next festival or fair unforgettable!</p>
          <p>We have worked with many fairs and festivals to create one of the most innovative and immersive experience possible.</p>
          <ul className="list-unstyled mission mb-2">
            <li className="py-2">Every festival comes with insurance for both us and you as the organizer,</li>
          </ul>
          <p>We have worked with the Colorado State Fair, El Paso County Fair, Colorado Medieval Festival, Mile High Beer Fest, Lakewood Cider Days, Hell Scream Entertainment, Colorado Springs Gun Show, Colorado Springs Sugar Plum &amp; Gift Mart</p>

          <Row className="my-5 justify-content-center align-items-center">
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="https://www.hellscreamhaunt.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1552272443/jackaxethrowing/hell-scream.jpg" alt="Hell Scream"/></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="http://www.lakewood.org/ciderdays/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1550196669/jackaxethrowing/cider-days.jpg" alt="Cider Days"/></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="https://www.coloradostatefair.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1550196668/jackaxethrowing/colorado-state-fair.jpg" alt="Colorado state fair"/></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="https://www.facebook.com/coloradospringsgunshow/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1552273088/jackaxethrowing/gun-knife-show.jpg" alt="gun & knife show"/></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="https://milehighbeerfestival.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1552273916/jackaxethrowing/mile-high-beer-fest.jpg" alt="mile high beer fest"/></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="https://www.facebook.com/ColoradoSpringsSugarPlum/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1550196668/jackaxethrowing/sugarplum-gift-mart.jpg" alt="Colorado state fair"/></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 text-center">
              <div className="festival-logos"><a href="https://www.coloradocastle.com/" target="_blank" rel="noopener noreferrer"><LazyLoadImage effect="blur" className="mb-0  bg-dark-blue" src="https://res.cloudinary.com/dsoapbw26/image/upload/v1550196668/jackaxethrowing/colorado-medieval-festival.jpg" alt="Colorado medieval festival"/></a>
              </div>
            </div>
          </Row>
          <div className="text-center">
          <LazyLoadImage effect="blur" className="mx-auto img-fluid" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_800/v1552295996/jackaxethrowing/festival.jpg"/>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto bg-yellow p-5">
            <p>Enter your details below and let us help make your next fair the most successful it has ever been!</p>
            <form name='Festival Form' method='POST' data-form-id="5c87441f6d01764f7a541748" webriq="true">
            <div className="form-group">
              <label htmlFor="inputName">Contact Name</label>
              <input type="text" name="name" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter your name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Name of Fest/Fair</label>
              <input type="text" name="name of fest/fair" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter Name of Fest/Fair" required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" name="email address" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" required/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" name="phone number" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number" required/>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Preferred contact day/time (Make a date/time) (Monday-Friday 11am-5pm)</label>
              <textarea type="text" name="preferred contact day/time" className="form-control form-control-lg p-2" id="inputMessage" required/>
            </div>
            <div className="form-group">
                <div className="webriq-recaptcha"></div>
            </div>
            <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
          </form>
            </div>
          </div>

        </Container>
      </Layout>
    )
  }
}

export default festivalsPage

export const festivalsPageQuery = graphql`
  query festivalsPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `