import React from "react";
import Cards from "../Cards/Cards";

export default ({posts, defaultImage}) => (
    <div className="container-fluid">
        <div className="row">
            {
                posts.map(({ node }) => (
                        <Cards  node={node} defaultImage={defaultImage} />
                    )
                )
            }
        </div>
    </div>
)


