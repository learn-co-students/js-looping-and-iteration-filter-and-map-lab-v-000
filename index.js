function driversWithRevenueOver(drivers, amount) {
    return drivers.filter(function(driver) {return driver.revenue > amount})
}

function driverNamesWithRevenueOver(drivers, amount) {
    return driversWithRevenueOver(drivers, amount).map(driver => driver.name)
}

function exactMatch(drivers, match) {
    return drivers.filter(driver => driver.name === match.name || driver.revenue === match.revenue);
}

function exactMatchToList(drivers, match) {
    return exactMatch(drivers, match).map(driver => driver.name);
}
