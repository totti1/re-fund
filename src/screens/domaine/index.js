import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import Header from '../../components/header';

import './styles/domaine.css';
import styles from './styles/styles';

import books from '../../assets/images/icons/books.png';
import care from '../../assets/images/icons/care.png';
import water from '../../assets/images/icons/water.png';
import reunion from '../../assets/images/other/femmes.png';
import enfants from '../../assets/images/other/enfants.jpeg';

class Home extends Component {
	render() {
		return (
			<div>
				<Header selected2 />
				<div className="domaine">
					<div className="container">
						<div class="card domCard">
							<div class="card-body">
								<h5 className="display-4">Domaines d’intervention</h5>
								<p class="card-text">
									La securite alimentaire etant l’epicentre de la vie, OHCA tient a s’attaquer d’abord
									sur ce fleau sans ignorer les autres domaines d’interventions telles que : La santé,
									Education et Eau comme themes transversaux.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div class="card-group">
						<div class="card text-center border-light mb-3">
							<div class="card-body">
								<h5 class="card-title">La Santé</h5>
								<br />
								<img src={care} alt="group" style={styles.img} />
								<br />
								<br />
								<p class="card-text">
									Notre priorité est de promouvoir l’éducation sexuelle, la planification familiale,
									la sensibilisation sur les MST-VIH/Sida, la prise en charge psychosociale et
									councilling.
								</p>
							</div>
						</div>
						<div class="card text-center border-light mb-3">
							<div class="card-body">
								<h5 class="card-title">L'Education </h5>
								<br />
								<img src={books} alt="management" style={styles.img} />
								<br />
								<br />
								<p class="card-text">
									Nous participons aussi a la rehabilitation des ecoles et a l’education sur la
									protection de l’environnement.
								</p>
							</div>
						</div>
						<div class="card text-center border-light mb-3">
							<div class="card-body">
								<h5 class="card-title">L'Eau</h5>
								<br />
								<img src={water} alt="goal" style={styles.img} />
								<br />
								<br />
								<p class="card-text">
									Nous luttons contre les maladie hydriques en offrant a la population de l’eau saine
									(construction des sources d’eau potables) et des moyens permettant a lutter contre
									cette maladie.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="about-domaine">
					<div class="card text-center border-light mb-3 mx-auto" style={styles.imgCard}>
						<div class="card-body">
							<h5 class="card-title">La Jeunesse</h5>
							<p class="card-text">
								La jeunesse d’aujourd’hui, c’est l’avenir de demain. Or, cette jeunesse mal encadrée
								aujourd’hui, constitue un danger pour demain. Cette jeunesse désœuvrée est souvent
								utilisée pour des activités contreproductives. Il sied de l’orientée pour que celle-ci
								adopte une attitude responsable et productive. La jeunesse est l’épicentre du
								développement harmonieux et durable. Pour que cette dernière s’implique pour le
								développement, elle a besoin de l’encadrement et de l’orientation.
							</p>
						</div>
					</div>
				</div>

				<div className="container mypadding">
					<div className="row">
						<div className="col-8">
							<h5 style={styles.cardtxt}>La Femme</h5>
							<p className="card-text long_text">
								Compte tenu de la place prépondérante qu’occupe la femme au sein <br />
								de la société, elle mérite une attention particulière. <br />
								Mais hélas, en Afrique surtout dans nos milieux ruraux, <br />
								elle est au centre de l’existence. Elle est à la fois mère, <br />
								servante, cuisinière, femme de ménage, conseillère, et pour <br />
								la remercier, elle demeure analphabète ; elle est battue, <br />
								marginalisée, violée, stigmatisée et de fois exclue de la communauté.
							</p>
						</div>
						<div className="col">
							<img src={reunion} alt="Reunion des SHG" style={{ marginTop: 50 }} />
						</div>
					</div>
					<div style={{ marginTop: 25 }}>
						<p className="card-text long_text">
							Elle est prête à subir et supportée les sévices que la société (africaine) lui impose.
							Ainsi, OHCA cherche à valoriser cette femme par la connaissance et la défense de ses droits
							ainsi à lui fournir des instruments capables de s’afficher comme être humain (autonomisation
							economico-financiere, santé et éducation).
						</p>
					</div>
				</div>

				<div className="container mypadding">
					<div className="row">
						<div className="col">
							<img src={enfants} alt="Reunion des SHG" style={{ marginTop: 20 }} />
						</div>
						<div className="col-8">
							<h5 style={styles.cardtxt}>L’enfant</h5>
							<p className="card-text long_text">
								Quand on parle de la femme, on voit l’enfant. Des êtres vulnérables au sein de la
								société. Cet être faible qui est l’enfant a besoin d’affection et d’encadrement pour
								bien évoluer. L’absence de ses éléments pousse l’enfant à développer un sentiment de
								rejet, de méfiance et de perte de confiance en lui. Cela raison pour laquelle, il a
								besoin d’une protection pour son développement. OHCA aide l’enfant directement par un
								appui ponctuel comme les enfants de la rue, et indirectement en appui a sa maman pour
								une assistance durable.
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
export default Home;
