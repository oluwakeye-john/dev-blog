import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/AllPosts/AllPosts";
import MainSideBar from "../components/MainSideBar";

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const count = data.allMarkdownRemark.totalCount

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Home" />
            <div className="row">
                {/* <div className="col-lg-1">

                </div> */}
                <div className="col-lg-10">
                    {
                        posts.length !== 0
                            ? <AllPosts count={count} posts={posts} defaultImage={data.file.childImageSharp.fluid} />
                            : <div>
                                <br />
                                <h1 className="text-muted">
                                    No posts yet
                                    <span style={{color: "grey"}} className="fas fa-frown-open" />
                                </h1>
                            </div>
                    }
                </div>
                <div className="col-lg-2">
                    <MainSideBar />
                </div>
            </div>
            <br /><br />
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    
    file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
