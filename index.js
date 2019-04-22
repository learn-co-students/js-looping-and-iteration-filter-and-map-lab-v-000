// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, nameRevenue){
  return drivers.filter(function(driver){
    return driver.name === nameRevenue.name || driver.revenue === nameRevenue.revenue;
  })
}

function exactMatchToList(drivers, nameRevenue){
  return exactMatch(drivers,nameRevenue ).map(function(driver){
    return driver.name;
  })
}
