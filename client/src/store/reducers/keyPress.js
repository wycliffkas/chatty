import * as actionTypes from "../actions/actionTypes";

const intialState = {
	press: "On"
};

const keyPress = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.ENABLE_KEY_PRESS:
			return {
				...state,
				press: action.keyPress
			};
		default:
			return state;
	}
};

export default keyPress;
