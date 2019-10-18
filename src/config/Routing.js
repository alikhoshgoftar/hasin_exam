import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home'
  import AboutUs from '../pages/AboutUs'
  import ShowPost from '../pages/ShowPost'

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/posts">
                    <ShowPost />
                </Route>
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
