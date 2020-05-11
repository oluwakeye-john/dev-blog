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
                <h1 className="text-muted">Get In Touch</h1>
                <hr/>
                <br/>
                <div className="row text-center text-muted">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        <form className="text-left" method="post" id="contact-form" onSubmit={this.handleContactForm}>
                            <input type="hidden" name="form-name" value="contact"/>

                            <label htmlFor="name">Name</label>
                            <input type={'text'} className="form-control" placeholder={'John Doe'} required
                                   name="name"/>
                            <br/>

                            <label htmlFor="name">Email</label>
                            <input type={'email'} id="email" className="form-control" placeholder={'mail@email.com'}
                                   required name="email"/>
                            <br/>

                            <label htmlFor="name">Message</label>
                            <textarea rows={6} id="message" placeholder={'Type message here'} className="form-control"
                                      required name="message"/>
                            <br/><br/>

                            <button type='submit' className='btn btn-danger'>
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