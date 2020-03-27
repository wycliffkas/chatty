import React from "react";
import * as actions from "../../store/actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./Input.css";
import telegram from "../../assets/icons/telegram.png";

const Input = ({ message, sendMessage, setMessage, keyPress }) => {
	return (
		<div className="inputElements">
			<input
				class="input"
				type="text"
				placeholder="Type a message ...."
				value={message}
				onChange={event => setMessage(event.target.value)}
				onKeyPress={
					keyPress === "On"
						? event => (event.key === "Enter" ? sendMessage(event) : null)
						: false
				}
			/>
			<button onClick={event => sendMessage(event)}>
				<img className="onlineIcon" src={telegram} alt="telegram" />
			</button>
		</div>
	);
};

export default Input;
