import React, {Component} from "react";

import Button from "../../elements/CustomButton/CustomButton.jsx";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Button className={this.props.className} onClick={() => {
                    window.location = "?#/login"
                }}>
                    Login
                </Button>
            </div>
        );
    }
}

export default NavBar;
