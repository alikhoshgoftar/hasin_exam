import React from "react";
import './TopMenu.css'
import {
    Link
} from "react-router-dom";

export default function TopMenu() {
    return (
        <nav className={"topMenu"}>
            <ul>
                <li className={"menuItem"} >
                    <Link to="/">خانه</Link>
                </li>
                <li className={"menuItem active"} >
                    <Link to="/aboutUs">درباره حصین</Link>
                </li>
            </ul>
        </nav>
    );
}
