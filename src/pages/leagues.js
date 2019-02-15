import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card, Row, Col } from "react-bootstrap";
import Layout from '../components/Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SEO from '../components/seo'
import './index.css'

class leaguesPage extends React.Component {
  render() {
    const siteTitle = "Leagues"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
          <LazyLoadImage effect="blur" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_500/v1550202912/jackaxethrowing/usa-axe-throwing.png"/>
          <iframe width="100%" height="400" frameborder="0" scrolling="no" title="Google Maps" aria-label="Google Maps" src="https://static.parastorage.com/services/santa/1.6419.17/static/external/googleMap.html?language=en&amp;lat=38.8412875&amp;long=-104.71638430000002&amp;address=625 Paonia St, Colorado Springs, CO 80915, USA&amp;addressInfo=Central Outdoor Location | 625 Paonia Street | Rocky Mountain Brewery | 6+ person events, leagues &amp; more&amp;showZoom=true&amp;showStreetView=true&amp;showMapType=true"></iframe>
        
          <h3>League pricing:</h3>
          <Row className="my-4">
            <Col md={6} className="mb-4">
            <Card bg="light">
            <Card.Header>
              <h4 className="m-0">$7.50</h4>
              <p className="m-0">week/person</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>Inclusions:</Card.Title>
              <Card.Text>
                <ul className="ml-0 list-unstyled checked">
                  <li>Free T-shirt</li>
                  <li>8 weeks of competition</li>
                  <li>6 weeks at location</li>
                  <li> 7th week makeup week/practice</li>
                  <li>8th week grand championships</li>
                  <li>One winning team each season</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
            <Col md={6}>
            <Card bg="secondary" text="white">
            <Card.Header>
              <h4 className="m-0">$120</h4>
              <p className="m-0">teams of two</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>Inclusions:</Card.Title>
              <Card.Text>
                <ul className="ml-0 list-unstyled checked">
                  <li>Free T-shirt</li>
                  <li>8 weeks of competition</li>
                  <li>6 weeks at location</li>
                  <li> 7th week makeup week/practice</li>
                  <li>8th week grand championships</li>
                  <li>One winning team each season</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>

          </Row>
          


          <p>We are proud to be a Branch locaiton of USA Axe Throwing, and follow their rules and regulations for league.</p>
          <p>Email: <a href="mailto:info@usaaxethrowing.org" tilte="mail">info@usaaxethrowing.org</a> for more information on how to join the business axe throwing league conveniently at your locaiton.</p>


        </Container>
      </Layout>
    )
  }
}

export default leaguesPage

export const leaguesPageQuery = graphql`
  query leaguesPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `