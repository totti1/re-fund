import React, { Component } from "react";
import Menu from "../../components/menu";
import { Paper, Typography } from "@material-ui/core";
// import { Link } from 'react-router-dom'
// import "./styles/login.css";

class Add_Agent extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Paper
            style={{
              width: "60%",
              margin: "0 auto",
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Agent Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Add Agent Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ color: "black" }}>
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="button" class="btn btn-dark">
                Add an Agent
              </button>
            </form>
          </Paper>
        </Menu>
      </div>
    );
  }
}
export default Add_Agent;
