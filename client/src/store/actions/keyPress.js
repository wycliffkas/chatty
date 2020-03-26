import * as actionTypes from "./actionTypes";

export const enableKeyPress = press => {
	return {
		type: actionTypes.ENABLE_KEY_PRESS,
		keyPress: press
	};
};
