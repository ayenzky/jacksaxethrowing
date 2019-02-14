import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container } from "react-bootstrap";
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { rhythm } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = post.frontmatter.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} customclass="singple-blog page">
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Container>
        <ul className="list-unstyled d-flex d-xl-flex item-blog-created flex-wrap ml-0">
            <li className="mr-3"><LazyLoadImage effect="blur" src="/img/002-axe.svg" className="mr-1" alt="author"/>{post.frontmatter.author}</li>
            <li><LazyLoadImage effect="blur" src="/img/001-clock.svg" className="mr-1" alt="clcok"/>{post.frontmatter.date}</li>
        </ul>
        <LazyLoadComponent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </LazyLoadComponent>
        
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`blog/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog/${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <Link to="/blog">Take Me Home</Link>
        <br />
        <br />
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`
