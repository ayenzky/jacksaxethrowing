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
                    <ul className="list-unstyled m-0 topinfo text-white">
                        <li className="d-flex align-content-start"><LazyLoadImage alt="telephone" effect="blur" src="/img/002-telephone.svg" className="mr-2 mt-1"/><a title="telephone" href="tel://7194979709">(719)497-9709</a></li>
                        <li className="d-flex align-items-start"><LazyLoadImage alt="email" effect="blur" src="/img/003-envelope.svg" className="mr-2 mt-1"/><a title="email" href="mailto:jack@jacksaxethrowing.com">jack@jacksaxethrowing.com</a></li>
                        <li className="d-flex align-items-start"><LazyLoadImage alt="location" effect="blur" src="/img/001-placeholder.svg" className="mr-2 mt-1"/><span>625 Paonia Street Colorado springs, CO 80915</span></li>
                    </ul>
                    <h5 className="text-white mb-4">Tag Us</h5>
                    <ul className="list-unstyled m-0 d-flex socialicons mb-0">
                        <li className="mb-0 mr-2"><a title="facebook" href="https://www.facebook.com/jacksaxethrowing/" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage alt="facebook" effect="blur" className="img-fluid" src="/img/003-facebook.svg"/></a></li>
                        <li className="mb-0 mr-2"><a title="twitter" href="https://twitter.com/JackThrows" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage alt="twitter" effect="blur" className="img-fluid" src="/img/twitter.svg"/></a></li>
                        <li className="mb-0 mr-2"><a title="youtube" href="https://www.youtube.com/channel/UColhr8JVcg17NkngWtAlSkA" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage alt="youtube" effect="blur" className="img-fluid" src="/img/youtube.svg"/></a></li>
                        <li className="mb-0 mr-2"><a title="yelp" href="https://www.yelp.com/biz/jacks-axe-throwing-colorado-springs-2" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage alt="yelp" effect="blur" className="img-fluid" src="/img/yelp.svg"/></a></li>
                        <li className="mb-0 mr-2"><a title="instagram" href="https://www.instagram.com/jacksaxethrowing/" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage alt="instagram" effect="blur" className="img-fluid" src="/img/001-instagram.svg"/></a></li>
                        <li className="mb-0 mr-2"><a title="google-plus" href="https://www.google.com/search?q=jacks+axe+throwing+google&safe=active&client=firefox-b-1-ab&source=lnms&sa=X&ved=0ahUKEwjhqMr-xI3fAhWSxZ8KHdtxAHUQ_AUICSgA&biw=766&bih=727&dpr=2.5#lrd=0x871349f4e6f4955f:0x6b66997a6b8f372e,1,,," target="_blank" rel="noopener noreferrer"><LazyLoadImage alt="google-plus" effect="blur" className="img-fluid" src="/img/google-plus.svg"/></a></li>
                        <li className="mb-0"><a title="tripadvisor" href="https://www.tripadvisor.com.ph/Attraction_Review-g33364-d14183306-Reviews-Jack_s_Axe_Throwing-Colorado_Springs_El_Paso_County_Colorado.html" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage alt="tripadvisor" effect="blur" className="img-fluid" src="/img/002-tripadvisor-logotype.svg"/></a></li>
                    </ul>
                </Col>
                <Col md={6} lg={2} className="order-1 order-md-2">
                    <h4 className="text-white mb-4">Links</h4>
                    <ul className="list-unstyled m-0 footer-menu-links">
                        <li className="text-white"><Link to="/">Home</Link></li>
                        <li className="text-white"><Link to="/our-story">Our Story</Link></li>
                        <li className="text-white"><Link to="/why-the-name-jacks">Why Jack's?</Link></li>
                        <li className="text-white"><Link to="/about-us">About Us</Link></li>
                        <li className="text-white"><Link to="/pricing">Pricing</Link></li>
                        <li className="text-white"><Link to="/events">Events</Link></li>
                        <li className="text-white"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </Col>
                <Col lg={5} className="order-2 order-md-3">
                    <h4 className="text-white mb-4">Services</h4>
                    <ul className="list-unstyled m-0 d-flex flex-wrap footer-services-links">
                        <li className="text-white"><Link to="/birthday-parties">Birthday Parties</Link></li>
                        <li className="text-white"><Link to="/bachelorette-parties">Bachelor/ette Parties</Link></li>
                        <li className="text-white"><Link to="/corporate-events">Corporate Events</Link></li>
                        <li className="text-white"><Link to="/weddings">Weddings</Link></li>
                        <li className="text-white"><Link to="/family-reunions">Family Reunions</Link></li>
                        <li className="text-white"><Link to="/mobile-axe-throwing">Mobile Axe Throwing</Link></li>
                        <li className="text-white"><Link to="/festivals">Festivals</Link></li>
                        <li className="text-white"><Link to="/non-profit-events">Non-profit Fundraiser</Link></li>
                        <li className="text-white"><Link to="/leagues">Leagues</Link></li>
                        <li className="text-white"><Link to="/performances">Performances</Link></li>
                        <li className="text-white"><Link to="/travelling-custom-events-indoors-and-outdoors">Travelling Custom Events Indoors and Outdoors</Link></li>
                    </ul>
                    <div className="d-flex justify-content-start mt-4"><a className="booknow hvr-pulse" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a></div>
                </Col>
            </Row>
            <div className="copyright pt-5 mt-5 pb-4">
                <p className="text-white mb-0">© Copyright {new Date().getFullYear()} - Jack's Axe Throwing - All Rights Reserved - Designed by <a href="https://www.webriq.services/" title="webriq goes mad">WebriQ Goes Mad</a> - Powered by <a href="https://www.webriq.com/" title="webriq">WebriQ</a></p>
            </div>
        </Container>
    </footer>
);