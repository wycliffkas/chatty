import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Settings.css";
import * as actions from "../../store/actions/index";

const Settings = () => {
	const username = useSelector(state => state.user.users);
	const bgColor = useSelector(state => state.interfaceColor.color);
	const timeFormat = useSelector(state => state.time.timeFormat);
	const keyPress = useSelector(state => state.keyPress.press);

	const dispatch = useDispatch();

	const setName = user => {
		dispatch(actions.addUser(user));
	};

	const setInterfaceColor = event => {
		dispatch(actions.setInterfaceColor(event.target.value));
	};

	const setTimeFormat = event => {
		dispatch(actions.setDateFormat(event.target.value));
	};

	const setKeyPress = event => {
		dispatch(actions.enableKeyPress(event.target.value));
	};

	return (
		<>
			<div className="container">
				<form>
					<div className="form-inline">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							placeholder={username}
							onBlur={event => setName(event.target.value)}
						/>
					</div>

					<div className="item">
						<p>Interface color</p>
						<label htmlFor="light">
							<input
								className="radio-input"
								type="radio"
								name="color"
								value="light"
								checked={bgColor === "light" ? true : false}
								onChange={setInterfaceColor}
							/>
							Light
						</label>

						<label htmlFor="dark">
							<input
								className="radio-input"
								type="radio"
								name="color"
								value="dark"
								checked={bgColor === "dark" ? true : false}
								onChange={setInterfaceColor}
							/>
							Dark
						</label>
					</div>

					<div className="item">
						<p>Clock display</p>
						<label htmlFor="12 clock">
							<input
								className="radio-input"
								type="radio"
								name="clock"
								value="12"
								checked={timeFormat === "12" ? true : false}
								onChange={setTimeFormat}
							/>
							12 Hours
						</label>
						<label htmlFor="12 clock">
							<input
								className="radio-input"
								type="radio"
								name="clock"
								value="24"
								checked={timeFormat === "24" ? true : false}
								onChange={setTimeFormat}
							/>
							24 Hours
						</label>
					</div>

					<div className="item">
						<p>Send messages on CTRL+ENTER</p>
						<label htmlFor="on">
							<input
								className="radio-input"
								type="radio"
								name="keypress"
								value="On"
								checked={keyPress === "On" ? true : false}
								onChange={setKeyPress}
							/>
							On
						</label>
						<label htmlFor="off">
							<input
								className="radio-input"
								type="radio"
								name="keypress"
								value="Off"
								checked={keyPress === "Off" ? true : false}
								onChange={setKeyPress}
							/>
							Off
						</label>
					</div>

					<div className="form-inline">
						<label htmlFor="language">Language:</label>
						<select>
							<option>English</option>
						</select>
					</div>
				</form>
			</div>
			<div className="reset-container">
				<button className="reset-button">Reset to default</button>
			</div>
		</>
	);
};

export default Settings;
