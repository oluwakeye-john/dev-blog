import React from "react"
import kebabCase from "lodash/kebabCase"
import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import { Link, graphql } from "gatsby"

const TagsPage = ({ data, location }) => {
    const title = data.site.siteMetadata.title
    const group = data.allMarkdownRemark.group

    return (
        <Layout title={title} location={location}>
            <SEO title="Categories" />
            <div className="text-left container">
                <h1>Tags</h1>
                <br />  
                <ul className="list-group">
                    {group.map(tag => (
                        <li key={tag.fieldValue} className="list-group-item">
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}
export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`