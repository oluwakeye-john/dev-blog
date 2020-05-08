import React from "react";
import './Footer.scss'
import { graphql, useStaticQuery } from "gatsby";
import SocialButtons from "../SocialButtons";

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
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://oluwakeyejohn.netlify.app" >{site.siteMetadata.author.name}</a>
            <br />
            <SocialButtons />
        </footer>
    );
}