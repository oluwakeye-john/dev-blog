import React from "react";
import Bio from '../components/bio'
import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from 'gatsby-image'

export default ({data, location}) => {
    const { author, social } = data.site.siteMetadata
    return (
        <Layout location={location} title="Hey">
            <SEO title="Home"/>
            <div className="container">
                <div className=" row">
                    <div className="col-lg-4">
                        <Img className="img-fluid rounded-circle" fluid={data.avatar.childImageSharp.fluid}/>
                        <hr />
                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <br />
                            <h1 className="text-center" >{author.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </Layout>
    )
}

export const query = graphql`
  {
    avatar: file(absolutePath: { regex: "/profilepix.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
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
`