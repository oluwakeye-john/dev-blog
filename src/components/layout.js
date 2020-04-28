import React, { Component } from "react";
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar";
import './layout.scss'
import Footer from "./Footer/Footer";
import FixedButtons from "./FixedButtons";

export default ({title, children}) =>  (
    <div>
        <div id="pageTop" style={{minHeight: "90.7vh"}}>
            <Navbar title={title} />
            <main>
                <div className="container-fluid text-center">
                    {children}
                </div>
            </main>
        </div>
        <Footer />
        <FixedButtons />
    </div>
)
