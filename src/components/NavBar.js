import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();
    return (
        <ul className="navbar">

            <li className="nav-item">
                <Link
                    to="/home"
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
    )
}

export default NavTabs;