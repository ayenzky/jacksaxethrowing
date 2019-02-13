import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col} from "react-bootstrap";
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Exit from './Exit'
import { rhythm, scale } from '../utils/typography'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

class Layout extends React.Component {
  render() {
    const { location, title, children, customclass } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let herobanner

    if (location.pathname === rootPath) {
      herobanner = (
        <Hero/>
      )
    } else {
      herobanner = (
        <div className="hero-main bg-yellow">
          <Container>
            <Row>
              <Col lg={7} md={8}>
                <h1 className="text-white">{title}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
    return (
      <div className={location.pathname === rootPath ? 'home' : customclass || 'page'}>
        <Header/>
        {herobanner}
        <main>
          {children}
        </main>
        <Exit/>
        <Footer/>
      </div>
    )
  }
}

export default Layout
