import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends React.Component {

    render() {
        var isActive = window.location.pathname === this.props.to;
        var className = isActive ? 'active' : '';
        return (
            <li className={"menuItem " + className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default NavLink;