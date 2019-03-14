funciton orbitalPeriod(arr){
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	arr.forEach((item) => {
		let a = earthRadius + item["avgAlt"];
		let period = Math.round(2*Math.PI * Math.sqrt(Math.pow(a,3)/GM));
		delete item["avgAlt"];
		return item["orbitalPeriod"] = period;		
	});
	return arr;
}

orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]);