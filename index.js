// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function (driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const successfulDrivers = drivers.filter(function (driver) {return driver.revenue > revenue });
    return successfulDrivers.map(driver => driver.name)
}

function exactMatch(drivers, matcher){
    return drivers.filter(function (driver) { 
        let matches = false;
        
        for (const key in matcher) {
            matches = driver[key] === matcher[key];
        }
        return matches
    });
}

function exactMatchToList(drivers, matcher){
    const driverMatch = drivers.filter(function (driver) {
        let matches = false;
        
        for (const key in matcher) {
            matches = driver[key] === matcher[key];
        }
        return matches 
    })
    
    return driverMatch.map(driver => driver.name) 
}