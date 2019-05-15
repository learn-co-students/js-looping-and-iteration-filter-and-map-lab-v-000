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
    return drivers.filter(criteria => criteria.key === query.key || criteria.key = query.key);
}

//function exactMatch(drivers, query) {
    //return drivers(function(criteria) {
        //criteria.key === query.key || criteria.key = query.key
    //}
//}
        //return criteria 
  
    //return drivers.filter(driver =>driver.name===name) || (driver => driver.revenue=revenue);
    //const result = drivers.filter(driver=>driver.name===name) || (driver=>driver.revenue=revenue);
    //return result;
