// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    let newDrivers = drivers.filter(function (driver) {return driver['revenue'] > revenue;});
    return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let newDrivers = drivers.filter(function (driver) {return driver['revenue'] > revenue;});
    let newestDrivers = newDrivers.map(function (driver) {return driver['name'];});
    return newestDrivers;
}

function exactMatch(drivers, obj) {
    return drivers.filter(function (driver) {
        //if (driver['name'] === obj || driver['revenue'] === obj){
        //return driver;}
        //return newDrivers;
        for (const key in obj) {
            return driver[key] == obj[key];
        }
    })
}

function exactMatchToList(drivers, obj) {
    return exactMatch(drivers, obj).map(function(driver){
        return driver.name
    })
}

