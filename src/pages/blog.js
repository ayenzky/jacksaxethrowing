import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Latest Blog"
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Container>
        <div className="blog-list">
        {posts.map(({ node, index }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="blog-list-item mb-5" key={node.fields.slug}>
              <h3 className="mb-3">
                <Link style={{ boxShadow: `none` }} to={`blog/${node.fields.slug}`}>
                  {title}
                </Link>
              </h3>
              <ul className="list-unstyled d-flex d-xl-flex item-blog-created flex-wrap ml-0">
                  <li className="mr-3"><LazyLoadImage effect="blur" src="/img/002-axe.svg" className="mr-1" alt="author"/>{node.frontmatter.author}</li>
                  <li><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1" alt="clcok"/>{node.frontmatter.date}</li>
              </ul>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <div class="d-flex justify-content-start mt-4"><Link class="booknow hvr-shadow" to={`blog/${node.fields.slug}`}>read more</Link></div>
            </div>
          )
        })}
        </div>
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
          }
        }
      }
    }
  }
`
