import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Nav, Image, Dropdown } from 'react-bootstrap'
import SideBar from 'react-sidebar'
import './menu.css'
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarpullRight: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    return (
      <SideBar
        sidebar={
          <div className="float-right navigation">
          <div className="navigation-top">
              <Nav className="flex-column main-nav">
                <Nav.Item><Link className="nav-link" to="/">Home</Link></Nav.Item>
                <Nav.Item><Link className="nav-link" to="/our-story">Our Story</Link></Nav.Item>
                <Nav.Item><Link className="nav-link" to="/why-the-name-jacks">Why Jack's</Link></Nav.Item>
                <Nav.Item><Link className="nav-link" to="/about-us">About Us</Link></Nav.Item>
                <Dropdown className="nav-item">
                  <Link to="/services" className="nav-link float-left">Services</Link>
                  <Dropdown.Toggle split className="ml-3"/>
                  <Dropdown.Menu >
                      <Link to="/birthday-parties" className="dropdown-item nav-link">Birthday Parties</Link>
                      <Link to="/bachelorette-parties" className="dropdown-item nav-link">Bachelor/ette Parties</Link>
                      <Link to="/corporate-events" className="dropdown-item nav-link">Corporate Events</Link>
                      <Link to="/weddings" className="dropdown-item nav-link">Weddings</Link>
                      <Link to="/family-reunions" className="dropdown-item nav-link">Family Reunions</Link>
                      <Link to="/mobile-axe-throwing" className="dropdown-item nav-link">Mobile Axe Throwing</Link>
                      <Link to="/festivals" className="dropdown-item nav-link">Festivals</Link>
                      <Link to="/non-profit-events" className="dropdown-item nav-link">Non-profit Fundraiser</Link>
                      <Link to="/leagues" className="dropdown-item nav-link">Leagues</Link>
                      <Link to="/performances" className="dropdown-item nav-link">Performances</Link>
                      <Link to="/travelling-custom-events-indoors-and-outdoors" className="dropdown-item nav-link">Travelling Custom Events Indoors and outdoors</Link>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Item><Nav.Link href="/events">Events</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/pricing">Pricing</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
              </Nav>
              <div className="d-flex justify-content-start mt-4"><a className="booknow hvr-shadow" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a></div>
          </div>
          <div className="navigation-bottom text-white">
              <ul className="list-unstyled topinfo">
                  <li className="d-flex align-content-start mb-1"><Image src="/img/002-telephone.svg" className="mr-2 mt-1 mb-0"/><a href="tel://7194979709">(719)497-9709</a></li>
                  <li className="d-flex align-items-start mb-1"><Image src="/img/003-envelope.svg" className="mr-2 mt-1 mb-0"/><a href="mailto:jack@jacksaxethrowing.com" title="email">jack@jacksaxethrowing.com</a></li>
                  <li className="d-flex align-items-start"><Image src="/img/001-placeholder.svg" className="mr-2 mt-1 mb-0"/><span>625 Paonia Street Colorado springs, CO 80915</span></li>
              </ul>
              <ul className="list-unstyled d-flex flex-wrap socialicons mt-4">
                  <li className="mb-2 mr-2"><a href="https://www.facebook.com/jacksaxethrowing/" target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/003-facebook.svg"/></a></li>
                  <li className="mb-2 mr-2"><a href="https://twitter.com/JackThrows" target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/twitter.svg"/></a></li>
                  <li className="mb-2 mr-2"><a href="https://www.youtube.com/channel/UColhr8JVcg17NkngWtAlSkA" target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/youtube.svg"/></a></li>
                  <li className="mb-2 mr-2"><a href="https://www.yelp.com/biz/jacks-axe-throwing-colorado-springs-2" target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/yelp.svg"/></a></li>
                  <li className="mb-2 mr-2"><a href="https://www.instagram.com/jacksaxethrowing/" target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/001-instagram.svg"/></a></li>
                  <li className="mb-0 mr-2"><a href="https://www.google.com/search?q=jacks+axe+throwing+google&safe=active&client=firefox-b-1-ab&source=lnms&sa=X&ved=0ahUKEwjhqMr-xI3fAhWSxZ8KHdtxAHUQ_AUICSgA&biw=766&bih=727&dpr=2.5#lrd=0x871349f4e6f4955f:0x6b66997a6b8f372e,1,,," target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/google-plus.svg"/></a></li>
                  <li className="mb-2 mr-2"><a href="https://www.tripadvisor.com.ph/Attraction_Review-g33364-d14183306-Reviews-Jack_s_Axe_Throwing-Colorado_Springs_El_Paso_County_Colorado.html" target="_blank" rel="noopener noreferrer"><Image className="img-fluid" src="/img/002-tripadvisor-logotype.svg"/></a></li>
              </ul>
          </div>
      </div>
        }
        open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={this.state.sidebarpullRight}
          styles={{
            sidebar: {
              background: "#051129",
              width: "300px",
              position: "fixed",
              zIndex: "9"
            },
             root: {position: "relative", overflow: 'visible'}, 
             content: {
                position: 'relative', 
                overflow: 'visible',
                cursor: 'pointer'
              } 
          }}
      >
      <div className="nav_content" onClick={() => this.onSetSidebarOpen(true)}>
          <h2 className="float-right nav_handle my-0"> MENU</h2>
      </div>
      </SideBar>
    )
  }
}
