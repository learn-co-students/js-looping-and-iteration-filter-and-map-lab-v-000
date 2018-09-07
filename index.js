const drivers = [];
const extendedDrivers = [];

function driversWithRevenueOver(drivers, amount) {
   return drivers.filter(driver => driver.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
    const newDrivers = drivers.filter(driver => driver.revenue > amount);
    return newDrivers.map(d => d.name)
}

function exactMatch (drivers, matcher) {
   return drivers.filter(function (driver) {
     let answer = false;

     for (const key in matcher) {
       answer = driver[key] === matcher[key];
     }
     return answer;
   });
 }

 function exactMatchToList (drivers, matcher) {
   return exactMatch(drivers, matcher).map(d => d.name)
 }
