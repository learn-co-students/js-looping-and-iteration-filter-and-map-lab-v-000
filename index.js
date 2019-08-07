// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter(function (driver) {
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (d) {
        return d.name
    })
}

function exactMatch (drivers, matchWithThis) {
    return drivers.filter(function (d) {
        for (const keys in matchWithThis) {
            match = d[keys] === matchWithThis[keys];
        }
    return match;
    })
}

function exactMatchToList (drivers, matchWithThis) {
    return exactMatch(drivers, matchWithThis).map(function (d) {
        return d.name
    })
}