import React from "react";
import Cards from "../Cards/Cards";

export default ({posts, defaultImage}) => (
    <div>
        <div className="container-fluid">
            <p className="text-left">Latest Posts</p>
            <div className="row">
                {
                    posts.map(({ node }) => (
                            <Cards  node={node} defaultImage={defaultImage} />
                        )
                    )
                }
            </div>
        </div>
    </div>
)


