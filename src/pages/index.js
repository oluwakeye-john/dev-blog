import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/AllPosts/AllPosts";
import MainSideBar from "../components/MainSideBar";
import SearchBox from "../components/SearchBox";

class BlogIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: "",
      filteredData: []
    }
  }

  handleInputChange = (e) => {
    const query = e.target.value.toLowerCase()
    this.setState({
      input: query
    })

    const posts = this.props.data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { title, description, tags } = post.node.frontmatter;
      
      return (
        title.toLowerCase().includes(query) || description.toLowerCase().includes(query)
        || (tags && tags.join(' ').toLowerCase().includes(query))
      )
    })

    this.setState({
      filteredData: filteredData
    })
  }

  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const out_post = this.state.input.length !== 0
      ? this.state.filteredData
      : posts

    const message = this.state.input.length === 0
      ? "Latest Posts"
      : `Search result for '${this.state.input}'`

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <div className="row">

          <div className="col-lg-10">
            <SearchBox handleInputChange={this.handleInputChange} />
            {
              posts.length !== 0
                ? <AllPosts message={message} posts={out_post} defaultImage={data.file.childImageSharp.fluid} />
                : <div>
                  <br />
                  <h1 className="text-muted">
                    No posts yet
                    <span style={{ color: "grey" }} className="fas fa-frown-open" />
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
            tags
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
