import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import Home from "./screens/home";
import Intro from "./screens/intro";
import Donation from "./screens/donation";
import Projet from "./screens/project";
import Login from "./screens/login";
import Message from "./screens/message";
import View_Message from "./screens/view_message";
import Business_added from "./screens/business_add";
import Add_Agent from "./screens/add_agent";
import Business_Management from "./screens/business_management";
import Business_Analysis from "./screens/business_analysis";

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: "#9356ab",
          main: "#17202A",
          dark: "#593368",
          // dark: '#17202A',
          contrastText: "#fff"
        },
        secondary: {
          light: "#B2E698",
          main: "#588a44",
          dark: "#4BCC32",
          contrastText: "#fff"
        },
        white: {
          light: "#fff",
          main: "#fff",
          dark: "#fff",
          contrastText: "#fff"
        },
        other: {
          light: "#cc3298",
          main: "#3246cc",
          dark: "#3232CC",
          contrastText: "#fff"
        }
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/introduction" component={Intro} />
            <Route path="/donation" component={Donation} />
            <Route path="/projet+realises" component={Projet} />
            <Route path="/login" component={Login} />
            <Route path="/message" component={Message} />
            <Route path="/view+message" component={View_Message} />
            <Route path="/business+added" component={Business_added} />
            <Route path="/add+an+agent" component={Add_Agent} />
            <Route
              path="/business+management"
              component={Business_Management}
            />
            <Route path="/business+analysis" component={Business_Analysis} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
