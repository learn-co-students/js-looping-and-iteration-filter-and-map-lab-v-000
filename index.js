// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver){
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (driver){
        return driver.name; 
   });
}

function exactMatch(drivers, objToMatch){
    return drivers.filter(function (driver) {
        let match = false;
        for (let property in driver) {
            let match = driver[property] === objToMatch[property];
          }; 
          return match;    
    });
}

function exactMatchToList(drivers, objToMatch){
    return drivers.map(function (driver){
        return driver['value']
     });
}