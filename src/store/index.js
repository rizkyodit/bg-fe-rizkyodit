import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initState = {
	provinces: [],
	category: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_PROVINCES':
			return { ...state, provinces: action.data };
		case 'REMOVE_PROVINCES':
			const c = state.provinces.filter((el) => el !== action.data);
			return { ...state, provinces: c };
		case 'ADD_PROVINCES':
			const a = state.provinces.concat(action.data);
			return { ...state, provinces: a };
		case 'SET_CATEGORY':
			return { ...state, category: action.data };
		case 'REMOVE_CATEGORY':
			const b = state.category.filter((el) => el !== action.data);
			return { ...state, category: b };
		case 'ADD_CATEGORY':
			const d = state.category.concat(action.data);
			return { ...state, category: d };
		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
