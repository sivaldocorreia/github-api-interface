import React, { useState } from 'react';
import logo from "./github-logo.png";
import ReorderIcon from '@material-ui/icons/Reorder';
import "./index.css";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    return (
            <div className='nav--bar'>
                <div className="leftContainer">
                    <a href="http://www.github.com"><img className="nav--logo" src={logo} alt="Github logo" /></a>
                </div>
                <div className='rightContainer'>
                    <div className="links" id={showLinks ? "hidden" : ""}>
                        <a href="/">Home</a>
                        <a href="http://www.github.com/explore">Explore</a>
                        <a href="http://www.github.com/marketplace">Marketplace</a>
                    </div>
                    <button onClick={() => setShowLinks(!showLinks)}>{" "}
                    <ReorderIcon />
                    </button>
                </div>
            </div>
    )
};

export default Navbar;