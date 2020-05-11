import React from "react";
import './Footer.scss'
import { graphql, useStaticQuery } from "gatsby";
import SocialButtons from "../SocialButtons";

const handleSubscribeForm = (e) => {
    e.preventDefault()
    const subscribeForm = document.getElementById('subscribe-form')
    subscribeForm.reset()
    const email = subscribeForm.email.value
    let formData = new FormData()
    formData.append('form-name', 'subscribe')
    formData.append('email', email)

    fetch('/', {
        method: "POST",
        body: formData
    })
        .then(resp => {
            if (!resp.ok) {
                throw Error('Error')
            }
            else {
                return (
                    resp.json()
                )
            }

        })
        .then(resp => {

        })
        .catch(err => {
            console.log(err)
            alert("Error submitting form")
        })
}

const Footer = () =>  {
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
                        <p className="mt-1" style={{ fontFamily: "Open Sans" }}>Subscribe to my newsletter</p>
                        <form id="subscribe-form" onSubmit={handleSubscribeForm}>
                            <div className="input-group">
                                <input type="email" name="email" required placeholder="Email" className="form-control mr-2"/>
                                <br/>
                                <input type="submit" className="btn btn-danger"/>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-4 text-left">
                        <br/>
                        © {new Date().getFullYear()}, Built by
                        {` `}
                        <a href="https://oluwakeyejohn.netlify.app">{site.siteMetadata.author.name}</a>
                    </div>
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4">
                        <br/>
                        <SocialButtons/>
                    </div>
                </div>
            </div>
            <br/>
        </footer>
    );
}

export default Footer