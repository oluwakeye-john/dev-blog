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
        : (node.excerpt).slice(0, 60) + "..."

    return (
        <div className="col-lg-4">
            <div className="">
                <div className="card rounded">
                    <Link to={node.fields.slug}>
                        {
                            node.frontmatter.featuredImage
                                ? <Img className="card-img-top img-fluid bbb "  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                : <Img className="card-img-top img-fluid bbb" fluid={defaultImage} />

                        }
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span dangerouslySetInnerHTML={{ __html: description, }}/>
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">Last updated {node.frontmatter.date}</small>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}