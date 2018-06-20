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
}

const getTuesdayData = () => {
	let request = require('request');
	let apiKey = '3bec72de36769f47d439e4d00ed850e9';
	let city = 'portland';
	let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${apiKey}`

	request(url, function(err, response, body){
		if(err){
			console.log('error: ', err);
		}else{
			console.log('body: ', body);
		}
	})

}

export default (state = defaultState,action) => {
	console.log(action);
	switch(action.type){
		case 'MONDAY':
			console.log(state);
			return Object.assign({}, state, {monday: [30,40,"cloudy"], monChecked: !state.monChecked});
		case 'TUESDAY':
			getTuesdayData();
			return Object.assign({}, state, {tuesday: [10,50, "rainy"], tuesChecked: !state.tuesChecked});
		case 'WEDNESDAY':
			return Object.assign({}, state, {wednesday: [30,45, "sunny"], wedChecked: !state.wedChecked});
		case 'THRUSDAY':
			return Object.assign({}, state, {thrusday: [20,30, "snowy"], thursChecked: !state.thursChecked});
		case 'FRIDAY':
			return Object.assign({}, state, {friday: [30,40, "thunder"], friChecked: !state.friChecked});
		case 'SATURDAY':
			return Object.assign({}, state, {saturday: [50,60, "sunny"], satChecked: !state.satChecked});
		case 'SUNDAY':
			return Object.assign({}, state, {sunday: [70,80, "cloudy"], sunChecked: !state.sunChecked});
		default:
			return state;
	}
}