import React, { Component } from "react";
import Menu from "../../components/menu";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import _ from "lodash";
// import "./styles/login.css";

class Business_Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: []
    };
  }
  async componentWillMount() {
    const that = this;
    await firebase
      .database()
      .ref(`/business`)
      .on("value", snapshot => {
        // console.log(snapshot)
        const usersData = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });
        // console.log(usersData);
        that.setState({
          business: usersData
          // loading: false,
        });
      });
  }
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
              {this.state.business.map((item, key) => {
                // console.log(item);
                return (
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
                        <h5 class="card-title">{item.business_title}</h5>
                        <p class="card-text">{item.description}</p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div
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
          </div> */}
        </Menu>
      </div>
    );
  }
}
export default Business_Management;
