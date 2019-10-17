import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopMenu from './components/TopMenu'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <Router>
      <div>
        <TopMenu/>
        <Switch>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}