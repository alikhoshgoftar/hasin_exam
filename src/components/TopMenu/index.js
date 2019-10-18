import React from "react";
import './TopMenu.css'
import NavLink from "./NavLink";

class TopMenu extends React.Component {

    render() {
        return (
            <nav className={"topMenu"}>
                <ul>
                    <NavLink to="/">خانه</NavLink>
                    <NavLink to="/aboutUs">درباره حصین</NavLink>
                </ul>
            </nav>

        );
    }
}

export default TopMenu
