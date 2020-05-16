import React from 'react'
import './TagView.scss'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'

const TagView = ({ tags, split }) => (
    <div>
        {
            tags
            &&
            tags.map((tag, index) => (
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <span key={index} className="tag-class">{tag}</span>
                    {
                        split
                        &&
                        <br />
                    }
                </Link>
            ))
        }
    </div>
)

export default TagView