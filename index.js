// Code your solution here:
function driversWithRevenueOver(coll, amount){
    return coll.filter(function(driver){
        return driver.revenue > amount
    })
}

function driverNamesWithRevenueOver(coll, amount){
    const collWithRevOver = driversWithRevenueOver(coll, amount);
    return collWithRevOver.map(function(driver){
        return driver.name
    })
}

function exactMatch(coll, obj){
    return coll.filter(function(driver){
        const objKey = Object.keys(obj)[0]
        return driver[objKey] === obj[objKey]
    })
}

function exactMatchToList(coll, obj){
    const collWithExactMatch = exactMatch(coll, obj);
    return collWithExactMatch.map(function(driver){
        return driver.name
    })
}