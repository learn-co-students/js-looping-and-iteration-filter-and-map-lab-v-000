// Code your solution here:

function driversWithRevenueOver(drivers, amount) {
    return drivers.filter(function(driver){return driver.revenue > amount});
}

function driverNamesWithRevenueOver(drivers, amount) {
    let filteredDrivers = driversWithRevenueOver(drivers, amount);
    return filteredDrivers.map(function(driver){return driver.name});
}

function exactMatch(drivers, field) {
    return drivers.filter(function(driver){return driver.revenue === field.revenue || driver.name === field.name});
} 

function exactMatchToList(drivers, field) {
    let filteredDrivers = exactMatch(drivers, field);
    return filteredDrivers.map(function(driver){return driver.name});
}