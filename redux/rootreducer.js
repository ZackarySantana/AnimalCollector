import * as Actions from './actions';
import moneyReducer from '../components/moneyreducer';
import collectorReducer from '../components/collector/reducer';
import storeReducer from '../components/store/reducer';

const initialState = {
	money: 0,
	animation: {
		displayMoney: 0,
		rat: 0,
		fish: 0
	},
	levels: {
		click: {
			gain: 1,
			own: 1,
			multiplier: 1,
			cost: 25
		},
		rat: {
			gain: 1,
			own: 1,
			rate: 10,
			multiplier: 1,
			cost: 10
		},
		fish: {
			gain: 1,
			own: 0,
			rate: 1,
			multiplier: 1,
			cost: 100
		}
	},
	shop: {
		isActive: {
			largeAnimals: false,
			upgrades: false
		}
	},
	stats: {
		totalMoney: 0,
		totalClicks: 0
	}
};

export const reduce = function (state = initialState, action) {
	const newState = {
		...initialState,
		...state
	}
	switch (action.type) {
		case Actions.TYPE_MONEY_DATA:
			return Object.assign({}, newState, moneyReducer(newState, action));
		case Actions.TYPE_COLLECTOR:
			return Object.assign({}, newState, collectorReducer(newState, action));
		case Actions.TYPE_STORE:
			return Object.assign({}, newState, storeReducer(newState, action));
		default:
			return newState;
	}
};

export default reduce;