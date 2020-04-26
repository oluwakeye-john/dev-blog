import React from "react";
import './TableOfContent.scss'

export default ({tableOfContents}) => (
    <div className="position-fixed">
        <div className="container-fluid text-left" >
            <br />
            <h4 className="text-center">Table Of Content</h4>
            <hr /><br />
            <section dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        </div>
    </div>
)