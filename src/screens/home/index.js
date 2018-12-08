import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Whiteheader } from "../../components/header";

import "./styles/home.css";
import styles from "./styles/styles";

import group from "../../assets/images/icons/team.png";
import management from "../../assets/images/icons/gears.png";
import objectives from "../../assets/images/icons/objective.png";
import loc from "../../assets/images/icons/placeholder.png";
import phone from "../../assets/images/icons/smartphone.png";
import email from "../../assets/images/icons/message.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Whiteheader />
        <div style={{ marginTop: "5%" }}>
          <div className="home">
            <div className="container">
              <div class="card" style={styles.card}>
                <div class="card-body">
                  <h5 className="display-4">
                    Office Humanitaire pour la Communauté Africaine
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-group">
          <div class="card text-center border-light mb-3">
            <div class="card-body">
              <h5 class="card-title">Qui somme nous</h5>
              <img src={group} alt="group" style={styles.img} />
              <p class="card-text">
                L’Office Humanitaire pour la Communauté Africaine est une
                Organisation Communautaire de Base de droit congolais, qui se
                consacre à la protection et amélioration de la qualité de vie
                des populations rurales{" "}
              </p>
              <Link to="/introduction">
                <button type="button" class="btn btn-outline-dark">
                  En Savoir Plus
                </button>
              </Link>
            </div>
          </div>
          <div class="card text-center border-light mb-3">
            <div class="card-body">
              <h5 class="card-title">Que faisons nous</h5>
              <img src={management} alt="management" style={styles.img} />
              <p class="card-text">
                La securite alimentaire etant l’epicentre de la vie, OHCA tient
                a s’attaquer d’abord sur ce fleau sans ignorer les autres
                domaines d’interventions telles que : La santé, Education et Eau
                comme themes transversaux.
              </p>
              <Link to="/domaine+d+intervention&groupe+cible">
                <button type="button" class="btn btn-outline-dark">
                  En Savoir Plus
                </button>
              </Link>
            </div>
          </div>
          <div class="card text-center border-light mb-3">
            <div class="card-body">
              <h5 class="card-title">Nos objectifs</h5>
              <img src={objectives} alt="goal" style={styles.img} />
              <p class="card-text">
                L’objectif principal d’OHCA est de reduire le niveau de pauvrete
                aupres de la population rurale par l’acces aux services sociaux
                de base. Elle se fixe comme objectif specifique
              </p>
              <Link to="/objectif&strategie+de+desengagement">
                <button type="button" class="btn btn-outline-dark">
                  En Savoir Plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="about">
          <div
            class="card text-center border-light mb-3 mx-auto"
            style={styles.imgCard}
          >
            <div class="card-body">
              <h5 class="card-title">
                ACTIVITE DES QUELQUES MEMBRES DE SHG (Self Help Group)
              </h5>
              <h6 class="card-subtitle mb-2 ">
                Etalage des epices de Maman Anne Marie
              </h6>
            </div>
          </div>
        </div>

        <div id="contact" className="contact">
          <h1>Contactez nous</h1>
          <br />
          <br />
          <div className="row container">
            <div className="col">
              <h4>Entrez en contact</h4>
              <br />
              <br />
              <ul className="intouch">
                <li>
                  <img src={loc} height="32" width="32" alt="" /> Uvira, Sud
                  Kivu, RDC
                </li>
                <br />
                <li>
                  <img src={phone} height="32" width="32" alt="" /> +243 789 906
                  300
                </li>
                <br />
                <li>
                  <img src={email} height="32" width="32" alt="" />{" "}
                  ohcasbl@gmail.com{" "}
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Votre aide est précieuse</h4>
              <br />
              <br />
              <form validate autoComplete="off">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nom et Prenom"
                />
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
                  placeholder="Entrez votre message"
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
                <h6>© OHCA 2018</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
