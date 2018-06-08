const defaultState = {
	monday: [10,20],
	tuesday: [10,20],
	wednesday: [10,20],
	thrusday: [10,20],
	friday: [10,20],
	saturday: [10,20],
	sunday: [10,20],
}

export default (state = defaultState,action) => {
	console.log(action);
	switch(action.type){
		case 'MONDAY':
			return Object.assign({}, state, {monday: [30,40]});
		case 'TUESDAY':
			return Object.assign({}, state, {monday: [30,40]});
		case 'WEDNESDAY':
			return Object.assign({}, state, {monday: [30,40]});
		case 'THRUSDAY':
			return Object.assign({}, state, {monday: [30,40]});
		case 'FRIDAY':
			return Object.assign({}, state, {monday: [30,40]});
		case 'SATURDAY':
			return Object.assign({}, state, {monday: [30,40]});
		case 'SUNDAY':
			return Object.assign({}, state, {monday: [30,40]});
		default:
			return state;
	}
}