// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
    const filteredDrivers =  drivers.filter(function(driver) {
        return driver.revenue > amount;
    });

    return filteredDrivers;
}

function driverNamesWithRevenueOver(drivers, amount) {
    const filteredDrivers = driversWithRevenueOver(drivers, amount);

    const driverNames = filteredDrivers.map(function(driver) {
        return driver.name;
    })

    return driverNames;
}

function exactMatch(drivers, queryObject) {
    const matchedDriver = drivers.filter(function(driver) {
        return driver[Object.keys(queryObject)[0]] === queryObject[Object.keys(queryObject)[0]]
    });

    return matchedDriver;
}

function exactMatchToList(drivers, queryObject) {
    const matchedDrivers = exactMatch(drivers, queryObject)

    return matchedDrivers.map(function(driver) {return driver.name});
}