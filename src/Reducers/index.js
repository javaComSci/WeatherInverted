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

const locationAndDestinations = {
	northeast: {
		beach: {	
			CapeCod: "02630",
			AtlanticCity: "08201",
			LongIsland: "11101",
			OceanCity: "21842",
		},
		park: {
			CentralPark: "10026",
			RiversidePark: "10023",
			WashingtonSquarePark: "10035",
			CheesequakeStatePark: "08204"
		}
	}
}

const stubBody = {"cod":"200","message":0.0049,"cnt":40,"list":[{"dt":1529625600,"main":{"temp":301.53,"temp_min":301.226,"temp_max":301.53,"pressure":1023.75,"sea_level":1023.95,"grnd_level":1023.75,"humidity":95,"temp_kf":0.3},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":4.61,"deg":124.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-22 00:00:00"},{"dt":1529636400,"main":{"temp":300.97,"temp_min":300.741,"temp_max":300.97,"pressure":1024.53,"sea_level":1024.76,"grnd_level":1024.53,"humidity":94,"temp_kf":0.23},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":4.74,"deg":126.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-22 03:00:00"},{"dt":1529647200,"main":{"temp":300.77,"temp_min":300.622,"temp_max":300.77,"pressure":1025.46,"sea_level":1025.65,"grnd_level":1025.46,"humidity":94,"temp_kf":0.15},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":92},"wind":{"speed":3.76,"deg":134.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-22 06:00:00"},{"dt":1529658000,"main":{"temp":300.79,"temp_min":300.713,"temp_max":300.79,"pressure":1025.14,"sea_level":1025.38,"grnd_level":1025.14,"humidity":95,"temp_kf":0.08},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":68},"wind":{"speed":3.57,"deg":150.002},"rain":{"3h":0.004999999999999},"sys":{"pod":"n"},"dt_txt":"2018-06-22 09:00:00"},{"dt":1529668800,"main":{"temp":300.562,"temp_min":300.562,"temp_max":300.562,"pressure":1025.9,"sea_level":1026.13,"grnd_level":1025.9,"humidity":95,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":3.37,"deg":156.006},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-22 12:00:00"},{"dt":1529679600,"main":{"temp":301.258,"temp_min":301.258,"temp_max":301.258,"pressure":1026.6,"sea_level":1026.85,"grnd_level":1026.6,"humidity":98,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":36},"wind":{"speed":4.56,"deg":160.501},"rain":{"3h":0.004999999999999},"sys":{"pod":"d"},"dt_txt":"2018-06-22 15:00:00"},{"dt":1529690400,"main":{"temp":301.711,"temp_min":301.711,"temp_max":301.711,"pressure":1026.33,"sea_level":1026.48,"grnd_level":1026.33,"humidity":97,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":5.37,"deg":165.006},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-22 18:00:00"},{"dt":1529701200,"main":{"temp":301.863,"temp_min":301.863,"temp_max":301.863,"pressure":1024.48,"sea_level":1024.66,"grnd_level":1024.48,"humidity":97,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":5.66,"deg":157.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-22 21:00:00"},{"dt":1529712000,"main":{"temp":301.49,"temp_min":301.49,"temp_max":301.49,"pressure":1023.14,"sea_level":1023.37,"grnd_level":1023.14,"humidity":94,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":6.36,"deg":152.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-23 00:00:00"},{"dt":1529722800,"main":{"temp":300.795,"temp_min":300.795,"temp_max":300.795,"pressure":1023.67,"sea_level":1024,"grnd_level":1023.67,"humidity":94,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":6.71,"deg":156.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-23 03:00:00"},{"dt":1529733600,"main":{"temp":300.613,"temp_min":300.613,"temp_max":300.613,"pressure":1024.66,"sea_level":1024.96,"grnd_level":1024.66,"humidity":95,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":7.36,"deg":170},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-23 06:00:00"},{"dt":1529744400,"main":{"temp":300.523,"temp_min":300.523,"temp_max":300.523,"pressure":1023.87,"sea_level":1024.05,"grnd_level":1023.87,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":48},"wind":{"speed":7.41,"deg":181.001},"rain":{"3h":0.080000000000002},"sys":{"pod":"n"},"dt_txt":"2018-06-23 09:00:00"},{"dt":1529755200,"main":{"temp":300.357,"temp_min":300.357,"temp_max":300.357,"pressure":1023.56,"sea_level":1023.67,"grnd_level":1023.56,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":64},"wind":{"speed":7.31,"deg":179.005},"rain":{"3h":0.004999999999999},"sys":{"pod":"d"},"dt_txt":"2018-06-23 12:00:00"},{"dt":1529766000,"main":{"temp":301.058,"temp_min":301.058,"temp_max":301.058,"pressure":1023.76,"sea_level":1023.95,"grnd_level":1023.76,"humidity":95,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":8.06,"deg":169.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-23 15:00:00"},{"dt":1529776800,"main":{"temp":301.796,"temp_min":301.796,"temp_max":301.796,"pressure":1023.32,"sea_level":1023.59,"grnd_level":1023.32,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":20},"wind":{"speed":9.41,"deg":166.001},"rain":{"3h":0.010000000000002},"sys":{"pod":"d"},"dt_txt":"2018-06-23 18:00:00"},{"dt":1529787600,"main":{"temp":302.057,"temp_min":302.057,"temp_max":302.057,"pressure":1021.83,"sea_level":1021.91,"grnd_level":1021.83,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":10.17,"deg":163.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-23 21:00:00"},{"dt":1529798400,"main":{"temp":301.736,"temp_min":301.736,"temp_max":301.736,"pressure":1020.81,"sea_level":1020.93,"grnd_level":1020.81,"humidity":90,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":10.16,"deg":160.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-24 00:00:00"},{"dt":1529809200,"main":{"temp":301.181,"temp_min":301.181,"temp_max":301.181,"pressure":1022.2,"sea_level":1022.33,"grnd_level":1022.2,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":9.87,"deg":162.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-24 03:00:00"},{"dt":1529820000,"main":{"temp":301.277,"temp_min":301.277,"temp_max":301.277,"pressure":1023.52,"sea_level":1023.75,"grnd_level":1023.52,"humidity":91,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":9.43,"deg":166.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-24 06:00:00"},{"dt":1529830800,"main":{"temp":300.999,"temp_min":300.999,"temp_max":300.999,"pressure":1022.87,"sea_level":1023.07,"grnd_level":1022.87,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":9.27,"deg":165.501},"rain":{"3h":0.049999999999997},"sys":{"pod":"n"},"dt_txt":"2018-06-24 09:00:00"},{"dt":1529841600,"main":{"temp":300.968,"temp_min":300.968,"temp_max":300.968,"pressure":1023.39,"sea_level":1023.65,"grnd_level":1023.39,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":68},"wind":{"speed":9.47,"deg":163.001},"rain":{"3h":0.030000000000001},"sys":{"pod":"d"},"dt_txt":"2018-06-24 12:00:00"},{"dt":1529852400,"main":{"temp":301.502,"temp_min":301.502,"temp_max":301.502,"pressure":1024.53,"sea_level":1024.8,"grnd_level":1024.53,"humidity":91,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":9.86,"deg":162.003},"rain":{"3h":0.004999999999999},"sys":{"pod":"d"},"dt_txt":"2018-06-24 15:00:00"},{"dt":1529863200,"main":{"temp":302.018,"temp_min":302.018,"temp_max":302.018,"pressure":1025.3,"sea_level":1025.47,"grnd_level":1025.3,"humidity":91,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":9.26,"deg":161},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-24 18:00:00"},{"dt":1529874000,"main":{"temp":302.286,"temp_min":302.286,"temp_max":302.286,"pressure":1024.56,"sea_level":1024.65,"grnd_level":1024.56,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":8.5,"deg":152.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-24 21:00:00"},{"dt":1529884800,"main":{"temp":301.9,"temp_min":301.9,"temp_max":301.9,"pressure":1023.94,"sea_level":1024.18,"grnd_level":1023.94,"humidity":90,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":8.56,"deg":143.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-25 00:00:00"},{"dt":1529895600,"main":{"temp":300.909,"temp_min":300.909,"temp_max":300.909,"pressure":1025.29,"sea_level":1025.5,"grnd_level":1025.29,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":8.47,"deg":139.002},"rain":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2018-06-25 03:00:00"},{"dt":1529906400,"main":{"temp":301.212,"temp_min":301.212,"temp_max":301.212,"pressure":1026.61,"sea_level":1026.82,"grnd_level":1026.61,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":8.51,"deg":154.503},"rain":{"3h":0.15},"sys":{"pod":"n"},"dt_txt":"2018-06-25 06:00:00"},{"dt":1529917200,"main":{"temp":300.936,"temp_min":300.936,"temp_max":300.936,"pressure":1026.24,"sea_level":1026.44,"grnd_level":1026.24,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":7.62,"deg":156.003},"rain":{"3h":0.059999999999999},"sys":{"pod":"n"},"dt_txt":"2018-06-25 09:00:00"},{"dt":1529928000,"main":{"temp":301.092,"temp_min":301.092,"temp_max":301.092,"pressure":1026.7,"sea_level":1026.92,"grnd_level":1026.7,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":20},"wind":{"speed":7.46,"deg":153.501},"rain":{"3h":0.040000000000003},"sys":{"pod":"d"},"dt_txt":"2018-06-25 12:00:00"},{"dt":1529938800,"main":{"temp":301.668,"temp_min":301.668,"temp_max":301.668,"pressure":1028,"sea_level":1028.12,"grnd_level":1028,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.32,"deg":150.507},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-25 15:00:00"},{"dt":1529949600,"main":{"temp":301.906,"temp_min":301.906,"temp_max":301.906,"pressure":1028.4,"sea_level":1028.61,"grnd_level":1028.4,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.47,"deg":145.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-25 18:00:00"},{"dt":1529960400,"main":{"temp":301.907,"temp_min":301.907,"temp_max":301.907,"pressure":1027.22,"sea_level":1027.36,"grnd_level":1027.22,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.81,"deg":139.006},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-25 21:00:00"},{"dt":1529971200,"main":{"temp":301.614,"temp_min":301.614,"temp_max":301.614,"pressure":1026.44,"sea_level":1026.62,"grnd_level":1026.44,"humidity":90,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":7.95,"deg":138.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-26 00:00:00"},{"dt":1529982000,"main":{"temp":301.196,"temp_min":301.196,"temp_max":301.196,"pressure":1027.83,"sea_level":1027.94,"grnd_level":1027.83,"humidity":91,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":7.8,"deg":141.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-26 03:00:00"},{"dt":1529992800,"main":{"temp":301.15,"temp_min":301.15,"temp_max":301.15,"pressure":1028.91,"sea_level":1029.12,"grnd_level":1028.91,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":7.81,"deg":153.501},"rain":{"3h":0.009999999999998},"sys":{"pod":"n"},"dt_txt":"2018-06-26 06:00:00"},{"dt":1530003600,"main":{"temp":300.584,"temp_min":300.584,"temp_max":300.584,"pressure":1028.08,"sea_level":1028.27,"grnd_level":1028.08,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":6.76,"deg":162.502},"rain":{"3h":0.1},"sys":{"pod":"n"},"dt_txt":"2018-06-26 09:00:00"},{"dt":1530014400,"main":{"temp":300.773,"temp_min":300.773,"temp_max":300.773,"pressure":1028.14,"sea_level":1028.48,"grnd_level":1028.14,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":44},"wind":{"speed":5.71,"deg":161.007},"rain":{"3h":0.13},"sys":{"pod":"d"},"dt_txt":"2018-06-26 12:00:00"},{"dt":1530025200,"main":{"temp":301.095,"temp_min":301.095,"temp_max":301.095,"pressure":1029.42,"sea_level":1029.64,"grnd_level":1029.42,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":64},"wind":{"speed":5.26,"deg":146.008},"rain":{"3h":0.030000000000001},"sys":{"pod":"d"},"dt_txt":"2018-06-26 15:00:00"},{"dt":1530036000,"main":{"temp":301.804,"temp_min":301.804,"temp_max":301.804,"pressure":1029.5,"sea_level":1029.71,"grnd_level":1029.5,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":20},"wind":{"speed":6.21,"deg":134.507},"rain":{"3h":0.02},"sys":{"pod":"d"},"dt_txt":"2018-06-26 18:00:00"},{"dt":1530046800,"main":{"temp":301.905,"temp_min":301.905,"temp_max":301.905,"pressure":1028.25,"sea_level":1028.35,"grnd_level":1028.25,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.01,"deg":129.506},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-26 21:00:00"}],"city":{"id":4720131,"name":"Portland","coord":{"lat":27.8768,"lon":-97.3234},"country":"US","population":15099}}

const intToDay = (i) => {
	switch(i){
		case 0: return 'Sunday';
		case 1: return 'Monday';
		case 2: return 'Tuesday';
		case 3: return 'Wednesday';
		case 4: return 'Thursday';
		case 5: return 'Friday';
		case 6: return 'Saturday';
	}
}

const dayToInt = (d) => {
	switch(d){
		case 'Sunday': return 0;
		case 'Monday': return 1;
		case 'Tuesday': return 2;
		case 'Wednesday': return 3;
		case 'Thursday': return 4;
		case 'Friday': return 5;
		case 'Saturday': return 6;
	}
}

const getData = (location, destination) => {
	let dataBody = {};
	let request = require('request');
	let apiKey = '3bec72de36769f47d439e4d00ed850e9';
	let cities = locationAndDestinations[location][destination];
	let placeCount = 1;
	let currentPlace;
	for(var city in cities){
		currentPlace = "Place" + placeCount;
		placeCount++;
		dataBody[currentPlace] = {};
		dataBody[currentPlace]['name'] = city;
		let zipcode = cities[city];
		// let url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}`;
		let weather = stubBody;
		let minTemps = [];
		let maxTemps = [];
		let weathers = [];
		for(let i = 0; i < 40; i+=8){
			let data = weather.list.slice(i, i+8);
			let minTempForDay = data.map(d => d.main.temp_min);
			let maxTempForDay = data.map(d => d.main.temp_max);
			minTemps.push(parseInt(1.8*(Math.min(...minTempForDay) - 273)));
			maxTemps.push(parseInt(1.8*(Math.max(...maxTempForDay) - 273)));
			let statuses = data.map(d => d.weather[0].main);
			let allStatus = {};
			statuses.forEach(s => allStatus[s] ? allStatus[s]= allStatus[s] + 1 : allStatus[s] = 1);
			let maxCount = Math.max(...Object.values(allStatus));
			let commonWeather = Object.keys(allStatus).filter(x => allStatus[x] == maxCount);
			weathers.push(commonWeather[0]);
			console.log(data);
		}
		let currentDate = new Date();
		let currentDay = currentDate.getDay();
		for(let i = 0; i < 7; i++){
			dataBody[currentPlace][intToDay(currentDay+i)] = {};
			dataBody[currentPlace][intToDay(currentDay+i)]['Min'] = minTemps[i] || 'Not enough data';
			dataBody[currentPlace][intToDay(currentDay+i)]['Max'] = maxTemps[i] || 'Not enough data';
			dataBody[currentPlace][intToDay(currentDay+i)]['Weather'] = weathers[i] || 'Not enough data';
		}
	}

	console.log(stubData);
	console.log(dataBody);
	return dataBody;

	// let allMinTemp = [];
	// let allMaxTemp = [];

	// request(url, function(err, response, body){
	// 	if(err){
	// 		console.log('error: ', err);
	// 	}else{
	// 		console.log('body: ', body);
	// 		console.log("\n\n\n\n");
	// 		let weather = JSON.parse(body);
	// 		for(let i = 0; i < 40; i+=8){
	// 			let data = weather.list.slice(i, i+8);
	// 			let minData = Math.min(...data.map(d => d.main.temp_min));
	// 			let maxData = Math.max(...data.map(d => d.main.temp_max));
	// 			allMinTemp.push(parseInt(1.8 * (minData - 273)));
	// 			allMaxTemp.push(parseInt(1.8 * (maxData - 273)));
	// 			let weatherStatus = data.map(d => d.weather[0].main);
	// 			let commonWeather = {};
	// 			weatherStatus.forEach(val => ((commonWeather[val]) ? commonWeather[val] +=  1 : commonWeather[val] = 1));
	// 			console.log(Object.values(commonWeather));
	// 			let commonStatus = Math.max(...Object.values(commonWeather));
	// 			let filtered = Object.keys(commonWeather).filter(x => commonWeather[x] == commonStatus);
	// 		}
	// 		console.log(allMinTemp);
	// 		console.log(allMaxTemp);
	// 	}
	// })
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

