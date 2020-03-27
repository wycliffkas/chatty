import * as actionTypes from "../actions/actionTypes";

const intialState = {
    users: 'guest0001',
}

const user = (state = intialState, action ) => {
    switch(action.type) {
        case actionTypes.ADD_USER:
            return {
                ...state,
                users: action.user
            }
        default:
            return state
    }
}

export default user;