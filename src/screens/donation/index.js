import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import { Whiteheader } from "../../components/header";

import "./styles/mission.css";
import styles from "./styles/styles";

class Intro extends Component {
  render() {
    return (
      <div>
        <Whiteheader selected />

        <div className="mission">
          <div className="container">
            <div class="card" style={styles.card}>
              <div class="card-body">
                <h5 className="display-4">Thanks for Donating</h5>
              </div>
            </div>
          </div>
        </div>

        <div className=" mypadding text-center" />
        <div id="contact" className="contact">
          <div className="row ">
            <div className="col text-center">
              <h5>Bank Account Information</h5>
              <ul className="intouch">
                <li>
                  <p>Swift Account</p>
                </li>
                <br />
                <li>+250 783 4389</li>
                <br />
                <li>re-fund@gmail.com</li>
              </ul>
            </div>
            <div className="col col-sm-4">
              <div
                class="card text-white bg-dark mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div class="card-body">
                  <p className="card-text long_text">
                    Donate to Re-fund and support our work to help Refugees
                    economical and social development. Your contributions will
                    make a real difference and help us build a sustainable
                    future for those who really need that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
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
              placeholder="email"
            />
            <br />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type your message"
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

        <div className="footer">
          <div className="row">
            <div className="col-12">
              <h6>© Re-Fund 2018</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
