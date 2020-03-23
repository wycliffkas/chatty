import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Join from "./components/Join"
import Chat from "./components/Chat"

const App = () => (
    <Router>
        <Route to="/" exact component={Join}/>
        {/* <Route to="/chat" component={Chat}/> */}
    </Router>
);

export default App