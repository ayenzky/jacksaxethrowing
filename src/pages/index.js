import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Exit from '../components/Exit'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';
import 'swiper/dist/css/swiper.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'izimodal/css/iziModal.min.css';
import './index.css'
import './pricing.css'
import Modal from '../components/Modal'


class IndexPage extends React.Component {
  componentDidMount() {
    if(window) {
        setTimeout(function(){
            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },5000)
        new Swiper('.swiper-container', {
          slidesPerView: 1,
          centeredSlides: true,
          autoplay: true,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
        }); 
        

    }
  }
  render() {
    const { data } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges
  

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section id="about" className="component bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2 className="heading-2 mb-0 text-dark-blue">Our Mission</h2>
                        <h3 className="heading-3 mt-0">Our Work, Your Play</h3>
                        <h4>#channeltheflannel</h4>
                        <ul className="list-unstyled mission m-0">
                            <li>Our mission has been the same since day one in June 2018, to connect individuals and communities through throwing sharp objects. We believe in the power of community, and at Jack's, we strive to do just that.</li>
                            <li>We are perfect for your corporate events, next birthday party, wedding party, fun night out, or time with the family. With onsite and mobile operations available worldwide, there is truly something from everyone at Jack's.</li>
                        </ul>
                        <div className="d-flex justify-content-start mt-4"><Link to="/our-story" className="booknow hvr-shadow">read more</Link></div>
                    </div>
                </div>
            </div>
        </section>
         <section id="why-jack" className="component bg-yellow">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    <LazyLoadComponent>
                      <iframe title="video" className="mb-0" src="https://player.vimeo.com/video/323639718?title=0&byline=0&portrait=0" width="100%" height="400" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                    </LazyLoadComponent>
                  </div>
                    <div className="col-lg-5 pl-3 pl-lg-5">
                        <h2 className="heading-2 text-dark-blue mt-3 mt-lg-0">Why the name, Jack's?</h2>
                        <h3 className="heading-3">Who is Jack?</h3>
                        <p>Jack is not a person, but the business inspiring us all. I know, we’re sorry for the sad news. BUT, we can all aspire to be the best Lumberjill or Lumberjack we can be. Happy Throwing!</p>
                        <div className="d-flex justify-content-start mt-4"><Link to="/why-the-name-jacks" className="booknow hvr-shadow">read more</Link></div>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" className="component bg-dirty-white pt-5">
            <div className="container">
                <div className="text-center intro mb-5"><LazyLoadImage effect="blur" src="/img/axes.png" style={{width: '50px'}} alt="axe"/>
                    <h2 className="heading-2 mt-0">Our Services</h2>
                    <p className="lead px-lg-5 px-0">We offer a full range of interactive entertainment services throughout the state of Colorado. Axe Throwing provides an unforgettable experience. We use common tools in uncommon ways, creating lifelong experiences for you and your group.
                        Our motto is Our Work, Your Play. We take objects typically used for work, and turn them into play. We wake up, #ChannelTheFlannel every day and make memories for ages 4-104.</p>
                </div>
                <div className="row justify-content-center align-items-stretch align-content-center">
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/008-gift.svg" alt="birthday parties"/>
                            <h4 className="heading-3 mt-2">Birthday Parties</h4><Link to="/birthday-parties" title="birthday parties"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/012-tuxedo.svg" alt="bachelor parties"/>
                            <h4 className="heading-3 mt-2">Bachelor/ette Parties</h4><Link to="/bachelorette-parties" title="bachelorette parties"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/011-shake.svg" alt="corporate events"/>
                            <h4 className="heading-3 mt-2">Corporate Events</h4><Link to="/corporate-events" title="corporate events"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/015-wedding.svg" alt="widding"/>
                            <h4 className="heading-3 mt-2">Weddings</h4><Link to="/weddings" title="weddings"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/007-family.svg" alt="family reunion"/>
                            <h4 className="heading-3 mt-2">Family Reunions</h4><Link to="/family-reunions" title="family reunions"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/axe.svg" alt="mobile axe"/>
                            <h4 className="heading-3 mt-2">Mobile Axe Throwing</h4><Link to="/mobile-axe-throwing" title="mobile axe throwing"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/009-birthday.svg" alt="festivals"/>
                            <h4 className="heading-3 mt-2">Festivals</h4><Link to="/festivals" title="festivals"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/006-heart.svg" alt="non-profit fundraiser"/>
                            <h4 className="heading-3 mt-2">Non-Profit Fundraiser</h4><Link to="/non-profit-events" title="non-profit fundraiser"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/005-award.svg" alt="leagues"/>
                            <h4 className="heading-3 mt-2">Leagues</h4><Link to="/leagues" title="leagues"></Link></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4"><a className="booknow hvr-pulse" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a></div>
            </div>
        </section>

        <section id="onsite-reservation" className="component bg-yellow py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <h3 className="heading-3 my-0 font-weight-normal">Reservation only for onsite events. Find out where you can just show up and throw!</h3>
                    </div>
                    <div className="col-lg-4"><Link to="/" className="float-right booknow hvr-shadow">#where's jack</Link></div>
                </div>
            </div>
        </section>

        <section id="find-map" className="component bg-white pt-5">
            <div className="container">
                <h4>Find map below of where we are!</h4>
                <div className="row justify-content-center">
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/peaks-and-pines.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/peaks-and-pines.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                    <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>Monday's Peaks N Pines Brewery</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>4005 Tutt Blvd, Colorado Springs, CO 80922</span></li>
                                  </ul>
                                  </div>
                                </div>
                            </Modal>
                            <div className="item-map-venue">
                              <h5 className="text-white">Peaks N Pines Brewery</h5>
                            </div>
                            </div>

                            
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/rocky-mountain.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/rocky-mountain.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Wednesday's Rocky Mountain Brewery</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>625 Paonia Street</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                                  </ul>
                                  </div>
                                </div>
                                </Modal>
                                <div className="item-map-venue">
                                  <h5 className="text-white">Rock Mountain Brewery</h5>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/fh-beerworks-east.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/fh-beerworks-east.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Thursday's FH Beer Works East</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>2490 Victor Pl, Colorado Springs, CO 80915</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                                  </ul>
                                  </div>
                                </div>
                                </Modal>
                                <div className="item-map-venue">
                                  <h5 className="text-white">FH Beer Works East</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://static1.squarespace.com/static/59625a9e9de4bb7b8d110ca4/t/59b441706f4ca36cb5f90952/1504985461265/LLA-Final-Logo.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://static1.squarespace.com/static/59625a9e9de4bb7b8d110ca4/t/59b441706f4ca36cb5f90952/1504985461265/LLA-Final-Logo.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Friday's Landlocked Ales</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>3225 S Wadsworth Blvd, Lakewood, CO 80227</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                                  </ul>
                                  </div>
                                </div>
                                </Modal>
                                <div className="item-map-venue">
                                  <h5 className="text-white">Landlocked Ales</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/java-and-punk.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/java-and-punk.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Friday's Java Punk Coffee</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>4029 Tutt Blvd, Colorado Springs, CO 80922</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>5-8pm</span></li>
                                  </ul>
                                  </div>
                                </div>
                                </Modal>
                                <div className="item-map-venue">
                                  <h5 className="text-white">Java Punk Coffee</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/boggy-brew.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/boggy-brew.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Saturday's Boggy Draw Brewery</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>3535 S Platte River Dr Unit L, Sheridan, CO 80110</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>2-5pm</span></li>
                                  </ul>
                                  </div>
                                </div>
                                </Modal>
                                <div className="item-map-venue">
                                  <h5 className="text-white">Boggy Draw Brewery</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="item-map">
                            <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/black-forest-brewing.jpg)'}}>
                                <Modal
                                    mclass="modal-450w"
                                    size="sm"
                                    btnclass="item-map-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/pin.svg" alt="play"/>
                                >
                                <div class="item-map-body bg-white p-0">
                                  <div className="item-map-background" style={{backgroundImage: 'url(https://usaaxethrowing.org/img/black-forest-brewing.jpg)'}}/>
                                  <div className="item-map-content p-4">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/event.svg" className="mr-1"/><span>Sunday's Black Forest Brewing Company</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/location-pin.svg" className="mr-1"/><span>11590 Black Forest Rd #50, Colorado Springs, CO 80908</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1"/><span>1-4pm</span></li>
                                    <li className="d-flex align-content-start"><LazyLoadImage effect="blur" src="/img/money-bag.svg" className="mr-1"/><span>$10 unlimited</span></li>
                                  </ul>
                                  </div>
                                </div>
                                </Modal>
                                <div className="item-map-venue">
                                  <h5 className="text-white">Black Forest Brewing Company</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>   
        </section>

