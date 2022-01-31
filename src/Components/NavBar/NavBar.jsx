import React, { Component }from "react";
import "./NavBar.css";

class NavBar extends Component {
    render() { 
        return (
            <div className="NavBar">
                <div className="NavBarWrapper">
                    <div className="topLeft">
                        <span className="logo">SpaceX</span>
                    </div>
                    <div className="topRight">
                        <img src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt="" className="Avatar"/>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default NavBar;