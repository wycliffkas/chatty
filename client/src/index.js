import React from "react";
import ReactDom from "react-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import userReducer from "./store/reducers/user";
import messageReducer from "./store/reducers/message";
import interfaceColorReducer from "./store/reducers/interfaceColor";
import timeFormatReducer from "./store/reducers/dateFormat";
import keyPressReducer from "./store/reducers/keyPress";

const rootReducer = combineReducers({
	user: userReducer,
	message: messageReducer,
	interfaceColor: interfaceColorReducer,
	time: timeFormatReducer,
	keyPress: keyPressReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
