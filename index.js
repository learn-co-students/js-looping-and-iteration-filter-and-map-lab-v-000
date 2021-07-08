// Code your solution here:
function driversWithRevenueOver(driverArr, number){
	return driverArr.filter(driver=>driver.revenue > number) 
	//var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
};

function driverNamesWithRevenueOver(driverArr, number){
	let filteredObj = driverArr.filter(driver=>driver.revenue > number)
	return filteredObj.map(x=>x.name)
};

function exactMatch(driverArr, src){
	//return an object that has the exact key value pair in the given obj
	let srcKeys = Object.keys(src)

	return driverArr.filter(function(driver){
		return srcKeys.every(function(key){
			return driver.hasOwnProperty(key) && driver[key] === src[key]
		})
	})
};


// function whatIsInAName(collection, src){
// 	var srcKeys = Object.keys(src);

// 	return collection.filter(function(driver){
// 		return srcKeys.every(function(key){
// 			return driver.hasOwnProperty(key) && driver[key] == src[key];
// 		})
// 	})
// }

function exactMatchToList(driverArr, src){
	return exactMatch(driverArr, src).map(key=>key.name)
}