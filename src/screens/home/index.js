import React, { Component } from "react";
// import { Link } from "react-router-dom";

import { Whiteheader } from "../../components/header";
import Card from "../../components/card";

import "./styles/home.css";
import styles from "./styles/styles";

import loc from "../../assets/images/icons/placeholder.png";
import phone from "../../assets/images/icons/smartphone.png";
import email from "../../assets/images/icons/message.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Whiteheader />
        <div>
          <div className="home">
            <div className="container">
              <div class="card" style={styles.card}>
                <div class="card-body">
                  <h3>Fundraising for Refugees self-economic independance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className="about">
          <div class="card" style={styles.imgCard}>
            <div class="card-body">
              <h5 className="display-4">Mukamana Pascasie</h5>
              <h6 class="card-subtitle mb-2 ">
                Re-fund was a blessing for us because i was able to feed my
                family and be independant
              </h6>
            </div>
          </div>
        </div>

        <div id="contact" className="contact">
          <h1>Contact us</h1>
          <br />
          <br />
          <div className="row container">
            <div className="col">
              <h4>Get in touch</h4>
              <br />
              <br />
              <ul className="intouch">
                <li>
                  <img src={loc} height="32" width="32" alt="" /> Mahama, Rwanda
                </li>
                <br />
                <li>
                  <img src={phone} height="32" width="32" alt="" /> +250 783
                  4389
                </li>
                <br />
                <li>
                  <img src={email} height="32" width="32" alt="" />{" "}
                  re-fund@gmail.com{" "}
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>We want to have feedback from you</h4>
              <br />
              <br />
              <form validate autoComplete="off">
                <input class="form-control" type="text" placeholder="Names" />
                <br />
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <br />
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your message"
                />
                <br />
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={styles.btn}
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="footer">
            <div className="row">
              <div className="col-12">
                <h6>© Re-Fund 2018</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
