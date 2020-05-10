import React from "react";
import SEO from "../components/seo";
import Layout from '../components/layout'

export default () => (
    <Layout title={'title'}>
        <SEO title={'Contact'} />
        <h1 className="text-muted">Get In Touch</h1>
        <hr /><br />
        <div className="row text-center text-muted">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
                <form className="text-left" method="post" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact"/>

                    <label htmlFor="name">Name</label>
                    <input type={'text'} className="form-control" placeholder={'John Doe'} required name="name" />
                    <br />

                    <label htmlFor="name">Email</label>
                    <input type={'email'} id="email" className="form-control" placeholder={'mail@email.com'} required name="email" />
                    <br />

                    <label htmlFor="name">Message</label>
                    <textarea rows={6} id="message" placeholder={'Type message here'} className="form-control" required name="message" />
                    <br /><br />

                    <input type='submit' className='btn btn-danger' />
                </form>
                <br />
            </div>
        </div>
        <br /><br />

    </Layout>
)