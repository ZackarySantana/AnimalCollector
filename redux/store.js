import { createStore } from 'redux';
import rootReducer from './rootreducer';

const store = createStore(rootReducer, loadFromLocalState());

function loadFromLocalState() {
	try {
		const serializedState = localStorage.getItem('animalcollecter-state');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (exception) {
		console.log(exception);
		return undefined;
	}
}

function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('animalcollecter-state', serializedState);
	} catch (exception) {
		console.log(exception);
	}
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;