import React  from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './footer.css'

export default () => (
  <footer className="bg-dark-blue pt-5">
        <Container>
            <Row>
                <Col md={6} lg={4} className="order-3 order-md-1 pr-xl-5">
                    <h4 className="text-white mb-4">Jack's Axe Throwing</h4>
                    <ul className="list-unstyled topinfo text-white">
                        <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/002-telephone.svg" className="mr-2 mt-1"/><a href="tel://7194979709">(719)497-9709</a></li>
                        <li className="d-flex align-items-start"><LazyLoadImage effect="blur" src="/img/003-envelope.svg" className="mr-2 mt-1"/><a href="mailto:jack@jacksaxethrowing.com" title="email">jack@jacksaxethrowing.com</a></li>
                        <li className="d-flex align-items-start"><LazyLoadImage effect="blur" src="/img/001-placeholder.svg" className="mr-2 mt-1"/><span>625 Paonia Street Colorado springs, CO 80915</span></li>
                    </ul>
                    <h5 className="text-white mb-4">Tag Us</h5>
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
                        <li className="mb-0"><a href="https://www.tripadvisor.com.ph/Attraction_Review-g33364-d14183306-Reviews-Jack_s_Axe_Throwing-Colorado_Springs_El_Paso_County_Colorado.html" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage effect="blur" className="img-fluid" src="/img/002-tripadvisor-logotype.svg"/></a></li>
                    </ul>
                </Col>
                <Col md={6} lg={2} className="order-1 order-md-2">
                    <h4 className="text-white mb-4">Links</h4>
                    <ul className="list-unstyled footer-menu-links">
                        <li className="text-white"><Link to="/">Home</Link></li>
                        <li className="text-white"><Link to="/">Our Story</Link></li>
                        <li className="text-white"><Link to="/">Why Jack's?</Link></li>
                        <li className="text-white"><Link to="/">About Us</Link></li>
                        <li className="text-white"><Link to="/">Events</Link></li>
                        <li className="text-white"><Link to="/">Contact Us</Link></li>
                    </ul>
                </Col>
                <Col lg={5} className="order-2 order-md-3">
                    <h4 className="text-white mb-4">Services</h4>
                    <ul className="list-unstyled d-flex flex-wrap footer-services-links">
                        <li className="text-white"><Link to="/">Birthday Parties</Link></li>
                        <li className="text-white"><Link to="/">Bachelor/ette Parties</Link></li>
                        <li className="text-white"><Link to="/">Corporate Events</Link></li>
                        <li className="text-white"><Link to="/">Weddings</Link></li>
                        <li className="text-white"><Link to="/">Family Reunions</Link></li>
                        <li className="text-white"><Link to="/">Mobile Axe Throwing</Link></li>
                        <li className="text-white"><Link to="/">Festivals</Link></li>
                        <li className="text-white"><Link to="/">Non-profit Fundraiser</Link></li>
                        <li className="text-white"><Link to="/">Leagues</Link></li>
                        <li className="text-white"><Link to="/">Performances</Link></li>
                    </ul>
                    <div className="d-flex justify-content-start mt-4"><a className="booknow hvr-pulse" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a></div>
                </Col>
            </Row>
            <div className="copyright pt-5 mt-5 pb-4">
                <p className="text-white mb-0">© Copyright {new Date().getFullYear()} - Jack's Axe Throwing - All Rights Reserved - Designed by <a href="https://www.webriq.services/">WebriQ Goes Mad</a> - Powered by <a href="https://www.webriq.com/">WebriQ</a></p>
            </div>
        </Container>
    </footer>
);