import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Exit from '../components/Exit'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'izimodal/css/iziModal.min.css';
import './index.css'
// import Modal from '../components/Modal'


class IndexPage extends React.Component {
  componentDidMount() {
    if(window) {
        const script = document.createElement("script");
        script.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js`
        const headScript = document.getElementsByTagName('script')[0]
        headScript.parentNode.insertBefore(script, headScript)

        setTimeout(function(){
        const iziscript = document.createElement("script");
        iziscript.src= `https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.5.1/js/iziModal.min.js`
        document.body.appendChild(iziscript);

        }, 5000)
        setTimeout(function(){
        const cusscript = document.createElement("script");
        cusscript.src= `/js/custom.js`
        document.body.appendChild(cusscript);

        }, 8000)
        

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
                        <div className="d-flex justify-content-start mt-4"><Link to="/" className="booknow hvr-shadow">read more</Link></div>
                    </div>
                </div>
            </div>
        </section>
         <section id="why-jack" className="component bg-yellow">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    <LazyLoadComponent>
                      <iframe title="video" width="100%" height="400" src="https://embed.wix.com/video?instanceId=21388e2d-d8d8-4852-a820-2d588999c4d8&biToken=b2c34adb-917f-086c-0b55-639a02d50d8c&pathToPage=&channelId=12f6f17c4f3d4acdbe1cb038f3c11428&videoId=9e0f512bd506403da782e8aed3decb26&compId=comp-jqq8z8af&sitePageId=idajh" frameBorder="0" allowFullScreen></iframe>
                    </LazyLoadComponent>
                  </div>
                    <div className="col-lg-5 pl-3 pl-lg-5">
                        <h2 className="heading-2 text-dark-blue mt-3 mt-lg-0">Why the name, Jack's?</h2>
                        <h3 className="heading-3">Who is Jack?</h3>
                        <p>Jack is not a person, but the business inspiring us all. I know, we’re sorry for the sad news. BUT, we can all aspire to be the best Lumberjill or Lumberjack we can be. Happy Throwing!</p>
                        <div className="d-flex justify-content-start mt-4"><Link to="/" className="booknow hvr-shadow">read more</Link></div>
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
                <div className="row justify-content-center align-items-center align-content-center">
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/008-gift.svg" alt="birthday parties"/>
                            <h4 className="heading-3 mt-2">Birthday Parties</h4><Link to="/" title="birthday parties"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/012-tuxedo.svg" alt="bachelor parties"/>
                            <h4 className="heading-3 mt-2">Bachelor/ette Parties</h4><Link to="/" title="bachelorette parties"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/011-shake.svg" alt="corporate events"/>
                            <h4 className="heading-3 mt-2">Corporate Events</h4><Link to="/" title="corporate events"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/015-wedding.svg" alt="widding"/>
                            <h4 className="heading-3 mt-2">Weddings</h4><Link to="/" title="weddings"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/007-family.svg" alt="family reunion"/>
                            <h4 className="heading-3 mt-2">Family Reunions</h4><Link to="/" title="family reunions"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/axe.svg" alt="mobile axe"/>
                            <h4 className="heading-3 mt-2">Mobile Axe Throwing</h4><Link to="/" title="mobile axe throwing"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/009-birthday.svg" alt="festivals"/>
                            <h4 className="heading-3 mt-2">Festivals</h4><Link to="/" title="festivals"></Link></div>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center mb-4">
                        <div className="offer"><LazyLoadImage effect="blur" src="/img/006-heart.svg" alt="non-profit fundraiser"/>
                            <h4 className="heading-3 mt-2">Non-Profit Fundraiser</h4><Link to="/" title="non-profit fundraiser"></Link></div>
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
                    <div className="col-lg-8">
                        <h3 className="heading-3 my-0 font-weight-normal">Reservation only for onsite events. Find out where you can just show up and throw!</h3>
                    </div>
                    <div className="col-lg-4"><Link to="/" className="float-right booknow hvr-shadow">#where's jack</Link></div>
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
                              <a href="https://www.facebook.com/video.php?v=1911670008932295" className="item-event-play trigger" data-izimodal-open="#modal-iframe-1"><LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/></a></div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">We tried axe throwing and it didn't go as planned! Here's a SNEAK PEEK at the next #Challenge Christina!</h5>
                                <p>Bloopers before the segment? Why not! Here's a look at our upcoming #ChallengeChristina with Jack's Axe Throwing! Think Abbie Burke, Lauren McDonald</p>
                            </div>
                            <div className="modal-iframe" id="modal-iframe-1">
                              <div className="fb-video" data-href="https://www.facebook.com/video.php?v=854055368117721" data-width="600" height="400" data-allowfullscreen="true" data-show-text="true" data-show-captions="true"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(https://static.wixstatic.com/media/d64b37_733e98c0558f41ef9813f5ffc6cb1c69~mv2.jpg)'}}><a href="/" className="item-event-play" data-izimodal-open="#modal-iframe-2"><LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/></a></div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">��🇸⛏ Corporate Axe Throwing League Sponsorship opportunity! 🇺🇸⛏ 🇺🇸 ⛏ Listen up if you want to get</h5>
                                <p>��🇸⛏ Corporate Axe Throwing League Sponsorship opportunity! 🇺🇸⛏ 🇺🇸 ⛏ Listen up if you want to get exposed to 10s if not 100s of thousands of people thro</p>
                            </div>
                            <div className="modal-iframe" id="modal-iframe-2">
                            <div className="fb-video" data-href="https://www.facebook.com/video.php?v=1911670008932295" data-width="600" height="400" data-allowfullscreen="true" data-show-text="true" data-show-captions="true"></div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(https://static.wixstatic.com/media/d64b37_99580c56e8e645e6b9d59f112e2b9c0b~mv2.jpg)'}}><a href="/" className="item-event-play" data-izimodal-open="#modal-iframe-3"><LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/></a></div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Jack's Axe Throwing at Haunted Mines</h5>
                                <p>Jack's Axe Throwing at Haunted Mines</p>
                            </div>
                            <div className="modal-iframe" id="modal-iframe-3">
                            <div className="fb-video" data-href="https://www.facebook.com/video.php?v=1860131457437453" data-width="600" height="400" data-allowfullscreen="true" data-show-text="true" data-show-captions="true"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(//i.ytimg.com/vi/KfzYwlbFuiM/maxresdefault.jpg)'}}><a href="/" className="item-event-play" data-izimodal-open="#modal-iframe-4"><LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/></a></div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Axe Throwing in Colorado Springs| Challenge Christina | | Jack's Axe Throwing</h5>
                                <p>Challenge Christina: Axe Throwing Jack's Axe Throwing</p>
                            </div>
                            <div className="modal-iframe" id="modal-iframe-4">
                            <iframe title="video" width="600" height="400" src="https://www.youtube.com/embed/KfzYwlbFuiM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(//images-vod.wixmp.com/d64b378a-6e9d-44f2-8e38-88b8c0ab08ee/images/44409d5683d64e458597c9a2743699ebf002/v1/fill/w_768,h_431,q_85,usm_0.66_1.00_0.01/file.webp)'}}><a href="/" className="item-event-play"><LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/></a></div>
                            <div className="item-event-content">
                                <h5 className="font-weight-light mt-3">Jack's Axe Throwing Colorado Springs</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-2">
                        <div className="item-event">
                            <div className="item-event-video" style={{backgroundImage: 'url(//images-vod.wixmp.com/d64b378a-6e9d-44f2-8e38-88b8c0ab08ee/images/de47e245cf904ea8a31b9305d433a4c6f002/v1/fill/w_768,h_431,q_85,usm_0.66_1.00_0.01/file.webp)'}}><a href="/" className="item-event-play"><LazyLoadImage effect="blur" src="/img/play-button.svg" alt="play"/></a></div>
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
                                  <Link to={`blog/${node.fields.slug}`} className="text-dark-blue">Read More</Link></div>
                            </div>
                        </div>
                      </LazyLoadComponent>
                    )
                  })}
                  
                </div>
                <div className="d-flex justify-content-center mt-4"><Link to="/blog" className="booknow hvr-shadow">more</Link></div>
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
