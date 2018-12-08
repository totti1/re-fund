import React, { Component } from "react";

import { Whiteheader } from "../../components/header";

import "./styles/objectif.css";
import styles from "./styles/styles";

class Intro extends Component {
  render() {
    return (
      <div>
        <Whiteheader selected2 />

        <div className="objectif">
          <div className="container">
            <div
              class="card text-center border-light mb-3 mx-auto"
              style={styles.card}
            >
              <div class="card-body">
                <h5 className="display-4">
                  Objectif et Stratégies de désengagement
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container mypadding">
          <h5 style={styles.cardtxt}>Objectif</h5>
          <p className="card-text long_text ">
            L’objectif principal d’OHCA est de reduire le niveau de pauvrete
            aupres de la population rurale par l’acces aux services sociaux de
            base. Elle se fixe comme objectif specifique, celui de:
          </p>
          <div>
            <ul>
              <li>
                de renforcer la résilience communautaire par l’inclusion
                sociale,
              </li>
              <li>de soutenir le rétablissement durable des communautés,</li>
              <li>
                de contribuer au bien-être et au développement des citoyens et
                de la société dans son environnement immédiat,
              </li>
              <li>
                de viser notamment à concrétiser des initiatives dans le domaine
                de la réduction de la pauvreté.
              </li>
            </ul>
          </div>
          <p className="card-text long_text ">
            Notre approche globale intègre tous les niveaux d’intervention,
            depuis la base jusqu’à l’engagement vers le développement durable.
            Le travail actuel d’OHCA se concentre sur la recherche de solutions
            novatrices et durables à l’insécurité alimentaire, a la pauvreté et
            au chômage des jeunes qui atténuent les menaces directes de
            l’antivaleur et s’attaquent aux causes profondes. Cela comprend des
            initiatives communautaires et des analyses de conflits axées sur
            l’intersection de la sécurité humaine et de la pauvreté.
          </p>
          <hr style={styles.separator} />
          <h5 style={styles.cardtxt}>Stratégies de désengagement</h5>
          <p className="card-text long_text">
            Notre stratégie de désengagement consiste à renforcer la capacité
            des bénéficiaires directes des projets appuyés par OHCA afin que ces
            derniers s’approprient des acquis du projet et de les accompagner
            méthodiquement jusqu’à la consolidation de l’expérience acquise. Et
            aussi à développer l’esprit d’épargne et crédit communautaire comme
            étant un moteur d’épanouissement économique.
          </p>
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
export default Intro;
