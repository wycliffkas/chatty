import * as actionTypes from "../actions/actionTypes";

const intialState = {
	timeFormat: "12"
};

const dateFormat = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.SET_DATE_FORMAT:
			return {
				...state,
				timeFormat: action.format
			};
		default:
			return state;
	}
};

export default dateFormat;
