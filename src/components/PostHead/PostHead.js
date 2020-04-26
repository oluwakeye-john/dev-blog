import React from "react";
import Img from "gatsby-image";

export default ({post, data}) => (
    <header>
        <div className="row">
            <div className="">
            </div>
            <div className="col-lg-12">
                {
                    post.frontmatter.featuredImage
                        ? <Img className="img-fluid" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                        : <Img className="img-fluid" fluid={data.file.childImageSharp.fluid} />
                }
            </div>
        </div>
        <hr />
        <h1>
            {post.frontmatter.title}
        </h1>
        <p>
            {post.frontmatter.date} - {post.timeToRead} min read
        </p>
        {
            post.frontmatter.tags
            &&
            post.frontmatter.tags.split(',').map(tag => (
                <span className="badge badge-success mr-1"> {tag} </span>
            ))
        }
        <hr /><br />

    </header>
)