// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
   return drivers.filter(function(driver) {
        return driver.revenue > amount;
    });
}

function driverNamesWithRevenueOver(drivers, amount) {
    return driversWithRevenueOver(drivers, amount).map(function(driver) {
        return driver.name;
    })
}

function exactMatch(drivers, matcher) {
    // return matchedDriver = drivers.filter(function(driver) {
    //     return driver[Object.keys(matcher)[0]] === matcher[Object.keys(matcher)[0]]
    // });

    return drivers.filter(function(driver) { 
        let matches = false;

        for (const key in matcher) {
            matches = driver[key] === matcher[key];
        }

        return matches;
    });
}

function exactMatchToList(drivers, matcher) {
    // const matchedDrivers = exactMatch(drivers, matcher)

    return exactMatch(drivers, matcher).map(function(driver) {return driver.name});
}