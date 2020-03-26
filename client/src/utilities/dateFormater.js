export const currentTime = () => {
	let today = new Date();

	let result =
		("0" + today.getHours()).slice(-2) +
		":" +
		("0" + today.getMinutes()).slice(-2);

	return result;
};

export const convertToTwelveHrs = timeString => {
	let hours = +timeString.substr(0, 2);
	let time = hours % 12 || 12;
	let ampm = hours < 12 || hours === 24 ? "AM" : "PM";
	let result = time + timeString.substr(2, 3) + " " + ampm;
	return result;
};
