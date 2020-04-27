import React from "react";
import './Footer.scss'
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
                author {
                  name
                }
              }
            }
          }
        `
    )
    return (
        <footer className="bg-dark">
            © {new Date().getFullYear()}, Built with love by
            {` `}
            <a href="https://github.com/oluwakeye-john">{site.siteMetadata.author.name}</a>
        </footer>
    );
}