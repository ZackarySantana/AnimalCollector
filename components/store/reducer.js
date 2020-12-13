import * as Actions from '../../redux/actions';

export default function reducer(state, action) {
	switch (action.intent) {
		case Actions.BUY_ITEM:
			let itemInformation = state.levels[action.payload.name]
			let newLevels = { ...state.levels[action.payload.name] };
			++newLevels.own;
			let finalLevels = { ...state.levels };
			finalLevels[action.payload.name] = newLevels;
			return {
				money: state.money - itemInformation.cost * (itemInformation.own + 1),
				animation: {
					...state.animation,
					displayMoney: state.money - itemInformation.cost * (itemInformation.own + 1)
				},
				levels: finalLevels
			};

		case Actions.CANT_BUY_ITEM:
			return {

			};
		case Actions.UPDATE_PROGRESS:
			let finalAnimation = { ...state.animation };
			finalAnimation[action.payload.name] = action.payload.newProgress;
			return {
				animation: finalAnimation
			};
		default:
			return state;
	}
}