import React, { Fragment } from "react";
import { connect } from "react-redux";

import SideBar from "./sidebar";
import Collector from "./collector";
import Store from "./store";
import { incrementDisplayMoney } from "../redux/actions";

class PGame extends React.Component {
	componentDidMount() {
		this.interval = setInterval(() => this.updateMoney(), 100);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateMoney() {
		if (this.props.displayMoney < this.props.money) {
			let randomPercentOfTotal = Math.floor(Math.random() * 3 + 2);
			let min = parseInt(
				(this.props.money - this.props.displayMoney) /
					randomPercentOfTotal,
				10
			);
			this.props.incrementDisplayMoney(min > 1 ? min : 1);
		}
	}

	render() {
		return (
			<Fragment>
				<SideBar />
				<Collector />
				<Store />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	money: state.money,
	displayMoney: state.animation.displayMoney,
});

const mapDispatchToProps = (dispatch) => ({
	incrementDisplayMoney: (amountToIncrease) => {
		dispatch(incrementDisplayMoney(amountToIncrease));
	},
});

const Game = connect(mapStateToProps, mapDispatchToProps)(PGame);

export default Game;
