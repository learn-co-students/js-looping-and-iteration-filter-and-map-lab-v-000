// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return (driver.revenue > revenue);
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue)
  return newDrivers.map(function(driver) {
    return driver.name;
  })
}


function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    for(key in object) { return driver[key] === object[key]}
  })
}


function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name;
  })
}
