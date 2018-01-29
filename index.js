function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function (driver) {return driver.revenue > amount})
}

function driverNamesWithRevenueOver(drivers, amount) {
   return driversWithRevenueOver(drivers, amount).map(function (driver) {return driver.name})
}

function exactMatch(drivers, obj) {
  return drivers.filter( function (driver) {
    let results;

    for (const key in obj) {
      results = driver[key] === obj[key];
    }
    return results;
})
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver) {return driver.name})
}
