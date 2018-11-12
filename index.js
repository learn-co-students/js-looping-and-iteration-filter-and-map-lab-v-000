// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter (function (driver) {
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    newArray = drivers.filter(function (driver){
        return driver.revenue > revenue
    })
    return newArray.map (function (driver) {
        return driver.name
    })
}

function exactMatch(drivers, object) {
    let attribute = Object.keys(object).toString()
    return drivers.filter (function(driver) {
        return driver[attribute] === object[attribute] 
    })
}

function exactMatchToList(drivers, object) {
    let attribute = Object.keys(object).toString()
    newArray = drivers.filter(function (driver) {
        return driver[attribute] === object[attribute]
    })
    return newArray.map (function (driver) {
        return driver.name
    })
}