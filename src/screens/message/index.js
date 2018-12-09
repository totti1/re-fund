import React, { Component } from "react";
import Menu from "../../components/menu";
import { Link } from "react-router-dom";
// import "./styles/login.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Menu>
          <div
            class="card"
            style={{
              width: "60%",
              elevation: 8,
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h5 class="card-title">User Email</h5>
              <h6 class="card-subtitle mb-2 text-muted">Object</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{
              width: "60%",
              elevation: 5,
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h5 class="card-title">User Email</h5>
              <h6 class="card-subtitle mb-2 text-muted">Object</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{
              width: "60%",
              elevation: 5,
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h5 class="card-title">User Email</h5>
              <h6 class="card-subtitle mb-2 text-muted">Object</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{
              width: "60%",
              elevation: 5,
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h5 class="card-title">User Email</h5>
              <h6 class="card-subtitle mb-2 text-muted">Object</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}
export default Dashboard;
