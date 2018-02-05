// Code your solution here:
function driversWithRevenueOver(obj, revenue){
    return obj.filter(function(driver) {
        return driver.revenue > revenue;
    })
}

function driverNamesWithRevenueOver(obj, revenue){
    return driversWithRevenueOver(obj, revenue)
    .map(function(driver){
        return driver.name
    })
}

function exactMatch(collection, obj){
    return collection.filter(function(driver){
        let matches = false;

        for (const key in obj){
            matches = driver[key] === obj[key];
        }
        return matches;
    })
}

function exactMatchToList(collection, obj){
    return exactMatch(collection, obj).map(function (user){
        return user.name;
    })
}