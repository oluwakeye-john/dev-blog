import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default ({size}) => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                social {
                  twitter
                  github
                  medium
                }
              }
            }
          }
        `
    )

    return (
        <div>
            {
                size === "big"
                    ? <span>
                        <a href={`https://twitter.com/${site.siteMetadata.social.twitter}`} style={{color: "#50ABF1"}}><span className="fab fa-twitter fa-2x  mr-3"> </span></a>
                        <a href={`https://github.com/${site.siteMetadata.social.github}`} style={{color: "black"}}><span className="fab fa-github fa-2x mr-3"> </span></a>
                        <a href={`https://medium.com/${site.siteMetadata.social.medium}`} style={{color: "black"}}><span className="fab fa-medium fa-2x mr-3"> </span></a>
                    </span>
                    : <span>
                        <a href={`https://twitter.com/${site.siteMetadata.social.twitter}`} style={{color: "#50ABF1"}}><span className="fab fa-twitter  mr-3"> </span></a>
                        <a href={`https://github.com/${site.siteMetadata.social.github}`} style={{color: "black"}}><span className="fab fa-github  mr-3"> </span></a>
                        <a href={`https://medium.com/${site.siteMetadata.social.medium}`} style={{color: "black"}}><span className="fab fa-medium  mr-3"> </span></a>
                    </span>
            }
        </div>
    )
}