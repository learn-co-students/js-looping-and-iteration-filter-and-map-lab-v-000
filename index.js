// Code your solution here:

function driversWithRevenueOver (driver, revenue) {
    return driver.filter(function (element) {return element.revenue > revenue; });
}

function driverNamesWithRevenueOver (driver, revenue) {
    return driversWithRevenueOver(driver, revenue).map(function(element) {return element.name}); 
}

function exactMatch(driver, attribute) {
    return driver.filter(function (element) {return element[Object.keys(attribute)[0]] === Object.values(attribute)[0]; });
}

function exactMatchToList(driver, attribute) {
    return exactMatch(driver, attribute).map(function(element) {return element.name});
}