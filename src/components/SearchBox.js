import React from 'react'

const SearchBox = ({handleInputChange}) => {
    return (
        <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-4">
                <input onChange={handleInputChange} className="form-control input-border" type="search"placeholder="Search Here" />
                <br />
            </div>
        </div>
    )
}

export default SearchBox