import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data, location }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark


    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout title={siteTitle} location={location}>
            <SEO title={tag} />

            <div className="text-left container">
                <h1>{tag}</h1>
                <br />
                <ul className="list-group">
                    {edges.map(({ node }) => {
                        const { slug } = node.fields
                        const { title } = node.frontmatter
                        return (
                            <li key={slug} className="list-group-item">
                                <Link to={slug}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>

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
            title
          }
        }
      }
    }
  }
`