import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
	<ul className="navigationItems">
		<li className="navigationItem">
			<NavLink to="/chat">Chat</NavLink>
			<NavLink to="/">Settings</NavLink>
		</li>
	</ul>
);

export default Header;
