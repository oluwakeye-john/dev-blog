import React, { Component } from "react";
import SEO from "../components/seo";
import Layout from '../components/layout'

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fetching: false
        }
    }

    handleContactForm = (e) => {
        e.preventDefault()
        const name = document.getElementById('contact-form').name.value
        const email = document.getElementById('contact-form').email.value
        const message = document.getElementById('contact-form').message.value

        let formData = new FormData()

        formData.append('form-name', "contact")
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)

        this.setState({
            fetching: true
        })

        fetch('/', {
            method: "POST",
            body: formData
        })
            .then(resp => {
                if (!resp.ok){
                    throw Error('Error')
                }
                this.setState({
                    fetching: false
                })
                return resp.json()
            })
            .then(resp => {

            })
            .catch(err => {
                console.log("Error", err)
                alert('Error while sending form.')
            })

    }
    render() {
        return (
            <Layout title={'title'}>
                <SEO title={'Contact'}/>
                <h1 className="">Get In Touch</h1>
                <hr/>
                <br/>
                <div className="row text-center">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        <form className="text-left" method="post" id="contact-form" onSubmit={this.handleContactForm}>
                            
                            <label htmlFor="name">Name</label>
                            <input id="name" type={'text'} className="form-control input-border"  required
                                   name="name"/>
                            <br/>

                            <label htmlFor="email">Email</label>
                            <input id="email" type={'email'}  className="form-control input-border" 
                                   required name="email"/>
                            <br/>

                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={6}  className="form-control input-border"
                                      required name="message"/>
                            <br/><br/>

                            <button type='submit' className='btn btn-danger' style={{borderRadius:"0"}}>
                                {
                                    this.state.fetching
                                    &&
                                    <span className="spinner-border spinner-border-sm mr-1" />
                                }
                                Submit
                            </button>
                        </form>
                        <br/>
                    </div>
                </div>
                <br/><br/>

            </Layout>
        )
    }
}

export default Contact