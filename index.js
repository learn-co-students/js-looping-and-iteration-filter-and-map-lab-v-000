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
        let matches = false;
        for (const key in objToMatch) {
          matches = driver[key] === objToMatch[key];
        }
        return matches;
      });
}

function exactMatchToList(drivers, objToMatch){
    return drivers.map(function (driver) {
        let match = false;
        for (const key in objToMatch) {
         match = driver[key] === objToMatch[key];
        }
       return match.toString();
      });
}