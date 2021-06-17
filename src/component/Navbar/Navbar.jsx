import logo from '../../Images/logo (1).png';
import ghana from '../../Images/gh.png';
import nigeria from '../../Images/nija.png';
import kenya from '../../Images/kenya.png';
import './Navbar.css'
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-home">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand  logo" href="#">
                        <img src={logo} className="img-responsive" />
                    </a>
                </div>

                <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">ABOUT US</a>
                        </li>
                    </ul>
                    <div className="nav navbar-nav navbar-center flag">
                        <li>
                            <a href="#">
                                <img src={ghana} className="img-responsive" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={nigeria} className="img-responsive" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={kenya} className="img-responsive" />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
