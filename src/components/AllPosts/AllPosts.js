import React from "react";
import Cards from "../Cards/Cards";

export default ({posts, defaultImage, count}) => (
    <div>
        <div className="container-fluid">
            <p className="text-left">Latest Posts ({`${count}`})</p>
            <div className="row">
                {
                    posts.map(({ node }, index) => (
                            <Cards key={index} node={node} defaultImage={defaultImage} />
                        )
                    )
                }
            </div>
        </div>
    </div>
)


