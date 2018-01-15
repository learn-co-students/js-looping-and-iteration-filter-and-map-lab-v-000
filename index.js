// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const newDrivers = drivers.filter(function (driver) {
        return driver.revenue > revenue;
    })

    return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const newDrivers = driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
    return newDrivers;
}

function exactMatch(drivers, object) {
    const key = Object.keys(object)[0];
    const newDrivers = drivers.filter(function (driver) {
        return driver[key] === object[key];
    })

    return newDrivers;
}

function exactMatchToList(drivers, object) {
  const newDrivers = exactMatch(drivers, object).map(driver => driver.name);
  return newDrivers;
}
