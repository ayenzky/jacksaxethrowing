import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

class pricingPage extends React.Component {
  render() {
    const siteTitle = "Pricing"
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Container>
        <h2>Mobile Truck</h2>
        <p>Simple and easy to follow axe throwing pricing. No additional markup, all tax included.</p>
          <div className="row">
            <div className="col-md-4">
              <Card className="h-100">
                
                <Card.Body>
                  <h4 className="card-title">Individual hosting on own</h4>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li>$15/hr/person (minimum of 2 hours and 10 people)</li>
                      <li>$100 travel, setup, tear down and cleanup fee in Colorado Springs, Denver Metro & Pueblo</li>
                      <li>$200 in Fort Collins</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="h-100">
                
                <Card.Body>
                  <h4 className="card-title">Business</h4>
                  <Card.Text>
                    <p>(Brewery, Coffee Shop, Bar, etc...)</p>
                    <p><strong>Brewery options:</strong></p>
                    <ul className="list-unstyled">
                      <li>$500 Flat rental rate + Travel Expense</li>
                      <li>3 hours of Dedicated throwing time</li>
                      <li>$50/hour after that, if available.</li>
                      <li>$200 + Normal fees passed on to our guests.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

        </Container>
      </Layout>
    )
  }
}

export default pricingPage

export const pricingPageQuery = graphql`
  query pricingPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
  `