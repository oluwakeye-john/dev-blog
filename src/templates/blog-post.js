import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHead from "../components/PostHead/PostHead";
import PostExtras from "../components/PostExtras/PostExtras";
import TableOfContent from "../components/TableOfContent/TableOfContent";
import PostLeftSide from "../components/PostLeftSide";

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
            <div className="row">
                <div className="col-lg-2">
                    <div className="sidebar">
                        <PostLeftSide post={post} previous={previous} next={next} />
                    </div>
                </div>

                <div className="col-lg-7 text-left">
                    <PostHead post={post} data={data} />
                    <section dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr/>
                    <PostExtras previous={previous} next={next} />
                </div>

                <div className="col-lg-3">
                    <div className="sidebar">
                        <TableOfContent tableOfContents={post.tableOfContents} />
                    </div>
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
    
    file(relativePath: { eq: "default3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
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
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
