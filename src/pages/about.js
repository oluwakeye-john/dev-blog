import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from 'gatsby-image'
import SocialButtons from "../components/SocialButtons";
import {Link} from 'gatsby'

export default ({data, location}) => {
    const { author, social } = data.site.siteMetadata
    return (
        <Layout location={location} title="Hey">
            <SEO title="About"/>
            <div className="container">
                <div className=" row">
                    <div className="col-lg-4">
                        <Img className="img-fluid aboutPage" fluid={data.avatar.childImageSharp.fluid}/>
                    </div>
                    <div className="col-lg-6">
                        <div className="container text-center">
                            <br />
                            <h1>{author.name}</h1>
                            <hr /><br />
                            <p> <span className="fas fa-tools"> </span> {author.work}</p>
                            <p><span className="fas fa-home"> </span> {author.address}</p>
                            <p><span className="fas fa-envelope"> </span>
                                <a href={`mailto:${social.email}`}> {social.email}</a>
                            </p>
                            <p><span className="fas fa-location-arrow"> </span>
                                <a href="https://oluwakeyejohn.netlify.app"> oluwakeyejohn.netlify.app</a>
                            </p>
                            <br/>
                            <SocialButtons />
                            <br /><br />
                            <Link to={'contact'} className="btn btn-success rounded-pill" > {'< Contact Me />'} </Link>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </Layout>
    )
}

export const query = graphql`
  {
    avatar: file(absolutePath: { regex: "/profilepix.jpg/" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            work
            address
          }
          social {
            email
          }
        }
      }
  }
`