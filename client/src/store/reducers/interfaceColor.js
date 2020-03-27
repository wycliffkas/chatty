import * as actionTypes from "../actions/actionTypes";

const intialState = {
	color: "light"
};

const interfaceColor = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.SET_INTERFACE_COLOR:
			return {
				...state,
				color: action.color
			};
		default:
			return state;
	}
};

export default interfaceColor;
