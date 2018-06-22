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

const defaultState = {
	monday: [10,20],
	tuesday: [10,20],
	wednesday: [10,20],
	thursday: [10,20],
	friday: [10,20],
	saturday: [10,20],
	sunday: [10,20],
	monChecked: false,
	tuesChecked: false,
	wedChecked: false,
	thursChecked: false,
	friChecked: false,
	satChecked: false,
	sunChecked: false,
	monDate: getDate(1),
	tuesDate: getDate(2),
	wedDate: getDate(3),
	thursDate: getDate(4),
	friDate: getDate(5),
	satDate: getDate(6),
	sunDate: getDate(0),
	chosenDestination: "",
	chosenWeather: [],
}


const getData = () => {
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

export default (state = defaultState,action) => {
	console.log(action);
	getData();
	switch(action.type){
		case 'MONDAY':
			console.log(state);
			return Object.assign({}, state, {monday: [30,40,"clouds"], monChecked: !state.monChecked});
		case 'TUESDAY':
			return Object.assign({}, state, {tuesday: [10,50, "rain"], tuesChecked: !state.tuesChecked});
		case 'WEDNESDAY':
			return Object.assign({}, state, {wednesday: [30,45, "clear"], wedChecked: !state.wedChecked});
		case 'THURSDAY':
			return Object.assign({}, state, {thursday: [20,30, "sunny"], thursChecked: !state.thursChecked});
		case 'FRIDAY':
			return Object.assign({}, state, {friday: [30,40, "rain"], friChecked: !state.friChecked});
		case 'SATURDAY':
			return Object.assign({}, state, {saturday: [50,60, "sunny"], satChecked: !state.satChecked});
		case 'SUNDAY':
			return Object.assign({}, state, {sunday: [70,80, "clouds"], sunChecked: !state.sunChecked});
		case 'SUNNY':
			console.log("SUNNY CHOSEN");
			return state;
		case 'CLOUDS':
			return state;
		case'CLEAR':
			return state;
		case 'RAIN':
			return state;
		case 'BEACH':
			return Object.assign({}, state, {chosenDestination: "beach"});
		case 'FOREST':
			return Object.assign({}, state, {chosenDestination: "forest"});
		case 'MALL':
			return Object.assign({}, state, {chosenDestination: "mall"});
		case 'MUSEUM':
			return Object.assign({}, state, {chosenDestination: "museum"});
		default:
			return state;
	}
}