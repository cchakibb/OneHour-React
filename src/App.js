import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Temperature from "./Components/Temperature";
import CustomizeImage from "./Components/CustomizeImage";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="NavMain">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/temperature">Temperature</NavLink>
            </li>
            <li>
              <NavLink to="/customize-image">Customize image</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/temperature" component={Temperature} />
          <Route exact path="/customize-image" component={CustomizeImage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
