function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter(function (driver) {
      return driver.revenue > revenue;
    });
  }

function driverNamesWithRevenueOver(drivers, rev){
    return driversWithRevenueOver (drivers, rev).map(function(driver){
        return driver["name"];
    })
}

function exactMatch(drivers, nameObj) {
    return drivers.filter(function(driver){
        let match;
        for (const key in nameObj){
            match = driver[key] === nameObj[key]   
        }
        return match;
    })
}

function exactMatchToList(drivers, someObj) {
    return exactMatch(drivers, someObj).map(function(driver){
        return driver.name;
    })
}