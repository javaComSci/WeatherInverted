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

export default (state = defaultState,action) => {
	console.log(action);
	switch(action.type){
		case 'MONDAY':
			console.log(state);
			return Object.assign({}, state, {monday: [30,40], monChecked: !state.monChecked});
		case 'TUESDAY':
			return Object.assign({}, state, {tuesday: [30,40], tuesChecked: !state.tuesChecked});
		case 'WEDNESDAY':
			return Object.assign({}, state, {wednesday: [30,40], wedChecked: !state.wedChecked});
		case 'THRUSDAY':
			return Object.assign({}, state, {thrusday: [30,40], thursChecked: !state.thursChecked});
		case 'FRIDAY':
			return Object.assign({}, state, {friday: [30,40], friChecked: !state.friChecked});
		case 'SATURDAY':
			return Object.assign({}, state, {saturday: [30,40], satChecked: !state.satChecked});
		case 'SUNDAY':
			return Object.assign({}, state, {sunday: [30,40], sunChecked: !state.sunChecked});
		default:
			return state;
	}
}