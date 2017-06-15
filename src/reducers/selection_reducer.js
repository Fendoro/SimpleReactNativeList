import { SELECT_LIBRARY } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_LIBRARY:
			const selectedId = action.payload;
			return selectedId === state ? null : selectedId;
		default:
			return state;
	}
};
