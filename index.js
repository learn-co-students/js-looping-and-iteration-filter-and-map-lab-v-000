// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) {return driver.revenue > revenue;})
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const driverover = drivers.filter(function(driver) {return driver.revenue > revenue})
    return driverover.map(function(item) {return item.name;})
}

function exactMatch(drivers, item) { 
    const key = Object.keys(item)[0];
    return drivers.filter(d => d[key] === item[key])
    
}

function exactMatchToList(drivers, item) {
     return exactMatch(drivers, item).map(d=> d.name);
}