import React from "react";
import Cards from "../Cards/Cards";

export default ({posts, defaultImage, message}) => (
    <div>
        <div className="container-fluid">
            <h6 className="text-left">{message || "Latest Posts"} ({`${posts.length}`})</h6>
            <br />
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
