import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import Plant from "./components/Plant/Plant";
import Profile from "./components/Profile/Profile";
import Greenhouse from "./components/Greenhouse/Greenhouse";
import SearchPlant from "./components/SearchPlant/SearchPlant";

const App = () => {
  return (
    <Router>
      <div className="">
        <nav>
          <div className="logo-container">
            <img src={"./logo.png"} />
          </div>
          <ul>
            <li>
              <Link to="/">My Greenhouse</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/login">Login Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/plant">
            <Plant />
          </Route>
          <Route path="/search">
            <SearchPlant />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Greenhouse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
