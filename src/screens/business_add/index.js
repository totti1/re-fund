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
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Cooperative
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Cooperative Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Business Title"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ color: "black" }}>
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Description"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Peoples involved
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Amount of people involved"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Capital
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Capital"
                />
              </div>
              <button type="button" class="btn btn-dark">
                Send
              </button>
            </form>
          </Paper>
        </Menu>
      </div>
    );
  }
}
export default View_Message;
