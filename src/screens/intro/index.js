import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import { Whiteheader } from "../../components/header";

import "./styles/intro.css";
import styles from "./styles/styles";

import pic from "../../assets/images/other/pauvre.jpg";

class Intro extends Component {
  render() {
    return (
      <div>
        <Whiteheader selected />
        <div>
          <div className="home-intro ">
            <div className="">
              <h5 className="display-4">Introduction</h5>
              <p class="card-text">
                L’Office Humanitaire pour la Communauté Africaine est une
                Organisation Communautaire <br />
                de Base de droit congolais, qui a été créée en 1998. Elle se
                consacre à la protection et <br />
                amélioration de la qualité de vie des populations rurales
                touchées et/ou affectées par la <br />
                guerre et les conflits intercommunautaire en R.D.Congo A part
                ces efforts de protection et
                <br />
                d’améliorer de la condition de vie des communautés rurales, OHCA
                sensibilise et mobilise
                <br />
                les fonds auprès des bailleurs de fonds pour promouvoir des
                solutions constructives pour <br />
                éradiquer la pauvreté.
                <br />
                L’organisation a son siège à Uvira, dans la province du Sud Kivu
                et sa zone d’intervention
                <br />
                est les territoires de Fizi et Uvira et peut aussi intervenir
                dans d’autres territoires de
                <br />
                la République. Présentement, OHCA compte mettre en œuvre le
                projet d’Appui aux initiatives
                <br />
                des femmes marginalisées pour leur autonomisation économique et
                le projet sur l’entrepreneuriat
                <br />
                pour les jeunes pour lutter contre l’implication des jeunes dans
                des activités contre productives.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container text-center context">
          <hr className="lign" />
          <h5 className="display-4">Contexte</h5>
          <p className="card-text" style={styles.context}>
            A sa création juste après la guerre de 1996 et l’afflux des réfugiés{" "}
            <br />
            rwandais et burundais, OCHA avait une vocation humanitaire dans le{" "}
            <br />
            cadre d’aide d’urgence aux sinistrés et cela dépendait du contexte
            du moment
            <br />
            En 2010, Avec le financement de la Stichting ASADE-NGO, OHCA a{" "}
            <br />
            organisé une enquête participative pour évaluer la cause profonde de{" "}
            <br />
            l’enlisement de la pauvreté au sein de la population rurale malgré
            les <br />
            aides extérieures. Apres cette enquête, un atelier a été organisé
            pour
            <br />
            trouver une solution durable pouvant la permettre d’appuyer cette{" "}
            <br />
            population dans sa zone d’intervention.
          </p>
          <hr className="lign" />
        </div>

        <div className="pauvrete">
          <div className="container">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <h5 style={styles.cardtxt}>Le désœuvrement de la jeunesse</h5>
                <p className="card-text">
                  Dans le même ordre d’idée, il n’y a pas une politique bien
                  définie sur <br />
                  l’encadrement de la jeunesse. Cette dernière est souvent à la
                  merci des <br />
                  mouvements négatifs (rébellion, forces et groupes armées,
                  partis politiques, <br />
                  délinquances…). L’oisiveté étant un vice, elle est dangereuse
                  pour les jeunes <br />
                  et c’est contreproductif. <br />
                  C’est pour cela, l’entreprenariat demeure une porte de sortie
                  par la création <br />
                  d’emplois des jeunes. <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mypadding">
          <div className="row">
            <div className="col">
              <img src={pic} alt="pauvrete au congo" />
            </div>
            <div className="col">
              <h5 style={styles.cardtxt}>La Pauvreté</h5>
              <p className="card-text long_text">
                Faute d’une politique cohérente, le gouvernement de la R.D.Congo{" "}
                <br />
                n’a pas su booster l’économie en se focalisant sur l’agriculture{" "}
                <br />
                qui jusqu’à preuve du contraire reste le moteur du développement{" "}
                <br />
                durable. La population dans le réflexe de la survie essaie de se{" "}
                <br />
                prendre en charge avec le peu qui existe Certes, la pauvreté est{" "}
                <br />à la base des maux et fléaux qui gangrènent notre société
                surtout <br />
                dans nos milieux ruraux. Pour lutter et éradiquer la pauvreté
                dans <br />
                le but d’atteindre les objectifs des Nations Unies{" "}
                <strong>Zéro faim</strong> <br />
                d’ici 2030, un effort concerté demeure une priorité pour
                atteindre <br />
                le développement durable. <br />
              </p>
            </div>
          </div>
          <div style={{ marginTop: 25 }}>
            <p className="card-text long_text">
              Comment y parvenir ? La meilleure des stratégies n’est pas
              d’apporter une aide substantielle à cette population démunie a la
              recherche de survie mais de soutenir leurs initiatives pour un
              développement durable certain.
              <strong>
                 Si tu me donnes un poisson, je mangerai un jour mais si tu
                m’apprends à pécher, je n’aurai plus faim
              </strong>
              Ainsi, OHCA lors de cet atelier, a ciblé 4 grandes filières
              porteuses qui pourront permettre à son groupe cible (population
              démunie, femme marginalisée et jeunesse) à se relever de la
              pauvreté. Il s’agit de:
            </p>
            <div>
              <ul>
                <li>Agriculture au travers l’agro-business</li>
                <li>La pêche</li>
                <li>
                  Le métier professionnel (Artisanat, coupe & couture,
                  mécanique, coiffure)
                </li>
                <li>Activités Génératrices de Revenu (petit commerce).</li>
              </ul>
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
export default Intro;
