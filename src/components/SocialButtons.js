import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default () => {
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
        <span>
        <a href={`https://twitter.com/${site.siteMetadata.twitter}`} style={{color: "#50ABF1"}}><span className="fab fa-twitter fa-2x mr-3"> </span></a>
        <a href={`https://github.com/${site.siteMetadata.github}`} style={{color: "black"}}><span className="fab fa-github fa-2x mr-3"> </span></a>
        <a href={`https://medium.com/${site.siteMetadata.medium}`} style={{color: "black"}}><span className="fab fa-medium fa-2x mr-3"> </span></a>
        </span>
    )
}