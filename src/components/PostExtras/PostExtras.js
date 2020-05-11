import React from "react";
import { Link } from "gatsby";

export default ({next, previous}) => (
    <div>
        <br />
        <div className="text-center">
            <div style={{display: "inline", float: "left"}} className="mr-2">
                {previous && (
                    <Link to={previous.fields.slug} rel="prev" className="text-dark">
                        ← {previous.frontmatter.title}
                    </Link>
                )}
            </div>

            <div style={{display: "inline", float: "right"}} className="ml-2">
                {
                    next && (
                        <Link to={next.fields.slug} rel="next" className="text-dark">
                            {next.frontmatter.title} →
                        </Link>
                    )
                }
            </div>
            <div style={{clear: "both"}} />
        </div>
        <br />
    </div>
)