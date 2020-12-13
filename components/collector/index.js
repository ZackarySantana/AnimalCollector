import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../../images/clickicon.svg';

import { click } from '../../redux/actions';

const mapStateToProps = state => ({
	money: state.animation.displayMoney
});

const mapDispatchToProps = dispatch => ({
	click: (event) => {
		dispatch(click());
	}
});

const Collector = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PCollector);

Collector.propTypes = {
	money: PropTypes.number,
	click: PropTypes.func
}

export default Collector;

function PCollector(props) {
	return (
		<div id="collector">
			<h1 id="game-name">Animal collector</h1>
			<h1>Money: {props.money}</h1>
			<img src={Icon} alt="click-button" id="collect-button" onClick={props.click} />
		</div>
	);
}