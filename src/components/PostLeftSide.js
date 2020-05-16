import React from "react";
import TagView from './TagView/TagView'

export default ({post, previous, next, author}) => (
    <div className="position-fixed" style={{width: "200px"}}>
        <div className="container-fluid" >
            <br />
            <h4 className="text-center">{post.frontmatter.title}</h4>
            <hr /><br />
            <p className="text-left">Date: {post.frontmatter.date}</p>
            <p className="text-left">{post.timeToRead} min read</p>
            <p className="text-left">By {post.frontmatter.author || author.name}</p>

            <hr />

            <TagView tags={post.frontmatter.tags} split={true} />

        </div>
    </div>
)