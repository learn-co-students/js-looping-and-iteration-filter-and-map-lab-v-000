// Code your solution here:

function driversWithRevenueOver(arr, rev){
    return arr.filter(driver => driver.revenue > rev);
};

function driverNamesWithRevenueOver(drivers, str){
    return driversWithRevenueOver(drivers, str)
            .map(driver => driver.name);
};

function exactMatch(arr, obj){
    return arr.filter(driver => {
        const key = Object.keys(obj)[0];
        return driver[key] === obj[key];
    });
};

function exactMatchToList(drivers, criteria) {
    return exactMatch(drivers, criteria)
           .map(driver => driver.name);
};