import React from 'react'

const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-6">
                <div className="container">
                    <input onChange={handleInputChange} className="form-control input-border" type="search" placeholder="Search" />
                </div>
                <br />
            </div>
        </div>
    )
}

export default SearchBox