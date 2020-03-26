const updateUserSettings = (defaultSettings, label, value) => {
	const userSettings = JSON.parse(localStorage.getItem("userSettings"));
	const userResult = userSettings.find(user => user.name === value);

	if (userResult) {
		alert("username is already taken");
		return false;
	}

	let newUser = { ...defaultSettings, [label]: value };

	userSettings.push(newUser);
	const formattedSettings = JSON.stringify(userSettings);
	localStorage.setItem("userSettings", formattedSettings);

	return newUser;
};

export default updateUserSettings;
