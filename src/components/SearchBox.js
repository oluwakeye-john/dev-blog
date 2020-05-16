import React from 'react'

const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-4">
                <div className="container">
                    <input onChange={handleInputChange} className="form-control input-border" type="search" placeholder="Search Here" />
                </div>
                <br />
            </div>
        </div>
    )
}

export default SearchBox