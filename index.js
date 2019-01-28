// Code your solution here:
function driversWithRevenueOver(array, revenue) { 
	return array.filter(function(driver) { 
		return driver.revenue >= revenue 
	});
}
 
function driverNamesWithRevenueOver1(array, revenue) {
 	return array.map(function(driver) { 
 		if (driver.revenue >= revenue) { return driver.name }
 		});
 		return driverList	
 	}


function driverNamesWithRevenueOver(array, revenue) {
	return driversWithRevenueOver(array, revenue).map (function(driver) { 
 		return driver.name
 	});
 }

 	

 function exactMatch (drivers, thing) { 
 	return drivers.filter(function(driver) { debugger; 
 		for (const key in driver) {  }     
    });
 }
  


function aexactMatch(array, thing) { 
 	return array.filter(function(driver) {  
 	});     
}
function exactMatch (drivers, thing) {
	return drivers.filter(function (driver) {
    	for (key in thing) { return thing[key] === driver[key] }  
  	});
}

function exactMatchToList (drivers, thing) {
  	return exactMatch(drivers, thing).map(function(driver) { 
  		return driver.name});
 
}

