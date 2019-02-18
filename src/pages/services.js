import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col, Card } from "react-bootstrap";
import Layout from '../components/Layout'
import Collapsible from 'react-collapsible';
import SEO from '../components/seo'
import './index.css'

class servicesPage extends React.Component {
  render() {
    const siteTitle = "Services"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <p>We offer a full range of interactive entertainment services throughout the state of Colorado. Axe Throwing provides an unforgettable experience. We use common tools in uncommon ways, creating lifelong experiences for you and your group. Our motto is Our Work, Your Play. We take objects typically used for work, and turn them into play. We wake up, #ChannelTheFlannel every day and make memories for ages 4-104.</p>
          <p>Active, doing something new and exciting, and even competing against your friends and family to see who the best lumberjack (Or Jill) Around!</p>
          <p>Axe Throwing is seeing rapid growth due to the natural community that it establishes when participating in the fun activities we provide. From Special events to competitive leagues There is always something extraordinary going on at Jack’s Axe Throwing. Our axes are also very light, 1.25 lbs. If you can Swing it, you can throw it! We say 4-104, and really mean that.</p>
          <p>With onsite and mobile offerings, there is something for everyone at Jack’s Axe Throwing.</p>
          
          <div className="collapsable mb-4">
          <Collapsible trigger="On Location">
            <p>Is an outdoor spot with unprecedented views of Pikes Peak on the Eastern side of Colorado Springs, teamed up with Rocky Mountain Brewery next to us.  onsite with a renown BBQ truck serving up local favorites. Our outdoor spot is Located behind Rocky Mountain Brewery at 625 Paonia Street off Galley & Powers in Colorado Springs, CO 80915.</p>
            <p>Providing you the best Bachelor Party Ideas, Axe Throwing Colorado, Lumberjack Themed Events, Interactive corporate team events, Birthday Parties, and more.</p>
          </Collapsible>
          <Collapsible trigger="Mobile">
            <Row className="justify-content-center">
              <Col md={5}>
              <Card>
                <Card.Body>
                  <Card.Title>Axe Throwing Truck</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Link to="/">View</Link>
                </Card.Body>
              </Card>
              </Col>
              <Col md={5}>
              <Card>
                <Card.Body>
                  <Card.Title>Mobile Targets</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Link to="/">View</Link>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Collapsible>
          <Collapsible trigger="Packages">
            <p>All our mobile packages include 3 hours of throwing time taught and led by a certified instructor, insurance with Liquor Liability, all family members included (ages 4-104 permitted to throw) prep-work, setup, teardown and cleanup.</p>
            <p>We also offer a special custom engraved axe from our lumberjack family, to your lumberjack family.</p>
            <p>Axe Throwing Truck: Yes, we said Axe Throwing truck. Think of a taco truck, remove the tacos and put in axes! With our fully customized interior, details matter! It’s like you are stepping into an actual forest (But it’s a truck) You can rent this truck to be in your driveway, at a commercial property, and many more uses!  For as little as $6/person, you get expert instruction, setup and teardown, bumping music, LED lights and all games included! Become the axe throwing professional you were meant to be!</p>
            <p className="text-danger">Truck Photos (Anchored point to truck photos)</p>
            <p>Festivals and fairs: We LOVE supporting events, fairs, and anywhere that we are needed. We support festivals in 4 different finance options:</p>
            <ul className="list-unstyled checked">
              <li>Free to attendees, flat rate paid to Jack’s Axe Throwing</li>
              <li>Revenue percentage sales</li>
              <li>Flat rate billed to jack’s Axe Throwing</li>
              <li>Sponsorships from companies. Get exposure to thousands of customers in a unique way.</li>
            </ul>
            <p>To find out what value we can bring to your fair, drop us a message and let’s get talking!</p>
          </Collapsible>
          </div>

          <p>Small business owners. We make you profit. Let us handle everything, while you add up the amount of people it brings to your location, consuming your product. We handle all the Supplies, truck, Digital Marketing, and more. All you do is supply the space in the parking lot, we provide the entertainment, and get the party going to make sure your bar has a very profitable 3 hours from our innovative solutions that keeps customers staying for hours longer than they normally would have!</p>
          <p><strong>Interested in having us at your business? Fill out our form, and we’ll get right with you after we get done throwing!</strong></p>
          <div className="row my-4">
            <div className="col-md-6 mx-auto bg-yellow p-5">
           <form action="">
              <div className="form-group">
              <label htmlFor="inputBname">Business Name</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputBname" placeholder="Enter your business name"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputContactperson">Contact Person</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputContactperson" placeholder="Enter your contact person"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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

export default servicesPage

export const servicesPageQuery = graphql`
  query servicesPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `