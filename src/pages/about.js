import React from "react";
import Bio from '../components/bio'
import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from 'gatsby-image'
import SocialButtons from "../components/SocialButtons";

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
                    <div className="col-lg-8">
                        <div className="container text-center">
                            <br />
                            <h1>{author.name}</h1>
                            <hr /><br />
                            <p> <span className="fas fa-tools"> </span> Fullstack web developer</p>
                            <p><span className="fas fa-home"> </span> Lives in Lagos, Nigeria</p>
                            <p><span className="fas fa-envelope"> </span>
                                <a href="mailto:bjohnoluwakeye@gmail.com"> bjohnoluwakeye@gmail.com</a>
                            </p>
                            <br/>
                            <SocialButtons />
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