import React, { Component } from "react";
import { Redirect  } from "react-router-dom";
import { Toaster, Intent } from '@blueprintjs/core'
import "./styles/login.css";
import { app, base } from '../../base'
class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false
    }
  };
  authWithEmailPassword(event) {
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          // create user
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          // they used facebook
          this.loginForm.reset();
          console.log({ intent: Intent.WARNING, message: "Try alternative login." })
        } else {
          // sign user in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user && user.email) {
          this.loginForm.reset()
          this.props.setCurrentUser(user)
          this.setState({redirect: true})
        }
      })
      .catch((error) => {
        console.log({ intent: Intent.DANGER, message: error.message })
      })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/message' } }

    if (this.state.redirect === true) {
      return <Redirect to={from} />
    }
    return (

      <div style={{ paddingTop: "10%" }} className="login">
        <div class="card" style={{ width: "50%", margin: "0 auto" }}>
          <div class="card-body">
          <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  ref={(input) => { this.emailInput = input }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ color: "black" }}>
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  ref={(input) => { this.passwordInput = input }}
                />
              </div>
                <button type="submit" class="btn btn-dark">
                  Login
                </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
