// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter(function (driver) { return driver.revenue > revenue; });

}

function driverNamesWithRevenueOver(drivers, revenue) {
    const newDrivers = driversWithRevenueOver(drivers,revenue).map(function (driver) {return driver.name});
    return newDrivers;
}

function exactMatch(drivers, attributeObject) {
    for (var key in attributeObject) {
        return drivers.filter(function (driver) { return driver[key] === attributeObject[key] });
    }
}

function exactMatchToList(drivers, attributeObject) {
    const newDrivers = exactMatch(drivers, attributeObject).map(function (driver) {return driver.name});
    return newDrivers;
}