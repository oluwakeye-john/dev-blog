import React from "react";
import './Footer.scss'

export default () => (
    <footer className="bg-dark">
        © {new Date().getFullYear()}, Built with love by
        {` `}
        <a href="https://www.gatsbyjs.org">oluwakeyejohn</a>
    </footer>
)