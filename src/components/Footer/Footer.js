import React from "react";
import './Footer.scss'
import { graphql, useStaticQuery, Link } from "gatsby";

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
            <Link to={'about'} >{site.siteMetadata.author.name}</Link>
        </footer>
    );
}