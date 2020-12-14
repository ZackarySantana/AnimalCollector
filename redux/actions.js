export const TYPE_MONEY_DATA = "TYPE_MONEY_DATA";
export const ADD_MONEY = "ADD_MONEY";
export const INCREMENT_DISPLAY_MONEY = "INCREMENT_DISPLAY_MONEY";
export const STORE_ITEM_PAYMENT = "STORE_ITEM_PAYMENT";

export const TYPE_COLLECTOR = "TYPE_COLLECTOR";
export const CLICK = "CLICK";

export const TYPE_STORE = "TYPE_STORE";
export const BUY_ITEM = "BUY_ITEM";
export const CANT_BUY_ITEM = "CANT_BUY_ITEM";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";

export function click() {
	return {
		type: TYPE_COLLECTOR,
		intent: CLICK,
	};
}

export function addMoney(amount) {
	return {
		type: TYPE_MONEY_DATA,
		intent: ADD_MONEY,
		payload: {
			amount,
		},
	};
}

export function incrementDisplayMoney(amount) {
	return {
		type: TYPE_MONEY_DATA,
		intent: INCREMENT_DISPLAY_MONEY,
		payload: {
			amount,
		},
	};
}

export function storeItemPayment(name, amount) {
	return {
		type: TYPE_MONEY_DATA,
		intent: STORE_ITEM_PAYMENT,
		payload: {
			name,
			amount,
		},
	};
}

export function buyItem(name) {
	return {
		type: TYPE_STORE,
		intent: BUY_ITEM,
		payload: {
			name,
		},
	};
}

export function cantBuyItem(name) {
	return {
		type: TYPE_STORE,
		intent: CANT_BUY_ITEM,
		payload: {
			name,
		},
	};
}

export function updateProgress(name, newProgress) {
	return {
		type: TYPE_STORE,
		intent: UPDATE_PROGRESS,
		payload: {
			name,
			newProgress,
		},
	};
}

export const RESET = "RESET";

export function reset(loadedState) {
	return {
		type: RESET,
		payload: {
			loadedState,
		},
	};
}
