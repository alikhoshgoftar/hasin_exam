import React from "react";
import './TopMenu.css'
import NavLink from "./NavLink";
import {connect} from 'react-redux'
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
const mapstateToPops=(state)=>({
    counter:state.posts.inc
})

export default connect(mapstateToPops)(TopMenu)
