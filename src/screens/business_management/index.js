import React, { Component } from "react";
import Menu from "../../components/menu";
import { Link } from "react-router-dom";
// import "./styles/login.css";

class Business_Management extends Component {
  render() {
    return (
      <div>
        <Menu>
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
              <Link
                to="/business+analysis"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 class="card-title">Business Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Link>
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
              <Link
                to="/business+analysis"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 class="card-title">Business Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Link>
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
              <Link
                to="/business+analysis"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 class="card-title">Business Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Link>
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
              <Link
                to="/business+analysis"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5 class="card-title">Business Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Link>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}
export default Business_Management;
