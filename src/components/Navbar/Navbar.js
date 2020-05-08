import React from "react";
import './Navbar.scss'
import {Link} from 'gatsby'
import SocialButtons from "../SocialButtons";

export default ({title}) => (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top ">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">Gatsby</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"  data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link to={'/'} activeClassName={'active'} className="nav-link">Home</Link>
                    <Link to={'about'} activeClassName={'active'} className="nav-link">About</Link>
                    <Link to={'contact'} activeClassName={'active'} className="nav-link">Contact</Link>

                </ul>
                <div className="rounded-pill" >
                    <SocialButtons />
                </div>
            </div>
        </div>
    </nav>
)