// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) {
        return driver.revenue >= revenue; 
    });
}; 

function driverNamesWithRevenueOver(drivers, revenue) {
    driversNames = driversWithRevenueOver(drivers, revenue); 
    return driversNames.map( x => x.name)
}; 

function exactMatch(drivers, attributeValue) {
    key = Object.keys(attributeValue)[0]; 
    value = attributeValue[key]
    return drivers.filter(function (driver)  {
            return driver[key] === value; 
    }); 
}; 

function exactMatchToList(drivers, attributeValue) {
    driversNames = exactMatch(drivers, attributeValue); 
    return driversNames.map( x => x.name)
}; 