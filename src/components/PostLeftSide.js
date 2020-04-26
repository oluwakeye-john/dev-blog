import React from "react";
import { Link } from "gatsby";

export default ({post, previous, next}) => (
    <div className="position-fixed">
        <div className="container-fluid" >
            <br />
            <h4 className="text-center">{post.frontmatter.title}</h4>
            <hr /><br />
            <p className="text-left">Date: {post.frontmatter.date}</p>
            <p className="text-left">{post.timeToRead} min read</p>

            <hr /><br />

            <h4>Related</h4>
            {previous && (
                <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                </Link>
            )}
            <br />
            {next && (
                <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                </Link>
            )}
        </div>
    </div>
)