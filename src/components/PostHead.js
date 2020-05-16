import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import TagView from './TagView/TagView'

export default ({ post, data, author }) => {
    return (
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
                <h1 className="" style={{ fontFamily: "Roboto Black" }}>
                    {post.frontmatter.title}
                </h1>
                <p>{post.frontmatter.description}</p>
                <p>
                    {post.frontmatter.date} •

                    {` ${post.timeToRead}`} min read

                </p>
                <p>
                    By <Link to={'about'}>{post.frontmatter.author || author.name}</Link>
                </p>
                <TagView tags={post.frontmatter.tags} />
            </div>
            <hr /><br />

        </header>
    )

}