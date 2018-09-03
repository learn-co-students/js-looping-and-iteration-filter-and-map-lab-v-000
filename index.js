// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver){
      return driver.name;
    });
  }

  function exactMatch(drivers, obj) {
    const driverArray = [];
     drivers.map(function (driver) {
      for (const key in obj) {
        if (driver[key] === obj[key]) {
           driverArray.push(driver);
        }
      }
    });
    return driverArray;
  }

 function exactMatchToList(drivers, obj) {
   newDriverArray= []
   exactMatch(drivers, obj).map(function (driver){
     return newDriverArray.push(driver.name);
   });
   return newDriverArray;
 }
