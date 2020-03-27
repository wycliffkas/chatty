import * as  actionTypes from "./actionTypes";
export const saveMessage = (message) => {
    return {
        type: actionTypes.SAVE_MESSAGE, 
        message: message
    }
}