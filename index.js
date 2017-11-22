// Code your solution here:
function driversWithRevenueOver(driver_arr, revenue){
    let res = driver_arr.filter(function (driver) {
        return driver.revenue > revenue
    })
    return res
}

function driverNamesWithRevenueOver(driver_arr, revenue){
    let coolDrivers= driversWithRevenueOver(driver_arr, revenue)
    let names = coolDrivers.map(function (driver){
        return driver.name
    })
    return names
}

function exactMatch(driver_arr, driver_obj){
    const key = Object.keys(driver_obj)[0]
    let exactDrivers = driver_arr.filter( function (driver){
        return driver[key] === driver_obj[key]
    })
    return exactDrivers
}

function exactMatchToList(driver_arr, match){
    let exactList = exactMatch(driver_arr, match)
    let exactNames = exactList.map(function (driver){
        return driver.name
    })
    return exactNames
}