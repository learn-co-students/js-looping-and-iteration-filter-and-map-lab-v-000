function driversWithRevenueOver (list, revenue) {
    return list.filter(function (driver) {
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver (list, revenue) {
    return driversWithRevenueOver(list, revenue)
        .map(function (driver) {
            return driver.name;
        });
}

function exactMatch (list, matcher) {
    return list.filter(function (driver) {
        let matches = false;
        for (const key in matcher) {
            matches = driver[key] === matcher[key];
        }
        return matches;
    });
}

function exactMatchToList (list, matcher) {
    return exactMatch(list, matcher)
        .map(function (driver) {
            return driver.name;
        });
}