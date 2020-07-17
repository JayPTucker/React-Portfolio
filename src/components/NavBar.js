import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Logo from "./assets/logo.png"


import "./style/NavBar.css";

function NavTabs() {
    const location = useLocation();
    return (
            <Row className="justify-content-md-center text-center">
                <Col md={2}>
                    <img className="logo" src={Logo} alt="My Logo"></img>
                </Col>

                <Col md={6}>
                    <ul className="navbar">

                        <li className="nav-item">
                            <Link
                                to="/"
                                className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                                >
                                    About
                                </Link>
                        </li>
                        

                        <li className="nav-item">
                            <Link
                                to="/work"
                                className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
                                >
                                    Work
                                </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                                >
                                    Portfolio
                                </Link>
                        </li>
                    </ul>
                </Col>
                
            </Row>
    )
}

export default NavTabs;