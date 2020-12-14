import * as Actions from "../redux/actions";

export default function reducer(state, action) {
	switch (action.intent) {
		case Actions.ADD_MONEY:
			return {
				money: state.money + action.payload.amount,
				stats: {
					...state.stats,
					totalMoney: state.stats.totalMoney + action.payload.amount,
				},
			};
		case Actions.INCREMENT_DISPLAY_MONEY:
			return {
				animation: {
					...state.animation,
					displayMoney:
						state.animation.displayMoney + action.payload.amount,
				},
			};
		case Actions.STORE_ITEM_PAYMENT:
			let finalAnimation = { ...state.animation };
			finalAnimation[action.payload.name] = 0;
			return {
				money: state.money + action.payload.amount,
				animation: finalAnimation,
			};
		default:
			return state;
	}
}
