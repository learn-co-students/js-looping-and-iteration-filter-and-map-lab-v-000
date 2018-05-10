// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return parseInt(driver.revenue) > parseInt(revenue)
  });
}
// longer solution with 'map' array method:

// function driversWithRevenueOver(drivers, revenue) {
//   const selectedDrivers = [];
//   drivers.map(function(driver){
//     if (parseInt(driver.revenue) > parseInt(revenue)){
//       selectedDrivers.push(driver);
//     }
//   });
//   return selectedDrivers;
// }

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > parseInt(revenue)}).map(function(driver) {return driver.name});
}

function exactMatch(drivers, object) {
  let matches = [];
  drivers.filter(function(driver) {
    for (let key in driver) {
      if (driver[key] === object[key]) {
        matches.push(driver);
      }
    }
  })
  return matches;
}

function exactMatchToList(drivers, object) {
  let matches = [];
  drivers.filter(function(driver) {
    // iterate over the keys of the individual array elements to see if there are any matches
    for (let key in driver) {
      if (driver[key] === object[key]) {
        matches.push(driver.name);
      }
    }
  })
  return matches;
}
