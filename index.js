// Code your solution here:
function driversWithRevenueOver(drivers, targetRevenue){
    return drivers.filter(function(el) { return el.revenue >= targetRevenue;});
}

function driverNamesWithRevenueOver(drivers, targetRevenue){
    return driversWithRevenueOver(drivers, targetRevenue).map(function (el) {return el.name;})
}

function exactMatch(drivers, testObject){
    return drivers.filter(function(driver) {
        let isExactMatch = true;
        for (key in testObject){
            if (driver[key] !== testObject[key]){
                isExactMatch = false;
                break;
            }
        }
        return isExactMatch;
    });
}

function exactMatchToList(drivers, testObject){
    return exactMatch(drivers, testObject).map(function(driver) {return driver.name;})
}