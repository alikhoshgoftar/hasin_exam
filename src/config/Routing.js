import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './../pages/Home'
  import AboutUs from './../pages/AboutUs'

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/aboutUs">
                    <AboutUs />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
