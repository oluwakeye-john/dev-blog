import React, { Component } from "react";
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar";
import './layout.scss'
import Footer from "./Footer/Footer";
import FixedScroll from "./FixedScroll";

export default ({title, children}) =>  (
    <div id="pageTop">
        <Navbar title={title} />
        <main>
            <div className="container-fluid text-center">
                {children}
            </div>
        </main>
        <Footer />
        <FixedScroll />
    </div>
)
