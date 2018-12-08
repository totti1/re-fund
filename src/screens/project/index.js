import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Whiteheader } from "../../components/header";

import "./styles/projet.css";
// import styles from "./styles/styles";
import next from "../../assets/images/icons/next.png";

class Project extends Component {
  render() {
    return (
      <div>
        <Whiteheader selected2 />

        <div className="projet" />

        <div className="container mypadding">
          <div className="row">
            <div className="col">
              <div style={{ width: "75%" }}>
                <h3 className="display-5">Title of Busness</h3>
                <p className="card-text long_text">
                  La mission d’OHCA reste celle d’apporter un changement
                  intégral dans les vécus de la population dans le milieu rural,
                  en général et des populations vulnérables notamment la femme
                  et les jeunes filles en particulier. Et aussi de développer
                  des stratégies pour réduire l’extrême pauvreté et la faim et
                  de mettre un terme aux décès à la base des évitables dus à une
                  nutrition déficiente. Nos initiatives ciblent les populations
                  les plus pauvres et les plus vulnérables, notamment les
                  communautés rurales. d’ici 2030, un effort concerté demeure
                  une priorité pour atteindre le développement durable.
                </p>
              </div>
            </div>
            <div className="col col-lg-3">
              <h5 className="display-5">How much you raised</h5>
              <div class="progress">
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <p style={{ paddingTop: 5 }}>1500$ / 3000$</p>
              <Link to="/donation">
                <button type="button" class="btn btn-primary btn-lg">
                  Donate
                  <img
                    src={next}
                    alt="next button"
                    height={20}
                    width={20}
                    style={{ marginLeft: 5 }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container jumbotron text-center">
          <h4>Our Sponsors</h4>
          <br />
          <br />
          <div
            class="card"
            style={{
              backgroundColor: "transparent",
              width: "60%",
              alignSelf: "center",
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Charles Caleb</h6>
              <p class="card-text bold">Donated 2000$</p>
              <p class="card-text">
                Really Great idea Hope that you will be able go further
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{
              backgroundColor: "transparent",
              width: "60%",
              alignSelf: "center",
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Aristote</h6>
              <p class="card-text bold">Donated 100$</p>
              <p class="card-text">
                Really Great idea Hope that you will be able go further
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{
              backgroundColor: "transparent",
              width: "60%",
              alignSelf: "center",
              margin: "0 auto",
              marginBottom: 20
            }}
          >
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Katy</h6>
              <p class="card-text bold">Donated 5000$</p>
              <p class="card-text">
                Really Great idea Hope that you will be able go further
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="row">
            <div className="col-12">
              <h6>© OHCA 2018</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
