import React from "react";
import SEO from "../components/seo";
import Layout from '../components/layout'

export default () => (
    <Layout title={'title'}>
        <SEO title={'Contact Us'} />
        <h1>Contact Us</h1>
        <hr /><br />
        <div className="row text-center">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
                <form className="text-left">
                    <label htmlFor="name">Name</label>
                    <input type={'text'} id="name" className="form-control" placeholder={'Name'} required />
                    <br />
                    <label htmlFor="name">Email</label>
                    <input type={'email'} className="form-control" placeholder={'Email'} required />
                    <br />
                    <label htmlFor="name">Message</label>
                    <textarea placeholder={'Message'} className="form-control" required >

                    </textarea>
                    <br />
                    <input type='submit' className='btn btn-success form-control' />
                </form>
                <br />
            </div>
        </div>

    </Layout>
)