        <section id="events" className="component bg-dirty-white">
            <div className="container-fluid">
                <div className="intro text-center mb-5"><LazyLoadImage effect="blur" src="/img/axes.png" style={{width: '50px'}} alt="axe"/>
                    <h2 className="heading-2 mt-0">Events</h2>
                    <p className="lead">Jack's Axe Throwing video events</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(https://static.wixstatic.com/media/d64b37_a1bef407284840b4a73fdf758d90e052~mv2.jpg)'}}>
                              <Modal
                                mclass="modal-90w"
                                    btnclass="item-event-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/>
                                >
                                <iframe title="video" className="mb-0" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F854055368117721%2F&width=500&show_text=false&appId=1037601643039892&height=280" width="100%" height="500"  scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" allowFullScreen={true}></iframe>
                            </Modal>
                            </div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">We tried axe throwing and it didn't go as planned! Here's a SNEAK PEEK at the next #Challenge Christina!</h5>
                                <p>Bloopers before the segment? Why not! Here's a look at our upcoming #ChallengeChristina with Jack's Axe Throwing! Think Abbie Burke, Lauren McDonald</p>
                            </div>
     
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(https://static.wixstatic.com/media/d64b37_733e98c0558f41ef9813f5ffc6cb1c69~mv2.jpg)'}}>
                                <Modal
                                    mclass="modal-90w"
                                    btnclass="item-event-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/>
                                >
                                    <iframe title="video" className="mb-0" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F1911670008932295%2F&width=500&show_text=false&appId=1037601643039892&height=893" width="100%" height="893"  scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" allowFullScreen={true}></iframe>
                                </Modal>
                            </div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3"><span alt="special character" role="img" aria-label="characters">��🇸⛏</span> Corporate Axe Throwing League Sponsorship opportunity! <span alt="special character" role="img" aria-label="characters">🇺🇸⛏ 🇺🇸 ⛏</span> Listen up if you want to get</h5>
                                <p><span alt="special character" role="img" aria-label="characters">��🇸⛏</span> Corporate Axe Throwing League Sponsorship opportunity! <span alt="special character" role="img" aria-label="characters">🇺🇸⛏ 🇺🇸 ⛏</span> Listen up if you want to get exposed to 10s if not 100s of thousands of people thro</p>
                            </div>
                        

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(https://static.wixstatic.com/media/d64b37_99580c56e8e645e6b9d59f112e2b9c0b~mv2.jpg)'}}>
                                <Modal
                                    mclass="modal-90w"
                                    btnclass="item-event-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/>
                                >
                                <iframe title="video" className="mb-0" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F1860131457437453%2F&width=500&show_text=false&appId=1037601643039892&height=889" width="500" height="889" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" allowFullScreen={true}></iframe>
                            </Modal>
                            </div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Jack's Axe Throwing at Haunted Mines</h5>
                                <p>Jack's Axe Throwing at Haunted Mines</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            
                            <div className="item-event-video" style={{backgroundImage: 'url(//i.ytimg.com/vi/KfzYwlbFuiM/maxresdefault.jpg)'}}>
                                <Modal
                                    mclass="modal-90w"
                                    btnclass="item-event-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/>
                                >
                                    <iframe title="video"  className="mb-0" width="100%" height="400" src="https://www.youtube.com/embed/KfzYwlbFuiM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </Modal>   
                            </div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Axe Throwing in Colorado Springs| Challenge Christina | | Jack's Axe Throwing</h5>
                                <p>Challenge Christina: Axe Throwing Jack's Axe Throwing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(//images-vod.wixmp.com/d64b378a-6e9d-44f2-8e38-88b8c0ab08ee/images/44409d5683d64e458597c9a2743699ebf002/v1/fill/w_768,h_431,q_85,usm_0.66_1.00_0.01/file.webp)'}}>
                                <Modal
                                    mclass="modal-90w"
                                    btnclass="item-event-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/>
                                >
                                <iframe title="video" className="mb-0" src="https://player.vimeo.com/video/323622512?title=0&byline=0&portrait=0" width="100%" height="395" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                            </Modal>
                            </div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Jack's Axe Throwing Colorado Springs</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(//images-vod.wixmp.com/d64b378a-6e9d-44f2-8e38-88b8c0ab08ee/images/de47e245cf904ea8a31b9305d433a4c6f002/v1/fill/w_768,h_431,q_85,usm_0.66_1.00_0.01/file.webp)'}}>
                                <Modal
                                    mclass="modal-90w"
                                    btnclass="item-event-play" 
                                    html=<LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/>
                                >
                                    <iframe title="video" className="mb-0" src="https://player.vimeo.com/video/323639718?title=0&byline=0&portrait=0" width="100%" height="395" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                                </Modal>
                            </div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Axe Throwing in Colorado | Jack's Axe Throwing</h5>
                                <p>What's the scoop on Jack the Lumberjack | Jack's Axe Throwing Colorado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4"><a className="booknow hvr-pulse" href="https://fareharbor.com/embeds/book/jacksaxethrowing/">Book Now</a></div>
            </div>
        </section>
        <section id="blog" className="component bg-yellow">
            <div className="container">
                <div className="intro text-center mb-5">
                    <h2 className="heading-2">Blog</h2>
                    <h5 className="mt-0">Jack's Axe Throwing latest blog</h5>
                </div>
                <div className="row">
                  {posts.slice(0,2).map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <LazyLoadComponent key={node.id}>
                        <div className="col-12 mb-4 mb-md-5">
                          <div className="item-blog">

                              <div className="item-blog-image" style={{backgroundImage: `url("https://res.cloudinary.com/dsoapbw26/image/upload/c_scale,w_900/v1550113892/jackaxethrowing/${node.frontmatter.banner}")`}}>
                                  <div className="item-blog-title">
                                      <h3 className="heading-3 mt-3 text-white">
                                        <Link to={`blog/${node.fields.slug}`} className="text-white item-blog-link">
                                          {title}</Link></h3>
                                  </div>
                              </div>
                              <div className="item-blog-content">
                                  <ul className="list-unstyled d-flex d-xl-flex item-blog-created">
                                      <li className="mr-3"><LazyLoadImage effect="blur" src="/img/002-axe.svg" className="mr-1" alt="author"/>{node.frontmatter.author}</li>
                                      <li><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1" alt="clcok"/>{node.frontmatter.date}</li>
                                  </ul>
                                  <p>{node.excerpt}</p>
                                  <Link to={`blog/${node.fields.slug}`} className="text-dark-blue" title={title}>Read More</Link></div>
                            </div>
                        </div>
                      </LazyLoadComponent>
                    )
                  })}
                  
                </div>
                <div className="d-flex justify-content-center mt-4"><Link to="/blog" className="booknow hvr-shadow" title="see all of our blog posts">more</Link></div>
            </div>
        </section>
        <section id="contact" className="component bg-dirty-white">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="intro mb-5">
                    <h2 className="heading-2">We Increase Small Business Profits</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
            <form name='Business Profit Form' method='POST' data-form-id="5c87456e6d01764f7a54174d" webriq="true">
              <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" name="name" className="form-control form-control-lg p-2" id="inputName" placeholder="Enter your name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="inputBname">Business Name</label>
              <input type="text" name="business name" className="form-control form-control-lg p-2" id="inputBname" placeholder="Enter your business name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input type="email" name="email address" className="form-control form-control-lg p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" required/>
              <small id="emailHelp" className="form-text text-dark-gray">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" name="phone number" className="form-control form-control-lg p-2" id="inputPhone" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group">
                <div className="webriq-recaptcha"></div>
            </div>
            
            
            <button type="submit" className="booknow hvr-shadow mt-1">SUBMIT</button>
          </form>

                </div>
                <div className="col-md-7">
                <div className="swiper-container pb-5">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide"><LazyLoadImage effect="blur" className="mb-0 img-fluid" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_fill,h_450,w_700/v1550557373/jackaxethrowing/slide1.jpg" alt="slide 1"/></div>
                      <div className="swiper-slide"><LazyLoadImage effect="blur" className="mb-0 img-fluid" src="https://res.cloudinary.com/dsoapbw26/image/upload/c_fill,h_450,w_700/v1550557373/jackaxethrowing/slide2.jpg" alt="slide 2"/></div>
                    </div>
                     <div className="swiper-pagination"></div>
                  </div>
                </div>
            </div>
            </div>
        </section>
        <Exit/>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            banner
            author
            shortdesc
          }
        }
      }
    }
  }
`
