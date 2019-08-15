// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    const newDrivers = drivers.filter(function (driver) {
        return driver.revenue > revenue;
    })
    return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const newDrivers = driversWithRevenueOver(drivers, revenue);
    const names = newDrivers.map(function (driver) {
        return driver.name;
    })
    return names;
}

function exactMatch(drivers, object) {
    const key = Object.keys(object)[0];
    const newDrivers = drivers.filter(function (driver) {
        return driver[key] === object[key];
    })
    return newDrivers;

}

function exactMatchToList(drivers, object) {
    const newDrivers = exactMatch(drivers, object);
    const names = newDrivers.map(function (driver) {
        return driver.name;
    })
    return names;

}
