import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { Spinner } from '@blueprintjs/core';
import { app, base } from './base';
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
function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
          ? <Component {...props} {...rest} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> } />
  )
}
function ShowRoute({component: Component, items, param, ...rest}) {
  return (
    <Route
      {...rest}
      render={({match, ...props}) => {
        if (rest.requireAuth === true && !rest.authenticated) {
          return (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
          )
        }

        const item = items[match.params[param]]
        if (item) {
          return <Component item={item} {...props} match={match} {...rest}/>
        } else {
          return <h1>Not Found</h1>
        }
      }}
    />
  )
}
class App extends Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.addAgent = this.addAgent.bind(this);
    this.updateAgent = this.updateAgent.bind(this);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
      business: { }
    };
  }
  addAgent(title) {
    const agents = {...this.state.agents};
    const id = Date.now();
    agents[id] = {
      id: id,
      title: title,
      chordpro: "",
      owner: this.state.currentUser.uid
    };

    this.setState({agents});
  }
  
 
  updateAgent(agent) {
    const agents = {...this.state.agents};
    agents[agent.id] = agent;

    this.setState({agents});
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        })

        this.agentsRef = base.syncState(`agents/${user.uid}`, {
          context: this,
          state: 'agents'
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        })

        base.removeBinding(this.agentsRef);
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
    base.removeBinding(this.agentsRef);
  }

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
        <BrowserRouter>
            <div className="main-content" style={{padding: "1em"}}>
              <div className="workspace">
                <Route exact path="/login" render={(props) => {
                  return <Login setCurrentUser={this.setCurrentUser} {...props} />
                }} />
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
            </div>
           </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
