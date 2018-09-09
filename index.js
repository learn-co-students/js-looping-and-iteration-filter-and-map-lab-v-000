function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (rev) {
        return rev.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
        .map(function (driver) {
            return driver.name
        });
}

function exactMatch(drivers, matchObj) {
    return drivers.filter(function (driver) {
       let match = false
       for (const key in matchObj) {
         match = driver[key] === matchObj[key]
       }
       return match
    })
}

function exactMatchToList(drivers, matchObj) {
    return exactMatch(drivers, matchObj)
       .map(function (driver) {
         return driver.name
       });
}
