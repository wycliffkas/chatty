import * as actionTypes from "./actionTypes";

export const setDateFormat = format => {
	return {
		type: actionTypes.SET_DATE_FORMAT,
		format: format
	};
};
