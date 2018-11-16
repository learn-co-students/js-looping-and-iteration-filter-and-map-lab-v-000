// Code your solution here:

function driversWithRevenueOver(arrayDrivers, inputRevenue) {
    return arrayDrivers.filter(driver => driver.revenue > inputRevenue);
}

function driverNamesWithRevenueOver(arrayDrivers, inputRevenue) {
    return arrayDrivers.filter(driver => driver.revenue > inputRevenue).map(drv => drv.name);
    //method calls! look at the terse code @.@
}

function exactMatch(arrayDrivers, driverIdentifier) {
    return arrayDrivers.filter(driver => driver[Object.keys(driverIdentifier)] === driverIdentifier[Object.keys(driverIdentifier)]);
}

function exactMatchToList(arrayDrivers, driverIdentifier) {
    return exactMatch(arrayDrivers, driverIdentifier).map(drv => drv.name);
}