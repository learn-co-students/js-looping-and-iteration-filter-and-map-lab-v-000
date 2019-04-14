// Code your solution here:
function driversWithRevenueOver(drivers, money) {
    return drivers.filter(function (driver) {
        return driver.revenue > money;
    });
}

function driverNamesWithRevenueOver(drivers, money) {
    return driversWithRevenueOver(drivers, money).map(function(driver) {
        return `${driver.name}`;
    });
}

function exactMatch(drivers, revObj) {
    return drivers.filter(function (driver) {
        let matches = false;

        for (const key in revObj) {
            matches = driver[key] === revObj[key];
        }
        return matches;
    })
}

function exactMatchToList(drivers, revObj) {
    return exactMatch(drivers, revObj).map(function(driver) {
        return driver.name;
    })
}