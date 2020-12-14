import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ShopItem from "./shopitem";
import { updateProgress, storeItemPayment } from "../../redux/actions";

class PStore extends React.Component {
	componentDidMount() {
		this.interval = setInterval(() => this.updateProgress(), 10);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateProgress() {
		if (this.props.levels.rat.own > 0) {
			if (this.props.animation.rat < 100) {
				this.props.updateProgress(
					"rat",
					this.props.animation.rat + 0.1
				);
			} else {
				// TODO: PAY PLAYER
				this.props.storeItemPayment(
					"rat",
					this.props.levels.rat.gain *
						this.props.levels.rat.own *
						this.props.levels.rat.multiplier
				);
			}
		}
		if (this.props.levels.fish.own > 0) {
			if (this.props.animation.fish < 100) {
				this.props.updateProgress(
					"fish",
					this.props.animation.fish + 1
				);
			} else {
				// TODO: PAY PLAYER
				this.props.storeItemPayment(
					"fish",
					this.props.levels.fish.gain *
						this.props.levels.fish.own *
						this.props.levels.fish.multiplier
				);
			}
		}
	}

	render() {
		return (
			<div id="store">
				<div id="store-wrapper">
					<div id="store-header-container">
						<h1>Store</h1>
					</div>
					<div id="store-items-wrapper">
						<div id="store-tabs" className="tab-list">
							<button id="small-animals">Small Animals</button>
							<button
								id="large-animals"
								className={
									this.props.showLargeAnimals
										? ""
										: "disabled"
								}
							>
								Large Animals
							</button>
							<button
								id="upgrades"
								className={
									this.props.showUpgrades ? "" : "disabled"
								}
							>
								Upgrades
							</button>
						</div>
						<div id="store-items">
							<ul id="low-level">
								<ShopItem name="Click" access="click" />
								<ShopItem name="Rat" access="rat" />
								<ShopItem name="Fish" access="fish" />
								<ShopItem name="Cow" access="click" />
								<ShopItem name="Pig" access="click" />
								<ShopItem name="Dog" access="click" />
							</ul>
							<ul id="high-level">
								<ShopItem name="Giraffe" access="click" />
								<ShopItem name="Lion" access="click" />
								<ShopItem name="Chettah" access="click" />
								<ShopItem name="Otter" access="click" />
								<ShopItem name="Elephant" access="click" />
								<ShopItem name="Mystery" access="click" />
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	money: state.money,
	levels: state.levels,
	animation: state.animation,
	showLargeAnimals: state.shop.isActive.largeAnimals,
	showUpgrades: state.shop.isActive.upgrades,
});

const mapDispatchToProps = (dispatch) => ({
	updateProgress: (name, newProgress) => {
		dispatch(updateProgress(name, newProgress));
	},
	storeItemPayment: (name, amount) => {
		dispatch(storeItemPayment(name, amount));
	},
});

const Store = connect(mapStateToProps, mapDispatchToProps)(PStore);

Store.propTypes = {
	money: PropTypes.number,
	showLargeAnimals: PropTypes.bool,
	showUpgrades: PropTypes.bool,
};

export default Store;
