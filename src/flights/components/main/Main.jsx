/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Search from '../search/Search.jsx';
import Scoreboard from '../scoreboard/Scoreboard.jsx';

import { flightsListSelector, inputValueSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';


const Main = ({ flights, getFlightsList, pathChanged, inputValueChanged, value }) => {
	return (
		<main className="main">
			<BrowserRouter>
				<Search inputValueChanged={inputValueChanged} value={value} />
				<Scoreboard value={value} flights={flights} getFlightsList={getFlightsList} pathChanged={pathChanged} />
			</BrowserRouter>
		</main>
	);
};

const mapDispatch = {
	getFlightsList: flightsActions.getFlightsList,
	pathChanged: flightsActions.pathChanged,
	inputValueChanged: flightsActions.inputValueChanged,
};

const mapState = state => {
	return {
		flights: flightsListSelector(state),
		value: inputValueSelector(state),
	};
};

export default connect(mapState, mapDispatch)(Main);