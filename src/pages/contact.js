import React from "react";
import SEO from "../components/seo";
import Layout from '../components/layout'

export default () => (
    <Layout title={'title'}>
        <SEO title={'Contact'} />
        <h1>Contact</h1>
        <hr /><br />
        <div className="row text-center">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
                <form className="text-left" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="name">Name</label>
                    <input type={'text'} id="name" className="form-control" placeholder={'John Doe'} required name={"name"} />
                    <br />
                    <label htmlFor="name">Email</label>
                    <input type={'email'} className="form-control" placeholder={'mail@email.com'} required name={'email'} />
                    <br />
                    <label htmlFor="name">Message</label>
                    <textarea placeholder={'Type message here'} className="form-control" required name={'message'} >

                    </textarea>
                    <br />
                    <input type='submit' className='btn btn-success form-control' />
                </form>
                <br />
            </div>
        </div>

        <br /><br /><br />

    </Layout>
)