// Code your solution here:
function driversWithRevenueOver(array, integer) {
    return array.filter(element => element["revenue"] > integer)
}

function driverNamesWithRevenueOver(array, integer) {
    let newArray = driversWithRevenueOver(array, integer);
    return newArray.map(function(element) {
        return element["name"];
    })
}

function exactMatch(array, object) {
    return array.filter(element => element[Object.keys(object)[0]] === object[Object.keys(object)[0]])
}

function exactMatchToList(array, object) {
    let newArray = exactMatch(array, object);
    return newArray.map(function(element) {
        return element["name"];
    })
}