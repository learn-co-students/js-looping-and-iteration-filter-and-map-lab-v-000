// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > revenue);
    return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > revenue);
    return result.map(driver => driver.name);
}


function exactMatch(drivers, query) {
    let key = Object.keys(query)[0]
       return drivers.filter(driver => driver[key] === query[key]);
}

function exactMatchToList(drivers, query) {
    const result = exactMatch(drivers, query)
    return result.map(driver => driver.name);
}