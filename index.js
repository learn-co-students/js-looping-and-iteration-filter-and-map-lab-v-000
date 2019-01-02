// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) {
        return driver['revenue'] > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) {
        return driver['revenue'] > revenue;
    }).map(function(driver) {
        return driver['name'];
    });
}

function exactMatch(drivers, matchObject) {
    return drivers.filter(function (driver) {
        let matches = false;
    
        for (const key in matchObject) {
          matches = driver[key] === matchObject[key];
        }
    
        return matches;
      });
}

function exactMatchToList(drivers, matchObject) {
    const matches = exactMatch(drivers, matchObject);

    return matches.map(function(driver) {
        return driver.name;
    })

}