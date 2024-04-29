import React from "react";

import './NavbarTop.css';

import logo from '../../assets/logo.png';

export default function NavbarTop() {
    return(
        <header className="navbar-top">
            <div className="nav-top-left-item">
                <a href="#" className="nav-leftlang-button">
                    EN
                </a>
            </div>
            <div className="nav-top-right-item">
                <a href="#" className="nav-top-link">
                    <img src={logo} alt="" />
                </a>
            </div>
        </header>
    )
}