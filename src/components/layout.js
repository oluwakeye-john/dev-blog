import React from "react";
import './layout.scss'
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

const menuItems = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Tags",
        url: "/tags"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    }
]

export default ({title, children}) =>  (
    <div>
        <div id="pageTop" style={{minHeight: "70vh"}}>
            <Navigation menuItems={menuItems} title={title} color="white" />
            <br /><br />
            <br />
            <main>
                <div className="container-fluid text-center">
                    {children}
                </div>
            </main>
        </div>
        <Footer />
        {/*<FixedButtons />*/}
    </div>
)
