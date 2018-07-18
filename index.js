// Code your solution here:

function driversWithRevenueOver(drivers, amount) {
    return drivers.filter(driver => driver.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, name) {
    return driversWithRevenueOver(drivers, name).map(object => object.name);
}

function exactMatch(drivers, attribute) {
    const key = Object.keys(attribute);
    const attributeValue = attribute[key];
    // console.log(attribute, Object.keys(attribute), key, attributeValue);
    return drivers.filter(function(driver) {
        return driver[key] === attributeValue;
    });
}

function exactMatchToList(drivers, attribute) {
    return exactMatch(drivers, attribute).map(object => object.name);
}