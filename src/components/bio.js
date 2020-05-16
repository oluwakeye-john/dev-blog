import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profilepix.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="text-left">
      <Image className="mr-3" style={{ float: "left", width: "50px", height: "50px" }}
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <Link to="/about" style={{color: "inherit"}}>
          <strong>{author.name}</strong>
        </Link>
        <br />
        {author.summary}
        <br />
        {/* <a href={`https://twitter.com/${social.twitter}`}>
                    You should follow him on Twitter
                </a> */}
      </p>
    </div>
  )
}

export default Bio
