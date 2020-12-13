import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buyItem, cantBuyItem } from '../../redux/actions';

const mapStateToProps = (state, ownProps) => ({
	money: state.money,
	itemInformation: state.levels[ownProps.access],
	progress: state.animation[ownProps.access]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	buyItem: (event) => {
		dispatch(buyItem(ownProps.access));
	},
	cantBuyItem: (event) => {
		dispatch(cantBuyItem(ownProps.access));
	}
});

const ShopItem = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PShopItem);

ShopItem.propTypes = {
	access: PropTypes.string,
	name: PropTypes.string,
	money: PropTypes.number,
	itemInformation: PropTypes.array,
	buyItem: PropTypes.func,
	cantBuyItem: PropTypes.func
}

export default ShopItem;

function PShopItem(props) {
	return (
		<li onClick={
			props.money >= props.itemInformation.cost * (props.itemInformation.own + 1) ?
				props.buyItem : props.cantBuyItem
		}>
			<div className="shop-item-icon">
				<p>{props.name}</p>
				{props.access &&
					<img src={require("games/play/" + props.access + ".svg")} alt="rat" />
				}
			</div>
			<div className="shop-item-info">
				<p>Owned: {props.itemInformation.own}</p>
				{props.access !== "click" ?
					<Fragment>
						<p>Rate: {props.itemInformation.rate}s</p>
						<p>Gain: {props.itemInformation.gain * (props.itemInformation.own > 0 ? props.itemInformation.own : 1) * props.itemInformation.multiplier}</p>
					</Fragment> :
					<p>Per Click: {props.itemInformation.gain * props.itemInformation.own * props.itemInformation.multiplier}</p>
				}
				<p>Cost: {props.itemInformation.cost * (props.itemInformation.own + 1)}</p>

				<progress id={props.access} max="100" value={props.progress} style={props.itemInformation.own === 0 || props.access === "click" ? {
					display: 'none'
				} : {}} />
			</div>
		</li>
	);
}