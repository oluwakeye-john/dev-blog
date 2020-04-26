import React from "react";
import Bio from '../components/bio'
import SEO from "../components/seo";
import Layout from "../components/layout";

export default ({data, location}) => (
    <Layout location={location} title="Hey">
        <SEO title="Home" />

        <p style={{height: "75vh"}}><Bio/></p>
    </Layout>
)