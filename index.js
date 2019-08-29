// Code your solution here:
function driversWithRevenueOver(drivers, revenueTarget) {
    return drivers.filter(function(driver) {
        return driver.revenue > revenueTarget;
    })
}

function driverNamesWithRevenueOver(drivers, revenueTarget) {
    return driversWithRevenueOver(drivers, revenueTarget).map(function(driver) {
        return driver.name;
    })
}

function exactMatch(drivers, objectToMatch) {
    let keyName = Object.keys(objectToMatch)[0];
    return drivers.filter(function(driver) {
        return driver[keyName] === objectToMatch[keyName];
    })
}

function exactMatchToList(drivers, objectToMatch) {
    return exactMatch(drivers, objectToMatch).map(function(driver) {
        return driver.name;
    })
}

// we want to search according to an object that we pass to the function
// { revenue: 200 }
// we want to iterate over every object in the drivers array, and pick out the objects that
// match exactly to the object that we pass in as an argument.

// so that means that we want to check every object's revenue. and see if that matches the
// value of the object we passed in. If it does, then we want to collect that object and return it. 
// so we dont actually need to use map, since we arent manipulating the object, but only checking to see
// if it meets a certain condition.

// using filter, we would run drivers.filter(function(){ in here goes the code that checks if the object is
// an exact match to the argument })

// Iterate over drivers.
// for each driver, check if the value of driver[key] === value of argument[key]