import * as Actions from '../../redux/actions';

export default function reducer(state, action) {
	switch (action.intent) {
		case Actions.CLICK:
			let increase = state.levels.click.gain * state.levels.click.own * state.levels.click.multiplier;
			return {
				money: state.money + increase,
				stats: {
					...state.stats,
					totalMoney: state.stats.totalMoney + increase,
					totalClicks: state.stats.totalClicks + 1
				}
			};
		default:
			return state;
	}
}