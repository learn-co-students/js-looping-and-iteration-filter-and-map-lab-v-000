// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue; 
    })
}

function driverNamesWithRevenueOver(drivers, revenue){
    const driversOverRevenue = driversWithRevenueOver(drivers, revenue);
    return driversOverRevenue.map(function(driver){
        return driver.name;
    })
}

function exactMatch(drivers, obj){
    const attr = Object.keys(obj)[0];
    const val = obj[attr];
    return drivers.filter(function(driver){
        return driver[attr] === val;
    })
}

function exactMatchToList(drivers, obj){
    return exactMatch(drivers, obj).map(function(driver){
        return driver.name;
    })
}