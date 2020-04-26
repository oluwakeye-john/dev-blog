import React from "react";
import { Link } from "gatsby";

export default ({next, previous}) => (
    <nav>
        <ul>
            <li>
                {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                    </Link>
                )}
            </li>
            <li>
                {next && (
                    <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                    </Link>
                )}
            </li>
        </ul>
    </nav>
)