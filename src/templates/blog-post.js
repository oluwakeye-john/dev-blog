import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import PostHead from "../components/PostHead/PostHead";
import PostExtras from "../components/PostExtras/PostExtras";
import TableOfContent from "../components/TableOfContent/TableOfContent";

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
        <Layout title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <div className="row text-left">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-7">
                    <PostHead post={post} data={data} />
                    <section dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr/>
                    <PostExtras previous={previous} next={next} />
                </div>
                <div className="col-lg-3">
                    <TableOfContent tableOfContents={post.tableOfContents} />
                </div>
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    
    file(relativePath: { eq: "default2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
