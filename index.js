// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
    const driversOver = [];
    for (const driver of drivers) {
        if (driver.revenue > rev) {
            driversOver.push(driver);
        }
    }
    return driversOver;
}

function driverNamesWithRevenueOver(drivers, rev) {
    const driversOver = driversWithRevenueOver(drivers, rev);
    const driversOverByName = driversOver.map(function(driver) { return driver.name; });
    return driversOverByName;
}

function exactMatch(extendedDrivers, searchable) {
    const matched = extendedDrivers.filter(function(driver) {
        for (const attr in searchable) {
            return driver[attr] === searchable[attr];
        }
    });
    return matched;
}

function exactMatchToList(extendedDrivers, searchable) {
    const matched = exactMatch(extendedDrivers, searchable);
    const matchedByName = [];
    matched.map(function(driver) { matchedByName.push(driver.name); });
    return matchedByName;
}