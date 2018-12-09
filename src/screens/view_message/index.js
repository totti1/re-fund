import React, { Component } from "react";
import Menu from "../../components/menu";
import { Paper, Typography } from "@material-ui/core";
// import { Link } from 'react-router-dom'
// import "./styles/login.css";

class View_Message extends Component {
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
            <h5>Donator Email</h5>
            <h6 class="card-subtitle mb-2 text-muted">Object</h6>
            <p>Message</p>
            <form validate autoComplete="off">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Amount of money added"
              />
              <br />
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type Message"
              />
              <br />
              <button type="button" class="btn btn-dark">
                Reply
              </button>
            </form>
          </Paper>
        </Menu>
      </div>
    );
  }
}
export default View_Message;
