import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ title, children }) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Hello</a>
            </nav>
            <div>
                <h1>
                    <Link to={`/`}
                    >
                        {title}
                    </Link>
                </h1>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </div>
    )
}

export default Layout
