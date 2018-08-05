export const chooseDay = (value) => {
	return {
		type: 'DAY',
		payload: value,
	}
}

export const chooseWeather = (value) => {
	return {
		type: 'WEATHER',
		payload: value,
	}
}

export const chooseDestination = (value) => {
	return {
		type: 'DESTINATION',
		payload: value,
	}
}

export const chooseLocation = (value) => {
	return {
		type: 'LOCATION',
		payload: value,
	};
}