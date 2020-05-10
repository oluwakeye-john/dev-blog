import React, { Component } from "react"
import './Navigation.scss'
import {Link} from 'gatsby'
import { slide as Menu } from "react-burger-menu"
import SocialButtons from "../SocialButtons";

const Sidebar = ({isMenuOpen, isOpen, menuItems}) => (
    <Menu width={window.innerWidth} onStateChange={isMenuOpen} disableAutoFocus right customBurgerIcon={false} isOpen={isOpen}>
        {
            menuItems.map((item, index) => (
                <div key={index} className="text-center" >
                    <Link activeClassName='menu-active' style={{color: "white"}} className="menu-item" to={item.url}>
                        <span className={item.icon}> </span> {item.name}
                    </Link>
                    <hr />
                </div>
            ))
        }
        <div className="text-center">
            <br /><br />
            <SocialButtons size="big" />
        </div>

    </Menu>
)

class Navigation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    toggleMenuOpen = () => {
        this.setState({
            menuOpen : !this.state.menuOpen
        })
    }

    isMenuOpen = (s) => {
        if(s.isOpen !== true){
            this.setState({
                menuOpen: false
            })
        }
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <Sidebar menuItems={this.props.menuItems} isMenuOpen={this.isMenuOpen} isOpen={this.state.menuOpen}  />
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{backgroundColor: this.props.backgroundColor || "white"}}>
                    <div className="container">
                        <Link to='/' style={{color: this.props.color || "black"}} className="navbar-brand">Gatsby</Link>
                        <button className="navbar-toggler" onClick={this.toggleMenuOpen} style={{border: "0"}}>
                            <span className="navbar-toggler-icon"> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto"  data-toggle="collapse" data-target=".navbar-collapse.show">
                                {
                                    this.props.menuItems.map((item, index) => (
                                        <Link style={{color: this.props.color || "black"}} key={index} activeClassName='menu-active' className="nav-link" to={item.url}>
                                            <span className={item.icon}> </span> {item.name}
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation