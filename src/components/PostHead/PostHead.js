import React from "react";
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({post, data, author}) => (
    <header >
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
        <div>
            <h1 className="" style={{fontFamily: "Roboto Black"}}>
                {post.frontmatter.title}
            </h1>
            <p>{post.frontmatter.description}</p>
            <p>
                {post.frontmatter.date} - {post.timeToRead} min read
            </p>
            <p>
                By <Link to={'about'}>{post.frontmatter.author || author.name }</Link>
            </p>
            {
                post.frontmatter.tags
                &&
                post.frontmatter.tags.split(',').map((tag, index) => (
                    <span key={index} style={{fontSize: "16px"}} className="badge badge-success mr-1"> {tag} </span>
                ))
            }
        </div>
        <hr /><br />

    </header>
)