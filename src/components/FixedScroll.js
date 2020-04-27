import React, { Component } from "react";

class FixedScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 0
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            console.log('hey', window.scrollY)
            if (window.scrollY > 100){
                this.setState({
                    name: 1
                })

            }
            else {
                this.setState({
                    name: 0
                })
            }
        })
    }

    render() {
        return (
            <div style={{opacity: this.state.name}} className="pageScroll" >
                <a href="#pageTop" className="btn rounded-circle" style={{position: "fixed", bottom: "10px", right: "10px", backgroundColor: "deepskyblue"}}>
                    <span className="fas fa-chevron-up"></span>
                </a>
            </div>
        );
    }
}

export default FixedScroll;