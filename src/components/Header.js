import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Menu from './Menu'
import 'react-lazy-load-image-component/src/effects/blur.css';
import styl from './header.module.css'



export default class Header extends Component {
  
  render() {
    return (
      <header className={styl.header}>
        <div className="topheader d-none d-md-block bg-yellow py-2">
            <Container>
                <Row>
                    <Col md={8}>
                        <p className="mb-0">Tag us on social media for your chance to win a FREE hour of throwing with our instructors!&nbsp;<span className="text-red">#channeltheflannel#jacksaxethrowing</span></p>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <ul className="list-unstyled d-flex socialicons mb-0">
                            <li className="mb-0 mr-2"><a href="https://www.facebook.com/jacksaxethrowing/" target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/003-facebook.svg"/></a></li>
                            <li className="mb-0 mr-2"><a href="https://twitter.com/JackThrows" target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/twitter.svg"/></a></li>
                            <li className="mb-0 mr-2"><a href="https://www.youtube.com/channel/UColhr8JVcg17NkngWtAlSkA" target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/youtube.svg"/></a></li>
                            <li className="mb-0 mr-2"><a href="https://www.yelp.com/biz/jacks-axe-throwing-colorado-springs-2" target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/yelp.svg"/></a></li>
                            <li className="mb-0 mr-2"><a href="https://www.instagram.com/jacksaxethrowing/" target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/001-instagram.svg"/></a></li>
                            <li className="mb-0 mr-2"><a href="https://www.google.com/search?q=jacks+axe+throwing+google&safe=active&client=firefox-b-1-ab&source=lnms&sa=X&ved=0ahUKEwjhqMr-xI3fAhWSxZ8KHdtxAHUQ_AUICSgA&biw=766&bih=727&dpr=2.5#lrd=0x871349f4e6f4955f:0x6b66997a6b8f372e,1,,," target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/google-plus.svg"/></a></li>
                            <li className="mb-0"><a href="https://www.tripadvisor.com.ph/Attraction_Review-g33364-d14183306-Reviews-Jack_s_Axe_Throwing-Colorado_Springs_El_Paso_County_Colorado.html" target="_blank" rel="noopener noreferrer">
                              <LazyLoadImage effect="blur" className="img-fluid" src="/img/002-tripadvisor-logotype.svg"/></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="menu-container py-4">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={4} className="d-none d-md-inline-block">
                        <ul className={`${styl.topinfo} list-unstyled mb-0`}>
                            <li className="d-flex align-content-start mb-1"><LazyLoadImage effect="blur" src="/img/002-telephone.svg" className="mr-2 mt-1"/><a href="tel://7194979709">(719)497-9709</a></li>
                            <li className="d-flex align-items-start mb-1"><LazyLoadImage effect="blur" src="/img/003-envelope.svg" className="mr-2 mt-1"/><a href="mailto:jack@jacksaxethrowing.com" title="email">jack@jacksaxethrowing.com</a></li>
                            <li className="d-flex align-items-start"><LazyLoadImage effect="blur" src="/img/001-placeholder.svg" className="mr-2 mt-1"/><span>625 Paonia Street Colorado springs, CO 80915</span></li>
                        </ul>
                    </Col>
                    <Col xs={4} md={4}>
                        <div className="text-sm-left text-md-center nav-brand">
                          <Link to="/"><LazyLoadImage effect="blur" className="img-fluid mb-0" src="/img/logo.png"/></Link>
                        </div>
                    </Col>
                    <Col xs={2} md={4} className="ml-auto">
                      <Menu/>
                    </Col>
                </Row>
            </Container>
        </div>
    </header>
    )
  }

}