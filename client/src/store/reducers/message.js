import * as actionTypes from "../actions/actionTypes";

const intialState = {
	// message: '',
	messages: []
};

const message = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_MESSAGE:
			return {
				...state,
				messages: state.messages.concat(action.message)
			};
		default:
			return state;
	}
};

export default message;
