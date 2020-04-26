import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import './Cards.scss'

export default ({node, defaultImage}) => {
    const title = node.frontmatter.title || node.fields.slug
    const description = node.frontmatter.description
        ? node.frontmatter.description.length >= 60
            ? (node.frontmatter.description || node.excerpt).slice(0, 60) + "..."
            : node.frontmatter.description || node.excerpt
        : ""
    return (
        <div className="col-lg-4">
            <div className="">
                <div className="card rounded">
                    <Link to={node.fields.slug}>
                        {
                            node.frontmatter.featuredImage
                                ? <Img className="card-img-top img-fluid bbb rounded"  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                : <Img className="card-img-top img-fluid bbb rounded" fluid={defaultImage} />

                        }
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        />
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">Last updated {node.frontmatter.date}</small>
                    </div>
                </div>
                <br />
            </div>
        </div>

        // <article key={node.fields.slug}>
        //     <header>
        //         <h3>
        //             <Link to={node.fields.slug}>
        //                 {title}
        //             </Link>
        //         </h3>
        //         <small>{node.frontmatter.date}</small>
        //
        //     </header>
        //     <section>
        //         <p
        //             dangerouslySetInnerHTML={{
        //                 __html: node.frontmatter.description || node.excerpt,
        //             }}
        //         />
        //     </section>
        // </article>


        // <div className="card bg-dark text-white">
        //     <img src="..." className="card-img" alt="...">
        //         <div className="card-img-overlay">
        //             <h5 className="card-title">Card title</h5>
        //             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
        //                 additional content. This content is a little bit longer.</p>
        //             <p className="card-text">Last updated 3 mins ago</p>
        //         </div>
        // </div>
    )
}