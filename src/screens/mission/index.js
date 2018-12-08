import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import Header from '../../components/header';

import './styles/mission.css';
import styles from './styles/styles';

class Intro extends Component {
	render() {
		return (
			<div>
				<Header selected/>

				<div className="mission" style={{ marginTop: '5%' }}>
					<div className="container">
						<div class="card" style={styles.card}>
							<div class="card-body">
								<h5 className="display-4">Mission et Vision</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="container mypadding text-center">
					<h5 style={styles.cardtxt}>Mission</h5>
					<p className="card-text long_text">
						La mission d’OHCA reste celle d’apporter un changement intégral dans les vécus de la population
						dans le milieu rural, en général et des populations vulnérables notamment la femme et les jeunes
						filles en particulier. Et aussi de développer des stratégies pour réduire l’extrême pauvreté et
						la faim et de mettre un terme aux décès à la base des évitables dus à une nutrition déficiente.
						Nos initiatives ciblent les populations les plus pauvres et les plus vulnérables, notamment les
						communautés rurales. d’ici 2030, un effort concerté demeure une priorité pour atteindre le
						développement durable.
					</p>
					<hr style={styles.separator} />
					<h5 style={styles.cardtxt}>Vision</h5>
					<p className="card-text long_text">
						La vision d’OHCA est de voir la population ciblée vivre une vie meilleure c.à.d. être à mesure
						de subvenir à ses besoins vitaux et à répondre aux exigences de la vie. Pour finalité, notre
						vision est de sortir la population dans le milieu rural de la pauvreté économique et sociale
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
