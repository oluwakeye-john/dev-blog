import React from "react";
import { Link } from "gatsby";

export default ({next, previous}) => (
    <div>
        <div className="text-center">
            <div style={{display: "inline"}} className="mr-2">
                {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                    </Link>
                )}
            </div>

            <div style={{display: "inline"}} className="ml-2">
                {
                    next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )
                }
            </div>
        </div>
        <br />
    </div>
)