import React from "react"
import { Link } from "gatsby"

const Layout = ({ title, children }) => {
    return (
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
    )
}

export default Layout
