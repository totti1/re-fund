import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/home';
import Intro from './screens/intro';
import Mission from './screens/mission';
import Domaine from './screens/domaine';
import Objectif from './screens/objectif'
import Projet from './screens/projet'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/introduction" component={Intro} />
					<Route path="/mission&vision" component={Mission} />
					<Route path="/domaine+d+intervention&groupe+cible" component={Domaine} />
					<Route path="/objectif&strategie+de+desengagement" component={Objectif} />
					<Route path="/projet+realises" component={Projet} />
				</div>
			</Router>
		);
	}
}

export default App;
