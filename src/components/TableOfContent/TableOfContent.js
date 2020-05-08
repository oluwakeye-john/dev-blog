import React from "react";
import './TableOfContent.scss'

export default ({tableOfContents}) => (
    <div className="position-fixed">
        <div className="container-fluid text-left" >
            <br />
            <h5 className="text-center text-muted">Table Of Content</h5>
            <hr /><br />
            <section dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        </div>
    </div>
)