import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style/header.css';
import styles from './style/styles';

import logo from '../../assets/images/logo/LOGOOHCA.jpg';

// const selected = ()=> {}

const Header = props => {
	const { selected, selected2, selected3 } = props;
	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top justify-content-between" style={styles.navbar}>
				<Link to="/" style={styles.link}>
					<img src={logo} width="50" height="50" alt="" />
					<h6 className="navbar-brand brand">OHCA</h6>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav" style={styles.bar}>
					<ul className="navbar-nav mr-sm-2">
						<li className="nav-item">
							<div class="btn-group">
								<button
									type="button"
									class="btn btn_hover"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									style={{
										backgroundColor: selected ? 'black' : 'transparent',
										color: selected ? 'white' : 'black',
									}}
								>
									Qui Somme-nous
								</button>
								<div class="dropdown-menu dropdown-menu-right">
									<Link to="/introduction" style={styles.link}>
										<button class="dropdown-item" type="button">
											Introduction et Contexte
										</button>
									</Link>
									<Link to="/mission&vision" style={styles.link}>
										<button class="dropdown-item" type="button">
											Mission et Vision
										</button>
									</Link>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<div class="btn-group">
								<button
									type="button"
									class="btn btn_hover"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									// onMouseOver={}
									style={{
										backgroundColor: selected2 ? 'black' : 'transparent' ,
										color: selected2 ? 'white' : null,
									}}
								>
									Que Faisons-nous
								</button>
								<div class="dropdown-menu dropdown-menu-right">
									<Link to="/domaine+d+intervention&groupe+cible" style={styles.link}>
										<button class="dropdown-item" type="button">
											Domaine d'intervention et Groupe cible
										</button>
									</Link>
									<Link to="/projet+realises" style={styles.link}>
										<button class="dropdown-item" type="button">
											Projets réalisés
										</button>
									</Link>
									<Link to="/objectif&strategie+de+desengagement" style={styles.link}>
										<button class="dropdown-item" type="button">
											Objectif et Strategie de Desengagement
										</button>
									</Link>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<div class="btn-group">
								<button
									type="button"
									class="btn btn_hover"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									style={{
										backgroundColor: 'transparent',
										borderBottomColor: selected3 ? 'black' : null,
										borderBottomWidth: selected3 ? '2px' : null,
										borderStyle: selected3 ? 'solid' : null,
									}}
								>
									Soutenez Nous
								</button>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
Header.propTypes = {
	selected: PropTypes.bool,
	selected2: PropTypes.bool,
	selected3: PropTypes.bool,
};
export default Header;
