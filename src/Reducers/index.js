const getDate = (curr) => {
		var d = new Date();
		d.setDate(d.getDate() + ((7-d.getDay())%7+curr) % 7);
		let month;
		switch(d.getMonth()){
			case 0: month = "January"; break;
			case 1: month = "Feburary"; break;
			case 2: month ="March"; break;
			case 3: month ="April"; break;
			case 4: month ="May"; break;
			case 5: month ="June"; break;
			case 6: month ="July"; break;
			case 7: month ="August"; break;
			case 8: month ="September"; break;
			case 9: month ="October"; break;
			case 10: month ="November"; break;
			case 11: month ="December"; break;
		}
	return month + " " + d.getDate();
}


const getDays = (state, newDay) => {
	let newDays;
	if (newDay == 'Monday'){
		newDays = state.days.Monday ? {...state.days, Monday:undefined} : {...state.days, Monday:true};
	} else if (newDay == 'Tuesday'){
		newDays = state.days.Tuesday ? {...state.days, Tuesday:undefined} : {...state.days, Tuesday:true};
	} else if (newDay == 'Wednesday'){
		newDays = state.days.Wednesday ? {...state.days, Wednesday:undefined} : {...state.days, Wednesday:true};
	} else if (newDay == 'Thursday'){
		newDays = state.days.Thursday ? {...state.days, Thursday:undefined} : {...state.days, Thursday:true};
	} else if (newDay == 'Friday'){
		newDays = state.days.Friday ? {...state.days, Friday:undefined} : {...state.days, Friday:true};
	} else if (newDay == 'Saturday'){
		newDays = state.days.Saturday ? {...state.days, Saturday:undefined} : {...state.days, Saturday:true};
	} else if (newDay == 'Sunday'){
		newDays = state.days.Sunday ? {...state.days, Sunday:undefined} : {...state.days, Sunday:true};
	}
	return {...state, days: newDays};
}

const getWeather = (state, newWeather) => {
	let newWeathers;
	if (newWeather == 'Sunny'){
		newWeathers = state.weather.Sunny ? {...state.weather, Sunny:undefined} : {...state.weather, Sunny:true};
	} else if (newWeather == 'Rain'){
		newWeathers = state.weather.Rain  ? {...state.weather, Rain:undefined} : {...state.weather, Rain:true};
	} else if (newWeather == 'Clear'){
		newWeathers = state.weather.Clear ? {...state.weather, Clear:undefined} : {...state.weather, Clear:true};
	} else if (newWeather == 'Clouds'){
		newWeathers = state.weather.Clouds ? {...state.weather, Clouds:undefined} : {...state.weather, Clouds:true};
	} else if (newWeather == 'Drizzle'){
		newWeathers = state.weather.Drizzle ? {...state.weather, Drizzle:undefined} : {...state.weather, Drizzle:true};
	}
	return {...state, weather: newWeathers};
}
const stubData = {
	Place1: {
		name: 'PLACE1',
		Monday: {
			Max: 78,
			Min: 34,
			Weather: 'Sunny',
		},
		Tuesday: {
			Max: 80,
			Min: 35,
			Weather: 'Clouds',
		},
		Wednesday: {
			Max: 78,
			Min: 34,
			Weather: 'Rain',
		},
		Thursday: {
			Max: 78,
			Min: 34,
			Weather: 'Drizzle',
		},
		Friday: {
			Max: 78,
			Min: 34,
			Weather: 'Rain',
		},
		Saturday: {
			Max: 78,
			Min: 34,
			Weather: 'Clouds',
		},
		Sunday: {
			Max: 78,
			Min: 34,
			Weather: 'Rain',
		},
	},
	Place2: {
		name: 'PLACE2',
		Monday: {
			Max: 68,
			Min: 30,
			Weather: 'Sunny',
		},
		Tuesday: {
			Max: 68,
			Min: 30,
			Weather: 'Clouds',
		},
		Wednesday: {
			Max: 68,
			Min: 34,
			Weather: 'Rain',
		},
		Thursday: {
			Max: 68,
			Min: 34,
			Weather: 'Drizzle',
		},
		Friday: {
			Max: 68,
			Min: 34,
			Weather: 'Sunny',
		},
		Saturday: {
			Max: 68,
			Min: 34,
			Weather: 'Clouds',
		},
		Sunday: {
			Max: 68,
			Min: 34,
			Weather: 'Rain',
		},
	},
};
const getData = (location, destination) => {
	return stubData;
	
	let request = require('request');
	let apiKey = '3bec72de36769f47d439e4d00ed850e9';
	let city = 'portland';
	let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${apiKey}`

	let allMinTemp = [];
	let allMaxTemp = [];

	request(url, function(err, response, body){
		if(err){
			console.log('error: ', err);
		}else{
			console.log('body: ', body);
			console.log("\n\n\n\n");
			let weather = JSON.parse(body);
			for(let i = 0; i < 40; i+=8){
				let data = weather.list.slice(i, i+8);
				let minData = Math.min(...data.map(d => d.main.temp_min));
				let maxData = Math.max(...data.map(d => d.main.temp_max));
				allMinTemp.push(parseInt(1.8 * (minData - 273)));
				allMaxTemp.push(parseInt(1.8 * (maxData - 273)));
				let weatherStatus = data.map(d => d.weather[0].main);
				let commonWeather = {};
				weatherStatus.forEach(val => ((commonWeather[val]) ? commonWeather[val] +=  1 : commonWeather[val] = 1));
				console.log(Object.values(commonWeather));
				let commonStatus = Math.max(...Object.values(commonWeather));
				let filtered = Object.keys(commonWeather).filter(x => commonWeather[x] == commonStatus);
			}
			console.log(allMinTemp);
			console.log(allMaxTemp);
		}
	})
}

const defaultState = {
	monDate: getDate(1),
	tuesDate: getDate(2),
	wedDate: getDate(3),
	thursDate: getDate(4),
	friDate: getDate(5),
	satDate: getDate(6),
	sunDate: getDate(0),
	days:{},
	weather:{}
};

export default (state = defaultState, action) => {
	console.log(state);
	console.log(action.payload);
	switch(action.type){
		case 'LOCATION': if(action.payload && state.destination && state.location != action.payload){
							let data = getData(action.payload, state.destination);
							return {...state, location: action.payload, data};
						 }
						 return {...state, location: action.payload};
		case 'DESTINATION': if(state.location && action.payload && state.destination != action.payload){
								let data = getData(state.location, action.payload);
								return {...state, destination: action.payload, data};
						    }
						    return {...state, destination: action.payload};
		case 'DAY': return getDays(state, action.payload);
		case 'WEATHER': return getWeather(state, action.payload);
		default: return state;
	}
}

