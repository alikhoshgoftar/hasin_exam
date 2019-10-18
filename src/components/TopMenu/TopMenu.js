import React from "react";
import './TopMenu.css'
import { createPost } from './../../redux/actions/postActions'
import { connect } from "react-redux"
import NavLink from "./NavLink";

class TopMenu extends React.Component {
    menuActive = (e) => {
        const post = {
            title: e,
            body: "b"
        }
        this.props.createPost(post)
    }
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

const mapStateToProps = (state) => {
    console.log("state", state)
    // this.state=state
}

export default connect(null,{ createPost })(TopMenu)
