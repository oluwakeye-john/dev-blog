import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar";
import './layout.scss'
import Footer from "./Footer/Footer";

const Layout = ({ title, children }) => {
    return (
        <div>
            <Navbar title={title} />
            <main>
                <div className="container-fluid text-center">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
