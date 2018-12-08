import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./screens/home";
import Intro from "./screens/intro";
import Donation from "./screens/donation";
import Projet from "./screens/project";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/introduction" component={Intro} />
          <Route path="/donation" component={Donation} />
          <Route path="/projet+realises" component={Projet} />
        </div>
      </Router>
    );
  }
}

export default App;
