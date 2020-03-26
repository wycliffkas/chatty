import React from "react";
import { useSelector } from "react-redux";
import ReactEmoji from "react-emoji";
import { convertToTwelveHrs } from "../../utilities/dateFormater";
import "./Message.css";

const Message = ({ message: { text, user, time }, name }, props) => {
	const timeFormat = useSelector(state => state.time.timeFormat);
	let isSetByCUrrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		isSetByCUrrentUser = true;
	}

	return isSetByCUrrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10">
				{timeFormat === "12" ? convertToTwelveHrs(time) : time}
			</p>
			<div className="messageBox">
				<p className="messageText">{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox">
				<p className="messageText">{ReactEmoji.emojify(text)}</p>
			</div>
			<p className="sentText pl-10 ">
				{user}
				<span>{` ,${
					timeFormat === "12" ? convertToTwelveHrs(time) : time
				}`}</span>
			</p>
		</div>
	);
};

export default Message;
