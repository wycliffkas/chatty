import * as actionTypes from "./actionTypes";

export const setInterfaceColor = color => {
	return {
		type: actionTypes.SET_INTERFACE_COLOR,
		color: color
	};
};
