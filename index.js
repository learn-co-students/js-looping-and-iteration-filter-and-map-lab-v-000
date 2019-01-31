// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) { return driver.revenue > revenue;
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (driver) { return driver.name;
    })
}

function exactMatch(drivers, attr) {
   const driverArray = [];
   drivers.map(function (driver) {
       for(const key in attr){
           debugger
            if(driver[key] === attr[key]){
                driverArray.push(driver);
            }
        }
    })
    return driverArray;
}

function exactMatchToList(drivers, attr) {
    let toList = exactMatch(drivers, attr)
    return toList.map(function (driver){
        return driver.name;
    })
}
