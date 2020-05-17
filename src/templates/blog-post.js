import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHead from "../components/PostHead";
import PostExtras from "../components/PostExtras/PostExtras";
import TableOfContent from "../components/TableOfContent/TableOfContent";
import PostLeftSide from "../components/PostLeftSide";
import Bio from '../components/bio'
import { DiscussionEmbed } from "disqus-react"



const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const author = data.site.siteMetadata.author

  const image =
    post.frontmatter.featuredImage
      ? post.frontmatter.featuredImage
      : data.file


  const imageSrc = (image && image.childImageSharp.fluid.src)
  const seo_image = imageSrc; 


  const href = post.fields.slug

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.fields.slug },
  }

  return (
    <Layout title={siteTitle}>

      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        thumbnail={seo_image}
        href={href}
      />

      <div className="row">
        <div className="col-lg-2">
          <div className="sidebar">
            <PostLeftSide post={post} previous={previous} next={next} author={author} />
          </div>
        </div>

        <div className="col-lg-7 text-left">

          <PostHead post={post} data={data} author={author} />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr /><br />
          <Bio />
          <br />
          <DiscussionEmbed {...disqusConfig} />
          <br />
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
        author {
            name
        }
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
    
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents (
        maxDepth: 3
      )
      fields {
        slug
      }
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
