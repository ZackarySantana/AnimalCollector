import { reset } from './actions';
import rootReducer from './rootreducer';

export function initStore(store) {
	store.replaceReducer(rootReducer);
	store.dispatch(reset(loadFromLocalState()));
}


export function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state.stats);
		localStorage.setItem('animalcollector-data', serializedState);
	} catch (exception) {
		console.log(exception);
	}
}

function loadFromLocalState() {
	try {
		const serializedState = localStorage.getItem('animalcollector-data');
		if (serializedState === null) return undefined;
		return { stats: JSON.parse(serializedState) };
	} catch (exception) {
		console.log(exception);
		return undefined;
	}
}
