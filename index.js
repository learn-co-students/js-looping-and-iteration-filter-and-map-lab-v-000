// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
   return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
    let result = [];
    drivers.filter(function (driver){
        if (driver.revenue > revenue) {
            result.push(driver.name);
        }
    });
       
    return result;   
}

function exactMatch(drivers, attribute) {
    let result = [];
    drivers.map(function (driver){
        for(const key in attribute){
            if(driver[key] === attribute[key]){
                result.push(driver);
            }
        }
    })
    return result;
}


function exactMatchToList(drivers, attribute){
    let driversToList = exactMatch(drivers, attribute)

    return driversToList.map(function(driver){
      return driver.name
    })
}

