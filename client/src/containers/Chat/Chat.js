import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import Messages from "../../components/Messages/Messages";
import { currentTime } from "../../utilities/dateFormater";
import * as actions from "../../store/actions/index";

let socket;
const Chat = () => {
	const name = useSelector(state => state.user.users);
	const theme = useSelector(state => state.interfaceColor.color);
	const keyPress = useSelector(state => state.keyPress.press);
	const messages = useSelector(state => state.message.messages);

	const dispatch = useDispatch();
	const [message, setMessage] = useState("");
	const ENDPOINT = "localhost:5000";

	useEffect(() => {
		socket = io(ENDPOINT);

		socket.emit("join", name, () => {});

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}, [ENDPOINT, name]);

	useEffect(() => {
		socket.on("message", message => {
			const msg = { ...message, time: currentTime() };
			dispatch(actions.saveMessage(msg));
		});
	}, []);

	const sendMessage = event => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	return (
		<div>
			<div className={`container ${theme}`}>
				<Messages messages={messages} name={name} />
			</div>
			<div>
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
					keyPress={keyPress}
				/>
			</div>
		</div>
	);
};

export default Chat;
