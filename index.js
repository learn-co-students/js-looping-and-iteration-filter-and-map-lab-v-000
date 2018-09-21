// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  driversAboveRevenue = [];
  for (let driver of drivers) {
    if (driver.revenue > revenue) {
      driversAboveRevenue.push(driver);
    }
  }
  return driversAboveRevenue;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, requirement) {
  return drivers.filter(driver => driver[Object.keys(requirement)[0]] === requirement[Object.keys(requirement)[0]]);
}

function exactMatchToList(drivers, requirement) {
  return exactMatch(drivers, requirement).map(function(driver) {
    return driver.name;
  })
}
