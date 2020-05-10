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
            <div className="container">
                <div className="row">
                <div className="col-lg-4 text-left">
                    <p>Subscribe to my newsletter</p>
                    <form>
                        <div className="input-group">
                            <input type="email" required placeholder="Email" className="form-control mr-2" />
                            <br />
                            <input type="submit" className="btn btn-danger" />
                        </div>
                    </form>
                </div>
                </div>


                <div className="row">
                    <div className="col-lg-4 text-left">
                        <br />
                        © {new Date().getFullYear()}, Built by
                        {` `}
                        <a href="https://oluwakeyejohn.netlify.app" >{site.siteMetadata.author.name}</a>
                    </div>
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4">
                        <br />
                        <SocialButtons />
                    </div>
                </div>
            </div>
            <br />
        </footer>
    );
}