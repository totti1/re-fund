import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";

class Login extends Component {
  render() {
    return (
      <div style={{ paddingTop: "10%" }} className="login">
        <div class="card" style={{ width: "50%", margin: "0 auto" }}>
          <div class="card-body">
            <form>
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
                />
              </div>
              <Link to="/message">
                <button type="button" class="btn btn-dark">
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
