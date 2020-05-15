import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'
import AllPosts from '../components/AllPosts/AllPosts'
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark


  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title={tag} />

      <div className="text-left container">
        
        <br />
      
        <AllPosts message={`Posts tagged with ${tag}`} count={totalCount} posts={edges} defaultImage={data.file.childImageSharp.fluid} />

        <br />
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
        siteMetadata {
          title
        }
    }

    file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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