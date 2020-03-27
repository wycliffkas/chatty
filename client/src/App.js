import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./containers/Chat/Chat";
import Settings from "./containers/Settings/Settings";
import Header from "./commons/Header";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Settings} />
				<Route path="/chat" component={Chat} />
			</Switch>
		</Router>
	);
};

export default App;
