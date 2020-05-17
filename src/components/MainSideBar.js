import React from "react";
import kebabCase from "lodash/kebabCase"
import { Link, useStaticQuery } from 'gatsby'

const MainSideBar = () => {
  const result = useStaticQuery(graphql`
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
  `)

  const group = result.allMarkdownRemark.group
  const top = group.slice(0, 5);

  return (
    <div className="text-left">
      <br /><br />


      <h3 className="text-center">Tags</h3>
      <br />
      <ul className="list-group">
        {top.map(tag => (
          <li key={tag.fieldValue} className="list-group-item">
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
                        </Link>
          </li>
        ))}
      </ul>

      <br /><br />

      <div className="text-center">
        <Link to='/tags'>View More</Link>
      </div>
    </div>
  )

}

export default MainSideBar