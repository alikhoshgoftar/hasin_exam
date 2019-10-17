import React from "react";
import {
    Link
} from "react-router-dom";

export default function TopMenu() {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home page</Link>
                        </li>
                        <li>
                            <Link to="/aboutUs">About us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}