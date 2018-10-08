function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter(function (driver) {
        if (driver.revenue > revenue) {
            return driver;
        }  
    });
}

function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
        .map(function (driver) {
            return driver.name;
    });
}

function exactMatch (drivers, matcher) {
    return drivers.filter (function (driver) {
        if (matcher.revenue === driver.revenue || matcher.name === driver.name) {
        return driver;
        }
    });
}

function exactMatchToList (drivers, matcher) {
    return exactMatch (drivers, matcher)
        .map(function (driver) {
            return driver.name
        });
}