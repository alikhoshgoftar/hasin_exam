import React from "react";
import './TopMenu.css'
import NavLink from "./NavLink";
import {connect} from 'react-redux'
import {inc} from './../../redux/actions/Inc'
class TopMenu extends React.Component {
increment=()=>{
this.props.inc()
}
    render() {
        console.log("state",this.state)
        console.log("state",this.props)
        return (
            <nav className={"topMenu"}>
                {this.props.counter}
                <ul>
                    <NavLink to="/">خانه</NavLink>
                    <NavLink to="/aboutUs">درباره حصین</NavLink>
                </ul>

                <button onClick={this.increment} >inc</button>
            </nav>

        );
    }
}

const mapstateToPops=(state)=>({
    counter:state.posts.inc
})

export default connect(mapstateToPops,{inc})(TopMenu)
