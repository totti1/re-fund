import React, { Component } from "react";

import { Whiteheader } from "../../components/header";

import "./styles/projet.css";
import styles from "./styles/styles";

class Intro extends Component {
  render() {
    return (
      <div>
        <Whiteheader selected2 />

        <div className="projet" style={{ marginTop: "5%" }}>
          <div className="container">
            <div class="card text-center" style={styles.card}>
              <div class="card-body">
                <h5 className="display-4">Projets réalisés</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container mypadding">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Année</th>
                <th scope="col">Bailleurs</th>
                <th scope="col">Titre du projet</th>
                <th scope="col">Résumé</th>
                <th scope="col">Résultats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2000</th>
                <td>Tears Fund</td>
                <td>
                  Construction de 10 latrines dans 2 écoles primaires (Lweba et
                  Katanga)
                </td>
                <td>
                  Construction de 4 latrines pour les filles, 4 latrines pour
                  les garçons et 2 latrines pour les enseignants.
                </td>
                <td>10 latrines (urinoirs & WC) construites</td>
              </tr>
              <tr>
                <th scope="row">2004-2006</th>
                <td>PAM</td>
                <td>Cantine Scolaire</td>
                <td>
                  Fournir les repas chauds aux enfants de moins de 12 ans dans
                  12 écoles primaires dans le territoire d’Uvira
                </td>
                <td>
                  120 tonnes de repas distribués, 580 enfants servis et 45
                  femmes travaillant dans les cantines appuyées.
                </td>
              </tr>
              <tr>
                <th scope="row">2006</th>
                <td>Coopération Suisse</td>
                <td>
                  Distribution des matériels médicaux a l’hôpital général
                  d’Uvira
                </td>
                <td>
                  Fourniture des divers matériels médicaux et chirurgicaux a
                  l’HGR.
                </td>
                <td>
                  2 structures de santé a Uvira 4 Structures de santé a Fizi 5
                  Structures de santé a Kalemie
                </td>
              </tr>
              <tr>
                <th scope="row">2010-2013</th>
                <td>Stichting ASADE-NGO</td>
                <td>
                  Appui en AGR aux 84 femmes & filles vivant avec le VIH/Sida
                  dans la localité de Swima/Territoire de Fizi
                </td>
                <td>
                  Assister les bénéficiaires victimes de stigmatisation dans
                  leur communauté en leur appuyant en AGR pour leur autonomie
                  socio-économique.
                </td>
                <td>
                  84 femmes appuyées en différentes AGR : Petits commerce,
                  ateliers de couture, atelier de coiffure & agriculture
                </td>
              </tr>
              <tr>
                <th scope="row">2015-2016</th>
                <td>Stichting ASADE - NGO</td>
                <td>Vijana Tunaweza</td>
                <td>
                  Appui à l’agriculture & entrepreneuriat local pour la jeunesse
                  de Swima et Baraka
                </td>
                <td>
                  123 jeunes filles et garçons formés en métiers dans les
                  filières porteuses.
                </td>
              </tr>
              <tr>
                <th scope="row">2017</th>
                <td>Stichting ASADE - NGO</td>
                <td>Sensibilisation de la jeunesse d’Uvira a la SSR</td>
                <td>
                  Ce projet visait la sensibilisation des jeunes a l’education
                  sexuelle et a leurs droits sur la SSR.
                </td>
                <td>
                  422 filles et garcons sensibilises dans 12 ecoles secondaires,
                  4 ecoles primaires et 7 clubs des jeunes
                </td>
              </tr>
            </tbody>
          </table>
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
