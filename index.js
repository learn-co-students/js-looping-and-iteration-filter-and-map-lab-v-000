// Code your solution here:
function driversWithRevenueOver(array, number) {
    return array.filter(driver => driver.revenue > number);
}

function driverNamesWithRevenueOver(array, number) {
    return driversWithRevenueOver(array, number).map(driver => driver.name);
}

function exactMatch(array, attribute) {
    let key = Object.keys(attribute)[0];
    return array.filter(driver => driver[`${key}`] === attribute[`${key}`]);
}

function exactMatchToList(array, attribute) {
    return exactMatch(array, attribute).map(driver => driver.name);
}