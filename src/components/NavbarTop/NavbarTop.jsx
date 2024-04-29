import React, { useState } from "react";

import './NavbarTop.css';

import logo from '../../assets/logo.png';

export default function NavbarTop() {
    const [isClicked, setIsclicked] = useState(true);

    return(
        <header className="navbar-top">
            <div className="nav-top-left-item">
                <a onClick={() => setIsclicked(prev => !prev)} href="#" className="nav-leftlang-button">
                    EN
                </a>
            </div>
                {isClicked && <div className="other-lang">
                    <span>
                        RU
                    </span>
                    <span>
                        UA 
                    </span>
                    <span>
                        PT  
                    </span>
                    <span>
                        SP  
                    </span>
                    <span>
                        IT 
                    </span>
                    <span>
                        DE  
                    </span>
                    <span>
                        TR 
                    </span>
                    <span>
                        FR 
                    </span>
                    <span>
                        PL
                    </span>
                </div>}
            <div className="nav-top-right-item">
                <a href="#" className="nav-top-link">
                    <img src={logo} alt="" />
                </a>
            </div>
        </header>
    )
}