// Code your solution here:

function driversWithRevenueOver(drivers, thisRevenue) {
    return drivers.filter(function (driverName) {
        return driverName.revenue > thisRevenue;
    });
}

function driverNamesWithRevenueOver(drivers, thisRevenue) {
    driversArray = drivers.filter(function (driver) {
        return driver.revenue > thisRevenue
    })
    return driversArray.map(function(driver) {
        return driver.name
    })
}

function exactMatch(drivers, object) {
    let key = Object.keys(object)  
    return drivers.filter(function (driver) {
        return driver[key] === object[key]
    })
}

function exactMatchToList(drivers, object) {
    let key = Object.keys(object)
    driversArray = drivers.filter(function (driver) {
        return driver[key] === object[key]
    })
    return driversArray.map(function(driver) {
        return driver.name
    })
}
