// Code your solution here:
function driversWithRevenueOver(arr, num) {
    return arr.filter(function(object) {
        return object.revenue >= num;
    });
}

function driverNamesWithRevenueOver(arr, num) {
    const newArr = [];
    arr.filter(function(object) {
        if (object.revenue >= num) {
            newArr.push(object.name)
        }
    })
    return newArr;
}

function exactMatch(arr, obj) {
    return arr.filter(function(object) {
        let match;
        for (const key in obj) {
            match = object[key] === obj[key];
        }
        return match;
    })
}

function exactMatchToList (arr, obj) {
    return exactMatch(arr,obj).map(function(driver) {
        return driver.name;
    });
}

