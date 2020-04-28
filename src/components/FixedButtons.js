import React, { Component } from "react";

class FixedButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 0
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
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
            <div>
                <div style={{opacity: this.state.name}} className="pageScrollButton" >
                    <a href="#pageTop" className="btn">
                        <span className="fas fa-chevron-up"> </span>
                    </a>
                </div>
                {/*<div className="subscribeButton">*/}
                {/*    <a href="#" className="btn">*/}
                {/*        <span className="fas fa-envelope" style={{bottom: "10px", left: "10px"}}> </span>*/}
                {/*    </a>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default FixedButtons;